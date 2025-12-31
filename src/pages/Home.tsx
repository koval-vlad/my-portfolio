import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { ParticleBackground } from '@/components/ui/particle-background';
import { useState, useEffect } from 'react';

export default function Home() {
    const [weather, setWeather] = useState<'sunny' | 'rain' | 'snow'>('sunny');

    useEffect(() => {
        const savedWeather = localStorage.getItem('homeWeather') as 'sunny' | 'rain' | 'snow';
        if (savedWeather) {
            setWeather(savedWeather);
        }

        // Listen for custom weather change events from header (same tab)
        const handleWeatherChange = (e: CustomEvent) => {
            setWeather(e.detail as 'sunny' | 'rain' | 'snow');
        };

        // Listen for storage changes to update weather when changed in other tabs
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'homeWeather' && e.newValue) {
                setWeather(e.newValue as 'sunny' | 'rain' | 'snow');
            }
        };

        window.addEventListener('weatherChange', handleWeatherChange as EventListener);
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('weatherChange', handleWeatherChange as EventListener);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <Box className="px-0 py-2 relative min-h-[400px]">
            <ParticleBackground className="absolute inset-0 z-0" weather={weather} />
            <Box className="relative z-10">
                <Paper elevation={2} className="p-2 rounded-xl">
                    <Typography variant="h4" as="h1" className="mb-2">
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant="p" className="mb-4">
                        This is a portfolio of my professional and personal applications demonstrating full-stack development capabilities.
                        Use the navigation menu above to explore different sections of my work.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
