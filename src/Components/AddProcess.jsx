import { useRef } from "react";

const AddProcess = ({ AddProcess, second, needPriority }) => {
  const name = useRef(null);
  const burstTime = useRef(null);
  const priority = useRef(null);
  const addProcess = (name, burstTime, priority) => {
    if (needPriority && priority === "") alert("Enter a valid priority");
    else AddProcess({ name, burstTime, remainingTime: burstTime, priority, arrivalTime: second });
  };
  return (
    <div className="px-6 py-2 border rounded ">
      <input ref={name} className="focus:outline-none" type="text" placeholder="Name" />
      <input ref={burstTime} className="focus:outline-none" type="text" placeholder="Burst Time" />
      {needPriority ? (
        <input ref={priority} className="focus:outline-none" type="text" placeholder="Priority" />
      ) : (
        <input ref={priority} className="focus:outline-none" type="text" disabled />
      )}
      <button
        onClick={() => {
          addProcess(name.current.value, burstTime.current.value, priority.current.value);
        }}
        className="p-2 border rounded-md bg-slate-300"
      >
        Add
      </button>
    </div>
  );
};

export default AddProcess;
