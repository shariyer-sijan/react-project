import { use } from 'react';
import type { userType } from "./Type";
import { MdStarRate } from "react-icons/md";
interface hi {
    dataPromise: Promise<userType[]>;
}
const Data = ({ dataPromise }: hi) => {

    const dataPaici = use(dataPromise);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                dataPaici.map((value, index) => {
                    return <div className="card bg-base-60 w-80 shadow-sm">

                        <div className='flex justify-between items-center px-5 '>
                            <img src={value.icon} className='h-20 w-15' />
                            <div className="bg-blue-500 text-white px-2 py-1 rounded-lg" >
                                {value.badge}
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{value.name}</h2>
                            <p>{value.description}</p>

                            <div className="divider"></div>
                            <div className='flex justify-between items-center'>
                                <div className='bg-blue-100 px-2 py-1 rounded-lg'>{value.category}</div>
                                <div>{value.difficulty}</div>
                                <div className='flex justify-between items-center gap-1.5'><MdStarRate className='text-yellow-500'/>
                                    {value.rating}</div>
                            </div>

                            <button className="btn btn-primary rounded-lg ">Add to Stack</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Data;