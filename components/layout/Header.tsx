import { DarkModeToggle } from "@/components/layout/DarkModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16 bg-gray-100 dark:bg-gray-900 border-b">
      <div className="w-full h-full flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="xs:hidden" />
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button className="w-8" type="submit" variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};
