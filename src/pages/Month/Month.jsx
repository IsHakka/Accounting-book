import { NavBar, DatePicker } from 'antd-mobile';
import './index.scss';

const Month = () => {
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        每月收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 時間切換區 */}
          <div className="date">
            <span className="text">
              2023 | 3月帳單
            </span> 
            <span className='arrow expand'></span>
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
            visible={false}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month