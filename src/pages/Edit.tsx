import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const validate = z.object({
  name: z.string().min(3, "Tên phải >= 3 ký tự"),
  credit: z.coerce.number().min(1, "Credit > 0"),
  category: z.string(),
  teacher: z.string().min(3, "Tên GV phải >= 3 ký tự"),
});

type FormValues = z.infer<typeof validate>;

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validate),
  });

  // Load dữ liệu cũ
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/courses/${id}`)
        .then((res) => reset(res.data))
        .catch(console.log);
    }
  }, [id]);

  const onSubmit = async (values: FormValues) => {
    try {
      await axios.put(`http://localhost:3000/courses/${id}`, values);
      alert("Cập nhật thành công!");
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Tên khóa học
          </label>
          <input
            {...register("name")}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>{errors?.name?.message}</span>
        </div>

        {/* Credit */}
        <div>
          <label htmlFor="credit" className="block font-medium mb-1">
            Số tín chỉ
          </label>
          <input
            {...register("credit")}
            type="number"
            id="credit"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500">{errors?.credit?.message}</span>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-medium mb-1">
            Danh mục
          </label>
          <select
            {...register("category")}
            id="category"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="Chuyên ngành">Chuyên ngành</option>
            <option value="Đại cương">Đại cương</option>
            <option value="Cơ sở">Cơ sở</option>
          </select>
          <span className="text-red-500">{errors?.category?.message}</span>
        </div>

        {/* Teacher */}
        <div>
          <label htmlFor="teacher" className="block font-medium mb-1">
            Giảng viên
          </label>
          <input
            {...register("teacher")}
            type="text"
            id="teacher"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500">{errors?.teacher?.message}</span>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;
