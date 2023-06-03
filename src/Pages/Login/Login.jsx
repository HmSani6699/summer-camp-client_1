import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import loginImg from '../../assets/others/authentication1.png';
import bannerImg from '../../assets/others/authentication.png'
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const { logInUser, googleLogin } = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [disable, setDisable] = useState(true);

    console.log(location.state?.from?.pathname );
    const onSubmit = data => {
        const { email, password } = data;
        // Creat user
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Log in Success full  !!',
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: `{${error}}`,
                })
            })
        reset()
    };

    // Google log in 
    const handleGoogleLogin = () => {
        googleLogin()
        navigate(from, { replace: true });
    }


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Chapcha section
    const handleChpachaValidate = (event) => {
        const typeValue = event.target.value;
        if (typeValue.length == 6) {
            if (validateCaptcha(typeValue)) {
                setDisable(false);
                toast.success('Chapcha is maching!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                setDisable(true);
                toast.error(`Chapcha is not maching!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            setDisable(true)
        }
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 mt-1 ml-3">Email field is required !</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", {
                                        required: true,
                                        // pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/
                                    })} name='password' className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600 mt-1 ml-3">Password field is required !</span>}

                                    {/* TODO: password  */}
                                    {/* {errors.password?.type === 'pattern' && <p className="text-red-600 mt-1 ml-3">Password must have one Upper Catch and one Lower catch and one number and one Special character and Minimum six in length !</p>} */}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forget password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="text" onChange={handleChpachaValidate} placeholder="Type chapcha avobe here" name='chapcha' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={false} type="submit" className="btn bg-[rgb(209,160,84)] mr-5" value="Sign in" />
                                </div>
                            </form>
                            <p className='text-center mt-6  text-[rgb(209,160,84)]'>New here?  <Link className='font-semibold' to='/register'>Create a New Account</Link></p>
                            <div className="divider">Or sign in with</div>
                            <div className='flex items-center justify-center gap-5 mt-6 '>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                                <button className="btn btn-circle btn-outline"><FaFacebookF></FaFacebookF></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;