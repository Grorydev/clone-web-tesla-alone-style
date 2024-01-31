import Buttons from "./components/Buttons"
import Chevron from "./components/Chevron"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sections from "./components/Sections"
import SingleButton from "./components/SingleButton"

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Sections
        // url={"https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg"} >
        id="1"
        title="Model S"
        media={{ type: "image", url: "https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg" }}
      >
        <Buttons>
          <SingleButton btnTitle={"Preparar Orden"} />
          <SingleButton btnColor={"slate"} btnTitle={"Ver auto"} />
        </Buttons>
        <Chevron targetSection={"2"} />
      </Sections>

      <Sections
        // url={"https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg"} >
        id="2"
        title="Model Y"
        media={{ type: "video", url: "https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Mobile-NA-v2.mp4" }}>
        <Buttons>
          <SingleButton btnTitle={"Preparar Orden"} />
          <SingleButton btnColor={"slate"} btnTitle={"Ver auto"} />
        </Buttons>
        <Chevron targetSection={"3"} />
      </Sections>

      {/* <Sections url={"https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg"} /> */}


      <Sections
        // url={"https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg"} >
        id="3"
        title="Model Y"
        media={{ type: "image", url: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" }}>

        <Buttons>
          <SingleButton btnColor={"green"} btnTitle={"Ver Tienda"} />
        </Buttons>
        <Footer />
      </Sections>
    </>
  )
}

export default App
