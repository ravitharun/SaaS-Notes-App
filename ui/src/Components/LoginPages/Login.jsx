import React from "react";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("Member");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");
    console.log({ email, password, role });
    setTimeout(() => setLoading(false), 1000); // simulate login delay
  };

  const handleRegister = () => {
    console.log("Redirect to register page");
    // You can replace this with navigation to register page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500">Login to continue</p>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
              >
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
              <div className="absolute right-3 top-2.5 text-gray-400">
                {role === "Admin" ? "admin" : "user"}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
              >
                <option value="Acme">Acme</option>
                <option value="Globex" className="text-red-500">Globex</option>
              </select>
              <div className="absolute right-3 top-2.5 text-gray-400">
                {role === "Admin" ? "admin" : "user"}
              </div>
            </div>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Button */}
        <Link to="/Register">
          <button
            type="button"
            onClick={handleRegister}
            className="w-full mt-2 bg-gray-100 text-gray-700 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
