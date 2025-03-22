import React from 'react';
import fs from 'fs/promises';
import { cn } from '@/lib/utils';
import CodeCard from './code-card/code-card';

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
}

const PreviewCodeCard = async ({ className, path, children }: PreviewCodeCardProps) => {
  const demoCode = await fs.readFile(path, 'utf8');

  if (!demoCode) {
    console.error(`No demo code found in ${path}`);
    return null;
  }

  return (
    <CodeCard code={demoCode} className={cn("mb-14 mt-5", className)}>
      <div className="flex items-center justify-center py-4 ">{children}</div>
    </CodeCard>
  );
};

export default PreviewCodeCard;