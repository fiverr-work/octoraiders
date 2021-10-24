import b1 from "../img/b1.png"
import b2 from "../img/b2.png"
import b3 from "../img/b3.png"
import b4 from "../img/b4.png"
import b5 from "../img/b5.png"
import b6 from "../img/b6.png"

const Attributes = () => (
    <section className="py-3 py-md-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center text-white mb-4" data-bss-disabled-mobile="true" data-aos="fade-up" data-aos-duration="950" data-aos-once="true">Attributes!</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div data-bss-disabled-mobile="true" data-aos="fade-up" data-aos-duration="950" data-aos-once="true" className="state-box">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b1} />
                            <h5>Headwear</h5>
                            <h6>Rarest: Solana cap rarity 0.05%</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b2} />
                            <h5>Eyewear</h5>
                            <h6>Rarest: Solana shades rarity 0.05%</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b3} />
                            <h5>Footwear</h5>
                            <h6>Rarest: Bitcoins rarity 0.05%</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b4} />
                            <h5>Background</h5>
                            <h6>Rarest: Vortex rarity 0.05%</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b5} />
                            <h5>Accessories</h5>
                            <h6>Rarest: Raygun rarity 0.05%</h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center py-4">
                            <img alt="" className="img-fluid mb-3" src={b6} />
                            <h5>Skin</h5>
                            <h6>Rarest: White rarity 0.05%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default Attributes