

const SectionTitle = ({ heading, subHeading }) => {

    return (

        <div className="text-center lg:w-6/12 md:w-8/12 mx-auto my-10">
            <p className="text-lime-600 mb-2 lg:text-5xl md:text-3xl text-2xl font-bold">{heading}</p>
            <h2 className="font-bold py-4 text-gray-500">{subHeading}</h2>
        </div>

    );
};

export default SectionTitle;