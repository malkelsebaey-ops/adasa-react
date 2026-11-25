import React from "react";
import { NavLink } from "react-router-dom";
import { MoveLeft, Info ,Newspaper ,UserRoundGroup ,FolderOpen ,PenTool} from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="relative pt-30  flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-1/2 left-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FA9F1E]/10 blur-[120px]" />
        <div className="relative mt-6 z-10 mx-auto mb-44 w-full max-w-4xl px-4 text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#FF6900]"></span>
            </span>
            <span className="text-sm text-white">مرحباً بك في عدسة</span>
          </div>
          <div>
            <h1 className="text-5xl leading-tight font-black text-white md:text-7xl">
              اكتشف <span className="text-[#FA9F1E]">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="mt-10 text-2xl font-normal text-[#a1a1a1]">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="flex flex-wrap gap-7 items-center justify-center">
              <NavLink
                to="/blog"
                className="group mx-auto  mt-10 me-0! flex w-fit items-center gap-2 rounded-full bg-[#F56B13] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1.5"
              >
                استكشف المقالات
                <MoveLeft className="transition-transform  duration-300 group-hover:-translate-x-0.5" />
              </NavLink>
              <NavLink
                to="/about"
                className="mx-auto mt-10 flex ms-0!  items-center gap-1 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-white transition-transform duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
              >
                <Info className="size-4" />
                اعرف المزيد
              </NavLink>
            </div>
            <div className="flex gap-20 mx-auto">
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <Newspaper className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">50+</span>
                    <span className="text-sm text-[#737373]">مقالة</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <UserRoundGroup  className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">+10ألف</span>
                    <span className="text-sm text-[#737373]">قارئ</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <FolderOpen  className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">4</span>
                    <span className="text-sm text-[#737373]">تصنيفات</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <PenTool className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">6</span>
                    <span className="text-sm text-[#737373]">كاتب</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
