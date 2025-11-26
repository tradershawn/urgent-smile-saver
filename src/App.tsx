import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ToothPain from "./pages/emergency/ToothPain";
import BrokenTooth from "./pages/emergency/BrokenTooth";
import KnockedOutTooth from "./pages/emergency/KnockedOutTooth";
import SwollenJaw from "./pages/emergency/SwollenJaw";
import LostFillingCrown from "./pages/emergency/LostFillingCrown";
import Bleeding from "./pages/emergency/Bleeding";
import Abscess from "./pages/emergency/Abscess";
import CrackedTooth from "./pages/emergency/CrackedTooth";
import RootCanal from "./pages/emergency/RootCanal";
import Kids from "./pages/emergency/Kids";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emergency/tooth-pain" element={<ToothPain />} />
          <Route path="/emergency/broken-tooth" element={<BrokenTooth />} />
          <Route path="/emergency/knocked-out-tooth" element={<KnockedOutTooth />} />
          <Route path="/emergency/swollen-jaw" element={<SwollenJaw />} />
          <Route path="/emergency/lost-filling-crown" element={<LostFillingCrown />} />
          <Route path="/emergency/bleeding" element={<Bleeding />} />
          <Route path="/emergency/abscess" element={<Abscess />} />
          <Route path="/emergency/cracked-tooth" element={<CrackedTooth />} />
          <Route path="/emergency/root-canal" element={<RootCanal />} />
          <Route path="/emergency/kids" element={<Kids />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
