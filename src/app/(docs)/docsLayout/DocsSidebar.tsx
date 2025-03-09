"use client"
import { AnimatePresence, motion } from "framer-motion";
import { DOCS } from "./sidebar.constants";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default function DocsSidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {
      gettingStarted: true,
      components: true,
      "Follow for more updates": true,
    }
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  // toggle sidebar on descrktp
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  // mobile sidebar
  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      {/* button toggle button */}
      <button
        onClick={toggleMobileSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {/* desktop docs sidebar */}
      <motion.aside
        className={`hidden md:flex flex-col h-screen border-r border-gray-200 ${
          isOpen ? "w-64" : "w-16"
        } transition-all duration-300 ${className}`}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {isOpen && (
            <motion.h1
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Documentation
            </motion.h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronRight
              className={`h-5 w-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {DOCS.map((group) => (
            <div key={group.groupKey} className="mb-2">
              {isOpen ? (
                <>
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <span>{group.groupValue}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedGroups[group.groupKey] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedGroups[group.groupKey] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="px-4">
                          {group.children.map((item) => (
                            <li key={item.value}>
                              <Link
                                href={item.url}
                                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md "
                              >
                                <span>{item.label}</span>
                                {item.new && (
                                  <span className="inline-flex items-center px-1.5  py-0.5 rounded-full text-xs font-medium bg-blue-100">
                                    New
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div>
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    title={group.groupValue}
                  >
                    <span className="text-xs font-bold">
                      {group.groupValue.substring(0, 1)}
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={toggleMobileSidebar}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 left-0 z-50 w-64 h-screen bg-white border-r border-gray-200 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h1 className="text-lg font-semibold">Documentation</h1>
                <button
                  onClick={toggleMobileSidebar}
                  className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-64px)] py-2">
                {DOCS.map((group) => (
                  <div key={group.groupKey} className="mb-2">
                    <button
                      onClick={() => toggleGroup(group.groupKey)}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <span>{group.groupValue}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedGroups[group.groupKey] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedGroups[group.groupKey] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-4 pr-2">
                            {group.children.map((item) => (
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
                                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md ${
                                    pathname === item.url
                                      ? "bg-blue-50 text-blue-600 font-medium"
                                      : "text-gray-600 hover:text-gray-900"
                                  }`}
                                  onClick={toggleMobileSidebar}
                                >
                                  <span className="truncate">{item.label}</span>
                                  {item.new && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                      New
                                    </span>
                                  )}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}