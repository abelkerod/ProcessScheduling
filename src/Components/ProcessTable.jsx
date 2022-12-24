const ProcessTable = ({ jobs }) => {
  return (
    <>
      <div className="w-2/6 overflow-y-auto rounded h-96 mt-7">
        <table className="w-full text-center ">
          <thead>
            <tr className="text-lg font-bold text-white">
              <td className="py-1 bg-slate-500">Process Name</td>
              <td className="bg-slate-500">Arrival Time</td>
              <td className="bg-slate-500">Burst Time</td>
              <td className="bg-slate-500">Remaining Time</td>
              <td className="bg-slate-500">Priority</td>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="py-2">{job.name}</td>
                <td>{job.arrivalTime}</td>
                <td>{job.burstTime}</td>
                <td>{job.remainingTime}</td>
                <td>{job.priority || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProcessTable;
