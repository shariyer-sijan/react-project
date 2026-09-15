
import { Suspense,useState } from "react";
import Data from "./Data";
import Data2 from "./Data2";
import type { userType } from "./Type";
const dataFetch= async(): Promise<userType[]> =>{
        const res= await fetch("/data.json") ;
        const data= res.json() ;

        return data ;
    } ;
   
const Midd = () => {
 const dataPromise=dataFetch() ;  

 const [Available, setAvailable]=useState<userType[]>([]);
  const [Stack, setStack]= useState<userType[]>([]);  
    return (
        <div>
            <div> <h1 className="text-5xl font-bold">Explore the <span className="text-5xl font-bold bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h1><h1 className="mt-4 mb-4">Pick one technology per category to build your ideal stack.</h1></div>
            <div  className="flex justify-between ">

            <Suspense fallback="Loading ....">
                <Data dataPromise={dataPromise} Available={Available} setAvailable={setAvailable} Stack={Stack} setStack={setStack}/>
            </Suspense>

            <Suspense fallback="Loading ....">
                <Data2 Stack={Stack} setStack={setStack} Available={Available} setAvailable={setAvailable} />
            </Suspense>
            
            </div>
            <div className="divider mt-25"></div>
        </div>
    );
};

export default Midd;