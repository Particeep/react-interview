import {Navbar,Nav,Image,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function Header(props) {

        return(

            <>
                <Navbar className="movie-Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark"  >
                    <div className="container" >
                        <Navbar.Brand href="#home">   Movies</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#films">Films</Nav.Link>
                                <Nav.Link href="#series">Series</Nav.Link>
                                <Nav.Link href="#Animes">Animes</Nav.Link>
                                <Nav.Link href="#documentaire">Documentaire</Nav.Link> 
                            </Nav>
                            <Nav>
                                <Button className="button-connexion"><FontAwesomeIcon icon={faUser} /> Sign in</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="header">
                    <Image src="/images/1-5.jpg" fluid />
                </div>

            </>)
}

export default Header;