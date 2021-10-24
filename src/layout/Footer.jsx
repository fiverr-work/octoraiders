import back5 from "../img/back5.png"

const Footer = () => (
    <footer className="pb-3">
        <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start mb-3 mb-lg-0">
                <a className="navbar-brand bradnname" href="#">
                    <img alt="" className="logo-img me-3" src={back5}/>
                    OctoRaiders
                </a>
            </div>
            <div className="col align-self-center">
                <h5 className="text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end text-white mb-0">2021 all rights reserved<br/>OctoRaiders</h5>
            </div>
        </div>
    </footer>
)
export default Footer;