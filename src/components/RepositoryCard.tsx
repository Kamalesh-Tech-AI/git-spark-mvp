import { Star, GitFork, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RepositoryCardProps {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  visibility: "public" | "private";
  updatedAt: string;
}

const RepositoryCard = ({
  id,
  name,
  description,
  language,
  stars,
  forks,
  visibility,
  updatedAt,
}: RepositoryCardProps) => {
  return (
    <Card className="p-4 border-border bg-card hover:bg-secondary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Link 
              to={`/repo/${id}`}
              className="text-lg font-semibold text-primary hover:underline"
            >
              {name}
            </Link>
            <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
              {visibility}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Circle className="h-3 w-3 fill-primary text-primary" />
              <span>{language}</span>
            </div>
            
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Star className="h-3 w-3" />
              <span>{stars}</span>
            </button>
            
            <div className="flex items-center gap-1">
              <GitFork className="h-3 w-3" />
              <span>{forks}</span>
            </div>
            
            <span>Updated {updatedAt}</span>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="ml-4">
          <Star className="h-3 w-3 mr-1" />
          Star
        </Button>
      </div>
    </Card>
  );
};

export default RepositoryCard;
