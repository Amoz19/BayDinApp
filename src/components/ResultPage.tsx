import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { answer } = location.state;
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-900 px-5">

            <p className="bg-white text-black rounded-md text-center py-3 px-1">အဖြေ - {answer}</p>
            <button
                onClick={() => navigate(-1)}
                className="bg-red-900 text-white py-1 px-3 rounded-3xl mt-5"
            >ပြန်မေးမည်</button>
        </div>


    );
}

export default ResultPage;