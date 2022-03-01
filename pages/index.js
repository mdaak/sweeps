import Areas from "../components/homePage/Areas";
import Footer from "../components/homePage/Footer";
import HeroSection from "../components/homePage/HeroSection";
import SimpleReliable from "../components/homePage/SimpleReliable";
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
     <Footer/>
   </div>
  )
}
