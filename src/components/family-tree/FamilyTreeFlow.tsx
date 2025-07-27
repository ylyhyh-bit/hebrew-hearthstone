import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import PersonCard from './PersonCard';
import FloatingControls from './FloatingControls';
import { familyData } from './familyData';

const nodeTypes = {
  person: PersonCard,
};

const FamilyTreeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(familyData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(familyData.edges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const connectionLineStyle = useMemo(
    () => ({
      stroke: 'hsl(var(--heritage-bronze))',
      strokeWidth: 3,
      strokeDasharray: '5,5',
    }),
    []
  );

  const handleExport = useCallback(() => {
    console.log('Exporting family tree...');
    // TODO: Implement export functionality
  }, []);

  const handleReset = useCallback(() => {
    setNodes(familyData.nodes);
    setEdges(familyData.edges);
  }, [setNodes, setEdges]);

  return (
    <div className="w-full h-screen relative" dir="ltr">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        fitView
        fitViewOptions={{
          padding: 0.2,
          includeHiddenNodes: false,
        }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        minZoom={0.3}
        maxZoom={1.5}
        snapToGrid
        snapGrid={[20, 20]}
        deleteKeyCode="Delete"
        className="family-tree-flow"
      >
        {/* Premium Background */}
        <Background 
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="hsl(var(--heritage-bronze) / 0.1)"
        />
        
        {/* Enhanced Controls */}
        <Controls 
          className="shadow-floating rounded-xl border border-glass-border bg-glass-background backdrop-blur-sm"
          showZoom={true}
          showFitView={true}
          showInteractive={false}
        />
        
        {/* Floating Action Panel */}
        <Panel position="top-right" className="m-4">
          <FloatingControls 
            onExport={handleExport}
            onReset={handleReset}
          />
        </Panel>
        
        {/* Title Panel */}
        <Panel position="top-left" className="m-4">
          <div className="glass rounded-2xl p-6 shadow-floating">
            <h1 className="text-2xl font-bold hebrew-text text-foreground mb-2" dir="rtl">
              עץ המשפחה של ידין-ליי
            </h1>
            <p className="text-sm text-muted-foreground" dir="rtl">
              גרסה דיגיטלית אלגנטית
            </p>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default FamilyTreeFlow;