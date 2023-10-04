import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center p-2'>
        <img className='mx-auto' src={logo} alt="" /> 
        <p className='text-2xl font-semibold p-2'>Journalism Without Fear or Favour</p>  
        <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;

