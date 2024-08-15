import i1 from "@/src/render/Comp-images/next/i1.png";
import { CodeBundle } from '@/components/render/nextRen/ProfileCard';
import { BoprderBoxBundle } from "@/components/render/nextRen/BorderBox";

export const Nextcomponents = [
  {
    id: 1,
    name: "Profile Card",
    link: "/comp/next/1",
    img: i1.src,
    description: "A profile card with user information and stats.",
    ComponentPath: "@/components/render/nextRen/ProfileCard",
    code: CodeBundle,
  },
  {
    id: 2,
    name: "Border Box",
    link: "/comp/next/2",
    img: i1.src,
    description: "A border box with beautiful and intresting components",
    ComponentPath: "@/components/render/nextRen/BorderBox",
    code: BoprderBoxBundle,
  }
];
