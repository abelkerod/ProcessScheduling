import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between p-2 my-5 space-x-10 border-b-2 w-fit">
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/FCFS"}
      >
        FCFS
      </NavLink>
      {/* <Link activeClassName="bg-slate-500">FCFS</Link> */}
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/NSJF"}
      >
        Non-Preemptive SJF
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/PSJF"}
      >
        Preemptive SJF
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/RoundRobin"}
      >
        Round Robin
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/NPriority"}
      >
        Non-Preemptive Priority
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "p-3 rounded text-white bg-slate-500" : "p-3")}
        to={"/PPriority"}
      >
        Preemptive Priority
      </NavLink>
    </div>
  );
};
export default NavBar;
