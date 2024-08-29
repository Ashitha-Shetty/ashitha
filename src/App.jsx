import "./App.css";
import Blog from "./components/blog/Blog";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
   
      <Testimonials />
      
      <Blog />
      
      <Footer />
    </main>
  );
}

export default App;
