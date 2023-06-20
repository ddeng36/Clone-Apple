import { GlobalStyle } from "./styles/GloabalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import Processor from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PriceSection from "./sections/PriceSection";
function App() {
  return (
    <>
      <GlobalStyle />
      <Quote/>
      <HeroSection />
      <PhoneModel/>
      <DesignSection/>
      <DisplaySection/>
      <Processor/>
      <BatterySection />
      <ColorSection/>
      <CameraSection />
      <PriceSection/>
    </>
  );
}

export default App;
