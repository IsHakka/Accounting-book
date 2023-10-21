import { NavBar, DatePicker } from 'antd-mobile';
import './index.scss';
import { useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

const Month = () => {
    // 談框開關
    const [dateVisible, setDateVisible] = useState(false);
    // 時間顯示
    const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()).format('YYYY-MM'))

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
                            <span className="money">{100}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
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
                        onConfirm={(date) => { setDateVisible(false); const formatDate = dayjs(date).format('YYYY-MM'); setCurrentDate(formatDate); }}
                        onClose={() => setDateVisible(false)}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month