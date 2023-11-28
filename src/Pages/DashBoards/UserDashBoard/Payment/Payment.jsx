import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {

    const pay = useLoaderData();
    const { id } = useParams();
    
    const totalPrice = pay.offer;
    console.log(totalPrice);

    return (
        <div>
            <SectionTitle heading="Payment"></SectionTitle>
            <div className="md:mx-20 mx-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm totalPrice={totalPrice} pay={pay}></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;