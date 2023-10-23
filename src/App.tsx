import "./App.css";
import Reactangle from "./Container/Rectangle/Reactangle";
import Header from "./component/HeaderSection/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import WhatLord from "./component/WhatLandords/WhatLords";
import Whylandlords from "./component/WhyLandlord/Whylandlords";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Reactangle />
      <Whylandlords />
      <WhatLord />
    </div>
  );
}

export default App;
