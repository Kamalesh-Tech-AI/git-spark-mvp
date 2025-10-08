import Navbar from "@/components/Navbar";
import RepositoryCard from "@/components/RepositoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book } from "lucide-react";

const mockRepositories = [
  {
    id: "1",
    name: "react-dashboard",
    description: "A beautiful dashboard built with React and TypeScript",
    language: "TypeScript",
    stars: 234,
    forks: 45,
    visibility: "public" as const,
    updatedAt: "2 days ago",
  },
  {
    id: "2",
    name: "node-api-server",
    description: "RESTful API server built with Node.js and Express",
    language: "JavaScript",
    stars: 156,
    forks: 32,
    visibility: "public" as const,
    updatedAt: "5 days ago",
  },
  {
    id: "3",
    name: "ml-algorithms",
    description: "Implementation of common machine learning algorithms",
    language: "Python",
    stars: 512,
    forks: 89,
    visibility: "public" as const,
    updatedAt: "1 week ago",
  },
  {
    id: "4",
    name: "mobile-app",
    description: "Cross-platform mobile application",
    language: "Dart",
    stars: 78,
    forks: 12,
    visibility: "private" as const,
    updatedAt: "3 days ago",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Repositories</h1>
            <p className="text-muted-foreground">
              Manage and explore your projects
            </p>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90">
            <Book className="h-4 w-4 mr-2" />
            New Repository
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Find a repository..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
        </div>

        <div className="space-y-4">
          {mockRepositories.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
