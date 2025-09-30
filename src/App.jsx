import "./App.css";
import SinhVien from "./sinhVien";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <SinhVien />
    </Provider>
  );
}

export default App;
