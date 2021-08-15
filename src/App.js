import "./App.css";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <p>This is our content</p>
      </Suspense>
    </div>
  );
}

export default App;
