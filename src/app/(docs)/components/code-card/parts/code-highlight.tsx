"use client";
import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/github-dark.css";
import { Copy, Check } from "lucide-react";

interface CodeHighlightProps {
  code?: string;
  inTab?: boolean;
  withExpand?: boolean;
  lang?: "tsx" | "shell";
}

const CodeHighlight = ({
  code,
  inTab = false,
  withExpand = false,
  lang = "tsx",
}: CodeHighlightProps) => {
  const [copied, setCopied] = useState(false);
  const [expand, setExpanded] = useState(!withExpand);
  
  return (
    <div className="relative rounded-md">
      <button
        className={`absolute ${inTab || lang === "shell" ? "right-1 top-1" : "right-4 top-4"} h-8 w-8 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
        onClick={() => {
          navigator.clipboard.writeText(code || "");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <div
        className={`${expand ? "max-h-96 overflow-auto" : "max-h-32 overflow-hidden"} rounded-md`}
      >
        <Highlight className={`h-full ${lang}`}>{code}</Highlight>
      </div>
      {withExpand && (
        <div
          className={`absolute bottom-${inTab ? "0" : "2"} flex w-full items-center justify-center transition-opacity duration-300`}
        >
          <button
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => {
              setExpanded((prev) => !prev);
            }}
          >
            {expand ? "Collapse" : "Expand"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeHighlight;