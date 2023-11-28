import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";



const MyReviewCard = ({ item, refetch }) => {

    const { _id, reviewerImage, propertyTitle, agentName, agentEmail, reviewerName, reviewerEmail, description, time } = item;
    const axiosPublic = useAxiosPublic();
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

                axiosPublic.delete(`/reviews/user/${_id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
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

        <div className="card bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
                <p>{time}</p>
                <h2 className="card-title">{propertyTitle}</h2>
                <p className="font-bold">{agentName}</p>
                <p>{agentEmail}</p>
                <p>{description}</p>
                <div className="flex justify-end">
                    <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;