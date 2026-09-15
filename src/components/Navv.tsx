
import logo from '../assets/logo-text.png'
const Navv = () => {
    return (
        <div className='sticky top-0 z-50' >
            <div className='flex justify-between  container items-center mx-auto mt-3  z-50 bg-white'>
            <div><img src={logo} /></div>
            <div className='flex gap-3' > 
                <a href="#" className='text-[#DB2777] font-[Plus_Jakarta_Sans] font-semibold ' >Home</a>
                 <a href="#" className='font-[Plus_Jakarta_Sans] font-medium text-[#475569]'>Technologies</a>
                <a href="#" className='font-[Plus_Jakarta_Sans] font-medium text-[#475569]'>Projects</a>
                <a href="#" className='font-[Plus_Jakarta_Sans] font-medium text-[#475569]'>About</a>
                <a href="#" className='font-[Plus_Jakarta_Sans] font-medium text-[#475569]'>Contact</a></div>
            <div>
                <button className="btn btn-ghost text-[#334155] font-[Plus_Jakarta_Sans] font-medium ">Sign in</button>
                <button className="btn btn-secondary font-[Plus_Jakarta_Sans] font-semibold text-white">Sign up</button>
            </div>
        </div>
            <div className="divider"></div>
        </div>
    );
};

export default Navv;