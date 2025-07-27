import { Node, Edge, MarkerType } from '@xyflow/react';

// Hebrew family data structure
const familyMembers = [
  {
    id: 'avi-yadin',
    name: 'Avi Yadin',
    hebrewName: 'אבי ידין',
    birthYear: 1945,
    gender: 'male' as const,
    relationship: 'אב',
    isAlive: true
  },
  {
    id: 'unknown-mother',
    name: 'Unknown',
    hebrewName: 'לא ידוע',
    gender: 'female' as const,
    relationship: 'אם',
    isAlive: false
  },
  {
    id: 'yoav-li',
    name: 'Yoav Li',
    hebrewName: 'יואב ליי',
    birthYear: 1975,
    gender: 'male' as const,
    relationship: 'בן',
    isAlive: true
  },
  {
    id: 'atiel-li',
    name: 'Atiel Li',
    hebrewName: 'אטיאל ליי',
    birthYear: 1978,
    gender: 'female' as const,
    relationship: 'בת',
    isAlive: true
  },
  {
    id: 'smadar-li',
    name: 'Smadar Li',
    hebrewName: 'סמדר ליי',
    birthYear: 1980,
    gender: 'female' as const,
    relationship: 'בת',
    isAlive: true
  },
  {
    id: 'laod-cohen',
    name: 'Laod Cohen',
    hebrewName: 'לאוד כהן',
    birthYear: 2005,
    gender: 'male' as const,
    relationship: 'נכד',
    isAlive: true
  },
  {
    id: 'tzafit-cohen',
    name: 'Tzafit Cohen',
    hebrewName: 'צפית כהן',
    birthYear: 2008,
    gender: 'female' as const,
    relationship: 'נכדה',
    isAlive: true
  },
  {
    id: 'omer-cohen',
    name: 'Omer Cohen',
    hebrewName: 'עמר כהן',
    birthYear: 2010,
    gender: 'male' as const,
    relationship: 'נכד',
    isAlive: true
  }
];

// Create nodes with positions for a family tree layout
export const familyData = {
  nodes: [
    // Grandparents (Top Level)
    {
      id: 'avi-yadin',
      type: 'person',
      position: { x: 200, y: 50 },
      data: familyMembers.find(m => m.id === 'avi-yadin')!,
      draggable: true
    },
    {
      id: 'unknown-mother',
      type: 'person',
      position: { x: 500, y: 50 },
      data: familyMembers.find(m => m.id === 'unknown-mother')!,
      draggable: true
    },
    
    // Children (Middle Level)
    {
      id: 'yoav-li',
      type: 'person',
      position: { x: 50, y: 300 },
      data: familyMembers.find(m => m.id === 'yoav-li')!,
      draggable: true
    },
    {
      id: 'atiel-li',
      type: 'person',
      position: { x: 350, y: 300 },
      data: familyMembers.find(m => m.id === 'atiel-li')!,
      draggable: true
    },
    {
      id: 'smadar-li',
      type: 'person',
      position: { x: 650, y: 300 },
      data: familyMembers.find(m => m.id === 'smadar-li')!,
      draggable: true
    },
    
    // Grandchildren (Bottom Level)
    {
      id: 'laod-cohen',
      type: 'person',
      position: { x: 200, y: 550 },
      data: familyMembers.find(m => m.id === 'laod-cohen')!,
      draggable: true
    },
    {
      id: 'tzafit-cohen',
      type: 'person',
      position: { x: 500, y: 550 },
      data: familyMembers.find(m => m.id === 'tzafit-cohen')!,
      draggable: true
    },
    {
      id: 'omer-cohen',
      type: 'person',
      position: { x: 800, y: 550 },
      data: familyMembers.find(m => m.id === 'omer-cohen')!,
      draggable: true
    }
  ] as Node[],
  
  edges: [
    // Parent relationships (from grandparents to children)
    {
      id: 'avi-yoav',
      source: 'avi-yadin',
      target: 'yoav-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      },
      animated: false
    },
    {
      id: 'avi-atiel',
      source: 'avi-yadin',
      target: 'atiel-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      }
    },
    {
      id: 'avi-smadar',
      source: 'avi-yadin',
      target: 'smadar-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      }
    },
    {
      id: 'mother-yoav',
      source: 'unknown-mother',
      target: 'yoav-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        strokeDasharray: '5,5',
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      }
    },
    {
      id: 'mother-atiel',
      source: 'unknown-mother',
      target: 'atiel-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        strokeDasharray: '5,5',
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      }
    },
    {
      id: 'mother-smadar',
      source: 'unknown-mother',
      target: 'smadar-li',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-bronze))', 
        strokeWidth: 2,
        strokeDasharray: '5,5',
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-bronze) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-bronze))'
      }
    },
    
    // Grandchildren relationships (from children to grandchildren)
    {
      id: 'smadar-laod',
      source: 'smadar-li',
      target: 'laod-cohen',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-gold))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-gold) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-gold))'
      }
    },
    {
      id: 'smadar-tzafit',
      source: 'smadar-li',
      target: 'tzafit-cohen',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-gold))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-gold) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-gold))'
      }
    },
    {
      id: 'smadar-omer',
      source: 'smadar-li',
      target: 'omer-cohen',
      type: 'smoothstep',
      style: { 
        stroke: 'hsl(var(--heritage-gold))', 
        strokeWidth: 2,
        filter: 'drop-shadow(0 2px 4px hsl(var(--heritage-gold) / 0.3))'
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--heritage-gold))'
      }
    }
  ] as Edge[]
};