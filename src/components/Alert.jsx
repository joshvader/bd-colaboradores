import PropTypes from 'prop-types';


const Alert = ({ mensaje, tipo }) => {
    return (
        <div className={`alert alert-${tipo}`} role="alert">
            {mensaje}
        </div>
    );
};
Alert.propTypes = {
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
};

export default Alert;