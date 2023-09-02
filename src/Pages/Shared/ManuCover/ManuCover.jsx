
const ManuCover = ({coverImg,title,description,titleUpperCatch}) => {
    return (
        <section>
            <div className="hero h-[380px] lg:h-[600px] " style={{ backgroundImage: `url(${coverImg})` }}>
                <div className="hero-content text-center  text-neutral-content  bg-[#00000080] w-5/6">
                    <div className="max-w-md text-white py-8">
                        <h1 className={`mb-5 text-5xl font-bold`}>{title}</h1>
                        <p className={`mb-5 ${titleUpperCatch==='titleUpperCatch'&& 'uppercase'}`}>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManuCover;