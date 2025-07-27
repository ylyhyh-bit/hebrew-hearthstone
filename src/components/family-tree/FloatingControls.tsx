import { Download, RotateCcw, Palette, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface FloatingControlsProps {
  onExport: () => void;
  onReset: () => void;
}

const FloatingControls = ({ onExport, onReset }: FloatingControlsProps) => {
  const { theme, setTheme } = useTheme();

  const controls = [
    {
      icon: Download,
      label: "ייצא עץ משפחה",
      onClick: onExport,
      variant: "default" as const
    },
    {
      icon: RotateCcw,
      label: "אפס מיקום",
      onClick: onReset,
      variant: "outline" as const
    },
    {
      icon: theme === 'dark' ? Sun : Moon,
      label: theme === 'dark' ? "מצב יום" : "מצב לילה",
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      variant: "ghost" as const
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      {controls.map((control, index) => {
        const Icon = control.icon;
        return (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant={control.variant}
                size="icon"
                onClick={control.onClick}
                className={cn(
                  "w-12 h-12 rounded-full shadow-floating glass border-glass-border",
                  "hover:scale-110 hover:shadow-xl transition-all duration-300",
                  "animate-float group"
                )}
                style={{
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="glass border-glass-border hebrew-text"
              dir="rtl"
            >
              {control.label}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default FloatingControls;