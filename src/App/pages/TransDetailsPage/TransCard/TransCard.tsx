import * as React from 'react';
import { useContext } from 'react';
import { Card, Typography } from 'antd';
import { replaceAll } from '@utils/replaceALl';
import { formatMoney } from '@utils/formatMoney';
import { TransDetailsContext } from '../TransDetailsPage';
import DataToCopy from '@components/DataToCopy';
import './TransCard.scss';

const { Title } = Typography;

type Props = {
    params: {
        hash: string;
        coins: string;
        rate: string;
        symbol: string;
    };
};

const TransCard: React.FC<Props> = ({ params }) => {
    const store = useContext(TransDetailsContext);

    const date = new Date(store.details.timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursForm = hours < 10 ? "0"+String(hours).slice(-2) : hours;
    const minutesForm = minutes < 10 ? "0"+String(minutes).slice(-2) : minutes;
    const balanceReplace = replaceAll(params.coins, ',', '');
    const usdBalance = formatMoney((Number(params.rate) * Number(balanceReplace)).toFixed(2), 2);


    return (
        <div className="trans-details-page">
            <div className="monitor-info">
                <Title level={2} style={{ color: 'white' }}>
                    {' '}
                    Transaction Details
                </Title>
            </div>
            <Card
                title="Transaction Hash"
                size="small"
                bordered={true}
                style={{
                    width: '100%',
                    borderRadius: '5rem 5rem 0 0',
                    wordBreak: 'break-all',
                    paddingTop: '2rem',
                }}
            >
                {store.details.hash}
                <DataToCopy text={store.details.hash} />
            </Card>

            <Card title="Status" size="small" style={{ width: '100%', borderRadius: '0' }}>
                {store.details.success && 'Success'}
                {!store.details.success && 'Failed'}
            </Card>
            <Card title="Block" size="small" style={{ width: '100%', borderRadius: '0' }}>
                {store.details.blockNumber} ({store.details.confirmations} Block Confirmations)
            </Card>
            <Card title="Timestamp" size="small" style={{ width: '100%', borderRadius: '0' }}>
                {date.toDateString()} at {hoursForm}:{minutesForm}
            </Card>
            <Card
                title="From"
                size="small"
                style={{ width: '100%', borderRadius: '0', wordBreak: 'break-word' }}
            >
                {store.details.from}
                <DataToCopy text={store.details.from} />
            </Card>
            <Card
                title="To"
                size="small"
                style={{ width: '100%', borderRadius: '0', wordBreak: 'break-word' }}
            >
                {store.details.to}
                <DataToCopy text={store.details.to} />
            </Card>
            <Card title="Value USD" size="small" style={{ width: '100%', borderRadius: '0' }}>
                ${usdBalance}
            </Card>
            <Card title="Value" size="small" style={{ width: '100%', borderRadius: '0' }}>
                {params.coins} {params.symbol}
            </Card>
            <Card title="Gas Limit" size="small" style={{ width: '100%', borderRadius: '0' }}>
                {store.details.gasLimit}
            </Card>
            <Card
                title="Gas Used by Transaction"
                size="small"
                style={{ width: '100%', borderRadius: '0' }}
            >
                {store.details.gasUsed} {store.details.gasProc}
            </Card>
        </div>
    );
};

export default TransCard;
