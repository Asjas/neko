import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";
import { useTransition } from "remix";

function useProgress(): MutableRefObject<HTMLElement | undefined> {
  const el = useRef<HTMLElement>();
  const timeout = useRef<NodeJS.Timeout>();
  const pendingLocation = useTransition().location;

  useEffect(() => {
    if (!pendingLocation || !el.current) {
      return;
    }

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    el.current.style.width = `0%`;

    let updateWidth = (ms: number) => {
      timeout.current = setTimeout(() => {
        let width = parseFloat(el.current!.style.width);
        let percent = !isNaN(width) ? 10 + 0.9 * width : 0;

        el.current!.style.width = `${percent}%`;

        updateWidth(100);
      }, ms);
    };

    updateWidth(300);

    return () => {
      clearTimeout(timeout.current!);

      if (el.current!.style.width === `0%`) {
        return;
      }

      el.current!.style.width = `100%`;

      timeout.current = setTimeout(() => {
        if (el.current?.style.width !== "100%") {
          return;
        }

        el.current.style.width = ``;
      }, 200);
    };
  }, [pendingLocation]);

  return el;
}

export default function ProgressBar() {
  const progress = useProgress();

  return (
    <div className="fixed top-0 left-0 right-0 flex h-1">
      <div
        style={{ width: "30%" }}
        ref={progress}
        className="transition-all ease-out bg-gradient-to-r from-green-400 via-blue-500 to-pink-500"
      />
    </div>
  );
}
