import back2 from "../img/back2.png"

const Numbers = () => (
    <section className="pt-3 mt-3 pt-md-5 mt-md-5">
        <div className="row justify-content-center">
            <div className="col-7 col-md-5 col-lg-4 col-xxl-3 text-center align-self-center p-4" data-bss-disabled-mobile="true" data-aos="fade-right" data-aos-duration="950" data-aos-once="true">
                <img className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="swing" src={back2}/>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 offset-lg-1 align-self-center" data-bss-disabled-mobile="true" data-aos="fade-left" data-aos-duration="950" data-aos-once="true">
                <div className="state-box">
                    <h2 className="mb-0">8,888</h2>
                    <h5>Unique NTFs</h5>
                    <h2 className="mb-0">70+</h2>
                    <h5>Unique Attributes</h5>
                    <h2 className="mb-0">0.88 SOL</h2>
                    <h5>Each Octo Raider</h5><a className="eightbit-btn mt-4" href="#">Mint</a>
                </div>
            </div>
        </div>
    </section>
)
export default Numbers