import PropTypes from 'prop-types';

const Buttons = ({ children }) => {
    return (
        <div className="absolute bottom-20 w-[300px] sm:w-[500px] left-1/2 transform -translate-x-1/2 p-4 space-y-2 sm:space-y-0 rounded-full flex flex-col justify-center text-sm sm:flex-row sm:space-x-2">
            {/* <button className="bg-gray-700 w-full text-white p-2 rounded-full hover:bg-slate-500 uppercase ">Preparar orden</button>
            <button className="bg-slate-300 hover:bg-slate-500 w-full text-black p-2 rounded-full uppercase ">Ver automovil</button> */}
            {children}
        </div>
    );
}

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Buttons;
