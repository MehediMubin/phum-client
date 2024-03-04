import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
   const { register, handleSubmit } = useForm({
      defaultValues: {
         id: "A-0001",
         password: "12345",
      },
   });

   const [login, { data: user, isLoading }] = useLoginMutation();

   const onSubmit = (data) => {
      console.log(data);
      login(data);
      if (!isLoading) console.log(user);
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
