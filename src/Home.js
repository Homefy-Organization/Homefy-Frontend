import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/products";



export default function Home(){
   
    return(
        <>
            <Header/>
            <Products/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    );
}