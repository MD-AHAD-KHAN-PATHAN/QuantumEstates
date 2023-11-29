import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllReviewCard = ({ item, refetch }) => {

    const { _id, reviewerImage, reviewerName, reviewerEmail, description, time } = item;

    const axiosSecure = useAxiosSecure();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/reviews/admin/${_id}`)
                .then(res => {
                    if(res?.data?.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Review has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                })
              
            }
          });
    }

    return (
        <div className="bg-base-100 shadow-xl">
            <figure><img src={reviewerImage} alt="Shoes" /></figure>
            <div className="card-body">
                <p>{time}</p>
                <h2 className="card-title">{reviewerName}</h2>
                <p>{reviewerEmail}</p>
                <p>{description}</p>

                <div className="flex justify-end">
                    <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllReviewCard;