import Feed from "@/components/home/Feed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / Y",
};

export default function Home() {
  return <Feed />;
}
