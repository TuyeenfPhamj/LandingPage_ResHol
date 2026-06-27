import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../assets/dst-marketing-logo.png";
import { navItems } from "../data/siteData";
import { ActionButton } from "./ActionButton";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="nav-pill mx-auto flex max-w-[1440px] items-center justify-between" aria-label="Điều hướng chính">
        <a className="brand-link" href="#top" aria-label="DST Marketing Media">
          <img src={logo} alt="Logo DST Marketing - Media" />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <ActionButton href="#lien-he" variant="light">
            Liên hệ tư vấn
          </ActionButton>
        </div>
        <button className="icon-button lg:hidden" type="button" onClick={() => setOpen(true)} aria-label="Mở menu">
          <Menu size={20} />
        </button>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
