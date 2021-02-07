import NavBar from "../../../../components/NavBar";
import React from "react";

const TransTitle = {
    name: 'Ethereum',
    symbol: 'ETH',
}


const FillInNavBar = () => {
    const titleNavBar = `${TransTitle.name} (${TransTitle.symbol})`
    return (
        <NavBar title={titleNavBar} subtitle={''}/>
    )
}

export default FillInNavBar;