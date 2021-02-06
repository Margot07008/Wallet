import * as React from 'react';

const someTokens = {"address":"0xc88f7666330b4b511358b7742dc2a3234710e7b1",
  "ETH":{
    "balance":69.80723920402022,
    "price":{
      "rate":1705.5402647407293,
      "diff":3.13,
      "diff7d":25.96,
      "ts":1612555382,
      "marketCapUsd":195365644761.18152,
      "availableSupply":114547659.0615,
      "volume24h":39999942792.968094,
      "diff30d":47.78627854868188,
      "volDiff1":-8.389584848057297,
      "volDiff7":-4.688869829438829,
      "volDiff30":104.37171920082656
    }
  },
  "countTxs":319781,
  "tokens":[
    {
      "tokenInfo":{
        "address":"0x082280b4ae1a9e552555c256124de96fab63159b",
        "name":"Meterqubes",
        "decimals":"18",
        "symbol":"MEQ",
        "totalSupply":"1000000000000000000000000000",
        "owner":"0x0920dccf5844ede071f11a199ba49ae113aa905e",
        "lastUpdated":1604095362,
        "issuancesCount":0,
        "holdersCount":17888,
        "image":"/images/MEQ082280b4.jpg",
        "website":"https://meterqubes.io",
        "facebook":"MeterQubes-2217917285125892",
        "telegram":"https://t.me/meterqubes",
        "twitter":"MeterQubes",
        "coingecko":"meterqubes",
        "ethTransfersCount":0,
        "price":false,
        "publicTags":[
          "DEX"
        ]
      },
      "balance":4.0e+20,
      "totalIn":0,
      "totalOut":0
    },
    {
      "tokenInfo":{
        "address":"0xf050e54d2b50c055c9919a4b856a195221d3db71",
        "name":"Rutile",
        "decimals":"18",
        "symbol":"RUT",
        "totalSupply":"150000000000000000000000000",
        "owner":"0x",
        "lastUpdated":1607633978,
        "issuancesCount":0,
        "holdersCount":4949,
        "ethTransfersCount":0,
        "price":false
      },
      "balance":6.7e+21,
      "totalIn":0,
      "totalOut":0
    },
    {
      "tokenInfo":{
        "address":"0xf0814d0e47f2390a8082c4a1bd819fdde50f9bfc",
        "decimals":"8",
        "name":"XPToken.io",
        "owner":"0x6d2eba0b3f7e1a5b6aad19759698b5d553910440",
        "symbol":"XPT",
        "totalSupply":"20000000000000000",
        "lastUpdated":1612496989,
        "issuancesCount":0,
        "holdersCount":1119,
        "ethTransfersCount":0,
        "price":{
          "rate":1.09124858068789,
          "diff":-0.11,
          "diff7d":1.88,
          "ts":1612555446,
          "marketCapUsd":0,
          "availableSupply":0,
          "volume24h":27734.14121686,
          "volDiff1":1.2090224167047268,
          "volDiff7":3.7900273174773247,
          "volDiff30":-11.319613268469922,
          "diff30d":0.7060492729277712,
          "currency":"USD"
        }
      },
      "balance":200000000,
      "totalIn":0,
      "totalOut":0
    },
    ]
}

const CreateTokens = () => {
  const tokensForRender = [];
  tokensForRender.push({
    symbol: 'ETH',
    name: 'Ethereum',
    balance: someTokens.ETH.balance,
    price: someTokens.ETH.balance*someTokens.ETH.price.rate,
    logo: '',
  });
  someTokens.tokens.forEach((item)=>{
    if (item.tokenInfo.price !== false) {
      const itemInfo = item.tokenInfo;
      const itemBalance = item.balance;
      tokensForRender.push({
        symbol: itemInfo.symbol,
        name: itemInfo.name,
        balance: itemBalance,
        price: itemBalance*itemInfo.price.rate,
        logo: itemInfo.image,
      })
    }
  })
  return tokensForRender;
};

const Token = ({singleToken}) => {

  const res = singleToken.map((num) =>
    <li>{num.price}</li>
  );
  return (<ul>{res}</ul>)
}

const Tokens = () => {

  const listOfToken = CreateTokens();
  return listOfToken.forEach((item) => {
    <Token singleToken={item} />
  });
};

export default Tokens;