import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { AdminDashboard } from "./Pages/AdminDashboard";
import { UserDashboard } from "./Pages/UserDashboard";
import { PrivateLayout } from "./Components/HOC/PrivateLayout/PrivateLayout";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateLayout>
              <AdminDashboard />
              
            </PrivateLayout>
          }
        />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </Routers>
  );
}

export default App;
