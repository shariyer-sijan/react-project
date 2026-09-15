import bg from '../assets/banner-stack.png'
const Bann = () => {
    return (
        <div className='flex justify-between items-center '>
            <div> <h6 className='text-5xl text-[#0F172A] font-extrabold '>Build Your Ideal </h6>
                <h1 className="text-5xl font-extrabold bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Development Stack
                </h1><h1 className='font-[Plus_Jakarta_Sans] text-[#475569]'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</h1>
                <div className='flex mt-10 gap-2'>
                    <button className="btn btn-secondary  bg-linear-to-r from-orange-500 to-purple-600 font-semibold text-white ">Explore Technologies </button>
                    <button className="btn btn-outline text-[#374151] ">Learn More</button>
                </div>
            </div>
            <img src={bg} />
        </div>
    );
};

export default Bann;