import { GlobalStyle } from "./styles/GloabalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import Processor from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
function App() {
  return (
    <>
      <GlobalStyle />
      <Quote/>
      <HeroSection />
      {/* <PhoneModel/> */}
      <DesignSection/>
      <DisplaySection/>
      <Processor/>
      <BatterySection />
      <ColorSection/>
    </>
  );
}

export default App;
