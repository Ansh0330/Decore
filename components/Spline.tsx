"use client";

import React, { useEffect, useState } from "react";

export default function SplineComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js";
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading 3D scene...</div>;
  }

  return (
    <main>
      {React.createElement("spline-viewer", {
        url: "https://prod.spline.design/x-g0TzUTIyGn-V3S/scene.splinecode",
        style: { width: "100%", height: "500px" },
      })}
    </main>
  );
}
