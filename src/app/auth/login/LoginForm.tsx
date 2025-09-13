import { Eye, UserIcon } from "lucide-react";
import { useState } from "react";
import { useLoginMutation } from "../../../services/Authentication";
import TextInputComp from "../../../components/TextInputComp";
import ButtonComp from "../../../ui/ButtonComp";
import { handleMutationApiCall } from "../../../utils/handleMutationApiCall";
import { useDispatch } from "react-redux";
import { login } from "../../../features/authSlice";
import { useNavigate } from "react-router-dom";
import type { LoginRes } from "../../../services/types/Authentication";
import { jwtDecode } from "jwt-decode";

type LoginFormPropsType = {
  username: string;
  password: string;
};
export default function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<LoginFormPropsType>({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const [Login, { isLoading: LoginLoading }] = useLoginMutation();
  const submitHandler = async () => {
    await handleMutationApiCall<LoginRes>(
      () =>
        Login({
          userName: formData.username,
          passWord: formData.password,
          rememberMe: true,
        }).unwrap(),

      (data) => {
        dispatch(
          login({
            userName: data?.userName || "",
            role: data?.role || "",
            token: data?.token || "",
          })
        );
        if (data?.role === "Admin") navigate("/admin");
        else navigate("/user");
      }
    );
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
      <p className="text-center text-2xl font-bold text-secondary-700">ورود</p>
      <div className="flex flex-col gap-6 w-full">
        <TextInputComp
          name="username"
          onChange={changeHandler}
          value={formData.username}
          placeholder="نام کاربری"
          className="flex-1"
          icon={<UserIcon className="icon-small text-primary-900" />}
        />

        <TextInputComp
          name="password"
          onChange={changeHandler}
          value={formData.password}
          placeholder="رمز عبور"
          className="flex-1"
          type="password"
          icon={<Eye className="icon-small text-primary-900" />}
        />
        <ButtonComp
          text="ورود"
          isFormButton
          canClick
          className="bg-secondary-700 mt-5"
          onsubmit={submitHandler}
          loading={LoginLoading}
          disabled={
            formData.username === "" || formData.password === "" || LoginLoading
          }
        />
      </div>
    </div>
  );
}
