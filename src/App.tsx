
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesignOptionsProvider } from "./context/DesignOptionsContext";
import { ContentEditProvider } from "./context/ContentEditContext";
import { ViewModeProvider } from "./context/ViewModeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create the query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DesignOptionsProvider>
        <ContentEditProvider>
          <div className="font-sans antialiased text-brand-darkBlue">
            <Toaster />
            <Sonner />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ContentEditProvider>
      </DesignOptionsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
