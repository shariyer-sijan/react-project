// import React from 'react';
import type { userType } from "./Type";

interface iStack {
    Stack: userType[];
    setStack: React.Dispatch<React.SetStateAction<userType[]>>;
     Available: userType[];
    setAvailable: React.Dispatch<React.SetStateAction<userType[]>>;
}
const Data2 = ({ Stack, setStack,Available,setAvailable }: iStack) => {
    return (
        <div className="w-72 border border-gray-300 rounded-xl p-4">

            <h2 className="text-lg font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-400 mb-4">
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
                             setStack( Stack.filter( value=> item!==value ))
                            
                        }}>
                            ✕
                        </button>
                    </div>
                ))}

            </div>

            <button onClick={()=>{ 
                return setStack([]) , setAvailable([]) ;
                }}  className="w-full border border-red-300 text-red-500 rounded-lg py-2 mt-4">
                Remove All
            </button>

        </div>
    );
};

export default Data2;