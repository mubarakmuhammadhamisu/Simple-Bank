"use client";

import React from "react";
import Close from "@/component/navba/Close";         
import Succes from "@/component/TransactionData/TransationSVGs/Succes";
import Pending from '@/component/TransactionData/TransationSVGs/Pending'
import RowsOfData from "@/component/TransactionData/Rows";
import Failed from '@/component/TransactionData/TransationSVGs/Failed'

const DetailsCard = ({ setShowDetails, data }) => {
  return (
    <div className="z-10 fixed w-full h-screen inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4 ">
      <div className="bg-white w-full h-auto flex flex-col justify-center items-center max-w-md p-6 rounded-2xl shadow-lg">
        <div onClick={() => setShowDetails(false)} className="w-full flex justify-end mb-2 cursor-pointer">
          <Close />
        </div>

        <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>

        {data.status.toLowerCase() === 'completed' ? <Succes /> :
         data.status.toLowerCase() === 'pending' ? <Pending/> :
         <Failed/>}

        <p className="text-3xl font-bold mt-4">{data?.amount ?? "-"}</p>

        <div className="mt-6 w-full">
          <RowsOfData option="Description" value={data?.description ?? "-"} />
          <RowsOfData option="Type" value={data?.type ?? "-"} />
          <RowsOfData option="Date" value={data?.date ?? data?.data ?? "-"} />
          <RowsOfData option="Transaction ID" value={data?.id ?? "-"} />
          <RowsOfData option="Sender" value={data?.sender ?? "-"} />
          <RowsOfData option="Receiver" value={data?.receiver ?? "-"} />
          <RowsOfData option="Payment Method" value={data?.paymentMethod ?? "-"} />
          <RowsOfData option="Currency" value={data?.Currency ??  "-"} />
          <RowsOfData option="Available Balance" value={data?.availableBalance ?? "-"} />

          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Status:</span>
           
            <span
              className={`font-semibold ${
                data?.status.toLowerCase() === 'completed'
                  ? "text-green-500"
                  : data?.status.toLowerCase() === "pending"
                  ? "text-orange-400"
                  : "text-red-500"
              }`}
            >
              {data?.status ?? "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
