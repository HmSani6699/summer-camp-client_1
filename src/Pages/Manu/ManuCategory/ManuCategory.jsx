import ManuItem from "../../Shared/ManuItem/ManuItem";

const ManuCategory = ({offered}) => {
    return (
        <section className=" max-w-6xl mx-auto">
        <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
            {
                offered?.map(item => <ManuItem
                    key={item._id}
                    item={item}
                ></ManuItem>)
            }
        </div>

    </section>
    );
};

export default ManuCategory;