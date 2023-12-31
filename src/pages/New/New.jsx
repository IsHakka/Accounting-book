import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '../../components/icon/Icon'
import './index.scss'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { billListData } from '../../contants'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBillList } from '../../store/slice/BillStore'
import dayjs from 'dayjs'

const New = () => {
    const navigate = useNavigate()
    //控制收入、支出狀態
    const [billType, setBillType] = useState('pay')
    // 金額紀錄
    const [money, setMoney] = useState(0)
    const moneyChange = (value) => {
        setMoney(value)
    }
    // 帳單類型紀錄
    const [useFor, setUseFor] = useState('')
    const dispatch = useDispatch();
    // 保存帳單
    const saveBill = () => {
        const data = {
            type: billType,
            money: billType === 'pay' ? -money : +money,
            date: date,
            useFor: useFor
        }
        dispatch(addBillList(data))
        setMoney(0)
    }
    // 控制時間打開關閉
    const [dateVisible,setDateVisible] = useState(false)
    // 儲存選擇時間
    const [date,setDate] = useState('')
    // 確認選擇時間
    const dateConfirm = (value)=>{
        setDate(value)
        setDateVisible(false)
    }
    return (
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
                新增一筆
            </NavBar>

            <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        className={classNames(billType === 'pay' ? 'selected' : '')}
                        onClick={() => setBillType('pay')}
                    >
                        支出
                    </Button>
                    <Button
                        className={classNames(billType === 'income' ? 'selected' : '')}
                        shape="rounded"
                        onClick={() => setBillType('income')}
                    >
                        收入
                    </Button>
                </div>

                <div className="kaFormWrapper">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type="calendar" className="icon" />
                            <span className="text" onClick={()=>setDateVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
                            <DatePicker
                                className="kaDate"
                                title="記帳日期"
                                max={new Date()}
                                visible={dateVisible}
                                onConfirm={dateConfirm}
                            />
                        </div>
                        <div className="kaInput">
                            <Input
                                className="input"
                                placeholder="0"
                                type="number"
                                value={money}
                                onChange={moneyChange}
                            />
                            <span className="iconYuan">$</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kaTypeList">
                {billListData[billType].map(item => {
                    return (
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item => {
                                    return (
                                        <div
                                            className={classNames(
                                                'item',
                                                useFor === item.type ? 'selected':''
                                            )}
                                            key={item.type}
                                            onClick={() => setUseFor(item.type)}

                                        >
                                            <div className="icon">
                                                <Icon type={item.type} />
                                            </div>
                                            <div className="text">{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="btns">
                <Button className="btn save" onClick={saveBill}>
                    儲存
                </Button>
            </div>
        </div>
    )
}

export default New