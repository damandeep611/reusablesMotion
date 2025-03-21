import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Github,
  LayoutIcon,
  PaintbrushIcon,
  ZapIcon,
} from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className=" mx-auto space-y-12 py-8 px-4">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Spectrum Motion
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Beautiful, performant animation components for React that you can
          simply copy and paste into your projects.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/components"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Browse Components <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/damandeep611/reusablesMotion"
            className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </Link>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-full bg-blue-100">
              <LayoutIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold ml-2">Zero Installation</h3>
          </div>
          <p>
            No CLI tools, no packages to install. Just copy the component code
            and paste it directly into your React project.
          </p>
        </div>
        <div className="rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-full bg-purple-100">
              <ZapIcon className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold ml-2">Powered by Framer Motion</h3>
          </div>
          <p>
            Built on top of the industry most powerful animation library to
            create fluid, responsive interactions.
          </p>
        </div>
        <div className="rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-full bg-green-100">
              <PaintbrushIcon className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold ml-2">Tailwind Compatible</h3>
          </div>
          <p>
            Designed to work seamlessly with Tailwind CSS, making customization
            simple and intuitive.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg mb-3">1. Browse Components</h3>
            <p>
              Explore our library of pre-built motion components - from simple
              hover effects to complex page transitions and interactive UI
              elements.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg mb-3">2. Copy & Paste</h3>
            <p>
              Find a component you like, copy its code, and paste it directly
              into your project. No dependencies to manage (beyond React and
              Framer Motion).
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg mb-3">3. Customize</h3>
            <p>
              Easily modify the component properties, styles, and animation
              parameters to match your design system and specific needs.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg mb-3">4. Ship It</h3>
            <p>
              Enjoy lightweight, optimized animations that enhance your user
              experience without performance penalties.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="space-y-3">
          <details className="border rounded-lg p-4 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              Why copy-paste instead of installing a package?
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3">
              Spectrum Motion gives you complete control over the code. You can
              modify, extend, or simplify each component to suit your specific
              needs without being constrained by a package API or dealing with
              versioning conflicts.
            </p>
          </details>
          <details className="border rounded-lg p-4 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              What are the prerequisites?
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3">
              Your project should already have React, Framer Motion, and
              Tailwind CSS set up. Our components are built with these
              technologies to ensure maximum flexibility and performance.
            </p>
          </details>
          <details className="border rounded-lg p-4 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              Can I use these in commercial projects?
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3">
              Yes! All components are available under the MIT license, which
              allows use in both personal and commercial projects with no
              attribution required.
            </p>
          </details>
          <details className="border rounded-lg p-4 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              Does this work with Next.js and other React frameworks?
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3">
              Absolutely! Our components work with any React-based framework
              including Next.js, Remix, Gatsby, and Create React App. The
              examples show usage in Next.js, but the principles apply
              universally.
            </p>
          </details>
        </div>
      </div>

      {/* Usage Example Teaser */}
      <div className="rounded-lg border p-6 ">
        <h2 className="text-2xl font-bold mb-4">Quick Example</h2>
        <div className=" p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">
            <code>
              {`// Simply copy and paste this component
import { motion } from 'framer-motion';

export const FadeInCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-lg border shadow-sm"
  >
    {children}
  </motion.div>
);`}
            </code>
          </pre>
        </div>
      </div>

      {/* Credits Section */}
      <div className="pt-8 border-t">
        <p className="text-center text-gray-600">
          Inspired by{" "}
          <Link
            href="https://ui.aceternity.com/"
            className="font-medium text-blue-600 hover:underline"
          >
            Aceternity UI
          </Link>{" "}
          and{" "}
          <Link
            href="https://magicui.design/"
            className="font-medium text-blue-600 hover:underline"
          >
            Magic UI
          </Link>
          . Built with{" "}
          <Link
            href="https://www.framer.com/motion/"
            className="font-medium text-blue-600 hover:underline"
          >
            Framer Motion
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com"
            className="font-medium text-blue-600 hover:underline"
          >
            Tailwind CSS
          </Link>
          ,{" "}
          <Link
            href="https://nextjs.org"
            className="font-medium text-blue-600 hover:underline"
          >
            Next.js
          </Link>
          , and{" "}
          <Link
            href="https://www.typescriptlang.org"
            className="font-medium text-blue-600 hover:underline"
          >
            TypeScript
          </Link>
          .
        </p>
      </div>
    </div>
  );
}