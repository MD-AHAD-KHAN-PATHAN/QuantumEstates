import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAllUsers from "../../../../Hooks/useAllUsers";
import Swal from "sweetalert2";
import useFraud from "../../../../Hooks/useFraud";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddProperty = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [isFraud] = useFraud();

    const [, refetch] = useAllUsers();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: `${user?.email}`,
            name: `${user?.displayName}`
        },
    })

    const onSubmit = async (data) => {

        data.verify = 'pending';
        data.advertise = false;

        // Image hosting imageBB
        const profileImage = { image: data.image[0] };
        const res = await axiosPublic.post(img_hosting_api, profileImage, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });


        data.image = res.data.data.display_url;
        data.agentImage = user?.photoURL;
        data.maximum = parseInt(data.maximum);
        data.minimum = parseInt(data.minimum);


        axiosPublic.post('/propertys', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: `Successfully added your property`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    reset();
                    refetch();
                }
            })
    }

    return (
        <div>
            <div className="bg-lime-100 lg:p-20 md:p-10 p-4">
                <h1 className="text-5xl font-bold text-center mb-4">Add <span className='text-lime-500'>Property</span></h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-lime-500 mb-10"></h1></div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-8">
                        <h3 className="text-2xl font-semibold text-lime-500">Agent Information</h3>
                    </div>

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Agent Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" className="input w-full" {...register("email", { required: true, })} readOnly />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Agent Name</span>
                            </label>
                            <label className="input-group">
                                <input type="name" className="input w-full" {...register("name", { required: true })} readOnly />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Agent Phone Number</span>
                            </label>
                            <label className="input-group">
                                <input type="number" className="input w-full" placeholder="Enter Your Number" {...register("phone", { required: true })} />
                            </label>
                        </div>

                    </div>

                    <div className="my-8">
                        <h3 className="text-2xl font-semibold text-lime-500">Property Information</h3>
                    </div>

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Property Title" className="input w-full" {...register("title", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Property Description" className="input w-full" {...register("description", { required: true })} />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Bedrooms Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Enter Bedrooms Quantity" className="input w-full" {...register("bedroom", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Bathrooms Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="minimum" placeholder="Enter Bathrooms Quantity" className="input w-full" {...register("bathrooms", { required: true })} />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Enter Maximum Price" className="input w-full" {...register("maximum", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="minimum" placeholder="Enter Minimum Price" className="input w-full" {...register("minimum", { required: true })} />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Size (sq<sup>2</sup>)</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Enter Property Size" className="input w-full" {...register("size", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Image</span>
                            </label>
                            <label className="input-group">
                                <input type="file" className="file-input w-full border-lime-400" {...register("image", { required: true })} />
                            </label>
                        </div>
                    </div>

                    <div className="my-8">
                        <h3 className="text-2xl font-semibold text-lime-500">Property Location Information</h3>
                    </div>

                    <div className="md:flex gap-6">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Country</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Property Country Name" className="input w-full" {...register("country", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Area</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Property Area Name" className="input w-full" {...register("area", { required: true })} />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property City</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Property City Name" className="input w-full" {...register("city", { required: true })} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Property Address</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Property Address Name" className="input w-full" {...register("address", { required: true })} />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Zip Code</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Property Zip Code" className="input w-full" {...register("zip", { required: true })} />
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className="mt-6">
                            {
                                !isFraud && <input type="submit" value="Add Property" className="py-2 font-bold w-full bg-white border-2 border-lime-500 cursor-pointer hover:bg-lime-500 hover:text-white" />
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;