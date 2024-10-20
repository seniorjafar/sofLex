import Headers from "../../components/Home/Head/Headers.jsx";
import Foter from "../../components/Home/Foter/Foter.jsx";
import Head from "../../components/Contact/head/head.jsx";
import ContactInput from "../../components/Contact/head/contactInputs/input.jsx";
import ContactSection from "../../components/Contact/head/ContactSection/ContactSection.jsx";
import Navbar from "../../components/Home/Navbar/Navbar.jsx";
const Contact = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <Head />
            <ContactInput />
            <ContactSection/>
            <Foter />
        </>

    )
}

export default Contact
