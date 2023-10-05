import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-5'>
                <h2 className="text-xl">Login With</h2>
                <button className="btn btn-outline btn-accent w-full mt-3">
                    <FaGoogle>FaGoogle</FaGoogle>
                     Login with Google</button>
                     <button className="btn btn-outline  w-full mt-3">
                    <BsGithub>BsGithub</BsGithub>
                     Login with Github</button>

            </div>
            <div className='p-5'>
                <h2 className="text-xl">Find Us on</h2>
                <a className='flex items-center mt-3 border p-3 rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='flex items-center  border-x p-3 ' href="">
                    <BsTwitter className='mr-3'></BsTwitter>
                    <span>Twitter</span>
                </a>
                <a className='flex items-center  border p-3 rounded-b-lg ' href="">
                    <BsInstagram className='mr-3'></BsInstagram>
                    <span>Instagram</span>
                </a>

            </div>
            {/* --------------------q zone------------ */}
            <div className='p-5'>
                <h2 className="text-xl">Q-Zone</h2>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;