import Headers from "../../components/Home/Head/Headers.jsx";
import Foter from "../../components/Home/Foter/Foter.jsx";
import FaqHead from "../../components/faq/head/head.jsx";
import Timeline from "../../components/faq/main/timeline.jsx";
import MissionManagement from "../../components/faq/mission/mission.jsx";
import Navbar from "../../components/Home/Navbar/Navbar.jsx";
const About = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <FaqHead />
            <Timeline />
            <MissionManagement />
            <Foter />
        </>

    )
}

export default About
