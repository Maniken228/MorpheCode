import { Zap } from "lucide-react";
export default function AudienceStrip() {
  return (
    <aside
      className="brand-strip"
      aria-label="Made for creators, freelancers, students and teams"
    >
      <div className="container">
        <span>FOR PEOPLE MAKING THINGS HAPPEN</span>
        <div>
          <span>
            <Zap size={21} />
            Creators
          </span>
          <span>
            <span className="strip-symbol">⌘</span>Freelancers
          </span>
          <span>
            <span className="strip-symbol">◈</span>Students
          </span>
          <span>
            <span className="strip-symbol">✳</span>Teams
          </span>
        </div>
      </div>
    </aside>
  );
}
