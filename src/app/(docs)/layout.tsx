import React from "react";


import type { Viewport } from "next";
import DocsSidebar from "./docsLayout/DocsSidebar";
// import RequestComponents from "@/components/requestcomponets";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex">
      <div>
        <DocsSidebar />
      </div>
      <section
        className="flex flex-1 flex-col overflow-auto px-4"
        role="main"
        aria-label="Main content"
      >
        <div className="flex-1">
          <div className="mb-4">{/* <RequestComponents /> */}</div>
          {children}
        </div>
      </section>
    </main>
  );
}