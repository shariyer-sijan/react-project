import { use } from 'react';
import type { userType } from "./Type";
import { MdStarRate } from "react-icons/md";
import { toast } from 'react-toastify';
interface hi {
    dataPromise: Promise<userType[]>;
    Available: userType[];
    setAvailable: React.Dispatch<React.SetStateAction<userType[]>>;
    Stack: userType[];
    setStack: React.Dispatch<React.SetStateAction<userType[]>>;
}


const Data = ({ dataPromise, Available, setAvailable, Stack, setStack }: hi) => {


    const dataPaici = use(dataPromise);
    return (

        <div className='grid grid-cols-3 gap-4'>
            {
                dataPaici.map((value) => {
                    return <div className="card bg-base-60 w-80 shadow-sm">

                        <div className='flex justify-between items-center px-5 '>
                            <img src={value.icon} className='h-20 w-15' />
                            <div className="bg-blue-500 text-white px-2 py-1 rounded-lg font-[Plus_Jakarta_Sans] font-semibold" >
                                {value.badge}
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-[Plus_Jakarta_Sans] font-bold text-[#0F172A]">{value.name}</h2>
                            <p className='font-[Plus_Jakarta_Sans] text-[#64748B]'>{value.description}</p>

                            <div className="divider"></div>
                            <div className='flex justify-between items-center'>
                                <div className='bg-blue-100 px-2 py-1 rounded-lg text-[#475569] font-[Plus_Jakarta_Sans]'>{value.category}</div>
                                <div className='text-[#64748B] font-[Plus_Jakarta_Sans]  font-medium'>{value.difficulty}</div>
                                <div className='flex justify-between items-center gap-1.5 text-[#334155] font-[Plus_Jakarta_Sans] font-semibold'><MdStarRate className='text-yellow-500' />
                                    {value.rating}</div>
                            </div>

                            <button
                                onClick={() => {
                                    setAvailable([...Available, value]);

                                    setStack([...Stack, value]);

                                    toast.success(`${value.name} added to your stack!`);
                                }}
                                disabled={Available.includes(value)}
                                className={`rounded-lg font-[Plus_Jakarta_Sans] font-medium
  ${Available.includes(value)
                                        ? "w-full border border-gray-300 bg-gray-200 text-gray-500 py-2 mt-4 cursor-not-allowed"
                                        : "btn btn-primary text-white"
                                    }`}>
                                {Available.includes(value) ? "Added" : "Add to Stack"}
                            </button> </div>
                    </div>
                })
            }
        </div>
    );
};

export default Data;