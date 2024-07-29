import React, { useState } from "react";

export const TaskTwo = () => {
  const [angle, setAngle] = useState(90);

  const calculatePoints = (angle) => {
    const radians = (angle * Math.PI) / 180;
    const size = 100;
    const x = Math.cos(radians / 2) * size;
    const y = Math.sin(radians / 2) * size;

    return `${size},0 ${size + x},${y} ${size},${2 * y} ${size - x},${y}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <svg width="300" height="300" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="blue" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="50%" stopColor="red" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>

        <polygon
          points={calculatePoints(angle)}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          transform={`rotate(${angle - 90}, 100, 100)`} // Adjust rotation around the center
        />

        <line
          x1="0"
          y1="100"
          x2="200"
          y2="100"
          stroke="gray"
          strokeDasharray="4"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          stroke="gray"
          strokeDasharray="4"
        />
      </svg>

      <input
        type="range"
        min="90"
        max="179"
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="w-64"
      />
      <p>Angle: {angle}°</p>
    </div>
  );
};

export default TaskTwo;
