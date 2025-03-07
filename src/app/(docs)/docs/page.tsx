import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Spectrum UI</h1>
        <p className="text-xl">
          Beautifully designed components built with Aceternity UI and Magic UI
          that you can copy and paste into your apps. Accessible. Customizable. Open Source.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/docs/installation" className="px-4 py-2 border rounded-md flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="https://github.com/arihantcodes/spectrum-ui" className="px-4 py-2 border rounded-md flex items-center gap-2">
            <Github className="h-4 w-4" /> GitHub
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p>
          Spectrum UI is a collection of re-usable components built using
          <Link href="https://ui.aceternity.com/" className="font-medium underline ml-1">Aceternity UI</Link> and
          <Link href="https://magicui.design/" className="font-medium underline ml-1">Magic UI</Link>,
          that you can copy and paste into your apps.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">What do you mean by copy and paste?</h3>
            <p>Spectrum UI is not a component library. It's a collection of re-usable components that you can copy and paste into your projects.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">What? Why?</h3>
            <p>The goal is to provide beautiful, accessible, and customizable components that you can adapt to your needs.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="space-y-2">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Is this a component library?</summary>
            <p className="mt-2">No, Spectrum UI is not a component library. It's a collection of re-usable components for your projects.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I use this in my project?</summary>
            <p className="mt-2">Yes, it is free for personal and commercial use. No attribution required.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Which frameworks are supported?</summary>
            <p className="mt-2">These components work in any React-based framework, including Next.js and Gatsby.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I use this with JavaScript?</summary>
            <p className="mt-2">Yes. These components use TypeScript for type safety but can be used in JavaScript projects.</p>
          </details>
        </div>
      </div>

      {/* Credits Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Credits</h2>
        <p>
          Built with
          <Link href="https://ui.aceternity.com/" className="font-medium underline ml-1">Aceternity UI</Link>,
          <Link href="https://magicui.design/" className="font-medium underline ml-1">Magic UI</Link>,
          <Link href="https://nextjs.org" className="font-medium underline ml-1">Next.js</Link>, and
          <Link href="https://www.typescriptlang.org" className="font-medium underline ml-1">TypeScript</Link>.
        </p>
      </div>
    </div>
  );
}