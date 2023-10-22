import classNames from 'classnames';
import './index.scss';
import { useMemo, useState } from 'react';
import Icon from '../../../components/icon/Icon';

const DayBill = ({ date, billList }) => {
    // 計算收入、支出、餘額
    const dayResult = useMemo(() => {
        const pay = billList.filter(item => item.type === 'pay').reduce((a, b) => a + b.money, 0)
        const income = billList.filter(item => item.type === 'income').reduce((a, b) => a + b.money, 0)

        return {
            pay,
            income,
            total: pay + income
        }

    }, [billList])

    // 控制展開
    const [visible, setVisible] = useState(false)
    return (
        <div className={classNames('dailyBill')}>
            <div className="header">
                <div className="dateIcon">
                    <span className="date">{date}</span>
                    <span className={classNames('arrow', visible ? 'expand' : '')} onClick={() => setVisible(!visible)}></span>
                </div>
                <div className="oneLineOverview">
                    <div className="income">
                        <span className="type">收入</span>
                        <span className="money">{dayResult.income}</span>
                    </div>
                    <div className="pay">
                        <span className="type">支出</span>
                        <span className="money">{dayResult.pay}</span>
                    </div>
                    <div className="balance">
                        <span className="money">{dayResult.total}</span>
                        <span className="type">餘額</span>
                    </div>
                </div>
            </div>
            {/* 單日列表 */}
            <div className="billList" style={{ display: visible ? 'block' : 'none' }}>
                {billList.map(item => {
                    return (
                        <div className="bill" key={item.id}>
                            <Icon type={item.useFor}></Icon>
                            <div className="detail">
                                <div className="billType">{item.useFor}</div>
                            </div>
                            <div className={classNames('money', item.type)}>
                                {item.money.toFixed(2)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DayBill;