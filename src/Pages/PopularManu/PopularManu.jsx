import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import ManuItem from "../Shared/ManuItem/ManuItem";

const PopularManu = () => {
    const [manu, setManu] = useState()

    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const popularManuItems = data.filter(item => item.category === 'popular');
                setManu(popularManuItems)
            })
    }, []);


    return (
        <section className=" max-w-6xl mx-auto">
            <SectionTitle
                hedding={'FROM OUR MENU'}
                subHadding={'---Popular items---'}
            ></SectionTitle>
            <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
                {
                    manu?.map(item=><ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>

        </section>
    );
};

export default PopularManu;