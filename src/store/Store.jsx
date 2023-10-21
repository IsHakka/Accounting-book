import { configureStore } from "@reduxjs/toolkit";
import { billStore } from "./slice/BillStore";

const store = configureStore({
    reducer: {
        bill: billStore.reducer
    }
})

export default store