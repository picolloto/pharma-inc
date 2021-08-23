import React, { useEffect, useState, useCallback } from "react";
import { getData } from "../../api";

import Container from "../../components/Container";
import Datalist from "../../components/Datalist";
import Navbar from "../../components/Navbar";
import { IoReload } from "react-icons/io5";

import "./Home.scss";

const columns = ["Name", "Gender", "Birth", "Actions"];

const Home = () => {
    const [items, setItems] = useState([]);
    const [loadData, setLoadData] = useState(10);

    const loadItems = useCallback(async () => {
        const data = await getData({
            page: 1,
            results: loadData
        });

        console.log(data);
        setItems(data.results);
    }, [loadData]);

    useEffect(()=> {
        loadItems();
    }, [loadItems]);

    return (
        <>
            <Navbar />
            <Container size="sm">
                <Datalist 
                    items={items}
                    columns={columns}
                />
                { loadData < 50 &&
                    <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-dark"
                            onClick={() => setLoadData(loadData+10)}
                        >
                            <IoReload /> Loading more...
                        </button>
                    </div>
                }
            </Container>
        </>
    );
}

export default Home;