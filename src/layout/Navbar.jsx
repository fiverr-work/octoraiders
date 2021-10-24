import back5 from "../img/back5.png"
import speaker from "../img/speaker.png"

const Navbar = () => (
    <nav className="pt-3">
            <div className="row">
                <div className="col-md-8 col-lg-7 col-xl-6 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start mb-3 mb-lg-0">
                    <a className="navbar-brand bradnname" href="#">
                        <img className="logo-img me-3" src={back5} /> OctoRaiders</a>
                    </div>
                <div className="col-12 col-md-4 col-lg-5 col-xl-6 align-self-center">
                    <ul className="list-inline text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end mb-0">
                        <li className="list-inline-item me-md-0 me-5 mb-4 mb-lg-auto me-lg-5"><a className="eightbit-btn" href="#">Mint</a></li>
                        <li className="list-inline-item"><a className="eightbit-btn" href="#">Connect</a></li>
                        <li className="list-inline-item"> <img className="speaker-btn" src={speaker} id="button"/> </li>
                    </ul>
                </div>
        </div>
    </nav>
)
export default Navbar