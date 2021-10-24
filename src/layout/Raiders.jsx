import one from "../img/1.png"
import two from "../img/2.png"
import three from "../img/3.png"
import fore from "../img/4.png"

const Raiders = () => (
    <section className="py-3 py-md-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center text-white mb-4" data-bss-disabled-mobile="true" data-aos="fade-up" data-aos-duration="950" data-aos-once="true">Discover some Octo Raiders!</h1>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-lg-3 text-center p-4" data-bss-disabled-mobile="true" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="100" data-aos-once="true">
                <img alt="" className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="pulse" src={one} />
            </div>
            <div className="col-9 col-sm-6 col-lg-3 text-center p-4" data-bss-disabled-mobile="true" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="200" data-aos-once="true">
                <img alt="" className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="pulse" src={two} />
            </div>
            <div className="col-9 col-sm-6 col-lg-3 text-center p-4" data-bss-disabled-mobile="true" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="300" data-aos-once="true">
                <img alt="" className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="pulse" src={three} />
            </div>
            <div className="col-9 col-sm-6 col-lg-3 text-center p-4" data-bss-disabled-mobile="true" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="400" data-aos-once="true">
                <img alt="" className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="pulse" src={fore} />
            </div>
        </div>
    </section>
)
export default Raiders