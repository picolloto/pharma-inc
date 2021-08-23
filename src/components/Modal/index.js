import PropTypes from "prop-types";
import { useState } from "react";
import { formatDate } from "../../shared/util";
import { getFlag } from "../../api";
import { IoEye } from "react-icons/io5";

import "./Modal.scss";

const Modal = ({ item }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleData = () => {
        return (
            <>
                <div className="row">
                    <div className="col-5">
                        <p><b>ID:</b> {item.id.name ? `${item.id.name}-${item.id.value}` : item.login.uuid}</p>
                    </div>
                </div>
                <legend>Personal</legend>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Full name</label>
                        <p>{`${item.name.first} ${item.name.last}`}</p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Gender</label>
                        <p>{item.gender}</p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Birthday</label>
                        <p>{formatDate(item.dob.date)}</p>
                    </div>
                </div>
                <legend>Contact</legend>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Email</label>
                        <p>{item.email}</p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Phone</label>
                        <p>{item.phone}</p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <label className="label">Cell</label>
                        <p>{item.cell}</p>
                    </div>
                </div>
                <legend>Address</legend>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <label className="label">Street</label>
                        <p>{item.location.street.name}</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">Number</label>
                        <p>{item.location.street.number}</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">City</label>
                        <p>{item.location.city}</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">State</label>
                        <p>{item.location.state}</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">Country</label>
                        <p className="position-relative">
                            {item.location.country}
                            <span className="position-absolute right-0 end-0">
                                {getFlag(item.nat.toLowerCase())}
                            </span>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">Nationality</label>
                        <p>{item.nat}</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <label className="label">Postal Code</label>
                        <p>{item.location.postcode}</p>
                    </div>
                </div>
            </>
        )
    };

    return (
        <>
            <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="informationLabel"
                onClick={() => toggle()}
            >
               <IoEye /> View
            </button>
            { modal &&
                <div 
                    className={`modal fade ${modal ? "show": ""}`}
                    id="information" 
                    data-bs-backdrop="static" 
                    data-bs-keyboard="false" 
                    tabIndex="-1" 
                    aria-labelledby="informationLabel" 
                    aria-hidden="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header position-relative">
                                <div className="photo position-absolute">
                                    <img 
                                        src={item.picture.large}
                                        alt={`Foto de ${item.name.first}`}
                                    />
                                </div>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    data-bs-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={() => toggle()}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {handleData()}
                            </div>  
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

Modal.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Modal;