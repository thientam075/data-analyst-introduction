import Contact from "./components/home/contact";
import Footer from "./components/home/footer";
import Navbar from "./components/home/navbar";
import Header from "./components/home/header";
import Intro from "./components/home/intro";
import Pricing from './components/home/pricing';
import Team from "./components/home/team";
const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Intro/>
      <Pricing/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default (Home);
