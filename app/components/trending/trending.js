import Card from "../card/card.js"
import React from "react"
import "./trending.css"


const Trending = ({displayMode}) => {

    // const trendingCards = 
    //     nfts.map((obj) => {
    //         return <Card
    //                 key={obj.id}
    //                 title={obj.name}
    //                 image={obj.image.small}
    //                 floor_price={obj.floor_price.native_currency}
    //             />
    // })

    return(
        <div className="trending">
                {/* {trendingCards} */}
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
                <Card displayMode={displayMode} />
        </div>
    )
}

export default Trending;