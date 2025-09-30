import {configureStore} from "@reduxjs/toolkit"
import SinhVienReducer from "./../store/sinhVienReducer"

export const store = configureStore({
    reducer:{
        SinhVienReducer,
    }
})

