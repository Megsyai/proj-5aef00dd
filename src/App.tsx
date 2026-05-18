import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Biography from "./pages/Biography";
import Songs from "./pages/Songs";
import Timeline from "./pages/Timeline";
import Collaborations from "./pages/Collaborations";
import Gallery from "./pages/Gallery";
import Quotes from "./pages/Quotes";
import Sources from "./pages/Sources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/sources" element={<Sources />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
