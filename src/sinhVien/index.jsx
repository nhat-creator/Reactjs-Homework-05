import ListSinhVien from "./components/listSinhVien";
import FormSinhVien from "./components/formSinhVien";
import FormUpdate from "./components/formUpdate";
import { useSelector } from "react-redux";
export default function SinhVien() {
  const isUpdate = useSelector((state) => state.SinhVienReducer.isUpdate);
  return (
    <div>
      <FormSinhVien />
      <div className="">
        <ListSinhVien />
        {isUpdate && <FormUpdate />}
      </div>
    </div>
  );
}
