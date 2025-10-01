import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import MainRoute from "../Routes/MainRoute";

export default function MainLayout(){
    return(
        <>
            <Nav/>
                <MainRoute/>
            <Footer/>
        </>
    )
}