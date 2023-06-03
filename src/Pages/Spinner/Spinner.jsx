import { FadeLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="w-full flex items-center justify-center h-screen">
            <FadeLoader color="#BB8506" />
        </div>
    );
};

export default Spinner;