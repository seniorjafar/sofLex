import Headers from "../../components/Home/Head/Headers.jsx";
import Foter from "../../components/Home/Foter/Foter.jsx";
import Polyurethane from "../../components/product/product.jsx";
import PolyurethanePVC from "../../components/product/PolyurethanePVC/PolyurethanePVC.jsx";
import IconBoxesSection from "../../components/product/IconBoxesSection/IconBoxesSection.jsx";
import PipeShell from "../../components/product/piple/PipeShell.jsx";
import Pupl from "../../components/product/pupl/pupl.jsx";
import Navbar from "../../components/Home/Navbar/Navbar.jsx";

const Product = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <Polyurethane/>
            <PolyurethanePVC />
            <IconBoxesSection />
            <PipeShell/>
            <Pupl/>
            <Foter />
        </>

    )
}

export default Product
