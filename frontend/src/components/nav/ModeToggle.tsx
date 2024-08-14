"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTheme } from "next-themes";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className = "" }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <Button
      className={className + " absolute right-0 top-0 my-2 size-12"}
      variant="outline"
      size="icon"
    >
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
