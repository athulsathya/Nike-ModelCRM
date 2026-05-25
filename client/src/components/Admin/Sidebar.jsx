import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 bg-black min-h-screen text-white p-6">
      
      <h1 className="text-3xl font-black mb-10">
        NIKE ADMIN
      </h1>

      <div className="space-y-4">

        <Link to="/admin/dashboard">
          Dashboard
        </Link>

        <Link to="/admin/products">
          Pro
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;