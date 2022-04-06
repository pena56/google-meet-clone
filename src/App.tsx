import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Call from "./routes/Call";
import Home from "./routes/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call/:callId" element={<Call />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
