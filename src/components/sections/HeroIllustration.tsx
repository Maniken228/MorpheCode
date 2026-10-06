import { ArrowUpRight, Check, Leaf } from "lucide-react";
import PhonePreview from "../demo/PhonePreview";
export default function HeroIllustration() {
  return (
    <figure className="hero-art" aria-label="FocusFlow app preview">
      <div className="orb" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="art-spark spark-one">✳</span>
      <span className="art-spark spark-two">✦</span>
      <div className="floating-card session-card">
        <div className="float-icon">
          <Check size={19} />
        </div>
        <div>
          <strong>You’re in the flow!</strong>
          <span>One step closer to your goal</span>
        </div>
      </div>
      <PhonePreview />
      <div className="floating-card progress-card">
        <div className="progress-heading">
          <span>Your focus this week</span>
          <ArrowUpRight size={17} />
        </div>
        <div className="progress-number">
          12.5 <span>hours</span>
          <small>+24% ↗</small>
        </div>
        <div className="mini-chart">
          {[35, 63, 44, 78, 60, 95, 70].map((height, i) => (
            <div key={i}>
              <span style={{ height: `${height}%` }} />
              <small>{["M", "T", "W", "T", "F", "S", "S"][i]}</small>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="floating-label">
        <Leaf size={17} />
        Productivity with a little self-care
      </figcaption>
    </figure>
  );
}
