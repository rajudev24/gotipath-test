import { InputFieldProps } from "@/types";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => (
  <>
    <label className="font-semibold">{label}</label> <br />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="border-2 p-1 rounded-md w-full mb-3 focus:outline-none focus:border-indigo-700 "
    />
    <br />
  </>
);

export default InputField;
