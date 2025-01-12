import { Link } from "@tanstack/react-router";

const footerLink = [
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Cookie Policy" },
  { href: "/", label: "Terms of Service" },
];
export default function Footer() {
  return (
    <footer className="px-default grid w-full select-none grid-cols-1 gap-6 bg-black py-10 text-white">
      <Link
        to="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/public/assets/logo_footer.svg"
          width={218}
          height={30}
          className="aspect-[7.27] h-[30px]"
          alt="Codeamica Logo"
        />
      </Link>

      <ul className="flex gap-6">
        {footerLink.map((data, index) => (
          <span className="flex gap-6" key={data.label}>
            <li className="hover:underline">
              <Link
                to={data.href}
                aria-current={data.href === "/" ? "page" : undefined}
              >
                {data.label}
              </Link>
            </li>
            {index < footerLink.length - 1 && (
              <li className="h-full w-[0.1rem] bg-white"></li>
            )}
          </span>
        ))}
      </ul>

      <p>
        Made with{" "}
        <span className="cursor-pointer transition-all duration-500 ease-in-out hover:font-bold hover:text-pink-500 hover:underline">
          Luv©
        </span>{" "}
        2024 Codeamica
      </p>
    </footer>
  );
}
