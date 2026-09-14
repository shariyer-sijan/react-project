
import { Suspense } from "react";
import Data from "./Data";
import type { userType } from "./Type";
const dataFetch= async(): Promise<userType[]> =>{
        const res= await fetch("/data.json") ;
        const data= res.json() ;

        return data ;
    } ;
   
const Midd = () => {
 const dataPromise=dataFetch() ;   
    return (
        <div>
            <div> <h1 className="text-5xl font-bold">Explore the <span className="text-pink-500">Technologies</span></h1><h1 className="mt-4 mb-4">Pick one technology per category to build your ideal stack.</h1></div>
            <div  className="flex justify-between ">
            <Suspense fallback="Loading ....">
                <Data dataPromise={dataPromise}/>
            </Suspense>
            <div className="card bg-base-60 w-65 h-40 shadow-sm ">
                <div className="card-body">
                    <div className="card-title">Your Stack</div>
                    <div>No technologies selected yet.</div>
                    <button className="btn btn-outline mt-3">Your Stack is empty</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Midd;