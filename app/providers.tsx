"use client";

import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Provider;
