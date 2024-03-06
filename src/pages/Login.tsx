import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
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

   const onSubmit = async (data) => {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label htmlFor="id">Id</label>
            <input type="text" id="id" {...register("id")} />
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" {...register("password")} />
         </div>
         <Button htmlType="submit">Login</Button>
      </form>
   );
};

export default Login;
