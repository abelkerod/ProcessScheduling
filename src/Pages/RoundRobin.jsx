import { useState, useEffect } from "react";
import AddProcess from "../Components/AddProcess";
import Timer from "../Components/Timer";
import ProcessTable from "../Components/ProcessTable";
alert("The default quantum time is set to 1");
var givenQuantum = 1;
var quantum = givenQuantum;
const RoundRobin = () => {
  const [jobs, setJobs] = useState([]);
  const [second, setSecond] = useState(0);
  const sortJobs = () => {
    if (jobs.length < 1) return; // return if there is no job in queue
    const newJobs = [...jobs];
    const onGoingProcess = newJobs.shift();
    setJobs([...newJobs, onGoingProcess]);
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
        if (quantum === second) {
          sortJobs();
          quantum += givenQuantum;
        }
      }, [second])}
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

export default RoundRobin;
