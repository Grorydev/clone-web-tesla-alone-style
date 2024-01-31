import PropTypes from 'prop-types';
const SingleButton = ({ btnColor, btnTitle }) => {
    const colorVariants = {
        blue: 'bg-blue-600 hover:bg-blue-500',
        red: 'bg-red-600 hover:bg-red-500',
        green: 'bg-green-600 hover:bg-green-500',
        slate: 'bg-slate-600 hover:bg-slate-500',
        white: "bg-neutral-400 hover:bg-neutral-600"
    };
    const selectedColor = colorVariants[btnColor] ?? colorVariants['white'];
    return (
        // <button className="bg-red-600 w-full text-white p-2 rounded-full hover:bg-slate-500 uppercase ">Preparar orden</button>
        // <button className={`bg-red-600 hover:bg-red-500 w-full text-white p-2 rounded-full uppercase`} >Aca</button>

        <button className={`${selectedColor} w-full text-white p-2 rounded-full uppercase bg-`}>
            {btnTitle}
        </button>
    )
}

SingleButton.propTypes = {
    btnColor: PropTypes.oneOf(['blue', 'red', 'green', 'slate', 'white']),
    btnTitle: PropTypes.string.isRequired,
};

export default SingleButton