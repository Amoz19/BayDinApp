import { useLocation } from "react-router-dom";

const PickRandomNumber = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const questionName = searchParams.get('questionName');
  return <h1>{questionName}</h1>;
};

export default PickRandomNumber;
