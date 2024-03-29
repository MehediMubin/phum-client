import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
   const { register, handleSubmit } = useForm({
      defaultValues: {
         id: "A-0001",
         password: "12345",
      },
   });

   const dispatch = useAppDispatch();
   const [login] = useLoginMutation();
   const navigate = useNavigate();

   const onSubmit = async (data: FieldValues) => {
      // const toastId = toast.loading("Logging in");
      // try {
      //    const res = await login(data).unwrap();
      //    const user = verifyToken(res.data.accessToken) as TUser;
      //    dispatch(setUser({ user: user, token: res.data.accessToken }));
      //    navigate(`/${user.role}/dashboard`);
      //    toast.success("Logged in Successfully", {
      //       id: toastId,
      //       duration: 2000,
      //    });
      // } catch (err) {
      //    toast.error("Something went wrong", { id: toastId, duration: 2000 });
      // }
      console.log(data);
   };

   return (
      <PHForm onSubmit={onSubmit}>
         <div>
            <label htmlFor="id">Id</label>
            <input type="text" id="id" {...register("id")} />
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" {...register("password")} />
         </div>
         <Button htmlType="submit">Login</Button>
      </PHForm>
   );
};

export default Login;
