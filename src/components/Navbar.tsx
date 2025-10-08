import { Search, GitBranch, Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <GitBranch className="h-8 w-8 text-foreground" />
              <span className="text-xl font-semibold">GitHub MVP</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-sm hover:text-foreground text-muted-foreground transition-colors">
                Repositories
              </Link>
              <Link to="#" className="text-sm hover:text-foreground text-muted-foreground transition-colors">
                Pull requests
              </Link>
              <Link to="#" className="text-sm hover:text-foreground text-muted-foreground transition-colors">
                Issues
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search repositories..." 
                className="pl-10 w-64 bg-secondary border-border"
              />
            </div>
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
            
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
