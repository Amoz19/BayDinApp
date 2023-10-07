import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { answer } = location.state;
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-900">
            <p className="bg-white p-2 rounded-md">{answer}</p>
            <button
                onClick={() => navigate('/')}
                className="bg-red-900 text-white py-1 px-3 rounded-3xl mt-5"
            >နောက်သို့</button>
        </div>


    );
}

export default ResultPage;