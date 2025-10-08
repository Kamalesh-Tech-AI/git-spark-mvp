import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FileTree from "@/components/FileTree";
import CodeViewer from "@/components/CodeViewer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch, Star, GitFork, Eye, Code } from "lucide-react";

const mockFiles = [
  {
    name: "src",
    type: "folder" as const,
    children: [
      {
        name: "components",
        type: "folder" as const,
        children: [
          { name: "Header.tsx", type: "file" as const },
          { name: "Footer.tsx", type: "file" as const },
        ],
      },
      { name: "App.tsx", type: "file" as const },
      { name: "index.tsx", type: "file" as const },
    ],
  },
  {
    name: "public",
    type: "folder" as const,
    children: [
      { name: "index.html", type: "file" as const },
    ],
  },
  { name: "package.json", type: "file" as const },
  { name: "README.md", type: "file" as const },
];

const mockCode = `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GitHub MVP</h1>
        <p>A beautiful repository viewer</p>
      </header>
    </div>
  );
}

export default App;`;

const mockCommits = [
  {
    id: "1",
    message: "Add new feature for file preview",
    author: "John Doe",
    time: "2 hours ago",
    hash: "a3b4c5d",
  },
  {
    id: "2",
    message: "Fix responsive layout issues",
    author: "Jane Smith",
    time: "5 hours ago",
    hash: "e6f7g8h",
  },
  {
    id: "3",
    message: "Update dependencies",
    author: "John Doe",
    time: "1 day ago",
    hash: "i9j0k1l",
  },
];

const Repository = () => {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState("src/App.tsx");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">react-dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Star className="h-4 w-4" />
              <span>234 stars</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <GitFork className="h-4 w-4" />
              <span>45 forks</span>
            </button>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>12 watching</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <GitBranch className="h-4 w-4" />
              main
            </Button>
            <Button variant="outline">
              <Code className="h-4 w-4 mr-2" />
              Code
            </Button>
          </div>
        </div>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="bg-secondary border border-border">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="commits">Commits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="code" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold mb-3">Files</h3>
                <FileTree files={mockFiles} onFileSelect={setSelectedFile} />
              </div>
              
              <div className="lg:col-span-3">
                <CodeViewer 
                  code={mockCode}
                  language="typescript"
                  filename={selectedFile}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="commits" className="mt-6">
            <div className="border border-border rounded-lg bg-card divide-y divide-border">
              {mockCommits.map((commit) => (
                <div key={commit.id} className="p-4 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium mb-1">{commit.message}</p>
                      <p className="text-sm text-muted-foreground">
                        {commit.author} committed {commit.time}
                      </p>
                    </div>
                    <code className="text-xs bg-secondary px-2 py-1 rounded font-mono">
                      {commit.hash}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Repository;
