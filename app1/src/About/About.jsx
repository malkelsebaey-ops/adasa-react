import React from 'react'
import { Newspaper ,UserRoundGroup  ,PenTool, BookOpen} from "lucide-react";

export default function About() {
  return <>
      <section className="relative pt-30  flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute top-1/2 left-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FA9F1E]/10 blur-[120px]" />
        <div className="relative mt-6 z-10 mx-auto mb-44 w-full max-w-4xl px-4 text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6900] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#FF6900]"></span>
            </span>
            <span className="text-sm text-white"> من نحن</span>
          </div>
          <div>
            <h3 className="text-3xl leading-tight font-black text-white md:text-6xl">
              مهمتنا هي<span className="text-[#FA9F1E]"> الإعلام والإلهام</span>
              
            </h3>
            <p className="mt-10 text-xl font-normal text-[#a1a1a1]">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.


            </p>
            
            <div className="flex gap-20 mx-auto">
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <UserRoundGroup  className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">+2مليون</span>
                    <span className="text-sm text-[#737373]">قارئ شهرياً</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <Newspaper className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">+500</span>
                    <span className="text-sm text-[#737373]">+500</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <PenTool className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">+50</span>
                    <span className="text-sm text-[#737373]">كاتب خبير</span>
                </div>
                <div className="mt-10 flex flex-col w-36 px-5 py-5 gap-1.5 rounded-3xl backdrop-blur-sm items-center border border-white/10 bg-white/5 hover:scale-105 duration-300">
                    <BookOpen   className="size-8 text-[#FF6900]" />
                    <span className="text-3xl font-bold text-[#FA961C]">+15</span>
                    <span className="text-sm text-[#737373]">تصنيف</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>}
