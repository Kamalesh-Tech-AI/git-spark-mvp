import { File, Folder, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

interface FileTreeProps {
  files: FileNode[];
  onFileSelect: (path: string) => void;
}

const FileTreeItem = ({ 
  node, 
  depth = 0, 
  path = "",
  onFileSelect 
}: { 
  node: FileNode; 
  depth?: number; 
  path?: string;
  onFileSelect: (path: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(depth === 0);
  const currentPath = path ? `${path}/${node.name}` : node.name;

  const handleClick = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    } else {
      onFileSelect(currentPath);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 w-full px-2 py-1.5 hover:bg-secondary rounded text-sm transition-colors text-left"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {node.type === "folder" && (
          <span className="flex-shrink-0">
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
        {node.type === "folder" ? (
          <Folder className="h-4 w-4 text-primary flex-shrink-0" />
        ) : (
          <File className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        )}
        <span className="truncate">{node.name}</span>
      </button>
      
      {node.type === "folder" && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTreeItem 
              key={index} 
              node={child} 
              depth={depth + 1} 
              path={currentPath}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ files, onFileSelect }: FileTreeProps) => {
  return (
    <div className="border border-border rounded-lg bg-card p-2">
      {files.map((file, index) => (
        <FileTreeItem key={index} node={file} onFileSelect={onFileSelect} />
      ))}
    </div>
  );
};

export default FileTree;
