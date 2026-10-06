import { useEffect, useRef, useState } from "react";

type TimerMode = "focus" | "break";
const DURATION: Record<TimerMode, number> = { focus: 25 * 60, break: 5 * 60 };

export default function useFocusTimer() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [seconds, setSeconds] = useState(DURATION.focus);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [muted, setMuted] = useState(true);
  const deadline = useRef(0);
  const audio = useRef<AudioContext | null>(null);
  const soundEnabled = useRef(false);
  const total = DURATION[mode];

  useEffect(() => {
    if (!running) return;
    function tick() {
      const remaining = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      );
      setSeconds(remaining);
      if (remaining > 0) return;
      setRunning(false);
      setDone(true);
      if (soundEnabled.current && audio.current?.state === "running") {
        const oscillator = audio.current.createOscillator();
        const gain = audio.current.createGain();
        oscillator.frequency.value = 528;
        gain.gain.setValueAtTime(0.05, audio.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          audio.current.currentTime + 0.35,
        );
        oscillator.connect(gain);
        gain.connect(audio.current.destination);
        oscillator.start();
        oscillator.stop(audio.current.currentTime + 0.35);
        oscillator.onended = () => {
          oscillator.disconnect();
          gain.disconnect();
        };
      }
    }
    const interval = window.setInterval(tick, 250);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [running]);

  useEffect(
    () => () => {
      void audio.current?.close();
    },
    [],
  );

  function toggleRunning() {
    if (running) {
      setSeconds(
        Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000)),
      );
      setRunning(false);
      return;
    }
    const next = seconds || total;
    setSeconds(next);
    setDone(false);
    deadline.current = Date.now() + next * 1000;
    setRunning(true);
  }
  function changeMode(next: TimerMode) {
    setMode(next);
    setRunning(false);
    setSeconds(DURATION[next]);
    setDone(false);
  }
  function reset() {
    setRunning(false);
    setSeconds(total);
    setDone(false);
  }
  function toggleSound() {
    if (muted) {
      audio.current ??= new AudioContext();
      void audio.current.resume();
    }
    soundEnabled.current = muted;
    setMuted(!muted);
  }
  return {
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
  };
}
