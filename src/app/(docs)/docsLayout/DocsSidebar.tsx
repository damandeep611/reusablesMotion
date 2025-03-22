"use client"
import { AnimatePresence, motion } from "framer-motion";
import { DOCS } from "./sidebar.constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  Book,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default function DocsSidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Initialize expanded state based on current path
  useEffect(() => {
    // Find which group contains the current path and expand it
    const currentGroup = DOCS.find((group) =>
      group.children.some((item) => item.url === pathname)
    )?.groupKey;

    if (currentGroup) {
      setExpandedGroups((prev) => ({
        ...prev,
        [currentGroup]: true,
      }));
    }
  }, [pathname]);

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  // Animation variants
  const sidebarVariants = {
    open: {
      width: "260px",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      width: "72px",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  // Group content animation
  const groupVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Mobile Header Button */}
      <div className="flex md:hidden items-center p-4">
        <button
          onClick={toggleMobileSidebar}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
          <span className="font-medium">Menu</span>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="open"
        animate={isOpen ? "open" : "closed"}
        className={`hidden md:flex flex-col h-full border-r border-gray-800 bg-gray-900 transition-all duration-300 ${className}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
          {isOpen ? (
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
              <h1 className="text-lg font-semibold">Motion UI Kit</h1>
            </motion.div>
          ) : (
            <motion.div className="flex justify-center w-full">
              <Sparkles className="h-6 w-6 text-blue-400" />
            </motion.div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-md hover:bg-gray-800 transition-colors"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronRight
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Intro section */}
        {isOpen && (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="px-4 py-3 bg-gray-800/40 border-b border-gray-800"
          >
            <p className="text-sm text-gray-300">
              Copy-paste ready motion components built with React, Framer Motion
              & Tailwind CSS
            </p>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-3 scrollbar-thin scrollbar-thumb-gray-700">
          {DOCS.map((group) => (
            <div key={group.groupKey} className="mb-3">
              {isOpen ? (
                <>
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-800/60 rounded-md mx-1"
                  >
                    <div className="flex items-center gap-2">
                      {group.icon || <Book className="h-4 w-4 text-blue-400" />}
                      <span>{group.groupValue}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expandedGroups[group.groupKey] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedGroups[group.groupKey] && (
                      <motion.div
                        variants={groupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                      >
                        <ul className="mt-1 space-y-1 px-3">
                          {group.children.map((item) => {
                            const isActive = pathname === item.url;
                            return (
                              <li key={item.value}>
                                <Link
                                  href={item.url}
                                  className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-md transition-all duration-200 ${
                                    isActive
                                      ? "bg-blue-600/20 text-blue-400 font-medium"
                                      : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                                  }`}
                                >
                                  <span className="truncate">{item.label}</span>
                                  {item.new && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                                      New
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div className="flex justify-center py-2">
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className="p-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                    title={group.groupValue}
                  >
                    {group.icon || <Book className="h-5 w-5 text-blue-400" />}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        {isOpen && (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="p-3 mx-3 mb-3 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50"
          >
            <p className="text-xs text-gray-300 mb-2">
              Need help implementing these components?
            </p>
            <a
              href="/support"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Get support →
            </a>
          </motion.div>
        )}
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={toggleMobileSidebar}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="fixed top-0 left-0 z-50 w-72 h-screen bg-gray-900 text-gray-100 border-r border-gray-800 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                  <h1 className="text-lg font-semibold">Motion UI Kit</h1>
                </div>
                <button
                  onClick={toggleMobileSidebar}
                  className="p-1.5 rounded-md hover:bg-gray-800 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Intro section */}
              <div className="px-4 py-3 bg-gray-800/40 border-b border-gray-800">
                <p className="text-sm text-gray-300">
                  Copy-paste ready motion components built with React, Framer
                  Motion & Tailwind CSS
                </p>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-144px)] py-3">
                {DOCS.map((group) => (
                  <div key={group.groupKey} className="mb-3">
                    <button
                      onClick={() => toggleGroup(group.groupKey)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-800/60 rounded-md mx-1"
                    >
                      <div className="flex items-center gap-2">
                        {group.icon || (
                          <Book className="h-4 w-4 text-blue-400" />
                        )}
                        <span>{group.groupValue}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expandedGroups[group.groupKey] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedGroups[group.groupKey] && (
                        <motion.div
                          variants={groupVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden"
                        >
                          <ul className="mt-1 space-y-1 px-3">
                            {group.children.map((item) => {
                              const isActive = pathname === item.url;
                              return (
                                <motion.li
                                  key={item.value}
                                  whileHover={{ x: 4 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                  }}
                                >
                                  <Link
                                    href={item.url}
                                    className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-md transition-all duration-200 ${
                                      isActive
                                        ? "bg-blue-600/20 text-blue-400 font-medium"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                                    }`}
                                    onClick={toggleMobileSidebar}
                                  >
                                    <span className="truncate">
                                      {item.label}
                                    </span>
                                    {item.new && (
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                                        New
                                      </span>
                                    )}
                                  </Link>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Support banner for mobile */}
                <div className="p-3 mx-3 mt-4 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50">
                  <p className="text-xs text-gray-300 mb-2">
                    Need help implementing these components?
                  </p>
                  <a
                    href="/support"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get support →
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}