import { useState, useEffect } from "react";
import AddProcess from "../Components/AddProcess";
import Timer from "../Components/Timer";
import ProcessTable from "../Components/ProcessTable";
const NonPreemptiveSJF = () => {
  const [jobs, setJobs] = useState([]);
  const [second, setSecond] = useState(0);

  const sortJobs = () => {
    if (jobs.length < 3) return; // return if there is no job in queue
    const minHeap = [...jobs];
    const onGoingProcess = minHeap.shift();
    var newIndex = minHeap.length - 1;
    var parentIndex = Math.floor((newIndex - 1) / 2);
    while (newIndex !== 0 && minHeap[parentIndex].burstTime > minHeap[newIndex].burstTime) {
      [minHeap[newIndex], minHeap[parentIndex]] = [minHeap[parentIndex], minHeap[newIndex]];
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
    setJobs([onGoingProcess, ...minHeap]);
  };

  const updateJobs = () => {
    // decrease remaining time of ongoing process by 1
    if (jobs.length === 0) return; // return if there is no job in queue
    const newJobs = [...jobs];
    newJobs[0].remainingTime--;
    // remove a process if remaining time is 0
    if (newJobs[0].remainingTime < 1) newJobs.shift();
    setJobs(newJobs);
  };
  return (
    <>
      <AddProcess
        second={second}
        AddProcess={(newProcess) => {
          setJobs((prevJobs) => [...prevJobs, newProcess]);
        }}
      />

      {useEffect(() => {
        sortJobs();
      }, [jobs.length])}

      <ProcessTable jobs={jobs} />
      <Timer
        second={second}
        incrementSecond={() => {
          setSecond((prevSecond) => prevSecond + 1);
          updateJobs();
        }}
      />
    </>
  );
};

export default NonPreemptiveSJF;
