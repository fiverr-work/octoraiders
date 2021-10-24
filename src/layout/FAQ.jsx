
import Accordion from 'react-bootstrap/Accordion'

const FAQ = () => (
    <Accordion className="my-3 my-md-5">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        <Accordion.Item eventKey="0">
            <Accordion.Header>When can I mint an Octo Raider?</Accordion.Header>
            <Accordion.Body>
            Minting will be available on 30th October 12pm GMT
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>How can I buy?</Accordion.Header>
            <Accordion.Body>
            You can buy by simply connecting your Solana Wallet to the website and clicking 'mint' then follow the steps, takes less than 2 mins to own an Octo Raider!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>What wallet should I use?</Accordion.Header>
            <Accordion.Body>
            We recommend Phantom Wallet
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>How much SOL should I reserve for transaction?</Accordion.Header>
            <Accordion.Body>
            We recommend keeping around 0.1 Solana in fees in your wallet for any unexpected transaction fees
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Is each Octo Raider unique?</Accordion.Header>
            <Accordion.Body>
            Yes! Each 8,888 Invader is generated uniquely and can never be replicated
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Can the NFT be used in game?</Accordion.Header>
            <Accordion.Body>
            Yes, the NFTs will be available for in use game play. How cool is that!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
            <Accordion.Header>When will the game be available to play?</Accordion.Header>
            <Accordion.Body>
            It is due to be made public beta in Q1 2022
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
);
export default FAQ