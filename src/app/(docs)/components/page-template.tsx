import React from 'react';
import { cn } from '@/lib/utils';


interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  return (
    <section className={cn("flex flex-col gap-3 pt-16", className)}>
      {title && (
        <h1
          id={title.toUpperCase().replace(/\s+/g, "-")}
          className="text-3xl font-bold capitalize scroll-m-20"
        >
          {title}
          <a
            href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="ml-2 opacity-0 hover:opacity-100 text-blue-500"
            aria-label={`Link to ${title}`}
          >
            #
          </a>
        </h1>
      )}
      {description && <p className="text-lg text-gray-400">{description}</p>}
      {children}
    </section>
  );
};

const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  const id = children?.toString()?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <h2 
      id={id} 
      className="mb-2 border-b border-b-gray-600 pb-2 font-semibold scroll-m-20"
    >
      {children}
      <a 
        href={`#${id}`} 
        className="ml-2 opacity-0 hover:opacity-100 text-blue-500"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
    </h2>
  );
};

export { PageTemplate, PageSubTitle };