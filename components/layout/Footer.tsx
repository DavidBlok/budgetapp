import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  return (
    <footer className="h-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-100">
      <div className="w-full h-full flex justify-end items-center px-4 gap-4">
        <div className="text-xs font-semibold">Budget App</div>
        <Badge variant="default">BETA v 0.1</Badge>
      </div>
    </footer>
  );
};
