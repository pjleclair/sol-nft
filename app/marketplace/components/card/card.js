import "./card.css"
import NFT from "./images/NFT.svg"

import Image from "next/image"

const Card = ({title, displayMode}) => {

    let cardContainerClass

    if (displayMode === 'dark') {
        cardContainerClass = "card--container"
    } else {
        cardContainerClass = "card--container-lm"
    }
    
    return (
        <div className={cardContainerClass}>
            <Image src={NFT} alt="nft"/>
            <div id="title">{title || "Liquid Wave"}</div>
            <div className="info--container">
                <div className="info">
                    <div>Auction Time</div>
                    <div>Current Bid</div>
                </div>
                <div id="bid">0.05 ETH</div>
            </div>
            <div className="vals">
                <div>3h 1m 50s</div>
                <div>0.15 ETH</div>
            </div>
            <button id="bid--button">Place a Bid</button>
        </div>
    )
}

export default Card;