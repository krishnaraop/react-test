import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DashboardContainer from "./containers/SystemDashboard";
import ComponentsContainer from "./containers/ComponetsContainer";
import AddSystem from "./containers/SystemDashboard/AddSystem";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Suspense fallback={<p>Loading ...</p>}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/system" index element={<DashboardContainer />} />
            <Route path="/system/:id" element={<AddSystem />} />
            <Route
              path="/system/:id/components"
              element={<ComponentsContainer />}
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
