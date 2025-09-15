import React, { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function UpgradeProPlan({ onClose }) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Close Button */}
      <div className="flex justify-end p-4 border-b">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 transition"
        >
          <FaTimes size={28} className="text-gray-500 hover:text-gray-800" />
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Choose the Right Plan for Your Team
            </h1>
            <p className="text-gray-500 mt-2">
              Start free and upgrade anytime. Admins can upgrade to Pro instantly.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition p-8 flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800">Free Plan</h2>
              <p className="mt-2 text-gray-500">
                For small teams just getting started.  
                <span className="block font-medium text-gray-700">
                  Limit: 3 notes per company
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Access for all company users
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Create up to 3 notes
                </li>
                <li className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-400" /> Unlimited storage
                </li>
              </ul>
              <button
                disabled
                className="mt-auto w-full bg-gray-100 text-gray-400 py-3 px-6 rounded-xl font-semibold cursor-not-allowed"
              >
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col text-white relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h2 className="text-2xl font-semibold">Pro Plan</h2>
              <p className="mt-2">
                For growing teams who need no limits.  
                <span className="block font-medium">Unlimited notes</span>
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" /> Unlimited notes
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" /> All company users included
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" /> Upgrade applies instantly
                </li>
              </ul>

              {/* Moving Gradient Border Button */}
              <div className="mt-auto relative group">
                <div className="absolute -inset-0.5 rounded-xl bg-[linear-gradient(90deg,#ff0080,#7928ca,#2af598,#ff0080)] bg-[length:300%_300%] animate-borderMove"></div>
                <button className="relative w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-800 transition">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradeProPlan;
