import Image from "next/image";
import logo from "/public/imgs/gotipath-logo.jpeg";
import icon from "/public/imgs/Icons.png";
import personal from "/public/imgs/personal.png";
import corporate from "/public/imgs/corporate.png";
import gotipath from "/public/imgs/gotipath-bg.jpg";
import { useState } from "react";
import Personal from "@/components/PersonalForm";
import Corporate from "@/components/CorporateForm";

const SignUp = () => {
  const [selectedAccountType, setSelectedAccountType] = useState<number>(0);

  const handleTypeChange = (type: number) => () => {
    setSelectedAccountType(type);
  };

  return (
    <>
      <div className="lg:flex ">
        <div className="flex-grow relative">
          <Image src={logo} alt="gotipath logo" width={150} />
          <div className="flex justify-center pt-8">
            <div>
              <Image src={icon} alt="icon" width={60} />
              <h1 className="text-3xl font-semibold mb-1">
                Complete Information{" "}
              </h1>
              <p>Enter the fields below to get started.</p>
              <p className="mt-2 mb-1 font-medium">Select Account Type</p>
              <div className="bg-[#EDEDEF] p-1 flex justify-around rounded-md w-[400px]">
                <button
                  onClick={handleTypeChange(0)}
                  className={`p-2 px-14 rounded-md flex justify-center items-center ${
                    selectedAccountType === 0
                      ? "bg-white focus:font-semibold"
                      : ""
                  }`}
                >
                  <Image
                    src={personal}
                    alt="icon"
                    width={30}
                    className="pr-2"
                  />
                  Personal
                </button>
                <button
                  onClick={handleTypeChange(1)}
                  className={`p-2 px-14 rounded-md flex justify-center items-center ${
                    selectedAccountType === 1
                      ? "bg-white focus:font-semibold"
                      : ""
                  }`}
                >
                  <Image
                    src={corporate}
                    alt="icon"
                    width={30}
                    className="pr-2"
                  />
                  Corporate
                </button>
              </div>
              {selectedAccountType === 0 ? <Personal /> : <Corporate />}
            </div>
          </div>
          <p className="absolute bottom-2 pl-16">
            By continuing, you agree to the{" "}
            <span className="font-semibold text-[#266DF0] ">
              Legal Agreement
            </span>{" "}
            and the{" "}
            <span className="font-semibold text-[#266DF0] ">
              Privacy Policy
            </span>
          </p>
        </div>

        <div>
          <Image src={gotipath} alt="gotipath" width={700} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
