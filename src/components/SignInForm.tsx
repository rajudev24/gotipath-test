import InputField from "@/modules/InputField";
import { getToken } from "@/services/auth.service";
import { SignInData } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = () => {
  const router = useRouter();
  const token = getToken();

  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api-stream.gotipath.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      toast.success(data.message, {
        position: "top-right",
      });
      setFormData({
        email: "",
        password: "",
      });
      if (data.access_token) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex justify-between my-2">
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label className="ml-2">Remember me for 7 days.</label>
          </div>
          <p className="font-semibold text-[#266DF0]">Forgot Password?</p>
        </div>
        <button
          className="bg-[#266DF0] text-white w-full p-2 rounded-md mt-2"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default SignInForm;
