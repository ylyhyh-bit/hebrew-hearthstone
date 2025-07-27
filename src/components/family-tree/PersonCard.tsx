import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PersonData {
  name: string;
  hebrewName: string;
  birthYear?: number;
  gender: 'male' | 'female';
  relationship?: string;
  photo?: string;
  isAlive?: boolean;
}

interface PersonCardProps {
  data: PersonData;
  selected?: boolean;
}

const PersonCard = memo(({ data, selected }: PersonCardProps) => {
  const { name, hebrewName, birthYear, gender, relationship, photo, isAlive = true } = data;
  
  const initials = hebrewName.split(' ').map(word => word[0]).join('');
  
  return (
    <div 
      className={cn(
        "group relative w-72 p-6 rounded-2xl",
        "glass shadow-elegant transition-smooth",
        "hover:shadow-floating hover:scale-105",
        "border-2",
        gender === 'male' 
          ? "male-theme border-male-secondary/30 hover:shadow-male-primary/20" 
          : "female-theme border-female-secondary/30 hover:shadow-female-primary/20",
        selected && "ring-2 ring-heritage-gold ring-opacity-60"
      )}
      style={{
        background: gender === 'male' 
          ? 'linear-gradient(135deg, hsl(var(--male-secondary) / 0.1), hsl(var(--male-glass)))' 
          : 'linear-gradient(135deg, hsl(var(--female-secondary) / 0.1), hsl(var(--female-glass)))'
      }}
    >
      {/* Connection Handles */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3 !bg-heritage-bronze !border-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-3 h-3 !bg-heritage-bronze !border-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Card Content */}
      <div className="flex flex-col items-center space-y-4" dir="rtl">
        {/* Avatar with Photo Frame */}
        <div className={cn(
          "relative p-1 rounded-full transition-smooth",
          gender === 'male' ? "bg-gradient-male" : "bg-gradient-female"
        )}>
          <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
            <AvatarImage src={photo} alt={hebrewName} />
            <AvatarFallback className={cn(
              "text-xl font-semibold hebrew-text",
              gender === 'male' ? "bg-male-secondary text-male-primary" : "bg-female-secondary text-female-primary"
            )}>
              {initials}
            </AvatarFallback>
          </Avatar>
          
          {/* Life Status Indicator */}
          <div className={cn(
            "absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-3 border-white",
            isAlive ? "bg-green-500" : "bg-gray-400"
          )} />
        </div>

        {/* Name and Details */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold hebrew-text text-foreground leading-tight">
            {hebrewName}
          </h3>
          {name !== hebrewName && (
            <p className="text-sm text-muted-foreground" dir="ltr">
              {name}
            </p>
          )}
          
          {birthYear && (
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="text-xs bg-white/50">
                נולד {birthYear}
              </Badge>
            </div>
          )}
          
          {relationship && (
            <Badge 
              className={cn(
                "text-xs",
                gender === 'male' ? "bg-male-primary/10 text-male-primary" : "bg-female-primary/10 text-female-primary"
              )}
            >
              {relationship}
            </Badge>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
          gender === 'male' ? "shadow-glow-male" : "shadow-glow-female"
        )} />
      </div>
    </div>
  );
});

PersonCard.displayName = 'PersonCard';

export default PersonCard;