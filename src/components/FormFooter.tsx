import Link from "next/link";
import Image from "next/image";

interface PageTypeProps {
  page: string;
}
type iconProps = {
  src: string;
  alt: string;
};
const Icon = ({ src, alt }: iconProps) => (
  <div className="border p-2 rounded-md mr-2">
    <Image src={src} alt={alt} width={30} height={30} />
  </div>
);

const FormFooter = ({ page }: PageTypeProps) => {
  const isSignInPage = page === "sign-in";
  const linkText = isSignInPage ? "Create Account" : "Sign In";
  const linkUrl = isSignInPage ? "/sign-up" : "/sign-in";

  return (
    <>
      <div className="mt-4 flex items-center">
        <hr className="w-44" />
        <span className="mx-4">or</span>
        <hr className="w-44" />
      </div>
      <div>
        <h4 className="text-center my-4">Sign in with</h4>
        <div className="flex justify-center items-center">
          <Icon src="/imgs/github.png" alt="GitHub" />
          <Icon src="/imgs/google.png" alt="Google" />
          <Icon src="/imgs/slack.png" alt="Slack" />
          <Icon src="/imgs/okta.png" alt="Okta" />
        </div>
        <p className="text-center mt-2">
          {isSignInPage ? "New to Gotipath" : "Already a Gotipath member?"}{" "}
          <Link href={linkUrl} className="font-semibold text-[#266DF0]">
            {linkText}
          </Link>
        </p>
      </div>
    </>
  );
};

export default FormFooter;
