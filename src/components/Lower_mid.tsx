

import logo from '../assets/logo-text.png'
const Lower_mid = () => {
    return (
        <div className='mt-20 flex justify-between '>
            <div><img src={logo} className='mb-3' />
                <h1 className='mb-2'>Curated tools, technologies,and resources for developers building <br /> modern software</h1>
                <div className='flex flex-row  gap-6'>
                    <a href="#" >Github  </a>
                    <a href="#">Twitter</a>
                    <a href="#">Linkedln</a>
                </div>
            </div>
            <div>
                <a href="#" className='font-bold mb-5'>PRODUCT</a> <br />
                <a href="#">Home</a> <br />
                <a href="#">Technologies</a>  <br />
                <a href="#">Projects</a>
            </div>
            <div>
                <a href="#" className='font-bold mb-5'>COMPANY</a>  <br />
                <a href="#">About</a> <br />
                <a href="#">Contact</a>  <br />
                <a href="#">Careers</a>
            </div>
            <div >
                <a href="#" className='font-bold mb-30'>LEGAL</a>  <br />
                <a href="#">Privacy Policy</a> <br />
                <a href="#">Terms of Service</a>
            </div>
        </div>
    );
};

export default Lower_mid;