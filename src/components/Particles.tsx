
type Props = { count?: number };

export default function Particles({ count = 30 }: Props) {
  const dots = Array.from({ length: count });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = 2 + Math.random() * 2;
        const duration = 6 + Math.random() * 10;
        const delay = Math.random() * 6;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-[rgba(255,27,76,0.45)] shadow-[0_0_12px_rgba(255,27,76,.35)]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `floatParticle ${duration}s ease-in-out ${delay}s infinite`,
              opacity: 0.35,
            }}
          />
        );
      })}
    </div>
  );
}
