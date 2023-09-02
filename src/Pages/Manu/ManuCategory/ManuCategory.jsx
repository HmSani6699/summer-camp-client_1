import { Link } from "react-router-dom";
import ManuCover from "../../Shared/ManuCover/ManuCover";
import ManuItem from "../../Shared/ManuItem/ManuItem";

const ManuCategory = ({ items, coverImg, title,subTitle }) => {
    return (
        <section className=" max-w-6xl mx-auto">
            {title && <ManuCover
                coverImg={coverImg}
                title={subTitle}
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>}

            <div className="mt-20 mb-12 grid md:grid-cols-2 gap-8 m-2">
                {
                    items?.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>

            <div className='mb-20 flex justify-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>

        </section>
    );
};

export default ManuCategory;