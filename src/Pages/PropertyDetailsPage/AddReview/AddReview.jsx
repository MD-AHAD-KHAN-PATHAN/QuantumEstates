import { useForm } from "react-hook-form";

const AddReview = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className="card flex-shrink-0 max-w-3xl shadow-2xl">
                        <div className='bg-lime-600 p-6 text-white rounded-t-lg'>
                            <h1 className='text-3xl font-semibold'>Sign in</h1>
                            
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="border-1 border-lime-400 input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="border-1 border-lime-400 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold"> Review </button>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    );
};

export default AddReview;