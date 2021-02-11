export type TransactionsEthApi = {
    operations: [{
        timestamp: number,
        transactionHash: string,
        balance: string,
        to: string,
        from: string,
        value: string,
        tokenInfo: {
            address: string,
            decimals: string,
            image: string,
            name: string,
            symbol: string,
            price: {
                diff: number,
                rate: number,
            }
        },
    }]
}



export type SingleTransaction = {
    timestamp: string,
    transactionHash: string,
    to: string,
    from: string,
    balance: string,
    symbol: string
}

export type TokenInfoDisplay = {
    logo: string,
    name: string,
    dif: string,
    totalDollar: string,
    totalCrypto: string,
    rate: string,
    symbol: string
}


export type EtherTransApi = {
    timestamp: number,
    from: string,
    to: string,
    hash:string,
    value:number,
    success:boolean
}