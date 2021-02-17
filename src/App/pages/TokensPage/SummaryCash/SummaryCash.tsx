import * as React from 'react';
import { Typography } from 'antd';
import { useContext } from 'react';
import { TokensContext } from '../TokensPage';
import './SummaryCash.scss';
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import {formatMoney} from "@utils/formatMoney";

const { Title, Text } = Typography;

const SummaryCash = () => {
    const store = useContext(TokensContext);
    let dailyResult = '';
    let arrow = null;

    const dailyMoneyNum = Number(store.repos.dailyMoney);
    const dailyProc =  formatMoney(dailyMoneyNum * 100 / Number(store.repos.totalSum), 2);



    if (dailyMoneyNum > 0) {
        dailyResult = `+$${store.repos.dailyMoney} (${dailyProc}%)`;
        arrow = <ArrowUpOutlined style={{color:"green"}}/>;
    } else if (dailyMoneyNum < 0){
        dailyResult = `-$${String(store.repos.dailyMoney).slice(1)} (${dailyProc}%)`;
        arrow = <ArrowDownOutlined style={{color:"red"}}/>;
    } else {
        dailyResult = `$0 (0.00%)`;
    }


    return (
        <div className="monitor">
            <div className="monitor__title">TOTAL WALLET</div>
            <Title className="main-info-cash" level={2}>
                <span className="main-info-cash__dop">$</span>
                <span className="main-info-cash__main">{formatMoney(store?.repos.totalSum,2)}</span>
                <span className="main-info-cash__dop">USD</span>
            </Title>
            <div className="daily-profit">
                {dailyResult} {arrow}
            </div>
        </div>
    );
};

export default SummaryCash;
