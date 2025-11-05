import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ProfileAnalyzer from "./pages/ProfileAnalyzer";
import FairnessDemo from "./pages/FairnessDemo";
import PricingAdvisor from "./pages/PricingAdvisor";
import Transparency from "./pages/Transparency";
import Mentor from "./pages/Mentor";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile-analyzer" element={<ProfileAnalyzer />} />
          <Route path="/fairness-demo" element={<FairnessDemo />} />
          <Route path="/pricing-advisor" element={<PricingAdvisor />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
