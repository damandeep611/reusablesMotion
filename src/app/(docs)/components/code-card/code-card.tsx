"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CodeHighlight from "./parts/code-highlight";

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
  className?: string;
}

const CodeCard = ({ children, code, className }: CodeCardProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className={cn("w-full", className)}>
      <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
        <TabButton
          isActive={activeTab === "preview"}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </TabButton>
        <TabButton
          isActive={activeTab === "code"}
          onClick={() => setActiveTab("code")}
        >
          Code
        </TabButton>
      </div>

      <div className="mt-2 relative">
        <TabPanel isActive={activeTab === "preview"}>
          <div className="rounded-md border-1">{children}</div>
        </TabPanel>

        <TabPanel isActive={activeTab === "code"}>
          <div className="rounded-md border-1">
            <CodeHighlight code={code} inTab />
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ children, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 rounded-md font-semibold font-regular text-sm transition-colors duration-200",
        isActive 
          ? "text-black bg-white shadow-sm" 
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full"
          layoutId="activeTab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>
  );
};

interface TabPanelProps {
  children: React.ReactNode;
  isActive: boolean;
}

const TabPanel = ({ children, isActive }: TabPanelProps) => {
  return (
    <div 
      className={cn(
        "transition-opacity duration-200",
        isActive ? "block opacity-100" : "hidden opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default CodeCard;