import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import './Featured.css';



const Featured = () => {
    return (
        <div className='featured pt-3 mb-20 mt-20'>
            <SectionTitle
                hedding={'Featured manu'}
                subHadding={'---Check it out---'}
            ></SectionTitle>

            <div className=' flex px-24 pb-20 pt-12  gap-4 items-center justify-center '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <h2 className='text-3xl font-semibold text-white'>March 20, 2023 <br />
                        WHERE CAN I GET SOME?</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-[transparent] mt-5  text-[#ffff] border-0 border-b-4 border-[#ffff]">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;