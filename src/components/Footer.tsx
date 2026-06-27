import logo from "../assets/dst-marketing-logo.png";
import { navItems } from "../data/siteData";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo DST Marketing - Media" />
        <p>Dịch vụ tận tâm - Nâng tầm thương hiệu.</p>
      </div>
      <nav aria-label="Điều hướng cuối trang">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
