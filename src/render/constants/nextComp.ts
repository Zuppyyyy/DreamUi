import i1 from "@/src/render/Comp-images/next/id1/thumbnail.png";
import i_1 from "@/src/render/Comp-images/next/id1/overview.png"
import { CodeBundle } from '@/components/render/nextRen/ProfileCard';
import { BoprderBoxBundle } from "@/components/render/nextRen/BorderBox";
import { CodeSnippetBundle } from "@/components/render/nextRen/id1/Bundle";

export const Nextcomponents = [
  {
    id: 1,
    name: "Code Snippet",
    link: "/comp/next/1",
    img: i1.src,
    product_img: i_1.src,
    description: "A beautifull code snippet",
    ComponentPath: "@/components/render/nextRen/BorderBox",
    code: CodeSnippetBundle,
  },
  {
    id: 2,
    name: "Profile Card",
    link: "/comp/next/2",
    img: i1.src,
    product_img: i_1.src,
    description: "A profile card with user information and stats.",
    ComponentPath: "@/components/render/nextRen/ProfileCard",
    code: CodeBundle,
  },
  {
    id: 3,
    name: "Border Box",
    link: "/comp/next/3",
    img: i1.src,
    product_img: i_1.src,
    description: "A border box with beautiful and intresting components",
    ComponentPath: "@/components/render/nextRen/BorderBox",
    code: BoprderBoxBundle,
  }
];
