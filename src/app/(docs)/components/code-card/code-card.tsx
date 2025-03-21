"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CodeHighlight from "./parts/code-highlight";
import { FileCode, View } from "lucide-react";

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
  className?: string;
}

const CodeCard = ({ children, code, className }: CodeCardProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className={cn("w-full", className)}>
      <div className="flex space-x-1 rounded-lg  p-1 ">
        <TabButton
          isActive={activeTab === "preview"}
          onClick={() => setActiveTab("preview")}
        >
          <View size={15} />
          Preview
        </TabButton>
        <TabButton
          isActive={activeTab === "code"}
          onClick={() => setActiveTab("code")}
        >
          <FileCode size={15} />
          Code
        </TabButton>
      </div>

      <div className="mt-2 relative">
        <TabPanel isActive={activeTab === "preview"}>
          {/* component preview height and div container */}
          <div className="rounded-md min-h-[350px] flex items-center justify-center  border-1 border-gray-800">
            {children}
          </div>
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
        "relative flex items-center justify-between gap-2 px-4 py-2 rounded-md font-semibold font-regular text-md transition-colors duration-200",
        isActive ? " shadow-sm bg-gray-800" : " "
      )}
    >
      {children}
      {/* this following isactive showed a bar line below active tab button */}
      {/* {isActive && (
        <motion.div
          className="absolute bottom-0 left-0  bg-gray-100 my-1 rounded-full"
          layoutId="activeTab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )} */}
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