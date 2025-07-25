"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { eventsSpring } from "@/app/data/events";
import { eventsSummer } from "@/app/data/events";
import { eventsAutumn } from "@/app/data/events";
import { eventsWinter } from "@/app/data/events";
import dayjs from "dayjs";

export default function ProgressTimeline() {
  const [selected, setSelected] = useState<string | null | undefined>(
    undefined
  );
  const barRef = useRef<HTMLDivElement | null>(null);

  const currentDate = dayjs();
  const yearStart = dayjs("2025-01-01");
  const yearEnd = dayjs("2025-12-31");

  const events = useMemo(() => {
    return [...eventsSpring, ...eventsSummer, ...eventsAutumn, ...eventsWinter];
  }, []);

  const [dragging, setDragging] = useState(false);
  const [dragPercent, setDragPercent] = useState<number | null>(null);

  const progressPercent = currentDate.isBefore(yearStart)
    ? 0
    : currentDate.isAfter(yearEnd)
    ? 100
    : (currentDate.diff(yearStart, "day") / yearEnd.diff(yearStart, "day")) *
      100;

  const markers = useMemo(() => {
    return events.map((event) => {
      const start = dayjs(event.startDate);
      const percent =
        (start.diff(yearStart, "day") / yearEnd.diff(yearStart, "day")) * 95 +
        2.5;
      const passed =
        currentDate.isSame(start, "day") || currentDate.isAfter(start);
      return { ...event, percent, passed };
    });
  }, [events, currentDate]);

  const upcomingEvent = useMemo(() => {
    return markers.find((m) => !m.passed);
  }, [markers]);

  const selectedEvent = useMemo(() => {
    if (selected === null) return null;
    if (selected === undefined && upcomingEvent) return upcomingEvent;
    return events.find((e) => e.id === selected) || null;
  }, [selected, events, upcomingEvent]);

  const formatDate = (dateStr: string) => {
    return dayjs(dateStr).format("DD/MM/YYYY");
  };

  const handleMove = useCallback(
    (clientX: number) => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;

      // Clamp trong khoảng 0 - 100
      percent = Math.max(1, Math.min(99, percent));
      setDragPercent(percent);

      if (dragging) {
        let closest = markers[0];
        let minDiff = Math.abs(markers[0].percent - percent);
        for (let i = 1; i < markers.length; i++) {
          const diff = Math.abs(markers[i].percent - percent);
          if (diff < minDiff) {
            minDiff = diff;
            closest = markers[i];
          }
        }
        setSelected(closest.id);
      }
    },
    [barRef, markers, dragging]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      if (dragging) {
        setDragging(false);
        setDragPercent(null);
      }
    };

    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMove]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (dragging) handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (dragging) {
        setDragging(false);
        setDragPercent(null);
      }
    };

    if (dragging) {
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, handleMove]);

  return (
    <div className="p-5 h-full">
      {selectedEvent && (
        <div className="text-center w-full h-[80%]">
          <p className="text-lg font-playfair italic text-foreground">
            {selectedEvent.title}
          </p>
          <p className="text-lg text-[#3D365C] font-greatvibes font-bold">
            {selectedEvent.location}
          </p>
          <p className="text-sm text-[#3D365C] font-playfair italic font-bold">
            {selectedEvent.startDate
              ? `${formatDate(selectedEvent.startDate)}${
                  selectedEvent.endDate
                    ? " → " + formatDate(selectedEvent.endDate)
                    : ""
                }`
              : ""}
          </p>
        </div>
      )}

      <div
        ref={barRef}
        className="relative w-full h-4 mt-4 bg-gray-300 rounded-full shadow-lg cursor-grab"
        onMouseDown={(e) => {
          setDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        // KHÔNG reset selected tại đây để giữ giá trị cuối cùng
      >
        <div
          className="absolute h-4 bg-[#3D365C] rounded-full transition-all"
          style={{ width: `${progressPercent}%` }}
        />
        {markers.map((event) => {
          return (
            <div
              key={event.id}
              title={`${event.title} - ${
                event.startDate
                  ? `${formatDate(event.startDate)}${
                      event.endDate ? " → " + formatDate(event.endDate) : ""
                    }`
                  : ""
              }`}
              className={`absolute w-[1px] h-[4px] top-[4px] translate-x-[-50%] ${
                event.passed
                  ? "border-t-[8px] border-white"
                  : "border-t-[8px] border-black"
              }`}
              style={{
                left: `${event.percent}%`,
              }}
            />
          );
        })}

        {dragPercent !== null && (
          <div
            className="absolute left-0 top-0"
            style={{
              left: `${dragPercent}%`,
              top: "-6px",
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
            }}
          >
            <div className="relative flex flex-col items-center">
              {/* Vòng tròn */}
              <div className="absolute w-4 h-4 bg-[#7C4585] rounded-full mt-[-13px]" />
              {/* Tam giác bên dưới */}
              <div className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#7C4585]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
