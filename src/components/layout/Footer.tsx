import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import Brand from "../ui/Brand";
import { navigation } from "../../data/content";
import type { DialogKind } from "../../data/content";
export default function Footer({
  onDialog,
}: {
  onDialog: (kind: DialogKind) => void;
}) {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>Your space for calm, mindful productivity.</p>
          </div>
          <div className="footer-links">
            <nav aria-labelledby="footer-explore">
              <h2 id="footer-explore">Explore</h2>
              <ul>
                {navigation.slice(0, 3).map(([label, id]) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      {label}
                      <ChevronRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <address>
              <h2>Stay in the loop</h2>
              <button
                className="footer-contact"
                onClick={() => onDialog("contact")}
              >
                <Mail size={16} />
                Say hello
                <ArrowUpRight size={14} />
              </button>
              <div className="social-links">
                <button
                  aria-label="Instagram FocusFlow"
                  onClick={() => onDialog("social")}
                >
                  <Instagram size={19} />
                </button>
                <button
                  aria-label="LinkedIn FocusFlow"
                  onClick={() => onDialog("social")}
                >
                  <Linkedin size={19} />
                </button>
                <button
                  aria-label="X FocusFlow"
                  onClick={() => onDialog("social")}
                >
                  <span>𝕏</span>
                </button>
              </div>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} FocusFlow. Made for your rhythm.
          </span>
          <div>
            <button onClick={() => onDialog("privacy")}>Privacy</button>
            <button onClick={() => onDialog("terms")}>Terms of use</button>
            <a href="#home">
              Back to top <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
