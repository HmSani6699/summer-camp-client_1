
const ManuCover = ({coberImg,title}) => {
    return (
        <section>
            <div className="hero h-[600px] mb-20 max-w-6xl mx-auto" style={{ backgroundImage: `url(${coberImg})` }}>
                <div className="hero-content text-center  text-neutral-content  bg-white w-5/6">
                    <div className="max-w-md text-black">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ManuCover;