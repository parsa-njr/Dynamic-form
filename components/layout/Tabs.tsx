import { useState } from "react";

export default function Tabs() {
    const tabs = [
      "لیست نظرات",
      "نکات",
      "توضیحات محصول",
      "ویدئوی آموزشی",
      "قالب و راهنما",
      "پرسش و پاسخ",
    ];
    const [activeTab, setActiveTab] = useState("نکات");
  
    return (
      <div className="w-full border-b">
        <div className="flex gap-6 border-b border-gray-400 px-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-gray-600 ${
                activeTab === tab
                  ? "border-b-2 border-red-500 text-black font-medium"
                  : "hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4 text-gray-700">
          {activeTab === "نکات" && (
            <p>
              این نکته را در نظر داشته باشید که در چاپ کارت ویزیت لمینت مات در صورت
              استفاده از رنگ‌های تن پلات (مشکی، سرمه‌ای و...) امکان بلند شدن
              لمینت گوشه‌های کارت وجود دارد.
            </p>
          )}
        </div>
      </div>
    );
  }
  