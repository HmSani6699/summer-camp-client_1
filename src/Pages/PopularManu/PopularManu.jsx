import useManu from "../../hooks/useManu";
import ManuItem from "../Shared/ManuItem/ManuItem";

const PopularManu = () => {
    const [manu] = useManu();
    const popularManu = manu?.filter(item=>item.category==='popular');

    return (
        <section className=" max-w-6xl mx-auto">
            <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
                {
                    popularManu?.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>

        </section>
    );
};

export default PopularManu;