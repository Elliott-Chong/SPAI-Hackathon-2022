import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "./context";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import MapPage from "./pages/MapPage";
import InventoryPage from "./pages/InventoryPage";
import CameraPage from "./pages/CameraPage";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const location = useLocation();
  const {
    loadUser,
    state: { is_authenticated, loading },
  } = useGlobalContext();
  React.useEffect(() => {
    loadUser();
  }, [location, loadUser]);

  return (
    <>
      {is_authenticated && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      <main id="main-container">
        <Switch>
          <Route exact path={"/login"}>
            {is_authenticated && !loading ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <PrivateRoute component={MapPage} exact path="/" />
          <PrivateRoute component={InventoryPage} exact path="/inventory" />
          <PrivateRoute component={CameraPage} exact path="/camera" />
          <PrivateRoute component={Leaderboard} exact path="/leaderboard" />
        </Switch>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
