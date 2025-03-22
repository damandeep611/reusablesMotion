"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExpandSidebar() {
  return (
    <section className="flex w-full min-h-screen">
      <SidebarVanilla />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Component Documentation</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DummyCard 
              title="Getting Started" 
              description="Learn how to install and set up the UI component library in your project."
            />
            <DummyCard 
              title="Design Principles" 
              description="Understand the core design principles behind our component system."
            />
            <DummyCard 
              title="Theming" 
              description="Customize the look and feel of components to match your brand."
            />
            <DummyCard 
              title="Accessibility" 
              description="Best practices for creating accessible interfaces with our components."
            />
          </div>
        </div>
      </main>
    </section>
  );
}

interface DummyCardProps {
  title: string;
  description: string;
}
// Dummy card component for main content
function DummyCard({ title, description }: DummyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <Link href="/docs" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

interface MenuChild {
  label: string;
  value: string;
  url: string;
  new?: boolean;
}

interface SidebarMenu {
  menuLabel: string;
  menuKey: string;
  children: MenuChild[];
}

const SidebarItems: SidebarMenu[] = [
  // intro menu item
  {
    menuLabel: "Follow for More updates",
    menuKey: "follow-us",
    children: [
      {
        label: "Twitter @dev",
        value: "twitter@dev",
        url: "https://x.com",
      },
      {
        label: "Youtube",
        value: "youtube@dev",
        url: "https://youtube.com",
      },
    ],
  },
  {
    menuLabel: "Components",
    menuKey: "components",
    children: [
      {
        label: "Buttons",
        value: "buttons",
        url: "/docs",
      },
      {
        label: "Cards",
        value: "cards",
        url: "/docs",
      },
      {
        label: "Background Effect",
        value: "background-effect",
        url: "/docs",
      },
      {
        label: "Globe Animation",
        value: "globe-animation",
        url: "/docs",
        new: true,
      },
      {
        label: "Beam Effect",
        value: "beam-effect",
        url: "/docs",
        new: true,
      },
      {
        label: "Slider",
        value: "slider",
        url: "/docs",
      },
      {
        label: "Dock",
        value: "dock",
        url: "/docs",
      },
      {
        label: "Navbar",
        value: "navbar",
        url: "/docs",
        new: true,
      },
      {
        label: "Toggle Animations",
        value: "toggle-animation",
        url: "/docs",
      },
    ],
  },
];

interface ExpandSidebarProps {
  className?: string;
}

function SidebarVanilla({ className }: ExpandSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );
  const pathname = usePathname();

  useEffect(() => {
    // Find which group contains the current path and expand it
    const currentGroup = SidebarItems.find((item) =>
      item.children.some((item) => item.url === pathname)
    )?.menuKey;

    if (currentGroup) {
      setExpandedGroups((prev) => ({
        ...prev,
        [currentGroup]: true,
      }));
    }
  }, [pathname]);

  const toggleGroup = (menuKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };
  
  // Toggle sidebar on desktop
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.aside
      className={`h-screen overflow-hidden border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ${className || ""}`}
      initial={false}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <ChevronRight
            className={`h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            } `}
          />
        </button>
      </div>
      
      {/* Sidebar main content menu and menu items */}
      <div className="h-[calc(100vh-64px)] overflow-y-auto py-2">
        {SidebarItems.map((menu) => (
          <div key={menu.menuKey} className="mb-2">
            {isOpen ? (
              <>
                <button
                  onClick={() => toggleGroup(menu.menuKey)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-md mx-2"
                >
                  <span>{menu.menuLabel}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedGroups[menu.menuKey] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedGroups[menu.menuKey] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <ul className="pl-4 pr-2 py-1">
                        {menu.children.map((item) => (
                          <li key={item.value} className="my-1">
                            <Link
                              href={item.url}
                              className="flex items-center gap-2 px-4 py-2 text-sm rounded-md relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                            >
                              <motion.span
                                className="relative block"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                {item.label}
                              </motion.span>
                              {item.new && (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white">
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
              <div className="flex justify-center py-2">
                <button
                  onClick={() => toggleGroup(menu.menuKey)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title={menu.menuLabel}
                >
                  <span className="text-xs font-bold">
                    {menu.menuLabel.substring(0, 1)}
                  </span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.aside>
  );
}