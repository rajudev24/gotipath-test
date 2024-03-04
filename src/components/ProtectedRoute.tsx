import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithProtection: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = isLoggedIn();
      if (!isAuthenticated) {
        router.push("/sign-in");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithProtection;
};

export default ProtectedRoute;
