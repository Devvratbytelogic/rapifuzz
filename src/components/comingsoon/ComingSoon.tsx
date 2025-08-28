import React from "react";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">🚀 Coming Soon</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
        {/* <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
          />
          <Button
            className="btn_global rounded_btn white_bg"
          >
            Notify Me
          </Button>
        </form> */}
      </div>
    </div>
  );
}
