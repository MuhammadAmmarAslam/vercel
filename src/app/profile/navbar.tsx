import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
    const pathname = usePathname();
  
    const menuItems = [
      { label: "Home", path: "/profile/home" },
      { label: "Profile", path: "/profile" },
      { label: "Schedule", path: "/profile/schedule" },
      { label: "Resume", path: "/profile/resume" },
      { label: "Payments", path: "/profile/payments" },
      { label: "Reviews", path: "/profile/reviews" },
    ];
  
    return (
  <nav className="bg-light100 flex xl:flex-row flex-col gap-[43px] shadow-navigation-item justify-between items-center p-3 w-full h-[76px] rounded-[15px] max-w-[962px] mt-[74px]">
    {menuItems.map((item) => (
      <Link
        key={item.path}
        rel="stylesheet"
        href={item.path}
        className={`text-base text-secondary border-light100 py-4 px-[30px] font-jakarta font-semibold  rounded-[15px] ${
          pathname === item.path ? "active bg-primary text-white" : ""
        }`}
      >
        {item.label}
      </Link>
    ))}
  </nav>
    );
  }