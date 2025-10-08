import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeViewerProps {
  code: string;
  language: string;
  filename: string;
}

const CodeViewer = ({ code, language, filename }: CodeViewerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-code-bg">
      <div className="flex items-center justify-between px-4 py-2 border-b border-code-border bg-secondary">
        <span className="text-sm font-medium">{filename}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex">
          <div className="flex flex-col items-end px-4 py-4 bg-secondary/50 border-r border-code-border select-none">
            {lines.map((_, index) => (
              <span key={index} className="text-xs text-muted-foreground leading-6">
                {index + 1}
              </span>
            ))}
          </div>
          
          <pre className="flex-1 p-4 overflow-x-auto">
            <code className="text-sm font-mono leading-6 text-foreground">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;
