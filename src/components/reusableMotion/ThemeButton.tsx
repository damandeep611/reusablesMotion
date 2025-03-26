import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //after mount swtich
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg "
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <RxSun size={20} /> : <RxMoon size={20} />}
        </button>
      )}
    </div>
  );
}
