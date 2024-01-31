import PropTypes from "prop-types"
const TitlePresentation = ({ title }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-6xl m-auto mt-10">{title}</h1>
            <p className="whitespace-nowrap pt-1 text-[16px]">Ordena en linea
                <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer"> Entrega sin contacto </span>
            </p>
        </div>
    )
}

TitlePresentation.propTypes = {
    title: PropTypes.string.isRequired
    // children: PropTypes.node,
};

export default TitlePresentation