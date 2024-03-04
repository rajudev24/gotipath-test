import ProtectedRoute from "@/components/ProtectedRoute";

function dashboard() {
  return (
    <div className="font-extrabold flex justify-center items-center h-screen text-lg">
      This is Protected dashboard
    </div>
  );
}

export default ProtectedRoute(dashboard);
