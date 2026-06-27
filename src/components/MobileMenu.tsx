import { X } from "lucide-react";
import { navItems } from "../data/siteData";
import { ActionButton } from "./ActionButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu điều hướng">
      <div className="mobile-menu-panel">
        <button className="icon-button ml-auto" type="button" onClick={onClose} aria-label="Đóng menu">
          <X size={20} />
        </button>
        <div className="mt-6 grid gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <ActionButton href="#lien-he">Liên hệ tư vấn</ActionButton>
        </div>
      </div>
    </div>
  );
}
