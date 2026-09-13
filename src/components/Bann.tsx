import bg from '../assets/banner-stack.png'
const Bann = () => {
    return (
        <div className='flex justify-between items-center container mx-auto '>
            <div> <h6 className='text-5xl font-black'>Build Your Ideal </h6>
            <h1 className="text-5xl font-bold bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
   Development Stack
</h1><h1>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</h1>
<div className='flex mt-10 gap-2'> 
<button className="btn btn-secondary">Explore Technologies </button>
<button className="btn btn-outline">Learn More</button>
</div>
 </div>
            <img src={bg} />
        </div>
    );
};

export default Bann;