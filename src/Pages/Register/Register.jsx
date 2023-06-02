import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from '../../assets/others/authentication1.png';
import bannerImg from '../../assets/others/authentication.png'
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const Register = () => {
    const { creatUser, updateUserProfule } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const { email, password, name, photo } = data
        // Crest new user
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // update user profule
                updateUserProfule(user, name, photo)
                    .then(() => { })
                    .catch(error => console.log(error))
                Swal.fire({
                    icon: 'success',
                    title: 'Registation Success full!',
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: `{${error}}`,
                })
            })
    };

    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="hero">
            <Helmet><title>Bistro boss | Register</title></Helmet>
            <div style={{ backgroundImage: `url(${bannerImg})` }} className=" loginBox border-2 my-10 ">
                <div className="hero-content  flex-col lg:flex-row w-full">
                    <div className="text-center w-1/2 ">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card w-1/2 flex-shrink-0   h-full">
                        <h2 className=' text-3xl font-bold text-center '>Sign up</h2>
                        <div className="p-8 ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered" />
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
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/
                                    })} name='password' className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600 mt-1 ml-3">Password field is required !</span>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600 mt-1 ml-3">Password must have one Upper Catch and one Lower catch and one number and one Special character and Minimum six in length !</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" {...register("photo", { required: true })} name='photo' className="input input-bordered" />
                                    {errors.photo && <span className="text-red-600 mt-1 ml-3">Photo url field is required !</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-[rgb(209,160,84)] mr-5" value="Sign up" />
                                </div>
                            </form>
                            <p className='text-center mt-6  text-[rgb(209,160,84)]'>NAlready registered? <Link className='font-semibold' to='/login'>Go to log in</Link></p>
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

export default Register;