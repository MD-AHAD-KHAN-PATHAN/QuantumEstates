import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ totalPrice, pay }) => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    console.log(pay);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent?.id);
                setTransactionId(paymentIntent?.id);

                // offerCollection status data update.
                const statusUpdate = {
                    status: 'bought',
                    transactionId: paymentIntent?.id
                }
                const result = await axiosSecure.patch(`/propertyBought/user/pay/${pay?._id}`, statusUpdate)
                console.log(result?.data)
                // save the payment in the database.
                const paymentInfo = {
                    title: pay?.title,
                    location: pay?.location,
                    buyerEmail: user?.email,
                    buyerName: user?.displayName,
                    transactionId: paymentIntent?.id,
                    sold: totalPrice,
                    agentEmail: pay?.agentEmail,
                }
                console.log(paymentInfo);
                
                const res = await axiosSecure.post('/payments', paymentInfo);
                console.log(res.data);
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Your payment is successfull.',
                        showConfirmButton: false,
                        timer: 2000

                    });
                }
            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            { transactionId ? <p className="text-green-600 font-semibold">Transaction Id is {transactionId}</p> : <button className="my-6 px-6 py-2 rounded-lg font-bold bg-lime-400 text-white" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>}
            <p className="text-red-600 font-semibold">{error}</p>
            {/* {
                transactionId && <p className="text-green-600 font-semibold">Transaction Id is {transactionId}</p>
            } */}
        </form>
    );
};

export default CheckoutForm;