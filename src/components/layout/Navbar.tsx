import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import LoginPopup from "../LoginPopup";
import SignupPopup from "../SignupPopup";
import SearchBar from "../ui/SearchBar";

export default function Navbar() {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

  const navBarLink = [
    { href: "/", label: "Home" },
    { href: "/roadmaps", label: "Roadmaps" },
    { href: "/courses", label: "Courses" },
  ];

  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  // Function to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex max-h-[54px] w-full flex-row items-center justify-between p-2">
      <div className="flex basis-2/5 flex-nowrap items-center gap-x-16">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/logo.svg"
            width={173}
            height={24}
            className="h-6 min-h-[24px] min-w-[173px]"
            alt="Codeamica Logo"
          />
        </Link>
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
          {navBarLink.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                className={`${isActive(href) ? "font-bold underline" : "hover:font-bold hover:underline"} text-[var(--primary-text-color)]`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative basis-2/5">
        <SearchBar onChange={() => {}} />
      </div>
      <div className="flex items-center gap-6">
        <button onClick={() => setLoginPopupOpen(true)} className="font-bold">
          Log in
        </button>
        <button
          onClick={() => setSignupPopupOpen(true)}
          className="max-h-fit rounded-[5px] bg-[var(--primary-text-color)] p-2 font-bold text-[var(--background)] underline"
        >
          Sign up
        </button>
      </div>

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setLoginPopupOpen(false)}
      />

      <SignupPopup
        isOpen={isSignupPopupOpen}
        onClose={() => setSignupPopupOpen(false)}
      />
    </nav>
  );
}
