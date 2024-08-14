import Feed from "@/components/home/Feed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / Y",
};

const Home = () => {
  return <Feed />;
};

export default Home;
