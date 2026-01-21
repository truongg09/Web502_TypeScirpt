import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import { it } from "zod/locales";
// type /interface
type Course = {
  id: number;
  name: string;
  credit: number;
  category: string;
  teacher: string;
};

function ListPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [teacherFilter, setTeacherFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const locTeacher = Array.from(new Set(courses.map((course) => course.teacher)));

  const locCourses = courses.filter((course) => {
    const tenPhuHop = course.name.toLowerCase().includes(search.toLowerCase());
    const teacherPhuHop = teacherFilter ? course.teacher === teacherFilter : true;
    return tenPhuHop && teacherPhuHop;
  });

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(locCourses.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = locCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    // axios async await + try catch
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      if (!confirm("Bạn chắc chắn muốn xóa khóa học này không?")) return;
  
      await axios.delete(`http://localhost:3000/courses/${id}`);
  
      setCourses(courses.filter((course) => course.id !== id));
  
      toast.success("Xóa thành công!");
    } catch (error) {
      toast.error("Xóa thất bại!");
    }
  };  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Danh sách</h1>

      <div className="mb-6 flex justify-end gap-2">
        <select
          value={teacherFilter}
          onChange={(e) => {
            setTeacherFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Tất cả giảng viên</option>
          {locTeacher.map((teacher) => (
            <option key={teacher} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Tìm kiếm theo tên khoá học"
          className="w-full md:w-1/5 border border-gray-300 rounded-lg px-3 py-2"
        />
        <button
          type="button"
          onClick={() => {
            setSearch(searchInput);
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white transition"
        >
          Tìm kiếm
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Teacher
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedCourses.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300 text-left">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300 text-left">{item.teacher}</td>
                <td className="px-4 py-2 border border-gray-300 text-left">
                  <Link to={`/edit/${item.id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded inline-block">
                    Sửa
                  </Link>
                  <button
                    className="px-3 py-1 ml-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {locCourses.length > 0 && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &laquo;
            </button>
            <span className="text-sm">
              Trang {currentPage}
            </span>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPage;
