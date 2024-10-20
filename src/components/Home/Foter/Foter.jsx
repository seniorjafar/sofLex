import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../assets/logo3.png';
import logo2 from '../../../assets/kolibrlogo.png';

export default function Foter() {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(57, 22, 196)' }} className="p-3">
                <Container>
                    <Row className="d-flex align-items-center justify-content-between">
                        {/* Logo on the left */}
                        <Col xs={12} md={4} className="text-center text-md-start">
                            <img width={"150px"} height={"40px"} src={logo} alt="logo" />
                        </Col>

                        {/* Text in the middle */}
                        <Col xs={12} md={4} className="text-center my-2 my-md-0">
                            <h6 className="text-fluid" style={{ color: 'white' }}>Isoflex Ltd. © All rights reserved.</h6>
                        </Col>

                        {/* Logo on the right */}
                        <Col xs={12} md={4} className="text-center text-md-end">
                            <img className="img-fluid" src={logo2} alt="logo" style={{ maxWidth: "150px", height: "auto" }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
    