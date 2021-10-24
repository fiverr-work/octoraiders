import back4 from "../img/back4.png"
import discord from "../img/discord.png"
import twitter from "../img/twitter.png"

const Hero = () => (
    <header className="py-3 my-3 py-md-5 my-md-5">
        <div className="row justify-content-center">
            <div className="col-10 col-md-5 col-lg-5 col-xl-4 align-self-center mb-4 mb-lg-0" data-bss-disabled-mobile="true" data-aos="fade-right" data-aos-duration="950" data-aos-delay="150" data-aos-once="true">
                <img alt="" className="img-fluid" data-bss-disabled-mobile="true" data-bss-hover-animate="tada" src={back4}/>
            </div>
            <div className="col-md-12 col-lg-7 offset-xl-1 text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start align-self-center" data-aos="fade" data-aos-duration="950" data-aos-delay="250">
                <h1 className="text-white">OctoRaiders is a skill-based NFT Space arcade game. </h1>
                <p className="hero-paragraph">
                    Your very own chance to mint 1 of 8,888 randomly generated completely unique Octo Raiders! Collect, trade and play in game! Octo Raiders will have the ability to battle others players online with your unique NFT.
                    </p>
                <ul className="list-inline">
                    <li className="list-inline-item" data-bss-hover-animate="wobble">
                        <a href="#">
                            <img alt="" className="social-img me-2" src={discord}/>
                        </a>
                    </li>
                    <li className="list-inline-item" data-bss-hover-animate="wobble">
                        <a href="https://twitter.com/octoraiders">
                            <img alt="" className="social-img" src={twitter}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col text-center">
                <h1 className="text-white mt-5" data-bss-disabled-mobile="true" data-aos="zoom-in" data-aos-duration="950" data-aos-delay="350" data-aos-once="true">Mint. Trade. Game. POWERED BY THE SOLANA BLOCKCHAIN<span className="green-text">!</span> </h1>
            </div>
        </div>
    </header>
)
export default Hero