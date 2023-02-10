import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Advantages from "../components/main-page/Advantages/Advantages";
import Clients from "../components/main-page/Clients/Clients";
import ContactUs from "../components/main-page/ContactUs/ContactUs";
import Main from "../components/main-page/Main/Main";
import News from "../components/main-page/News/News";
import Services from "../components/main-page/Services/Services";
import Testimonials from "../components/main-page/Testimonials/Testimonials";
import WhyUs from "../components/main-page/WhyUs/WhyUs";

export default function Home() {
    return (
        <div className="wrapper">
            <Header />
            <main className="page">
                <Main />
                <Clients />
                <Services />
                <WhyUs />
                <Advantages />
                <Testimonials />
                <News />
                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}
