import "./App.css";
import { Routes, Route } from "react-router-dom";
import FCFS from "./Pages/FCFS";
import PreemptiveSJF from "./Pages/PreemptiveSJF";
import NonPreemptiveSJF from "./Pages/NonPreemptiveSJF";
import RoundRobin from "./Pages/RoundRobin";
import NavBar from "./Components/NavBar";
import PreemptivePriority from "./Pages/PreemptivePriority";
import NonPreemptivePriority from "./Pages/NonPreemptivePriority";

function App() {
  return (
    <div className="flex flex-col items-center mt-40">
      <NavBar />
      <Routes>
        <Route path="/FCFS" element={<FCFS />} />
        <Route path="/PSJF" element={<PreemptiveSJF />} />
        <Route path="/NSJF" element={<NonPreemptiveSJF />} />
        <Route path="/RoundRobin" element={<RoundRobin />} />
        <Route path="/PPriority" element={<PreemptivePriority />} />
        <Route path="/NPriority" element={<NonPreemptivePriority />} />
      </Routes>
    </div>
  );
}

export default App;
