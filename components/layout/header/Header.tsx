import { Phone, Grid, ShoppingCart, PenTool, Download } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-4  my-10 border-y-[1px] border-gray-400">
      {/* <div className="h-[1px] bg-white" /> */}
      <nav className="flex items-center gap-6 text-gray-500">
        <Link
          href="#"
          className="flex items-center gap-1 text-red-500 font-semibold"
        >
          <Grid className="text-red-500" /> دسته بندی محصولات
        </Link>
        <Link href="#" className="hover:text-gray-700">
          سفارش بر اساس کاربرد
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-700">
          <Download className="text-gray-700" /> مرکز دانلود
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-700">
          <PenTool className="text-gray-700" /> وبلاگ
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-gray-700">
          <ShoppingCart className="text-gray-700" /> فروشگاه
        </Link>
        <Link href="#" className="hover:text-gray-700">
          تماس با ما
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Phone className="text-red-500" />
        <span className="text-gray-500 font-semibold">021-54889000</span>
        <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">
          نوبت دهی سفارش حضوری دیجیتال
        </button>
      </div>

      {/* <div className="h-[1px] bg-white" /> */}
    </header>
  );
}
