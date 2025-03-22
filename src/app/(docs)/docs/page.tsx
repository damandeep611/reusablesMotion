"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Copy, Package, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type TabType = "bun" | "npx" | "pnpm";
type SectionId =
  | "get-started"
  | "installation"
  | "install-tailwind"
  | "install-framer"
  | "install-icons"
  | "thats-it"
  | "optional-deps";

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabType>("bun");
  const [activeSection, setActiveSection] = useState<SectionId>("get-started");

  const sectionRefs = {
    "get-started": useRef<HTMLDivElement>(null),
    installation: useRef<HTMLDivElement>(null),
    "install-tailwind": useRef<HTMLDivElement>(null),
    "install-framer": useRef<HTMLDivElement>(null),
    "install-icons": useRef<HTMLDivElement>(null),
    "thats-it": useRef<HTMLDivElement>(null),
    "optional-deps": useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([id, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id as SectionId);
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { id, observer };
    });

    return () => {
      observers.forEach(({ id, observer }) => {
        if (sectionRefs[id as SectionId].current) {
          observer.unobserve(sectionRefs[id as SectionId].current!);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row  min-h-screen">
      <motion.main
        className="flex-1 p-8 lg:p-16 max-w-4xl overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          ref={sectionRefs["get-started"]}
          className="mb-12"
          variants={fadeIn}
          id="get-started"
        >
          <h1 className="text-4xl font-bold mb-6">Get started</h1>

          <p className="text-lg mb-6">
            ReuseMotion helps you to build projects faster. It is designed for
            Next.js but can be run smoothly with standalone React.
          </p>

          <p className="text-lg mb-6">
            Unlike other UI libraries, ReuseMotion does not require any CLI
            installation. You can simply copy and paste the components you like
            and only install the core dependencies.
          </p>
        </motion.div>

        <motion.div
          ref={sectionRefs["installation"]}
          className="mb-12"
          variants={fadeIn}
          id="installation"
        >
          <h2 className="text-3xl font-bold mb-8">Installation</h2>

          <div className="border border-orange-500 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-3">
              <Copy className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Copy & Paste Approach
                </h3>
                <p className="">
                  ReuseMotion follows a copy & paste approach. No CLI
                  installation is required. Simply browse the components, copy
                  the ones you like, and paste them into your project. You only
                  need to install the core dependencies listed below.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={sectionRefs["install-tailwind"]}
          className="mb-12"
          variants={fadeIn}
          id="install-tailwind"
        >
          <h3 className="text-2xl font-bold mb-6">1. Install Tailwind CSS</h3>
          <p className="mb-4">
            All components use Tailwind CSS for styling. If you have not
            already, install Tailwind CSS in your project:
          </p>

          <div className="bg-zinc-900 rounded-lg overflow-hidden mb-6">
            <div className="flex border-b border-zinc-700">
              {(["bun", "npx", "pnpm"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-gray-100 "
                      : " text-gray-200 hover:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.div
              className="p-6 font-mono text-sm"
              key={`tailwind-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "bun" && (
                <div className="text-purple-400">
                  bun add tailwindcss postcss autoprefixer
                </div>
              )}
              {activeTab === "npx" && (
                <div className="text-purple-400">
                  npm install -D tailwindcss postcss autoprefixer
                </div>
              )}
              {activeTab === "pnpm" && (
                <div className="text-purple-400">
                  pnpm add -D tailwindcss postcss autoprefixer
                </div>
              )}
            </motion.div>
          </div>

          <p className="mb-4">
            Initialize Tailwind CSS to create the configuration files:
          </p>

          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="p-6 font-mono text-sm text-purple-400">
              npx tailwindcss init -p
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={sectionRefs["install-framer"]}
          className="mb-12"
          variants={fadeIn}
          id="install-framer"
        >
          <h3 className="text-2xl font-bold mb-6">2. Install Framer Motion</h3>
          <p className="mb-4">
            ReuseMotion components use Framer Motion for animations. Install it
            with:
          </p>

          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="flex border-b border-zinc-700">
              {(["bun", "npx", "pnpm"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.div
              className="p-6 font-mono text-sm"
              key={`framer-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "bun" && (
                <div className="text-purple-400">bun add framer-motion</div>
              )}
              {activeTab === "npx" && (
                <div className="text-purple-400">npm install framer-motion</div>
              )}
              {activeTab === "pnpm" && (
                <div className="text-purple-400">pnpm add framer-motion</div>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={sectionRefs["install-icons"]}
          className="mb-12"
          variants={fadeIn}
          id="install-icons"
        >
          <h3 className="text-2xl font-bold mb-6">3. Install lucide icons</h3>
          <p className="mb-4">
            ReuseMotion components use Lucide React for icons. You can also use
            React Icons as an alternative.
          </p>

          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="flex border-b border-zinc-700">
              {(["bun", "npx", "pnpm"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.div
              className="p-6 font-mono text-sm"
              key={`icons-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "bun" && (
                <div className="text-purple-400">bun add lucide-react</div>
              )}
              {activeTab === "npx" && (
                <div className="text-purple-400">npm install lucide-react</div>
              )}
              {activeTab === "pnpm" && (
                <div className="text-purple-400">pnpm add lucide-react</div>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={sectionRefs["thats-it"]}
          className="mb-12"
          variants={fadeIn}
          id="thats-it"
        >
          <h3 className="text-2xl font-bold mb-6">4. That it.</h3>
          <p className="mb-4">
            You are now ready to use ReuseMotion components! Browse the
            components section, find the ones you like, and copy them into your
            project. No additional setup required.
          </p>

          <div className="border border-green-500 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-3">
              <Package className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-2">Simple Integration</h3>
                <p className="">
                  Each component is self-contained and only requires the core
                  dependencies. You can copy and paste any component into your
                  project and it will work immediately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={sectionRefs["optional-deps"]}
          className="mb-12"
          variants={fadeIn}
          id="optional-deps"
        >
          <h3 className="text-2xl font-bold mb-6">4. Optional dependencies</h3>
          <p className="mb-4">
            Some components may require additional dependencies. These will be
            clearly marked in the component documentation. Install them only if
            you need those specific components.
          </p>

          <div className="border border-blue-500 rounded-lg p-6 mb-12 ">
            <div className="flex items-start gap-3">
              <Palette className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-2">Utility Function</h3>
                <p className="">
                  Many components use a{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                    cn
                  </code>{" "}
                  utility function for conditional class names. You can create
                  it with:
                </p>
                <pre className="bg-zinc-900 p-4 rounded-md mt-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    {`import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}`}
                  </code>
                </pre>
                <p className=" mt-4">Install the required packages:</p>
                <pre className="bg-zinc-900 p-4 rounded-md mt-2 overflow-x-auto">
                  <code className="text-sm text-purple-400">
                    npm install clsx tailwind-merge
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>

      <motion.aside
        className="w-full lg:w-64 p-8 border-l border-zinc-800"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="sticky top-8">
          <div className="flex items-center gap-2 mb-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span>On this page</span>
          </div>

          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#get-started"
                  className={cn(
                    "transition-colors",
                    activeSection === "get-started"
                      ? "text-orange-400 font-medium"
                      : ""
                  )}
                >
                  Get started
                </a>
              </li>
              <li>
                <a
                  href="#installation"
                  className={cn(
                    "transition-colors",
                    activeSection === "installation"
                      ? "text-orange-400 font-medium"
                      : ""
                  )}
                >
                  Installation
                </a>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="#install-tailwind"
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        activeSection === "install-tailwind"
                          ? "text-orange-400"
                          : ""
                      )}
                    >
                      <span className="text-orange-500">1.</span> Install
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#install-framer"
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        activeSection === "install-framer"
                          ? "text-orange-400"
                          : ""
                      )}
                    >
                      <span className="text-orange-500">2.</span> Install Framer
                      Motion
                    </a>
                  </li>
                  <li>
                    <a
                      href="#install-icons"
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        activeSection === "install-icons"
                          ? "text-orange-400"
                          : ""
                      )}
                    >
                      <span className="text-orange-500">3.</span> Install lucide
                      icons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#thats-it"
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        activeSection === "thats-it" ? "text-orange-400" : ""
                      )}
                    >
                      <span className="text-orange-500">4.</span> That&apos;s
                      it.
                    </a>
                  </li>
                  <li>
                    <a
                      href="#optional-deps"
                      className={cn(
                        "flex items-center gap-2 transition-colors",
                        activeSection === "optional-deps"
                          ? "text-orange-400"
                          : ""
                      )}
                    >
                      <span className="text-orange-500">5.</span> Optional
                      dependencies
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </motion.aside>
    </div>
  );
}
