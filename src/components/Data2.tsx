// import React from 'react';
import type { userType } from "./Type";
import { toast } from 'react-toastify';
interface iStack {
    Stack: userType[];
    setStack: React.Dispatch<React.SetStateAction<userType[]>>;
     Available: userType[];
    setAvailable: React.Dispatch<React.SetStateAction<userType[]>>;
}
const Data2 = ({ Stack, setStack,Available,setAvailable }: iStack) => {
    return (
        <div className="w-72 border border-gray-300 rounded-xl p-4">

            <h2 className="text-lg font-bold text-[#0F172A] font-[Plus_Jakarta_Sans]">
                Your Stack
            </h2>

            <p className="text-sm text-[#94A3B8] mb-4 font-[Plus_Jakarta_Sans] ">
                {Stack.length} Technologies Selected
            </p>

            <div className="space-y-2">

                {Stack.map((item,index) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between border rounded-lg p-2"
                    >
                        <div>
                            <h3 className="font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-xs text-gray-400">
                                {item.category}
                            </p>
                        </div>

                        <button onClick={ ()=>{
                            setAvailable(  Available.filter( value=> value!=item ))        
                             setStack( Stack.filter( value=> item!==value )), toast.success(`${item.name} removed from your stack!`);
                        }} >
                            ✕
                        </button>
                    </div>
                ))}

            </div>

            <button onClick={()=>{ 
               setStack([]) , setAvailable([]) , toast.success("All items removed from your stack!");

                }} disabled={!Stack.length} className={` ${Stack.length?"text-[#D82C20] font-semibold w-full border border-red-300 rounded-lg py-2 mt-4 transition-all duration-200  active:scale-95":"text-[#94A3B8] font-[Plus_Jakarta_Sans] w-full border border-gray-300 rounded-lg py-2 mt-4 cursor-not-allowed"}`}>
               { Stack.length? "Remove All":"Your stack is empty." }
            </button>

        </div>
    );
};

export default Data2;