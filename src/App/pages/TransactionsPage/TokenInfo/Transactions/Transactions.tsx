import { List } from 'antd';
import * as React from 'react';
import SingleTrans from './SingleTrans';
import './Transactions.scss';
import TokenInfoStore from '@store/TokenInfoStore';
import { useParams } from 'react-router-dom';

type Props = {
    storeTrans: TokenInfoStore;
};

const Transactions: React.FC<Props> = ({ storeTrans }) => {
    // @ts-ignore
    const { address } = useParams();
    const reqAddress = address;
    return (
        <div className="transactions-list">
            <List
                dataSource={storeTrans.repos.trans}
                renderItem={(trans) => <SingleTrans trans={trans} reqAddress={reqAddress} />}
            />
        </div>
    );
};

export default Transactions;
