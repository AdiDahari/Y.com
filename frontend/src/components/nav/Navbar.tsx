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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

import Link from "next/link";
import Logo from "./Logo";
import PostForm from "../home/PostForm";
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
      <Dialog>
        <DialogTrigger>
          <PlusSquare className="nav-item bg-teal-700 dark:hover:bg-teal-800" />
        </DialogTrigger>
        <DialogContent>
          <DialogDescription>
            <PostForm className="w-full rounded-md bg-slate-950 p-4" />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
