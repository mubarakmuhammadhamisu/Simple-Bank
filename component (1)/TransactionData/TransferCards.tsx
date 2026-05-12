"use client"
import React, { useState } from 'react';
import Input from '@/component/LogInAndSignUp/Input';
import { X, User } from 'lucide-react';

const TransferForm = () => {
  const [recurringPayment, setRecurringPayment] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          {/* From Account */}
          <div className="mb-6">
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              From Account
            </label>
            <div className="w-full bg-[#E5E7FA] py-3 px-4 rounded-lg border border-blue-200 text-gray-600">
              Primary Checking ****1124
            </div>
          </div>

          {/* To Account */}
          <div className="mb-6">
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              To Account
            </label>
            <div className="relative">
              <input
                type="text"
                value="Saninon Email"
                className="w-full bg-[#E5E7FA] py-3 px-4 pr-10 rounded-lg border border-blue-200 focus:border-blue-300 focus:outline-blue-600"
                readOnly
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={18} className="text-blue-500"/>
              </button>
            </div>
          </div>

          {/* Amount - Left */}
          <div>
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              Amount
            </label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={recurringPayment}
                  onChange={(e) => setRecurringPayment(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Recurring Payment</span>
              </label>
              <input
                type="text"
                placeholder="0/22"
                className="w-24 bg-[#E5E7FA] py-2 px-3 rounded-lg border border-blue-200 text-center focus:border-blue-300 focus:outline-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Evangs Accefer */}
          <div className="mb-6">
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              Evangs Accefer
            </label>
            <div className="w-full bg-[#E5E7FA] py-3 px-4 rounded-lg border border-blue-200 text-gray-600">
              Savings stars ***5678
            </div>
          </div>

          {/* Recipient Email */}
          <div className="mb-6">
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              Recipient Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="- • Myee•mad"
                className="w-full bg-[#E5E7FA] py-3 px-4 pr-10 rounded-lg border border-blue-200 focus:border-blue-300 focus:outline-blue-600"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <User size={18} className="text-blue-500"/>
              </button>
            </div>
          </div>

          {/* Amount - Right */}
          <div>
            <label className="font-sans text-sm font-medium text-gray-700 mb-2 block">
              Amount
            </label>
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="mt-8">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-full transition-colors duration-200 shadow-md">
          Proceed to Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferForm;