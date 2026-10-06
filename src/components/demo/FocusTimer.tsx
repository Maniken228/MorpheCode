import { RotateCcw, Pause, Play, Volume2 } from "lucide-react";
import useFocusTimer from "../../hooks/useFocusTimer";
export default function FocusTimer({ large = false }: { large?: boolean }) {
  const {
    mode,
    seconds,
    total,
    running,
    done,
    muted,
    changeMode,
    toggleSound,
    toggleRunning,
    reset,
  } = useFocusTimer();
  return (
    <div className={`focus-timer ${large ? "timer-large" : ""}`}>
      <div className="timer-tabs" role="group" aria-label="Timer mode">
        <button
          aria-pressed={mode === "focus"}
          className={mode === "focus" ? "active" : ""}
          onClick={() => changeMode("focus")}
        >
          Focus
        </button>
        <button
          aria-pressed={mode === "break"}
          className={mode === "break" ? "active" : ""}
          onClick={() => changeMode("break")}
        >
          Break
        </button>
      </div>
      <div className="timer-ring">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="91" className="ring-track" />
          <circle
            cx="100"
            cy="100"
            r="91"
            className="ring-progress"
            strokeDasharray={572}
            strokeDashoffset={572 * (1 - seconds / total)}
          />
        </svg>
        <div>
          <span className="timer-label">
            {done
              ? "Nicely done!"
              : mode === "focus"
                ? "A little space to do your thing"
                : "A moment to recharge"}
          </span>
          <strong aria-label="Time remaining">
            {`${Math.floor(seconds / 60)}`.padStart(2, "0")}
            <span>:</span>
            {`${seconds % 60}`.padStart(2, "0")}
          </strong>
          <span className="timer-sub">
            {mode === "focus" ? "Deep focus" : "Short break"}
          </span>
        </div>
      </div>
      <div className="timer-controls">
        <button
          className="icon-button"
          aria-label="Reset timer"
          onClick={reset}
        >
          <RotateCcw size={17} />
        </button>
        <button className="start-button" onClick={toggleRunning}>
          {running ? (
            <Pause size={15} />
          ) : (
            <Play size={15} fill="currentColor" />
          )}
          {running ? "Pause" : "Start focusing"}
        </button>
        <button
          className={`icon-button ${!muted ? "sound-on" : ""}`}
          aria-label={
            muted ? "Enable completion sound" : "Disable completion sound"
          }
          aria-pressed={!muted}
          onClick={toggleSound}
        >
          <Volume2 size={18} />
        </button>
      </div>
      {large && (
        <p className="timer-message" role="status">
          {done
            ? "Session complete. Take a break - you have earned it."
            : "Choose one thing, set distractions aside, and begin."}
        </p>
      )}
    </div>
  );
}
