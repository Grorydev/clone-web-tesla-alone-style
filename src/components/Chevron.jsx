// import { useEffect } from "react";
import PropTypes from 'prop-types';

const Chevron = ({ targetSection }) => {
    const scrollToSection = () => {
        const section = document.getElementById(targetSection);
        console.log(section); // Verifica si section es null o si tiene el elemento correcto
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // useEffect(() => {
    //     // Agrega un event listener para el evento DOMContentLoaded
    //     document.addEventListener('DOMContentLoaded', () => {
    //         console.log('La página se ha cargado completamente.');
    //     });
    // }, []); // El segundo argumento del useEffect ([]) asegura que se ejecute solo una vez al montar el componente

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" onClick={scrollToSection}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

        </div>
    )
}

Chevron.propTypes = {
    targetSection: PropTypes.string.isRequired,
};

export default Chevron