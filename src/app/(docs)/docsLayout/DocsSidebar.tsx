"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X, Search, ExternalLink } from "lucide-react"
import Link from "next/link"
import { DOCS } from "./sidebar.constants"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
}

export default function EnhancedSidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState<Array<{ group: string; item: any }>>([])
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  // Initialize expanded groups
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    DOCS.forEach((group) => {
      // Check if any child is active
      const hasActiveChild = group.children.some(
        (child) => child.url === pathname
      );
      initialExpanded[group.groupKey] =
        hasActiveChild || group.groupKey === "gettingStart";
    });
    setExpandedGroups(initialExpanded);
  }, [pathname]);

  // Handle search
  // useEffect(() => {
  //   if (searchQuery.trim() === "") {
  //     setSearchResults([])
  //     return
  //   }

  //   const query = searchQuery.toLowerCase()
  //   const results: Array<{ group: string; item: any }> = []

  //   DOCS.forEach((group) => {
  //     group.children.forEach((item) => {
  //       if (item.label.toLowerCase().includes(query)) {
  //         results.push({
  //           group: group.groupValue,
  //           item,
  //         })
  //       }
  //     })
  //   })

  //   setSearchResults(results)
  // }, [searchQuery])

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Theme classes
  const themeClasses = {
    background: theme === "light" ? "bg-white" : "bg-gray-900",
    text: theme === "light" ? "text-gray-800" : "text-gray-100",
    border: theme === "light" ? "border-gray-200" : "border-gray-700",
    hover: theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-800",
    active:
      theme === "light"
        ? "bg-blue-50 text-blue-600"
        : "bg-blue-900 text-blue-300",
    muted: theme === "light" ? "text-gray-600" : "text-gray-400",
    badge:
      theme === "light"
        ? "bg-blue-100 text-blue-800"
        : "bg-blue-900 text-blue-300",
    input:
      theme === "light"
        ? "bg-gray-50 border-gray-300"
        : "bg-gray-800 border-gray-700",
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className={`fixed top-4 left-4 z-50 p-2 rounded-md ${themeClasses.background} shadow-md md:hidden`}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Sidebar */}
      <motion.aside
        className={`hidden md:flex flex-col h-screen ${
          themeClasses.background
        } border-r ${themeClasses.border} ${
          isOpen ? "w-72" : "w-16"
        } transition-all duration-300 ${className}`}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`flex items-center justify-between p-4 border-b ${themeClasses.border}`}
        >
          {isOpen && (
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <h1 className={`text-lg font-semibold ${themeClasses.text}`}>
                Docs
              </h1>
            </motion.div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-1 rounded-md ${themeClasses.hover} transition-colors`}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              <span className="sr-only">Toggle theme</span>
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={toggleSidebar}
              className={`p-1 rounded-md ${themeClasses.hover} transition-colors`}
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <ChevronRight
                className={`h-5 w-5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="p-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-md ${themeClasses.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto py-2">
          {/* Search Results */}
          {/* <AnimatePresence>
            {isOpen && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mx-3 mb-4 p-3 rounded-md ${
                  theme === "light" ? "bg-gray-50" : "bg-gray-800"
                }`}
              >
                <h3 className={`text-sm font-medium mb-2 ${themeClasses.text}`}>
                  Search Results
                </h3>
                <ul className="space-y-1">
                  {searchResults.map((result, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={result.item.url}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md ${
                          pathname === result.item.url
                            ? themeClasses.active
                            : `${themeClasses.muted} hover:${themeClasses.text}`
                        }`}
                        onClick={() => setSearchQuery("")}
                      >
                        <span className="truncate">{result.item.label}</span>
                        {result.item.new && (
                          <span
                            className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.badge}`}
                          >
                            New
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence> */}

          {/* Main Navigation */}
          {DOCS.map((group) => (
            <div key={group.groupKey} className="mb-2">
              {isOpen ? (
                <>
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium ${themeClasses.text} ${themeClasses.hover} transition-colors`}
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
                        <ul className="pl-4 pr-2 space-y-1 py-1">
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
                                className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md ${
                                  pathname === item.url
                                    ? themeClasses.active
                                    : `${themeClasses.muted} hover:${themeClasses.text}`
                                }`}
                                target={
                                  item.url.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                              >
                                <span className="truncate flex-1">
                                  {item.label}
                                </span>
                                {item.url.startsWith("http") && (
                                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                )}
                                {item.new && (
                                  <span
                                    className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.badge}`}
                                  >
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
                </>
              ) : (
                <div className="flex flex-col items-center py-2">
                  <button
                    onClick={() => toggleGroup(group.groupKey)}
                    className={`p-2 rounded-md ${themeClasses.hover} transition-colors`}
                    title={group.groupValue}
                  >
                    <span className={`text-xs font-bold ${themeClasses.text}`}>
                      {group.groupValue.substring(0, 1)}
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {isOpen && (
          <div className={`p-4 border-t ${themeClasses.border} mt-auto`}>
            <div className={`text-xs ${themeClasses.muted}`}>
              <p>Documentation v1.0.0</p>
              <p className="mt-1">© 2024 All rights reserved</p>
            </div>
          </div>
        )}
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
              className={`fixed top-0 left-0 z-50 w-72 h-screen ${themeClasses.background} border-r ${themeClasses.border} md:hidden`}
            >
              <div
                className={`flex items-center justify-between p-4 border-b ${themeClasses.border}`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">D</span>
                  </div>
                  <h1 className={`text-lg font-semibold ${themeClasses.text}`}>
                    Docs
                  </h1>
                </div>
                <button
                  onClick={toggleMobileSidebar}
                  className={`p-1 rounded-md ${themeClasses.hover} transition-colors`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className={`w-full pl-10 pr-4 py-2 text-sm rounded-md ${themeClasses.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-140px)]">
                {/* Search Results */}
                {/* <AnimatePresence>
                  {searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mx-3 mb-4 p-3 rounded-md ${
                        theme === "light" ? "bg-gray-50" : "bg-gray-800"
                      }`}
                    >
                      <h3
                        className={`text-sm font-medium mb-2 ${themeClasses.text}`}
                      >
                        Search Results
                      </h3>
                      <ul className="space-y-1">
                        {searchResults.map((result, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={result.item.url}
                              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md ${
                                pathname === result.item.url
                                  ? themeClasses.active
                                  : `${themeClasses.muted} hover:${themeClasses.text}`
                              }`}
                              onClick={() => {
                                setSearchQuery("");
                                toggleMobileSidebar();
                              }}
                            >
                              <span className="truncate">
                                {result.item.label}
                              </span>
                              {result.item.new && (
                                <span
                                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.badge}`}
                                >
                                  New
                                </span>
                              )}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence> */}

                {/* Main Navigation */}
                {DOCS.map((group) => (
                  <div key={group.groupKey} className="mb-2">
                    <button
                      onClick={() => toggleGroup(group.groupKey)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium ${themeClasses.text} ${themeClasses.hover} transition-colors`}
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
                          <ul className="pl-4 pr-2 space-y-1 py-1">
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
                                  className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md ${
                                    pathname === item.url
                                      ? themeClasses.active
                                      : `${themeClasses.muted} hover:${themeClasses.text}`
                                  }`}
                                  onClick={toggleMobileSidebar}
                                  target={
                                    item.url.startsWith("http")
                                      ? "_blank"
                                      : undefined
                                  }
                                >
                                  <span className="truncate flex-1">
                                    {item.label}
                                  </span>
                                  {item.url.startsWith("http") && (
                                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                  )}
                                  {item.new && (
                                    <span
                                      className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.badge}`}
                                    >
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

              <div className={`p-4 border-t ${themeClasses.border} mt-auto`}>
                <div className={`text-xs ${themeClasses.muted}`}>
                  <p>Documentation v1.0.0</p>
                  <p className="mt-1">© 2024 All rights reserved</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

