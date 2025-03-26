"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Search,
  FileText,
  Layers,
  Box,
  Brain,
  File,
  CreditCard,
  MessageSquare,
  Video,
  BarChart,
  Edit,
  Terminal,
  Type,
  Share2,
} from "lucide-react"
import Link from "next/link"
import ThemeButton from "@/components/reusableMotion/ThemeButton";

type MenuItem = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  path?: string;
  isNew?: boolean;
  children?: MenuItem[];
};

// Components menu items
const componentItems: MenuItem[] = [
  {
    id: "get-started",
    title: "Get Started",
    children: [
      {
        id: "introduction",
        title: "Introduction",
        icon: <FileText className="w-4 h-4" />,
        path: "/introduction",
      },
    ],
  },
  {
    id: "blocks",
    title: "Blocks",
    children: [
      {
        id: "hero",
        title: "Hero",
        icon: <Layers className="w-4 h-4" />,
        children: [
          {
            id: "designer",
            title: "Designer",
            path: "/blocks/hero/designer",
          },
          {
            id: "concept",
            title: "Concept",
            path: "/blocks/hero/concept",
            isNew: true,
          },
          {
            id: "developer",
            title: "Developer",
            path: "/docs/herosections",
          },
        ],
      },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    icon: <File className="w-4 h-4" />,
    children: [
      {
        id: "page-01",
        title: "Page 01",
        icon: <File className="w-4 h-4" />,
        path: "/pages/page-01",
      },
      {
        id: "page-02",
        title: "Page 02",
        icon: <File className="w-4 h-4" />,
        path: "/pages/page-02",
        isNew: true,
      },
    ],
  },
  {
    id: "components",
    title: "Components",
    children: [
      {
        id: "card-section",
        title: "Cards",
        icon: <CreditCard className="w-4 h-4" />,
        path: "/docs/cards",
      },
      {
        id: "buttons",
        title: "Buttons",
        icon: <Box className="w-4 h-4" />,
        path: "/components/buttons",
      },
      {
        id: "footer-section",
        title: "Footer",
        icon: <FileText className="w-4 h-4" />,
        path: "/docs/footer",
        isNew: true,
      },
      {
        id: "hero-sections",
        title: "Hero Sections",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/herosections",
      },
      {
        id: "mix-section",
        title: "Mix",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/mix",
      },
      {
        id: "team-section",
        title: "Team Showcase",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/team",
      },
      {
        id: "dock-menu",
        title: "Dock Menu",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/dockmenus",
        isNew: true,
      },
      {
        id: "pricing-section",
        title: "Pricing",
        icon: <Layers className="w-4 h-4" />,
        path: "/components/charts",
      },
      {
        id: "sidebar-section",
        title: "Sidebar",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/sidebar",
      },
      {
        id: "skill-marquee",
        title: "Skill Marquee",
        icon: <Layers className="w-4 h-4" />,
        path: "/docs/skillmarquee",
      },
    ],
  },
];

// Templates menu items - Gen AI landing page templates
const templateItems: MenuItem[] = [
  {
    id: "landing-pages",
    title: "Landing Pages",
    children: [
      {
        id: "ai-assistant",
        title: "AI Assistant",
        icon: <Brain className="w-4 h-4" />,
        path: "/templates/ai-assistant",
        isNew: true,
      },
      {
        id: "image-generator",
        title: "Image Generator",
        icon: <Layers className="w-4 h-4" />,
        path: "/templates/image-generator",
      },
      {
        id: "chatbot",
        title: "Chatbot Platform",
        icon: <MessageSquare className="w-4 h-4" />,
        path: "/templates/chatbot",
      },
      {
        id: "text-to-video",
        title: "Text to Video",
        icon: <Video className="w-4 h-4" />,
        path: "/templates/text-to-video",
        isNew: true,
      },
    ],
  },
  {
    id: "dashboards",
    title: "Dashboards",
    children: [
      {
        id: "ai-analytics",
        title: "AI Analytics",
        icon: <BarChart className="w-4 h-4" />,
        path: "/templates/ai-analytics",
      },
      {
        id: "content-studio",
        title: "Content Studio",
        icon: <Edit className="w-4 h-4" />,
        path: "/templates/content-studio",
      },
      {
        id: "prompt-engineer",
        title: "Prompt Engineer",
        icon: <Terminal className="w-4 h-4" />,
        path: "/templates/prompt-engineer",
        isNew: true,
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    children: [
      {
        id: "ai-copywriter",
        title: "AI Copywriter",
        icon: <Type className="w-4 h-4" />,
        path: "/templates/ai-copywriter",
      },
      {
        id: "seo-optimizer",
        title: "SEO Optimizer",
        icon: <Search className="w-4 h-4" />,
        path: "/templates/seo-optimizer",
      },
      {
        id: "social-media",
        title: "Social Media Manager",
        icon: <Share2 className="w-4 h-4" />,
        path: "/templates/social-media",
        isNew: true,
      },
    ],
  },
];

const NewBadge = () => (
  <span className="px-1 py-0.5  text-[10px] font-medium bg-green-500/80 text-white rounded-md">
    New
  </span>
);

type MenuItemProps = {
  item: MenuItem;
  level: number;
  activePath: string;
  onNavigate: (path: string) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  level,
  activePath,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(
    activePath.startsWith(item.path || "") ||
      item.children?.some((child) => activePath.startsWith(child.path || ""))
  );

  const hasChildren = item.children && item.children.length > 0;
  const isActive = activePath === item.path;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (item.path) {
      onNavigate(item.path);
    } else if (hasChildren) {
      handleToggle();
    }
  };

  return (
    <div className="w-full">
      <Link
        href={item.path || "/docs"}
        className={`flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer ${
          isActive ? " font-bold " : " hover:font-semibold  "
        } ${level === 0 ? "font-medium" : ""}`}
        style={{ paddingLeft: `${level * 12 + 16}px` }}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {item.icon && <span>{item.icon}</span>}
          <span className="truncate">{item.title}</span>
          {item.isNew && <NewBadge />}
        </div>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        )}
      </Link>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {item.children?.map((child) => (
              <MenuItem
                key={child.id}
                item={child}
                level={level + 1}
                activePath={activePath}
                onNavigate={onNavigate}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type SidebarProps = {
  activePath?: string;
  onNavigate?: (path: string) => void;
};

// Update the Sidebar component to use the appropriate menu items based on the active tab
export const LibrarySidebar: React.FC<SidebarProps> = ({
  activePath = "/introduction",
  onNavigate = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<"components" | "templates">(
    "components"
  );

  // Get the appropriate menu items based on the active tab
  const menuItems = activeTab === "components" ? componentItems : templateItems;

  return (
    <div className="flex flex-col h-full  w-64 ">
      {/* Logo and Search */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/" className="flex items-center">
            <span className="text-green-400 text-xl">🥥</span>
            <span className="font-bold text-lg">ReuseMotion</span>
          </Link>
          <span className="ml-1 text-xs font-medium  rounded-md">
            <ThemeButton />
          </span>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1.5 pl-10 pr-4  border border-gray-700 rounded-md text-sm  focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs ">Ctrl</span>
            <span className="mx-1 text-xs ">K</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "components" ? " border-b-2" : ""
          }`}
          onClick={() => setActiveTab("components")}
        >
          Components
        </button>
        <button
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "templates" ? " border-b-2" : ""
          }`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="py-2">
            {item.title && (
              <h3 className="px-4 py-1 text-xs font-bold text-orange-700 uppercase">
                {item.title}
              </h3>
            )}
            {item.children?.map((subItem) => (
              <div key={subItem.id} className="">
                <MenuItem
                  key={subItem.id}
                  item={subItem}
                  level={0}
                  activePath={activePath}
                  onNavigate={onNavigate}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-xs ">
        <div className="flex items-center justify-between">
          <span>
            We just updated to Tailwind CSS v4! If there is an issue, reach out!
          </span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

