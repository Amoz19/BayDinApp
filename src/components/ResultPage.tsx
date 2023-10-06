import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const { answer } = location.state;
    return (
        <p>{answer}</p>
    );
}

export default ResultPage;