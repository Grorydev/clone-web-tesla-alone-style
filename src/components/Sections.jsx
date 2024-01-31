import Chevron from "./Chevron"
import TitlePresentation from "./TitlePresentation"
import PropTypes from "prop-types";


const Sections = ({ media, title, children, id }) => {
    return (
        // <section className={`relative bg-cover bg-center h-screen`} style={{ backgroundImage: `url(${url})` }}>

        <section className="relative h-screen" id={id}>
            {media.type === "image" && (
                <img className="z-[-10] absolute inset-0 w-full h-full object-cover" src={media.url} alt="Background" />
            )}
            {media.type === "video" && (
                <video className=" z-[-10] absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src={media.url} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
            )}
            <TitlePresentation title={title} />
            {children}

        </section>
    )
}

Sections.propTypes = {
    media: PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]).isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    id: PropTypes.string.isRequired
};

export default Sections