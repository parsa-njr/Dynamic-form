import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const LeftSideBar = () => {
  return (
    <>
      <div className="w-full md:w-[20%]">
        <div className="bg-[#ee264f] rounded-[10px] h-[200px] text-white">
          <div>
            <div className="flex justify-around ">
              <div>قیمت</div>
              <div className="font-semibold">0 ریال</div>
            </div>
            <div className="flex justify-around ">
              <div>زمان تحویل</div>
              <div className="font-semibold">7 روز کاری</div>
            </div>
          </div>
          {/* <Separator  /> */}
          <div className="h-[1px] bg-white m-5" />
          <div>
            <div className="flex justify-center ">
              <Button className=" text-[#5e5e5e] bg-white rounded-[10px] w-32 font-bold text-[17px]">
                تایید و ادامه
              </Button>
            </div>
            <div className="flex justify-center ">راهنمای سفارش</div>
          </div>
        </div>
        {/* <div
          style={{
            border: "1px solid #ee264f",
            borderRadius: "10px",
          }}
          className="flex justify-center"
        > */}
        <Button
          style={{
            border: "1px solid #ee264f",
            borderRadius: "10px",
          }}
          className=" text-[#5e5e5e] bg-white  
           font-bold text-[17px] w-full mt-2 "
        >
          تایید و ادامه
        </Button>

        <div className="bg-[#f5f5f5] mt-4 text-[#ffc107] p-3 text-[15px] text-center">
          <span className="font-[bold]">توجه :</span>
          <p>
            باتوجه به زمانبر بودن سفارشات تیراژ بالا، زمان تحویل برای این
            سفارشات حدودی است.
          </p>
          <div className="mt-4">تخفیف برای تیراژ های بالا به صورت خودکار اعمال می شود.</div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LeftSideBar;
