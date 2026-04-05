export default function WireframeBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diagonal lines */}
        <line
          x1="-100"
          y1="200"
          x2="600"
          y2="900"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.06"
        />
        <line
          x1="900"
          y1="-50"
          x2="1500"
          y2="700"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.05"
        />
        <line
          x1="300"
          y1="-100"
          x2="1100"
          y2="500"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.04"
        />
        <line
          x1="1200"
          y1="100"
          x2="400"
          y2="850"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.05"
        />

        {/* Angular polygon */}
        <polygon
          points="1050,50 1350,200 1250,450 950,350"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.05"
        />

        {/* Partial triangle */}
        <polygon
          points="100,600 350,400 500,700"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.04"
        />

        {/* Arc / partial circle */}
        <circle
          cx="750"
          cy="450"
          r="280"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.04"
          strokeDasharray="40 60"
        />

        {/* Small circle accent */}
        <circle
          cx="200"
          cy="150"
          r="80"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.05"
        />

        {/* Intersecting lines cluster */}
        <line
          x1="650"
          y1="100"
          x2="850"
          y2="350"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.04"
        />
        <line
          x1="700"
          y1="300"
          x2="900"
          y2="100"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.04"
        />

        {/* Long horizontal construction line */}
        <line
          x1="0"
          y1="680"
          x2="1440"
          y2="680"
          stroke="white"
          strokeWidth="0.3"
          opacity="0.03"
        />
      </svg>
    </div>
  );
}
