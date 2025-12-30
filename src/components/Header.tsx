"use client"

import { useState, useEffect } from 'react';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon, Palette, Check, CloudSun, CloudRain, Snowflake } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import vladImage from '../assets/vlad.svg';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [weather, setWeather] = useState<'sunny' | 'rain' | 'snow'>('sunny'); // Default to sunny
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Initialize dark mode and weather state
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('darkMode');

    const shouldBeDark = savedDarkMode === 'true' || (!savedDarkMode && systemPrefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize weather from localStorage
    const savedWeather = localStorage.getItem('homeWeather') as 'sunny' | 'rain' | 'snow';
    if (savedWeather) {
      setWeather(savedWeather);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleLightDark = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Force a re-render by updating state
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }

    // Log current state for debugging
    console.log('Dark mode toggled:', newIsDark);
    console.log('Current classes:', Array.from(document.documentElement.classList));
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleWeatherChange = (newWeather: 'sunny' | 'rain' | 'snow') => {
    setWeather(newWeather);
    localStorage.setItem('homeWeather', newWeather);
    // Dispatch custom event for same-tab communication
    window.dispatchEvent(new CustomEvent('weatherChange', { detail: newWeather }));
  };

  const getThemeDisplayName = (themeName: string) => {
    switch (themeName) {
      case 'theme-bold-tech':
        return 'Bold Tech';
      case 'theme-midnight-bloom':
        return 'Midnight Bloom';
      case 'theme-amethyst-haze':
        return 'Amethyst Haze';
      case 'theme-catppuccin':
        return 'Catppuccin';
      default:
        return themeName;
    }
  };

  return (
    <>
      {/* Header background box */}
      <Box className="fixed top-0 left-0 right-0 h-16 z-40 bg-card border rounded-xl shadow-sm" />

      {/* Header content */}
      <Box className="fixed top-0 left-0 right-0 z-50 rounded-t-xl">
        <Box className="flex justify-between items-center py-2 px-4 max-w-4xl mx-auto">
          <Box className="w-12" />

          <Box className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 bg-background overflow-y-auto">
                <MobileNav currentPath={location.pathname} onClose={handleDrawerToggle} />
              </SheetContent>
            </Sheet>
          </Box>

          <Box className="hidden lg:block">
            <DesktopNav currentPath={location.pathname} />
          </Box>

          <div className="flex items-center gap-2 flex-shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-foreground hover:bg-accent"
                  title="Choose home weather"
                >
                  {weather === 'sunny' && <CloudSun className="h-4 w-4" />}
                  {weather === 'rain' && <CloudRain className="h-4 w-4" />}
                  {weather === 'snow' && <Snowflake className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => handleWeatherChange('sunny')}
                  className="flex items-center cursor-pointer"
                >
                  {weather === 'sunny' && <Check className="mr-2 h-4 w-4" />}
                  <CloudSun className="mr-2 h-4 w-4" />
                  <span className={weather === 'sunny' ? '' : 'ml-6'}>Sunny</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleWeatherChange('rain')}
                  className="flex items-center cursor-pointer"
                >
                  {weather === 'rain' && <Check className="mr-2 h-4 w-4" />}
                  <CloudRain className="mr-2 h-4 w-4" />
                  <span className={weather === 'rain' ? '' : 'ml-6'}>Rain</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleWeatherChange('snow')}
                  className="flex items-center cursor-pointer"
                >
                  {weather === 'snow' && <Check className="mr-2 h-4 w-4" />}
                  <Snowflake className="mr-2 h-4 w-4" />
                  <span className={weather === 'snow' ? '' : 'ml-6'}>Snow</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-foreground hover:bg-accent"
                  title="Choose color theme"
                >
                  <Palette className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => handleThemeChange('theme-bold-tech')}
                  className="flex items-center cursor-pointer"
                >
                  {theme === 'theme-bold-tech' && <Check className="mr-2 h-4 w-4" />}
                  <span className={theme === 'theme-bold-tech' ? '' : 'ml-6'}>Bold Tech</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange('theme-midnight-bloom')}
                  className="flex items-center cursor-pointer"
                >
                  {theme === 'theme-midnight-bloom' && <Check className="mr-2 h-4 w-4" />}
                  <span className={theme === 'theme-midnight-bloom' ? '' : 'ml-6'}>Midnight Bloom</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange('theme-amethyst-haze')}
                  className="flex items-center cursor-pointer"
                >
                  {theme === 'theme-amethyst-haze' && <Check className="mr-2 h-4 w-4" />}
                  <span className={theme === 'theme-amethyst-haze' ? '' : 'ml-6'}>Amethyst Haze</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange('theme-catppuccin')}
                  className="flex items-center cursor-pointer"
                >
                  {theme === 'theme-catppuccin' && <Check className="mr-2 h-4 w-4" />}
                  <span className={theme === 'theme-catppuccin' ? '' : 'ml-6'}>Catppuccin</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLightDark}
              className="w-8 h-8 text-foreground hover:bg-accent"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Avatar className="w-10 h-10">
              <AvatarImage src={vladImage} alt="Vlad" />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
          </div>
        </Box>
      </Box>

      {/* Spacer for fixed header */}
      <Box className="h-16" />
    </>
  );
}
