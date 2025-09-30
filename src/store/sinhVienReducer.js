import {createSlice} from "@reduxjs/toolkit"
import data from "./../sinhVien/data.json"

const findIndexMaSV = (maSV, list) => {
    return list.findIndex((sinhvien) => sinhvien.maSV == maSV);
}

const initialState = {
    listSinhVien: data,
    infoSinhVien: {
        maSV: "",
        hoTen: "",
        phoneNumber: "",
        email: "",
    },
    isUpdate: false,
    listSearch: null,
}

const SinhVienReducer = createSlice({
    name: "SinhVienReducer",
    initialState,
    reducers: {
        addSinhVien: (state, action) => {
            const newSinhVien = action.payload;
            state.listSinhVien.push(newSinhVien);
            alert("Bạn đã thêm dữ liệu thành công!");
        },

        updateSinhVien: (state, action) => {
            const SV = action.payload;
            
            const index = findIndexMaSV(SV.maSV,state.listSinhVien);
            if(index != -1){
                state.listSinhVien[index].maSV = SV.maSV;
                state.listSinhVien[index].hoTen = SV.hoTen;
                state.listSinhVien[index].phoneNumber = SV.phoneNumber;
                state.listSinhVien[index].email = SV.email;
            }
            state.isUpdate = false;
            alert("Bạn đã cập nhật thông tin thành công!");
        },

        deleteSinhVien: (state, aciton) => {
            const maSV = aciton.payload;
            const index = findIndexMaSV(maSV, state.listSinhVien);
            console.log(index);
            if(index != -1){
                state.listSinhVien.splice(index, 1);
            }
        },

        getInfoSinhVien: (state, action) => {
            state.isUpdate = true;
            const maSV = action.payload;
            const index = findIndexMaSV(maSV, state.listSinhVien);
            if(index != -1){
                const SV = state.listSinhVien[index];
                state.infoSinhVien.email = SV.email;
                state.infoSinhVien.maSV = SV.maSV;
                state.infoSinhVien.phoneNumber = SV.phoneNumber;
                state.infoSinhVien.hoTen = SV.hoTen;
            }
            console.log(state.infoSinhVien);
            
        },

        searchSinhVien: (state, action) => {
            const findName = action.payload.trim().toLowerCase();
            
            if (findName === "") {
              state.listSearch = state.listSinhVien;
            } else {
              state.listSearch = state.listSinhVien.filter((sv) =>
                sv.hoTen.toLowerCase().includes(findName)
              );
            }
        },
    } 

})

export default SinhVienReducer.reducer;
export const {addSinhVien, updateSinhVien, deleteSinhVien, getInfoSinhVien, searchSinhVien} = SinhVienReducer.actions;

