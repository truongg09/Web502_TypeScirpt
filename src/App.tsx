import toast, { Toaster } from "react-hot-toast";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import AuthPage from "./pages/AuthPage";
import ProtectRoute from "./components/ProtectRoute";
import { useEffect, useState } from "react";
// import ListPage from "./pages/List";
// import AddPage from "./pages/Add";
// import EditPage from "./pages/Edit";

type User = {
  email: string;
};

function App() {
  const nav = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    setUser(raw ? JSON.parse(raw) : null);
  }, [location]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    toast.success("Đăng xuất thành công");
    nav("/login");
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <span>Hi {user.user}</span>
                <button
                  className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200">
                  Đăng nhập
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Routes>
          <Route path="/list" element={<ListPage />}></Route>
          {/* protected routes */}

          <Route element={<ProtectRoute></ProtectRoute>}>
            <Route path="/add" element={<AddPage />}></Route>
            <Route path="/edit/:id" element={<AddPage />}></Route>
          </Route>

          <Route path="/register" element={<AuthPage />}></Route>
          <Route path="/login" element={<AuthPage isLogin />}></Route>
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
