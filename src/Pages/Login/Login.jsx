import Navbar from "../Shared/Navbar/Navbar";




const Login = () => {
     
const handlelogin = e =>{
    e.priventDefault();
}  



    return (
        <div>
        <Navbar></Navbar>  
        <div className="">
        <h2 className="text-3xl my-5 text-center">Login Please</h2>  
        <form onSubmit={handlelogin} className=" md:w-3/4 p-4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

       </div>  
        </div>
    );
};

export default Login;