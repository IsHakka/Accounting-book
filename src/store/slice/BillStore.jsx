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
        }
    }
});

export const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka');
        dispatch(setBillList(res.data));
    }
}

export const { setBillList } = billStore.actions;