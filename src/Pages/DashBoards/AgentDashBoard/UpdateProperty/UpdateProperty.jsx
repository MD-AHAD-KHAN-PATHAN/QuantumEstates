import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import usePropertys from "../../../../Hooks/usePropertys";



const UpdateProperty = () => {

    const property = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const [propertys, refetch] = usePropertys();

    const { id } = useParams();
    console.log(id);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: `${property?.title}`,
            image: `${property?.image}`,
            country: `${property?.country}`,
            name: `${property?.name}`,
            email: `${property?.email}`,
            minimum: `${property?.minimum}`,
            maximum: `${property?.maximum}`,

        },
    })


    const onSubmit = async (data) => {

        console.log(data);

        axiosSecure.patch(`/propertys/agent/${id}`, data)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Property Information Modified",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    return (

        <div className="md:my-20 my-10">
            <div className="lg:hero-content lg:flex lg:flex-row-reverse md:m-20 mx-6">
                <div className="text-center md:text-left">
                    <img className='md:max-w-lg max-w-sm' src="" alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-2xl shadow-2xl bg-base-100">

                    <div className="px-16 py-8">
                        <div>
                            <h1 className="text-center text-3xl text-lime-500 font-semibold mb-4">Property Update Form</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Property title</span>
                                </label>
                                <input type="text" {...register("title")} className="border-1 border-lime-500 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Property image url</span>
                                </label>
                                <input type="url" className="file-input w-full border-lime-400" {...register("image")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Property country</span>
                                </label>
                                <input type="text" {...register("country")} className="border-1 border-lime-500 input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Agent name</span>
                                </label>
                                <input type="text" {...register("name")} readOnly className="border-1 border-lime-500 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Agent email</span>
                                </label>
                                <input type="text" {...register("email")} readOnly className="border-1 border-lime-500 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Maximum price</span>
                                </label>
                                <input type="text" {...register("maximum")} className="border-1 border-lime-500 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Minimum price</span>
                                </label>
                                <input type="text" {...register("minimum")} className="border-1 border-lime-500 input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0 col-span-2">
                                <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateProperty;