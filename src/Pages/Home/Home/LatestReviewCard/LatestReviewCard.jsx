



const LatestReviewCard = ({ item }) => {

    return (

        <div>
            <div className="p-4 shadow-lg shadow-slate-300 bg-white rounded-md">
                <div className="flex gap-4">
                    <img className="h-14 w-14 rounded-full" src={item?.reviewerImage} alt="" />
                    <div>
                        <h1 className="font-bold">{item?.reviewerName}</h1>
                        <h1>{item?.reviewerEmail}</h1>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <h1 className="font-bold mb-2">{item?.propertyTitle}</h1>
                    <p>{item?.description}</p>
                </div>
            </div>
        </div>

    );
};

export default LatestReviewCard;