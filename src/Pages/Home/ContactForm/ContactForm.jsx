import { useForm } from "react-hook-form";

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="bg-lime-700 py-20">

            <div className="lg:w-6/12 md:w-5/6 w-11/12 mx-auto text-center mb-10">
                <h3 className="text-white lg:text-3xl md:text-2xl font-bold">Contact us today if you’d like to know more about how we help buy, sell or rent your home</h3>
            </div>

            <div className="flex justify-center">
                <div className="max-w-2xl shadow-2xl rounded-md bg-base-100">
                    <div className="md:p-16 p-8">
                        <div className="text-center">
                            <p className="text-lime-600 mb-2 lg:text-3xl md:text-3xl text-xl font-bold">Schedule a meeting with our team</p>
                            <h2 className="font-bold py-4 text-gray-500">Our experts and developers would love to contribute their expertise and insights to your real estate plans.</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="md:flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Full Name</span>
                                    </label>
                                    <input type="name" {...register("name", { required: true })} placeholder="Full name" className="border-1 border-lime-500 input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Phone Number</span>
                                    </label>
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone Number" className="border-1 border-lime-500 input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="border-1 border-lime-500 input input-bordered" />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lime-500">City</span>
                                    </label>
                                    <input type="text" {...register("city", { required: true })} placeholder="City Name" className="border-1 border-lime-500 input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message" {...register("message", { required: true })}></textarea>
                            </div>
                            <div className="form-control mt-6 p-0 col-span-2">
                                <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;