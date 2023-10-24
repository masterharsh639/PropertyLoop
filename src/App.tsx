import "./App.css";
import Packages from "./Container/Packages/Packages";
import Reactangle from "./Container/Rectangle/Reactangle";
import Header from "./component/HeaderSection/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import SafeHands from "./component/SafeHands/SafeHands";
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
      <SafeHands />
      <Packages/>
    </div>
  );
}

export default App;
