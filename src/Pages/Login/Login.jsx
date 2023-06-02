import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Login.css'

import loginImg from '../../assets/others/authentication1.png';
import bannerImg from '../../assets/others/authentication.png'
import { Helmet } from "react-helmet";

const Login = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="hero">
             <Helmet><title>Bistro boss | Login</title></Helmet>
            <div style={{ backgroundImage: `url(${bannerImg})` }} className=" loginBox border-2 my-10 ">
                <div className="hero-content  flex-col lg:flex-row w-full">
                    <div className="text-center w-1/2 ">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card w-1/2 flex-shrink-0   h-full">
                        <h2 className=' text-3xl font-bold text-center '>Login</h2>
                        <div className="p-8 ">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forget password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="text" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Reload Captcha</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Type here" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-[rgb(209,160,84)] mr-5" value="Sign in" />
                                </div>
                            </form>
                            <p className='text-center mt-6  text-[rgb(209,160,84)]'>New here?  <Link className='font-semibold' to='/register'>Create a New Account</Link></p>
                            <div className="divider">Or sign in with</div>
                            <div className='flex items-center justify-center gap-5 mt-6 '>
                                <button className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                                <button className="btn btn-circle btn-outline"><FaFacebookF></FaFacebookF></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;