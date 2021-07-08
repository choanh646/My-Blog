import { BrowserRouter, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SemipolarLoading } from "react-loadingg";
//Layout
import AppLayout from "./Layouts/AppLayout";
//Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;