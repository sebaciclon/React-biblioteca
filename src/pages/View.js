import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View() {
    const params = useParams();
    const store = useAppContext();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    },[]);

    if(!item) {
        return(
            <Layout>Item not found</Layout>
        );
    }

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto",
        },
    };

    return(
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover? <img src={item?.cover} width="400"/> : ''}</div>
                </div>

                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? 'Leido' : 'Por termnar'}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}