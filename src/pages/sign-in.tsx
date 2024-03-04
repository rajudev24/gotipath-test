import Image from "next/image";
import logo from "/public/imgs/gotipath-logo.jpeg";
import icon from "/public/imgs/Icons.png";
import gotipath from "/public/imgs/gotipath-bg.jpg";
import FormFooter from "@/components/FormFooter";
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
  return (
    <>
      <div className="lg:flex ">
        <div className="flex-grow relative ">
          <Image src={logo} alt="gotipath logo" width={150} />
          <div className="flex justify-center pt-16">
            <div>
              <Image src={icon} alt="icon" width={60} />
              <h1 className="text-3xl font-semibold mb-1">
                Sign in to Account
              </h1>
              <p className="mb-8">
                Enter the credentials to access your account
              </p>

              <SignInForm />
              <FormFooter page="sign-in" />
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

export default SignIn;
