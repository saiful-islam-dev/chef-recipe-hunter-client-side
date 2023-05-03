import React from "react";

const LogIn = () => {
  return (
    <div className="flex justify-center pt-5 bg-slate-50">
      <div className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <h1 className="text-2xl font-bold">LogIn</h1>
        <div className="py-6 w-full">
        <input type="text" placeholder="Email" className="input w-full max-w-xs" />
        </div>
        <div className="w-full pb-6">
        <input type="pasword" placeholder="Password" className="input w-full max-w-xs" />
        </div>
        <button type="submit" className="btn-primary">LogIn</button>
      </div>
    </div>
  );
};

export default LogIn;