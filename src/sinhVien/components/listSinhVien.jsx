import { useSelector, useDispatch } from "react-redux";
import {
  deleteSinhVien,
  getInfoSinhVien,
  searchSinhVien,
} from "../../store/sinhVienReducer";
import { useState } from "react";

export default function ListSinhVien() {
  const dispatch = useDispatch();
  const listSinhVien = useSelector(
    (state) => state.SinhVienReducer.listSinhVien
  );
  const listSearch = useSelector(
    (state) => state.SinhVienReducer.listSearch);

  const [findName, setFindName] = useState("");

  const handleOnChange = (event) => {
    const {value} = event.target;
    setFindName(value);
  };


  const renderListSinhVien = () => {
    const list = (listSearch) ? listSearch : listSinhVien;
    return list.map((sinhVien) => {
      return (
        <tr key={sinhVien.maSV} className="text-center bg-white border-b border-gray-200 hover:bg-gray-50">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {sinhVien.maSV}
          </th>
          <td className="px-6 py-4"> {sinhVien.hoTen}</td>
          <td className="px-6 py-4"> {sinhVien.phoneNumber}</td>
          <td className="px-6 py-4">{sinhVien.email}</td>
          <td className="px-6 py-4">
            <div className="flex justify-center items-center">
              <button
                onClick={() => dispatch(deleteSinhVien(sinhVien.maSV))}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Xóa
              </button>
              <button
                onClick={() => dispatch(getInfoSinhVien(sinhVien.maSV))}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Cập nhật
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="mt-5 max-w-4xl container mx-auto p-5 bg-white">
      <h1 className="font-bold uppercase text-5xl py-4 text-center text-blue-600 border-b border-gray-200">
        Danh sách sinh viên
      </h1>
      <form className="max-w-md mt-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={handleOnChange}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tìm kiếm tên sinh viên"
            required
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch(searchSinhVien(findName));
            }}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Tìm kiếm
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3 border-b border-gray-200">
                Mã SV
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-200">
                Họ tên
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-200">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-200">
                Email
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-200">
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>{renderListSinhVien()}</tbody>
        </table>
      </div>
    </div>
  );
}
