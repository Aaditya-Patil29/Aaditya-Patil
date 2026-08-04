import React, { useState, useCallback } from 'react';
import { 
  ReactFlow, 
  Controls, 
  Background, 
  Handle, 
  Position, 
  useNodesState, 
  useEdgesState, 
  Node, 
  Edge,
  BackgroundVariant,
  NodeProps
} from '@xyflow/react';
import { 
  Users, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Database, 
  HardDrive, 
  Activity, 
  Layers, 
  Maximize2,
  Info,
  CheckCircle2
} from 'lucide-react';

// Specs metadata for node selection drawer
const NODE_DETAILS: Record<string, { title: string; tech: string; role: string; specs: string[]; status: string }> = {
  users: {
    title: 'Global Client Users',
    tech: 'Browsers & Mobile Apps',
    role: 'Entry traffic from web & mobile clients over HTTP/3 TLS 1.3.',
    specs: ['Sub-30ms RTT', 'Global DNS routing', 'HTTPS Port 443'],
    status: 'OPTIMAL'
  },
  cloudflare: {
    title: 'Cloudflare WAF / CDN',
    tech: 'Edge Network & DDoS Shield',
    role: 'Filters malicious requests, caches static assets, and mitigates DDoS attacks.',
    specs: ['DDoS mitigation layer', 'SSL/TLS Offloading', 'Edge caching'],
    status: 'ACTIVE'
  },
  loadbalancer: {
    title: 'AWS ALB / Load Balancer',
    tech: 'AWS Elastic Load Balancer',
    role: 'Distributes traffic evenly across Availability Zones to active ingress nodes.',
    specs: ['Round-robin algorithm', 'Health check interval: 5s', 'TLS termination'],
    status: 'ACTIVE'
  },
  nginx: {
    title: 'NGINX Ingress Controller',
    tech: 'NGINX / K8s Ingress',
    role: 'API gateway routing, rate-limiting, and CORS security handling.',
    specs: ['Rate limit: 100 req/sec', 'Zero-downtime reloads', 'Gzip/Brotli compression'],
    status: 'ACTIVE'
  },
  backend: {
    title: 'Node.js Microservices Cluster',
    tech: 'Node.js, Express, TypeScript',
    role: 'Core business logic, transaction handling, JWT authentication, and REST APIs.',
    specs: ['3 Replicas (HPA auto-scale)', 'Sub-45ms execution time', 'Health probes live'],
    status: 'OPTIMAL'
  },
  redis: {
    title: 'Redis In-Memory Cache',
    tech: 'Redis Cluster 7.2',
    role: 'Caches user sessions, token blacklists, and high-frequency queries.',
    specs: ['Sub-2ms cache hit time', 'LRU eviction policy', 'Sentinel auto-failover'],
    status: 'SYNCED'
  },
  postgresql: {
    title: 'PostgreSQL Primary DB',
    tech: 'PostgreSQL 16 + PgBouncer',
    role: 'ACID transactional database with connection pooling and row-level locking.',
    specs: ['PgBouncer pool: 100 conns', 'Multi-AZ replication', 'Automated daily snapshots'],
    status: 'SYNCED'
  },
  storage: {
    title: 'AWS S3 Object Storage',
    tech: 'AWS S3 / CloudFront',
    role: 'Stores media uploads, generated documents, and static backup archives.',
    specs: ['99.999999999% durability', 'Server-side AES-256 encryption', 'Lifecycle policy'],
    status: 'OPTIMAL'
  }
};

type CustomNodeData = {
  label: string;
  sub: string;
  icon: any;
  nodeKey: string;
  color: string;
};

// Custom Node Component for Dark GitHub Aesthetics
const CustomNode: React.FC<NodeProps<Node<CustomNodeData>>> = ({ data, selected }) => {
  const Icon = data.icon;
  return (
    <div
      className={`p-3.5 rounded-xl bg-[#161B22] border transition-all shadow-xl min-w-[165px] ${
        selected
          ? 'border-[#58A6FF] ring-2 ring-[#58A6FF]/30 scale-105'
          : 'border-[#30363D] hover:border-[#58A6FF]/60'
      }`}
    >
      <Handle type="target" position={Position.Left} className="!bg-[#58A6FF] !w-2.5 !h-2.5 !border-0" />
      
      <div className="flex items-center gap-2.5">
        <div
          className="p-2 rounded-lg border bg-[#0D1117]"
          style={{ borderColor: `${data.color}40`, color: data.color }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <div className="font-mono text-xs font-bold text-[#E6EDF3] leading-snug">{data.label}</div>
          <div className="text-[10px] text-[#8B949E] font-sans">{data.sub}</div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="!bg-[#3FB950] !w-2.5 !h-2.5 !border-0" />
    </div>
  );
};


const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: 'users',
    type: 'custom',
    position: { x: 20, y: 150 },
    data: { label: 'Users', sub: 'Clients', icon: Users, nodeKey: 'users', color: '#D29922' }
  },
  {
    id: 'cloudflare',
    type: 'custom',
    position: { x: 210, y: 150 },
    data: { label: 'Cloudflare', sub: 'Edge WAF', icon: ShieldCheck, nodeKey: 'cloudflare', color: '#F78166' }
  },
  {
    id: 'loadbalancer',
    type: 'custom',
    position: { x: 400, y: 150 },
    data: { label: 'Load Balancer', sub: 'AWS ALB', icon: Activity, nodeKey: 'loadbalancer', color: '#FF9900' }
  },
  {
    id: 'nginx',
    type: 'custom',
    position: { x: 590, y: 150 },
    data: { label: 'NGINX Ingress', sub: 'API Gateway', icon: Cpu, nodeKey: 'nginx', color: '#009639' }
  },
  {
    id: 'backend',
    type: 'custom',
    position: { x: 780, y: 150 },
    data: { label: 'Backend API', sub: 'Node.js Pods', icon: Server, nodeKey: 'backend', color: '#3178C6' }
  },
  {
    id: 'redis',
    type: 'custom',
    position: { x: 990, y: 50 },
    data: { label: 'Redis Cache', sub: 'Session/Auth', icon: Database, nodeKey: 'redis', color: '#DC382D' }
  },
  {
    id: 'postgresql',
    type: 'custom',
    position: { x: 990, y: 150 },
    data: { label: 'PostgreSQL', sub: 'Master DB', icon: Database, nodeKey: 'postgresql', color: '#4169E1' }
  },
  {
    id: 'storage',
    type: 'custom',
    position: { x: 990, y: 250 },
    data: { label: 'Object Storage', sub: 'AWS S3', icon: HardDrive, nodeKey: 'storage', color: '#FF9900' }
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: 'users', target: 'cloudflare', animated: true, style: { stroke: '#58A6FF', strokeWidth: 2 } },
  { id: 'e2-3', source: 'cloudflare', target: 'loadbalancer', animated: true, style: { stroke: '#58A6FF', strokeWidth: 2 } },
  { id: 'e3-4', source: 'loadbalancer', target: 'nginx', animated: true, style: { stroke: '#58A6FF', strokeWidth: 2 } },
  { id: 'e4-5', source: 'nginx', target: 'backend', animated: true, style: { stroke: '#58A6FF', strokeWidth: 2 } },
  { id: 'e5-6', source: 'backend', target: 'redis', animated: true, style: { stroke: '#DC382D', strokeWidth: 2 } },
  { id: 'e5-7', source: 'backend', target: 'postgresql', animated: true, style: { stroke: '#4169E1', strokeWidth: 2 } },
  { id: 'e5-8', source: 'backend', target: 'storage', animated: true, style: { stroke: '#FF9900', strokeWidth: 2 } },
];

export const ArchitectureSection: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeKey, setSelectedNodeKey] = useState<string>('backend');

  const onNodeClick = useCallback((_: any, node: Node) => {
    if (node.data && (node.data as any).nodeKey) {
      setSelectedNodeKey((node.data as any).nodeKey);
    }
  }, []);

  const activeDetails = NODE_DETAILS[selectedNodeKey] || NODE_DETAILS.backend;

  return (
    <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#58A6FF]" />
            Interactive Cloud System Architecture
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Production flow diagram powered by React Flow. Interactive node zoom, pan, and live telemetry inspection.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center gap-2 text-xs font-mono text-[#8B949E]">
          <Info className="w-4 h-4 text-[#58A6FF]" />
          <span>Click any node to inspect specs</span>
        </div>
      </div>

      {/* Main Flow Diagram Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* React Flow Container */}
        <div className="lg:col-span-8 rounded-xl border border-[#30363D] bg-[#0D1117] h-[400px] shadow-2xl relative overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-right"
          >
            <Background color="#30363D" gap={16} variant={BackgroundVariant.Dots} />
            <Controls className="!bg-[#161B22] !border-[#30363D]" />
          </ReactFlow>
        </div>

        {/* Selected Node Telemetry Drawer */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#30363D]">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#58A6FF]" />
                <span className="font-mono text-xs font-bold text-[#E6EDF3] uppercase tracking-wider">
                  Component Inspector
                </span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/30">
                ● {activeDetails.status}
              </span>
            </div>

            <div className="space-y-3 pt-3">
              <div>
                <h3 className="text-base font-bold font-mono text-[#58A6FF]">{activeDetails.title}</h3>
                <span className="text-xs font-mono text-[#D29922] font-medium">{activeDetails.tech}</span>
              </div>

              <p className="text-xs text-[#8B949E] font-sans leading-relaxed">
                {activeDetails.role}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#30363D]">
                <span className="text-xs font-mono text-[#E6EDF3] uppercase tracking-wider block">
                  // Operational Specifications
                </span>
                <ul className="space-y-1.5 text-xs text-[#8B949E] font-mono">
                  {activeDetails.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB950] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#30363D] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
            <span>Latency SLA: &lt;50ms</span>
            <span className="text-[#3FB950]">Topology Synced</span>
          </div>
        </div>
      </div>
    </section>
  );
};
