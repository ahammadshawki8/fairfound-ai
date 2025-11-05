import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  UserSearch,
  Scale,
  DollarSign,
  Eye,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile Analyzer", href: "/profile-analyzer", icon: UserSearch },
  { name: "Fairness Demo", href: "/fairness-demo", icon: Scale },
  { name: "Pricing Advisor", href: "/pricing-advisor", icon: DollarSign },
  { name: "Transparency", href: "/transparency", icon: Eye },
  { name: "Mentor Mode", href: "/mentor", icon: GraduationCap },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-border lg:bg-card">
      <div className="flex flex-col flex-1 min-h-0 pt-20">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-border">
          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">AI Powered</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your fairness score has improved by 12% this week!
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
