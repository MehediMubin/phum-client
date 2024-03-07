import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
   onSubmit: SubmitHandler<FieldValues>;
   children: ReactNode;
};

const PHForm = ({ onSubmit, children }: TFormProps) => {
   const { handleSubmit } = useForm();

   return <form onClick={handleSubmit(onSubmit)}>{children}</form>;
};

export default PHForm;
