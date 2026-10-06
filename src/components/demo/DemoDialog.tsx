import Dialog from "../ui/Dialog";
import ActionButton from "../ui/ActionButton";
import FocusTimer from "./FocusTimer";
import type { DialogKind, StartDemo } from "../../data/content";
export default function DemoDialog({
  kind,
  plan,
  onClose,
  onStart,
}: {
  kind: DialogKind;
  plan: string;
  onClose: () => void;
  onStart: StartDemo;
}) {
  return (
    <Dialog
      title={
        kind === "demo"
          ? "Your focus starts here."
          : kind === "privacy"
            ? "Privacy"
            : kind === "terms"
              ? "Terms of use"
              : kind === "social"
                ? "Let’s stay connected."
                : "Stay in the loop."
      }
      onClose={onClose}
    >
      {kind === "demo" ? (
        <>
          <p className="dialog-copy">
            You chose {plan}. Try the focus timer right now - no sign-up needed.
          </p>
          <FocusTimer large />
          <p className="demo-note">
            This is a demo of a fictional product. Sign-up, app downloads, and
            payments are not connected.
          </p>
        </>
      ) : kind === "privacy" ? (
        <p className="dialog-copy">
          This demo has no personal-data forms, analytics, or advertising
          cookies. Your settings and timer exist only while this page is open
          and are not stored on a server. The server receives the usual
          technical request data when you access the site.
        </p>
      ) : kind === "terms" ? (
        <>
          <p className="dialog-copy">
            FocusFlow is a fictional product created as an educational project.
            Pricing, mobile app features, and testimonials are illustrative.
            This page does not process purchases or payments. You are welcome to
            use the demo timer for free.
          </p>
          <p className="dialog-copy">
            Device illustration:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:IPhone_X_vector.svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rafael Fernandez / Justin14
            </a>
            ,{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            . Original SVG artwork preserved; generator comment removed.
          </p>
        </>
      ) : (
        <>
          <p className="dialog-copy">
            FocusFlow is currently an educational project. Real{" "}
            {kind === "social" ? "social media profiles" : "support channels"}{" "}
            have not been created yet.
          </p>
          <p className="dialog-copy">
            For now, explore the product and try your first focus session.
          </p>
          <ActionButton onClick={() => onStart()}>Open the demo</ActionButton>
        </>
      )}
    </Dialog>
  );
}
