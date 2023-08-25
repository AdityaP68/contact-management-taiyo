import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Suspense } from "react";

// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
