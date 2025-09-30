import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSinhVien } from "../../store/sinhVienReducer";

export default function FormSinhVien() {
  const dispactch = useDispatch();
  const listSinhVien = useSelector((state) => state.SinhVienReducer.listSinhVien);
  const [state, setState] = useState({
    values: {
      maSV: "",
      hoTen: "",
      phoneNumber: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      phoneNumber: "",
      email: "",
    },
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setState({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    });
    console.log(state);
  };

  const handleErrors = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    let message = "";
    switch (name) {
      // Validation với mã sinh viên
      case "maSV":
        if (!value) {
          message = "Vui lòng nhập mã sinh viên!";
        }
        else if(listSinhVien.some((sv) => sv.maSV == value)){ // Kiểm tra trùng mã sinh viên
          message = "Mã sinh viên này đã tồn tại, vô lòng nhập mã sinh viên khác!"
        }
        break;

      // Validation với Họ và tên
      case "hoTen":
        if (!value) {
          message = "Vui lòng nhập họ và tên!";
        }
        else if(!value.match(/^[a-zA-ZÀ-ỹ\s]+$/)){
          message = "Vui lòng nhập tên không chứa chữ số hay kí tự đặc biệt!"
        };
        break;

      // Validation với Số điện thoại
      case "phoneNumber":
        if (!value) {
          message = "Vui lòng nhập số điện thoại!";
        }
        else if (!value.match(/^[0-9]+$/)) {
          message = "Vui lòng chỉ nhập số";
        }
        break;

      // Validation với Email
      case "email":
        if (!value) {
          message = "Vui lòng nhập email!";
        }
        else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          message = "Vui lòng nhập đúng định dạng email";
        }
        break;
    }
    // Update state
    setState({
      ...state,
      errors:{
        ...state.errors,
        [name]: message,
      }
    })

    
  };
  console.log(state);
  return (
    <div className="max-w-4xl container mx-auto p-5 bg-white">
      <h1 className="font-bold uppercase text-5xl py-4 text-center text-blue-600 border-b border-gray-200">
        Thông tin sinh viên
      </h1>
      <form className="mt-6">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {/* MÃ SINH VIÊN */}
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Mã SV
            </label>
            <input
              name="maSV"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="2"
              required
              onChange={handleOnChange}
              onBlur={handleErrors}
              value={state.values.maSV}
            />

            {/* Errors */}
            {state.errors.maSV && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 mt-4"
                role="alert"
              >
                <span className="font-medium">{state.errors.maSV}</span>
              </div>
            )}
          </div>

          {/* HỌ VÀ TÊN */}
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Họ và tên
            </label>
            <input
              name="hoTen"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nguyễn Văn B"
              required
              onChange={handleOnChange}
              onBlur={handleErrors}
              value={state.values.hoTen}
            />
            {/* Errors */}
            {state.errors.hoTen && (
              <div
                className="mt-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">{state.errors.hoTen}</span>
              </div>
            )}
          </div>

          {/* PHONE NUMBER */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Số điện thoại
            </label>
            <input
              name="phoneNumber"
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0379829733"
              required
              onChange={handleOnChange}
              onBlur={handleErrors}
              value={state.values.phoneNumber}
            />
            {/* Errors */}
            {state.errors.phoneNumber && (
              <div
                className="mt-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">{state.errors.phoneNumber}</span>
              </div>
            )}
          </div>

          {/* {Email} */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              required
              onChange={handleOnChange}
              onBlur={handleErrors}
              value={state.values.email}
            />
            {/* Errors */}
            {state.errors.email && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 mt-4"
                role="alert"
              >
                <span className="font-medium">{state.errors.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium"
          onClick={(event) => {
            event.preventDefault();
            const hasError = false;
            if (
              state.errors.email ||
              state.errors.hoTen ||
              state.errors.maSV ||
              state.errors.phoneNumber
            ) {
              alert("Thông tin của bạn chưa đúng, hãy sửa lại!");
              return;
            }
            if (
              !state.values.email ||
              !state.values.hoTen ||
              !state.values.maSV ||
              !state.values.phoneNumber
            ) {
              alert("Vui lòng nhập thông tin!");
              return;
            }

            dispactch(addSinhVien(state.values));
            setState({
              ...state,
              values: {
                maSV: "",
                hoTen: "",
                phoneNumber: "",
                email: "",
              },
            });
          }}
        >
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
}
