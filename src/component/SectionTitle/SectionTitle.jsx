
const SectionTitle = ({ hedding, subHadding }) => {
    return (
        <div className="text-center mt-20 mb-12">
            <div>
            <p className="text-[#D99904]">{subHadding}</p>
            <h2 className="text-3xl py-2 mt-2 mx-auto w-1/4  border-b-4 border-t-4">{hedding}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;