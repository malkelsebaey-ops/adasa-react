import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import img from "../public/logo-GdqARQRt.png";
import "../src/index.css";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function MyNavbar() {
  return (
    <Navbar
      className="container! fixed inset-x-0 top-0 z-50  border-0!  border-b border-white/10 bg-black! py-5! dark:bg-black!"
      rounded
    >
      <NavbarBrand href="#" className="gap-3">
        <img src="../public/logo-GdqARQRt.png" className="h-10" alt="عدسة" />
        <div className="text-start leading-tight">
          <span className="block text-xl font-bold text-white">عدسة</span>
          <span className="block text-xs text-orange-500">
            عالم التصوير الفوتوغرافي
          </span>
        </div>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Search className="me-2 mt-2 size-5 text-gray-400 transition duration-300 hover:text-[#ED5E0E]" />
        <Button className="rounded-full bg-[#ED5E0E]! px-6 py-2 font-bold transition duration-300 hover:-translate-y-1">
          ابدأ القرأة
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse
        theme={{
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:items-center md:gap-1 md:rounded-full md:border md:border-white/15 md:bg-white/5 md:p-1.5",
        }}
      >
        <NavLink
          end
          className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          to="/"
          active
        >
          الرئيسية
        </NavLink>
        <NavLink
          end
          className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          to="blog"
        >
          المدونة
        </NavLink>
        <NavLink
          end
          className={({ isActive }) => (isActive ? "nav-active" : "nav")}
          to="about"
        >
          من نحن
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
