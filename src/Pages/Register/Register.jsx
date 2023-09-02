import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication1.png';
import bannerImg from '../../assets/others/authentication.png'
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const Register = () => {
    const { creatUser, updateUserProfule, googleLogin } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        const { email, password, name, photo } = data;

        // Crest new user
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // update user profule
                updateUserProfule(user, name, photo)
                    .then(() => {
                        const loggedUser = { name: user?.displayName, email: user?.email }
                        fetch(`https://bistro-server-hmsani6699.vercel.app/user`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(loggedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Registation Success full!',
                                })

                            })
                    })
                    .catch(error => console.log(error))

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
            .then((result) => {
                const user = result.user;
                console.log(user);
                const loggedUser = { name: user?.displayName, email: user?.email }
                fetch(`https://bistro-server-hmsani6699.vercel.app/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate(from, { replace: true });
                    })
                navigate(from, { replace: true });
            })

            .catch(error => console.log(error))

    }

    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="hero">
            <Helmet><title>Foods web | Register</title></Helmet>
            <div style={{ backgroundImage: `url(${bannerImg})` }} className=" loginBox border-2 my-10 ">
                <div className="lg:flex w-full">
                    <div className="flex items-center lg:w-1/2 ">
                        <img src={loginImg} alt="" className="w-full" />
                    </div>
                    <div className="h-full lg:w-[50%]">
                        <h2 className=' text-3xl font-bold text-center mt-6 '>Sign up</h2>
                        <div className="p-2 md:p-4 lg:p-6 w-full">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered w-full" />
                                    {errors.name && <span className="text-red-600 mt-1 ml-3">Name field is required !</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
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
                                    {/* {errors.password?.type === 'pattern' && <p className="text-red-600 mt-1 ml-3">Password must have one Upper Catch and one Lower catch and one number and one Special character and Minimum six in length !</p>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" {...register("photo", { required: true })} name='photo' className="input input-bordered" />
                                    {errors.photo && <span className="text-red-600 mt-1 ml-3">Photo url field is required !</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-[rgb(209,160,84)] mr-5 w-full" value="Sign up" />
                                </div>
                            </form>
                            <p className='text-center mt-6  text-[rgb(209,160,84)]'>NAlready registered? <Link className='font-semibold' to='/login'>Go to log in</Link></p>
                            <div className="divider">Or sign in with</div>
                            <div className='flex items-center justify-center gap-5 mt-6 '>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                                <button className="btn btn-circle btn-outline"><FaFacebookF></FaFacebookF></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;