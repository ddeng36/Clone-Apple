import { GlobalStyle } from "./styles/GloabalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
function App() {
  return (
    <>
      <GlobalStyle />
      <Quote/>
      <HeroSection />
      <PhoneModel/>
    </>
  );
}

export default App;
