

const ReviewCard = ({ review }) => {


    const { reviewerImage, reviewerName, reviewerEmail, description, time } = review;

    return (
        <div>
            <div className="bg-base-100 shadow-xl">
                <figure><img src={reviewerImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{time}</p>
                    <h2 className="card-title">{reviewerName}</h2>
                    <p>{reviewerEmail}</p>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;