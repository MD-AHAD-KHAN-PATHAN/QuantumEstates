
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReviewCard from "../ReviewCard/ReviewCard";


const AddReview = ({ reviewInfo }) => {



    const axiosPublic = useAxiosPublic();

    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minitus = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let meridiem = 'AM'

    if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
    }

    if (hours === 0) {
        hours = 12;
    }

    const addZero = (number) => {
        return number < 10 ? '0' + number : number
    }

    const currentTime = hours + 'h ' + addZero(minitus) + 'm ' + addZero(seconds)+'s' + ' ' + meridiem;

    console.log(currentTime);

    const model = async () => {
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
              "aria-label": "Type your message here"
            },
          });
          if (text) {
            reviewInfo.description = text;
            reviewInfo.time = currentTime;
            
            axiosPublic.post('/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully added your review",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();   
                }
            })

          }
    }

    const {data: reviews = [], refetch} = useQuery({

        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews/${reviewInfo?.productId}`)
            return res?.data;
        }
    })

    console.log(reviews);


    return (
        <div>

            <SectionTitle heading="Testimonials" subHeading="Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust."></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-20 md:mx-10 mx-6">
                {
                    reviews?.map(review => <ReviewCard key={review?._id} review={review}></ReviewCard>)
                }
            </div>

            <div className="flex justify-center my-10">
                <button onClick={model} className="p-2 bg-lime-400 text-white font-bold rounded-lg ml-2">Please give us a feedback</button>
            </div>
        </div>
    );
};

export default AddReview;