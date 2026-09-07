"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  char: string;
}

const codeSymbols = [
  "<",
  "/",
  ">",
  "{",
  "}",
  "(",
  ")",
  "=",
  ":",
  ";",
  "&",
  "|",
  "!",
  "?",
  "@",
  "#",
  "$",
  "%",
  "^",
  "*",
  "+",
  "-",
  "_",
  ".",
];

export function InfinityAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles along the infinity path
    const createParticles = () => {
      const count = 80;
      const width = canvas.width;
      const height = canvas.height;
      const scale = Math.min(width, height) / 8;
      const centerX = width / 2;
      const centerY = height / 2;

      particlesRef.current = [];

      for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        const x =
          centerX + (scale * Math.sin(t)) / (1 + Math.cos(t) * Math.cos(t));
        const y =
          centerY +
          (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.cos(t) * Math.cos(t));

        particlesRef.current.push({
          x,
          y,
          size: 8 + Math.random() * 14,
          speed: 0.2 + Math.random() * 0.3,
          angle: t,
          char: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        });
      }
    };

    createParticles();

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const scale = Math.min(width, height) / 8;
      const centerX = width / 2;
      const centerY = height / 2;
      const time = Date.now() / 1000;

      // Draw infinity path glow
      ctx.beginPath();
      for (let t = 0; t < Math.PI * 2; t += 0.01) {
        const x =
          centerX + (scale * Math.sin(t)) / (1 + Math.cos(t) * Math.cos(t));
        const y =
          centerY +
          (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.cos(t) * Math.cos(t));
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particle along the infinity path
        particle.angle += particle.speed * 0.01;
        const t = particle.angle;

        const x =
          centerX + (scale * Math.sin(t)) / (1 + Math.cos(t) * Math.cos(t));
        const y =
          centerY +
          (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.cos(t) * Math.cos(t));

        particle.x = x;
        particle.y = y;

        // Calculate color based on position
        const hue = (t / (Math.PI * 2)) * 360 + 200;
        const opacity = 0.4 + 0.6 * (Math.sin(t * 2 + time) * 0.5 + 0.5);

        // Draw particle background glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size / 1.5,
        );
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size / 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw character
        ctx.font = `${particle.size}px "Courier New", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `hsla(${hue}, 70%, 70%, ${opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);

        // Draw connecting line between particles
        particlesRef.current.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60 && particle !== other) {
            const opacity = 0.1 * (1 - distance / 60);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw center glow
      const centerGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        scale * 0.5,
      );
      centerGradient.addColorStop(0, "rgba(255, 255, 255, 0.03)");
      centerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scale * 0.5, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full relative"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
