import InputField from "@/modules/InputField";
import { PersonalType } from "@/types";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import FormFooter from "./FormFooter";
import { storeUserInfo } from "@/services/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const PersonalForm = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [formData, setFormData] = useState<PersonalType>({
    first_name: "",
    last_name: "",
    email: "",
    country: "BD",
    password: "",
    company_name: "Gotipath",
    type: "personal",
    team_size: "10-50",
    accept_terms_and_conditions: true,
    profession: "engineer",
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
      const updatedFormData = { ...formData, phone };

      const response = await fetch(
        "https://api-stream.gotipath.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );
      const data = await response.json();
      toast.success(data.message, {
        position: "top-right",
      });
      if (data.access_token) storeUserInfo(data.access_token);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        country: "BD",
        password: "",
        company_name: "Gotipath",
        type: "personal",
        accept_terms_and_conditions: true,
        team_size: "10-50",
        profession: "",
      });
      setPhone("");
      router.push("/sign-in");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <div>
            <label className="font-semibold">Name</label>
            <InputField
              label=""
              name="first_name"
              type="text"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="ml-3">
            <InputField
              label=""
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="mb-2">
          <label className="font-semibold">Phone</label>
          <PhoneInput
            defaultCountry="bd"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className="bg-[#266DF0] text-white w-full p-2 rounded-md mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <FormFooter page="sign-up" />
      <ToastContainer />
    </>
  );
};

export default PersonalForm;
