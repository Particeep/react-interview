import React, { useState, useEffect } from "react";

export default function ProgressBar({ likes, dislikes }) {
  const [style, setStyle] = React.useState({});

  const [total, setTotal] = useState(likes + dislikes);
  const [pourcent, setPercent] = useState((likes * 100) / total);

  useEffect(() => {
    setPercent((likes * 100) / total);

    const newStyle = {
      opacity: 1,
      width: `${pourcent}%`,
    };

    setStyle(newStyle);
    setTotal(likes + dislikes);
    return;
  }, [likes, dislikes, total, pourcent]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
}
