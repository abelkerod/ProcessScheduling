const Timer = ({ second, incrementSecond }) => {
  return (
    <div className="flex justify-between w-2/6 px-6 py-2 mt-10 border rounded">
      <p className="items-center text-xl">Second: {second}</p>
      <button
        onClick={() => {
          incrementSecond();
        }}
        className="p-2 border rounded-md bg-slate-300"
      >
        Next Sec
      </button>
    </div>
  );
};

export default Timer;
