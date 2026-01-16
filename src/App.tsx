import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  // App Component: count la state
  const [count, setCount] = useState(1000000); // state: count = 0, setState : value => state = value

  useEffect(() => {
    console.log("App component da duoc render");
    // fetch("https://jsonplaceholder.typicode.com/posts");
    document.title = `Count is ${count}`;
  }, []);

  return (
    <>
      <h1>Bien count co gia tri : {count}</h1>
      <Button
        // count la prop cua Button
        count={count}
        label="Tang Count them 1"
        color="primary"
        bgColor="#007bff"
        onClick={() => setCount(count + 1)}
      ></Button>
      {/* <Button
        label="Click me"
        color="primary"
        bgColor="#007bff"
        onClick={() => console.log("Click me clicked!")}
      ></Button>
      <Button
        label="BUTTON 2 "
        color="secondary"
        bgColor="#6c757d"
        onClick={() => console.log("Button 2 clicked!")}
      ></Button> */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB502</h1>
        <Routes>
          <Route path="/list" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;