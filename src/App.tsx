// Import necessary components and packages
import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  // Provide QueryClient and Router context
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* Wrap the content in the Layout component */}
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            {/* Use AppRouter to handle routing */}
            <AppRouter />
          </Suspense>
        </Layout>
      </Router>
      {/* Show React Query Devtools for debugging */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

// Export the App component as default
export default App;
