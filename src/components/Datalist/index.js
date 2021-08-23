import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal";
import { formatDate } from "../../shared/util";
import { IoSearchOutline } from "react-icons/io5";

import "./Datalist.scss"

const Datalist = ({ columns, items }) => {
    const [search, setSearch] = useState("");
    const [filtred, setFiltred] = useState([]);

    const renderColumn = useCallback(() => {
        return (
            columns.map((column, index) => <th key={index}>{column}</th>)
        )
    }, [columns]);

    useEffect(() => {
        const result =items.filter(row => 
            row.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
            row.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.nat.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            row.location.country.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );

        if (!result) {
            setFiltred(items);
            return;
        }

        setFiltred(result);
    }, [search, items]);

    const renderItems = useCallback(() => {
        return (
            filtred.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{`${item.name.first} ${item.name.last}`}</td>
                        <td>{item.gender}</td>
                        <td>{formatDate(item.dob.date)}</td>
                        <td><Modal item={item} /></td>
                    </tr>
                )
            })
        )
    }, [filtred]);

    return (
        <>
            <div className="container-search position-relative">
                    <IoSearchOutline className="position-absolute"/>
                    <input 
                        className="search form-control"
                        type="text"
                        value={search}
                        placeholder="Search..."
                        onChange={({ target }) => setSearch(target.value)}
                    />
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {renderColumn()}
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </>
    );
}

Datalist.propTypes = {
    columns: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
};

export default Datalist;