import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  isLogin?: boolean;
};

type FormValues = {
  user?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu ít nhất 6 ký tự"),
});

const registerSchema = z
  .object({
    user: z.string().min(4, "Tên đăng nhập ít nhất 4 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu ít nhất 6 ký tự"),
    confirmPassword: z.string().min(6, "Vui lòng nhập lại mật khẩu"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

function AuthPage({ isLogin = false }: Props) {
  const nav = useNavigate();

  const schema = isLogin ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      if (isLogin) {
        const { data } = await axios.post("http://localhost:3000/login", {
          email: values.email,
          password: values.password,
        });

        localStorage.setItem("accessToken", data.accessToken);
        toast.success("Đăng nhập thành công");
        nav("/list");
      } else {
        await axios.post("http://localhost:3000/register", {
          user: values.user,
          email: values.email,
          password: values.password,
        });

        toast.success("Đăng ký thành công");
        nav("/login");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-3xl mb-6 text-center font-semibold">
        {isLogin ? "Login" : "Register"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {!isLogin && (
          <div>
            <input
              {...register("user")}
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Nhập họ tên"
            />
            <p className="text-left pl-1 text-red-500 text-sm">
              {errors.user?.message}
            </p>
          </div>
        )}

        <div>
          <input
            {...register("email")}
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Nhập Email"
          />
          <p className="text-left pl-1 text-red-500 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Nhập mật khẩu"
          />
          <p className="text-left pl-1 text-red-500 text-sm">
            {errors.password?.message}
          </p>
        </div>

        {!isLogin && (
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Nhập lại mật khẩu"
            />
            <p className="text-left pl-1 text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
