"use client";

import React from "react";
import Input from "@/component/LogInAndSignUp/Input";
import { User } from 'lucide-react';

const TransferCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-lg">
      <p className="text-3xl font-bold mb-2">Make a Transfer</p>

      {/* WRAPPER - for custom placement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

        {/* LEFT SIDE */}
        <div>
          <Input
            Label="From Account"
            LabelClass="block mb-1 text-gray-700"
            Id="from-account"
            Type="text"
            Name="fromAccount"
            Placeholder="Primary Checking ••••1124"
          />

          <Input
            Label="To Account"
            LabelClass="block mb-1 text-gray-700"
            Id="to-account"
            Type="text"
            Name="toAccount"
            Placeholder="Recipient Account Number"
          />

          <Input
            Label="Amount"
            LabelClass="block mb-1 text-gray-700"
            Id="amount-left"
            Type="number"
            Name="amountLeft"
            Placeholder="₦0.00"
          />
        </div>

        {/* RIGHT SIDE */}
        <div>
          <Input
            Label="Recipient Account Info"
            LabelClass="block mb-1 text-gray-700"
            Id="recipient-account"
            Type="text"
            Name="recipientAccount"
            Placeholder="Savings ••••5678"
          />

          <div className="relative">
            <Input
              Label="Recipient Email"
              LabelClass="block mb-1 text-gray-700"
              Id="recipient-email"
              Type="email"
              Name="recipientEmail"
              Placeholder="recipient@example.com"
              Class="pr-10"
            />

            <span className="absolute right-3 top-10 text-gray-400 cursor-pointer">
              <User size={20} className="text-blue-500" />
            </span>
          </div>

          <Input
            Label="Amount"
            LabelClass="block mb-1 text-gray-700"
            Id="amount-right"
            Type="number"
            Name="amountRight"
            Placeholder="₦0.00"
            Class="border-none border-b"
          />
        </div>

        {/* CHECKBOX - now outside columns */}
        <div className="flex items-center gap-2 md:col-span-1 order-last md:order-none">
          <input
            type="checkbox"
            id="recurring"
            className="w-4 h-4"
          />
          <label
            htmlFor="recurring"
            className="text-gray-700 text-sm font-sans"
          >
            Recurring Payment
          </label>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end mt-6">
        <button
          className="bg-gradient-to-r from-blue-900 to-blue-600 text-white
          px-6 py-3 rounded-full font-semibold shadow 
          hover:opacity-90 transition"
        >
          Proceed to Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferCard;
