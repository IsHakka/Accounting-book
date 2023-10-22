import { NavBar, DatePicker } from 'antd-mobile';
import './index.scss';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const Month = () => {
    // 獲得數據
    const { billList } = useSelector(state => state.bill);
    const monthGroup = useMemo(() => {
        // 按月做數據分組
        return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'))
    }, [billList])
    // 談框開關
    const [dateVisible, setDateVisible] = useState(false);
    // 時間顯示
    const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()).format('YYYY-MM'))

    const [currentMonthList, setMonthList] = useState([])

    // 計算收入、支出、餘額
    const monthResult = useMemo(() => {
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, b) => a + b.money, 0)
        const income = currentMonthList.filter(item => item.type === 'income').reduce((a, b) => a + b.money, 0)

        return {
            pay,
            income,
            total: pay + income
        }

    }, [currentMonthList])
    const onConfirm = (date) => {
        setDateVisible(false);
        const formatDate = dayjs(date).format('YYYY-MM');
        setMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate);
    }

    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                每月收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 時間切換區 */}
                    <div className="date" onClick={() => setDateVisible(true)}>
                        <span className="text">
                            {currentDate + ''}月帳單
                        </span>
                        <span className={classNames('arrow', dateVisible && 'expand')}></span>
                    </div>
                    {/* 統計區域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{monthResult.income}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.pay}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total}</span>
                            <span className="type">餘額</span>
                        </div>
                    </div>
                    {/* 時間選擇器 */}
                    <DatePicker
                        className="kaDate"
                        title="記帳日期"
                        precision="month"
                        visible={dateVisible}
                        max={new Date()}
                        onCancel={() => setDateVisible(false)}
                        onConfirm={onConfirm}
                        onClose={() => setDateVisible(false)}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month