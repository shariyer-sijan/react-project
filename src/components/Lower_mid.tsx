

import logo from '../assets/logo-text.png'
const Lower_mid = () => {
    return (
        <div className='mt-15 flex justify-between '>
            <div><img src={logo} className='mb-3' />
                <h1 className='mb-2 text-slate-500'>Curated tools, technologies,and resources for developers building <br /> modern software</h1>
                <div className='flex flex-row  gap-6 mt-7'>
                    <a href="#" className='text-slate-700 ' >Github  </a>
                    <a href="#"  className='text-slate-700 '>Twitter</a>
                    <a href="#"  className='text-slate-700 '>Linkedln</a>
                </div>
            </div>
            <div className="flex flex-col">
                <a href="#" className="font-bold mb-2">PRODUCT</a>

                <a href="#" className="mb-0.75 text-slate-500">Home</a>
                <a href="#" className="mb-0.75 text-slate-500">Technologies</a>
                <a href="#" className='text-slate-500'>Projects</a>
            </div>
            <div className="flex flex-col">
                <a href="#" className='font-bold mb-2'>COMPANY</a>  
                <a href="#" className="mb-0.75 text-slate-500">About</a> 
                <a href="#" className="mb-0.75 text-slate-500">Contact</a>  
                <a href="#" className='text-slate-500'>Careers</a>
            </div>
            <div className="flex flex-col" >
                <a href="#" className='font-bold mb-2'>LEGAL</a>  
                <a href="#" className="mb-0.75 text-slate-500">Privacy Policy</a> 
                <a href="#" className='text-slate-500'>Terms of Service</a>
            </div>
        </div>
    );
};

export default Lower_mid;