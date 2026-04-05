"use client";

export default function WireframeBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 15px); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 20px); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -20px); }
        }
        @keyframes drift4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 25px); }
        }
      `}</style>
      <svg
        className="w-full min-h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Group 1 */}
        <g style={{ animation: "drift1 10s ease-in-out infinite" }}>
          <line x1="-100" y1="200" x2="600" y2="900" stroke="white" strokeWidth="1" opacity="0.12" />
          <line x1="300" y1="-100" x2="1100" y2="500" stroke="white" strokeWidth="1" opacity="0.08" />
          <polygon points="100,600 350,400 500,700" fill="none" stroke="white" strokeWidth="1" opacity="0.08" />
        </g>

        {/* Group 2 */}
        <g style={{ animation: "drift2 7s ease-in-out infinite" }}>
          <line x1="900" y1="-50" x2="1500" y2="700" stroke="white" strokeWidth="1" opacity="0.1" />
          <line x1="1200" y1="100" x2="400" y2="850" stroke="white" strokeWidth="1" opacity="0.1" />
          <polygon points="1050,50 1350,200 1250,450 950,350" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
        </g>

        {/* Group 3 */}
        <g style={{ animation: "drift3 12s ease-in-out infinite" }}>
          <circle cx="750" cy="450" r="280" fill="none" stroke="white" strokeWidth="1" opacity="0.08" strokeDasharray="40 60" />
          <circle cx="200" cy="150" r="80" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
        </g>

        {/* Group 4 */}
        <g style={{ animation: "drift4 8s ease-in-out infinite" }}>
          <line x1="650" y1="100" x2="850" y2="350" stroke="white" strokeWidth="1" opacity="0.08" />
          <line x1="700" y1="300" x2="900" y2="100" stroke="white" strokeWidth="1" opacity="0.08" />
          <line x1="0" y1="680" x2="1440" y2="680" stroke="white" strokeWidth="0.5" opacity="0.06" />
        </g>
      </svg>
    </div>
  );
}
