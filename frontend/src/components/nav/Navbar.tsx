import {
  Bell,
  Bookmark,
  ClipboardList,
  Home,
  Mail,
  PlusSquare,
  Search,
  User2,
  Users2,
} from "lucide-react";

import Link from "next/link";
import Logo from "./Logo";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky left-0 mx-4 flex h-full w-12 flex-col items-center gap-4 px-4 py-2">
      <Link href="/home">
        <Logo color="white" className="nav-item" />
      </Link>
      <Link href="/home">
        <Home className="nav-item" />
      </Link>
      <Link href="/explore">
        <Search className="nav-item" />
      </Link>
      <Link href="/notifications">
        <Bell className="nav-item" />
      </Link>
      <Link href="/messages">
        <Mail className="nav-item" />
      </Link>
      <Link href="/lists">
        <ClipboardList className="nav-item" />
      </Link>
      <Link href="/bookmarks">
        <Bookmark className="nav-item" />
      </Link>
      <Link href="/communities">
        <Users2 className="nav-item" />
      </Link>
      <Link href="/">
        <User2 className="nav-item" />
      </Link>
      <Link href="/compose">
        <PlusSquare className="nav-item bg-cyan-600 dark:hover:bg-cyan-700" />
      </Link>
    </nav>
  );
};

export default Navbar;
