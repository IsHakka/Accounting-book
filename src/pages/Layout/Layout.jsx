import { TabBar } from "antd-mobile"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getBillList } from "../../store/slice/BillStore"
import { useNavigate } from "react-router-dom"
import './index.scss';
import {BillOutline,CalculatorOutline,AddCircleOutline} from 'antd-mobile-icons'

const tabs = [
    {
        key: '/month',
        title: '每月帳單',
        icon: <BillOutline />,
    },
    {
        key: '/new',
        title: '記帳',
        icon: <AddCircleOutline />,
    },
    {
        key: '/year',
        title: '年度帳單',
        icon: <CalculatorOutline />,
    },
]

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    
    // 切換菜單
    const navigate = useNavigate();
    const switchRoute=(path)=>{
        navigate(path)
    }
    return (
        <div className="layout">
            <div className="container">
                <Outlet />
            </div>
            <div className="footer">
                <TabBar onChange={switchRoute}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    )
}

export default Layout