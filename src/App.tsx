import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </Layout>
      </Router>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
