import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import FAQ from "@/pages/FAQ";
import Success from "@/pages/Success";
import Blog from "@/pages/Blog";
import SimpleContactForm from "@/components/SimpleContactForm";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/faq" component={FAQ} />
      <Route path="/success" component={Success} />
      <Route path="/thanks" component={Success} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Blog} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <SimpleContactForm />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
