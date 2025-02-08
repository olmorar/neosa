import { ReactNode } from "react";
import { Navbar } from "@/app/ui";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode; }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
