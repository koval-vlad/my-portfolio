import { useEffect, useState } from 'react';

type Theme = 'bold-tech' | 'midnight-bloom' | 'amethyst-haze' | 'catppuccin';
type Mode = 'light' | 'dark';

const DynamicBackground = () => {
  const [theme, setTheme] = useState<Theme>('bold-tech');
  const [mode, setMode] = useState<Mode>('dark');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      const themeClass = Array.from(html.classList).find(c => c.startsWith('theme-')) || 'theme-bold-tech';

      setMode(isDark ? 'dark' : 'light');
      setTheme((themeClass.replace('theme-', '').replace('-dark', '') as Theme) || 'bold-tech');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Define the base styles for each theme/mode combo (from https://tailkits.com/components/tailwind-background-snippets/)
  const backgroundMap: Record<Theme, Record<Mode, string>> = {
    'bold-tech': {
      light: "absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]",
      dark: "absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    },
    'midnight-bloom': {
      light: "absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]",
      dark: "bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"
    },
    'amethyst-haze': {
      light: "absolute top-0 z-[-2] rotate-180 transform bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]",
      dark: "h-full w-full bg-black [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[1000px] [&>div]:w-[1000px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
    },
    'catppuccin': {
      light: "h-full w-full [&>div]:absolute [&>div]:top-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-l [&>div]:from-blue-200 [&>div]:to-white",
      dark: "h-full w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    }
  };

  return (
    <div 
      className={`fixed inset-0 -z-10 h-full w-full transition-all duration-1000 ease-in-out ${backgroundMap[theme][mode]}`}
    >
      {/* The 'Glow' div targeted by the [&>div] selector */}
      <div />
    </div>
  );
};

export default DynamicBackground;