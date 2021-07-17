import { BrowserRouter, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SemipolarLoading } from "react-loadingg";
//Layout
import AppLayout from "./Layouts/AppLayout";
//Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Project = lazy(() => import("./Pages/Project"));
//Component App
function App() {
  return (
    <Suspense fallback={<SemipolarLoading color="#0487D9" />}>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            {/* Route Trang Home */}
            <Route path="/" exact>
              <Home />
            </Route>
            {/* Route Trang About */}
            <Route path="/about">
              <About />
            </Route>
            {/* Route Trang Contact */}
            <Route path="/contact">
              <Contact/>
            </Route>
            {/* Route Trang Portfolio */}
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
