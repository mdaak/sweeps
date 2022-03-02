import Areas from "../components/homePage/Areas";
import Footer from "../components/homePage/Footer";
import HeroSection from "../components/homePage/HeroSection";
import HowSweeps from "../components/homePage/HowSweeps";
import SimpleReliable from "../components/homePage/SimpleReliable";
import Support from "../components/homePage/Support.js";
import SweepsNumbers from "../components/homePage/SweepsNumbers";
import WeCard from '../components/homePage/WeCard';
import WhySweeps from '../components/homePage/WhySweeps';


export default function Home() {
  return (
   <div>
     <HeroSection/>
     <SimpleReliable/>
     <WeCard/>
     <WhySweeps/>
     <Areas/>
     <SweepsNumbers/>
     <HowSweeps/>
     <Support/>
     <Footer/>
   </div>
  )
}
