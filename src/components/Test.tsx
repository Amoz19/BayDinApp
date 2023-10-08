
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// interface Params {
//     page: string,
//     perPage: string
// }

function App() {
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({ page="1", perPage="5" })
    }, [])

    return (
        <div>

        </div>
    );
}