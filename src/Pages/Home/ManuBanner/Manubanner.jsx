

import chefImg from '../../../assets/home/chef-service.jpg'

const Manubanner = () => {
    return (
        <div className="hero min-h-screen mb-20" style={{ backgroundImage: `url(${chefImg})` }}>
            <div className="hero-content text-center  text-neutral-content  bg-white w-5/6">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Manubanner;