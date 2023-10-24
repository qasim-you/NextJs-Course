import Contact from "./contacts/page" ;
import Card from "./(components)/card/page";
import Footer from "./(components)/footer/footer";
export default function Home() {
    return(
        <div>
         <h1> Landin Home</h1>
         <Contact />
         <Card />
         <Footer />
        </div>
    )
}