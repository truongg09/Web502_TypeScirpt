import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

type FormValues = {
  name: string;
  credit: number;
  category: string;
  teacher: string;
};

const validate = z.object({
  name: z.string().min(3, "Tên ít nhất 3 ký tự"),
  credit: z.number().min(1, "Tín chỉ > 0"),
  category: z.string().min(1, "Vui lòng chọn danh mục"),
  teacher: z.string().min(3, "Tên giảng viên ít nhất 3 ký tự"),
});

function AddPage() {
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

  // Get detail khi edit
  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/courses/${id}`
        );
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) getDetail();
  }, [id]);

  const onSubmit = async (values: FormValues) => {
    try {
      if (id) {
        await axios.put(`http://localhost:3000/courses/${id}`, values);
        toast.success("Cập nhật thành công!");
      } else {
        await axios.post("http://localhost:3000/courses", values);
        toast.success("Thêm mới thành công!");
      }

      navigate("/list");
    } catch (error) {
      toast.error("Có lỗi xảy ra!");
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        {id ? "Cập nhật khóa học" : "Thêm mới khóa học"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Tên khóa học</label>
          <input
            {...register("name")}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
          <span className="text-red-500">{errors.name?.message}</span>
        </div>

        {/* Credit */}
        <div>
          <label className="block font-medium mb-1">Số tín chỉ</label>
          <input
            {...register("credit", { valueAsNumber: true })}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
          <span className="text-red-500">{errors.credit?.message}</span>
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Danh mục</label>
          <select
            {...register("category")}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="Chuyên ngành">Chuyên ngành</option>
            <option value="Đại cương">Đại cương</option>
            <option value="Cơ sở">Cơ sở</option>
          </select>
          <span className="text-red-500">{errors.category?.message}</span>
        </div>

        {/* Teacher */}
        <div>
          <label className="block font-medium mb-1">Giảng viên</label>
          <input
            {...register("teacher")}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
          <span className="text-red-500">{errors.teacher?.message}</span>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
}

export default AddPage;
