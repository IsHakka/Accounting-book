import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        // 修改方法
        setBillList(state, action) {
            state.billList = action.payload
        },
        // 添加帳單方法
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
});

export const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka');
        dispatch(setBillList(res.data));
    }
}

export const addBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:8888/ka',data);
        dispatch(setBillList(res.data));
    }
}

export const { setBillList, addBill } = billStore.actions;