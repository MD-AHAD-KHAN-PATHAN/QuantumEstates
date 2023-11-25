

const SectionTitle = ({heading, subHeading}) => {
    
    return (

        <div className="text-center md:w-4/12 mx-auto my-10">
            <p className="text-lime-600 mb-2 lg:text-5xl md:text-3xl text-xl font-bold">{heading}</p>
            <h2 className="font-bold  border-y-4 py-4 text-gray-500">{subHeading}</h2>
        </div>

    );
};

export default SectionTitle;