import { Brain, Pencil, Puzzle, UsersRound, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  pencil: Pencil,
  puzzle: Puzzle,
  users: UsersRound,
};

type Props = { icon: string; title: string; description: string };

export function ServiceCard({ icon, title, description }: Props) {
  const Icon = icons[icon] ?? Brain;
  return (
    <article className="reveal flex h-full flex-col items-center rounded-3xl bg-cream-50 px-6 py-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-200 text-terracotta-500">
        <Icon className="h-8 w-8" strokeWidth={1.3} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-brown-800">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink">{description}</p>
    </article>
  );
}
