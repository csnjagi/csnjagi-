import type { LucideIcon } from "lucide-react";

export type Capability = { icon: LucideIcon; n: string; title: string; text: string };
export type SkillGroup = { title: string; items: string[] };
export type ExperienceItem = { index: string; company: string; role: string; period: string; icon: LucideIcon; intro: string; points: string[] };
