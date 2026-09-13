
import logo from '../assets/logo-text.png'
const Navv = () => {
    return (
        <div><div className='flex justify-between  container items-center mx-auto mt-3'>
            <div><img src={logo}  /></div>
            <div className='flex gap-3' > <a href="#" className='text-pink-400' >Home</a> <a href="#">Technologies</a>
            <a href="#">Projects</a><a href="#">About</a><a href="#">Contact</a></div>
            <div>    
            <button className="btn btn-ghost">Sign in</button>
            <button className="btn btn-secondary">Sign up</button>
            </div>
        </div>
 <div className="divider"></div>
</div>
    );
};

export default Navv;