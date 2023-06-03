
const SectionTitle = ({ hedding, subHadding ,color}) => {
    return (
        <div className="text-center mt-20 mb-12 flex items-center justify-center">
            <div>
            <p className="text-[#D99904]">{subHadding}</p>
            <h2 className={`text-3xl py-2 mt-2 mx-auto   border-b-4 border-t-4 ${color==='featured'?'text-white':'text-black'}`}>{hedding}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;