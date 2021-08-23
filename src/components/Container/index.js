import PropTypes from "prop-types";

const Container = ({ children, size }) => {
    return (
        <div className={`container${!!size ? "-"+size: ""}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(["", "sm","md","lg","xl","xxl", "fluid"])
};

Container.defaultProps = {
    size: ""
}

export default Container;