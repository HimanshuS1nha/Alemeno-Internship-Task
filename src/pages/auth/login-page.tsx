import Button from "../../components/ui/button";

const LoginPage = () => {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-gray-100/70">
      <div className="w-[30%] p-4 bg-white shadow-xl shadow-gray-300 flex flex-col items-center gap-y-9 rounded-xl">
        <div className="flex gap-x-2.5 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgvPo5heMAPJneHkLuQR-lcdz43y_RQTPSQ&s"
            alt="EducationHub"
            className="size-12 rounded-full"
          />
          <p className="text-lg font-bold">Education Hub</p>
        </div>

        <p className="text-2xl font-bold text-indigo-600">
          Login to your account
        </p>

        <form className="flex flex-col gap-y-6 w-full">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="font-semibold ml-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-3 py-2 h-10 w-full rounded-md text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="password" className="font-semibold ml-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-3 py-2 h-10 w-full rounded-md text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
