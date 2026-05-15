import Link from "next/link";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 0" }}>{name}</span>;
}

export function IconFilled({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1" }}>{name}</span>;
}
