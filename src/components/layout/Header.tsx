import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "../ui/Brand";
import ActionButton from "../ui/ActionButton";
import { navigation } from "../../data/content";
import type { StartDemo } from "../../data/content";
export default function Header({ onStart }: { onStart: StartDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "nav open" : "nav"}
          id="main-nav"
        >
          <ul>
            {navigation.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ActionButton
          className="header-cta"
          onClick={() => {
            setMenuOpen(false);
            onStart();
          }}
        >
          Get Started
        </ActionButton>
        <button
          className="menu-toggle icon-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
