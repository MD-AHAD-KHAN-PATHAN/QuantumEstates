import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";


const AdvertiseProperties = () => {
    const axiosPublic = useAxiosPublic();

    const [numbers, setNumbers] = useState(1);

    const verify = {
        status: "verified",
    };

    const { data: verifyed = [], refetch } = useQuery({
        queryKey: ['verifyed'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertys/verified/${verify?.status}`)

            return res.data
        }
    })



    const handleAdvertise = (id, item) => {
        if (numbers) {

            const updateAdvertise = {
                status: true
            }

            axiosPublic.patch(`/admin/propertys/${id}`, updateAdvertise)
                .then(res => {
                    if (res?.data?.modifiedCount > 0) {
                        Swal.fire({
                            title: "Added!",
                            text: "Advertise this property",
                            icon: "success"
                        });
                        refetch();
                    }
                })

            // axiosPublic.post('/admin/advertise', item)
            // .then(res => {
            //     if(res?.data?.insertedId){
            //         Swal.fire({
            //             title: "Added!",
            //             text: "Advertise this property",
            //             icon: "success"
            //           });
            //           refetch();
            //     }
            // })


        }
        else {
            Swal.fire({
                title: "oh!",
                text: "you can advertise maximum six properties",
                icon: "error"
            });
        }
    }

    const handleRemoveAdvertise = (id) => {

        const updateAdvertise = {
            status: false
        }
        axiosPublic.patch(`/admin/propertys/${id}`, updateAdvertise)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Advertise Removed",
                        icon: "success"
                    });
                    refetch();
                }
            })

        // axiosPublic.delete(`/admin/advertise/${id}`)
        //     .then(res => {
        //         if (res?.data?.deletedCount > 0) {
        //             Swal.fire({
        //                 title: "Deleted!",
        //                 text: "Advertise Removed",
        //                 icon: "success"
        //             });
        //             refetch();
        //         }
        //     })


    }





    return (
        <div>
            <div className="overflow-x-auto lg:m-20 m-4">
                <h1 className="text-5xl font-bold text-lime-400 text-center mb-8">All Users</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Property Info</th>
                            <th>Advertise</th>
                            <th>Remove Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            verifyed?.map((item, indx) => <tr key={item?._id}>
                                <th>
                                    {indx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.title}</div>
                                            <div className="text-sm opacity-50">${item?.maximum} - {item?.minimum}</div>
                                            <div className="text-sm opacity-50">{item?.email}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <button onClick={() => handleAdvertise(item?._id, item)} className="btn btn-success btn-sm text-white" disabled={item?.advertise}>Advertise</button>
                                </td>

                                <td>
                                    <button onClick={() => handleRemoveAdvertise(item?._id)} className="btn btn-error btn-sm text-white" disabled={!item?.advertise}>Remove Advertise</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdvertiseProperties;