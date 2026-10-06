import { useState } from "react";
import { Check, Timer, ListChecks, ChartNoAxesCombined } from "lucide-react";
import FocusTimer from "./FocusTimer";
export default function PhonePreview() {
  const [tasks, setTasks] = useState([false, true]);
  return (
    <div
      className="phone downloaded-phone"
      aria-label="Interactive FocusFlow app preview"
    >
      <img
        className="phone-frame"
        src={`${import.meta.env.BASE_URL}images/iphone-x.svg`}
        width="360"
        height="722"
        alt=""
        aria-hidden="true"
      />
      <div className="phone-display">
        <div className="phone-camera" />
        <div className="phone-status">
          <strong>9:41</strong>
          <span>▮▮▮ ▰</span>
        </div>
        <div className="phone-screen">
          <div className="phone-greeting">
            <div>
              <span>MONDAY, OCTOBER 5</span>
              <h3>
                Hey, Olivia <span>✺</span>
              </h3>
            </div>
            <div className="tiny-avatar">O</div>
          </div>
          <p className="phone-intro">
            A good day to make room for what matters.
          </p>
          <FocusTimer />
          <div className="task-heading">
            Today’s focus <span>2 tasks</span>
          </div>
          <div className="task-list">
            {["Finish the project design", "Read 20 pages"].map(
              (task, index) => (
                <button
                  key={task}
                  className={`task ${tasks[index] ? "checked" : ""}`}
                  aria-pressed={tasks[index]}
                  onClick={() =>
                    setTasks(
                      tasks.map((value, i) => (i === index ? !value : value)),
                    )
                  }
                >
                  <span className="checkbox">
                    {tasks[index] && <Check size={12} />}
                  </span>
                  <span>{task}</span>
                  <span className={`task-dot dot-${index}`} />
                </button>
              ),
            )}
          </div>
          <div className="phone-nav">
            <span>
              <Timer size={18} />
              Focus
            </span>
            <span>
              <ListChecks size={18} />
              Tasks
            </span>
            <span>
              <ChartNoAxesCombined size={18} />
              Progress
            </span>
          </div>
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
}
