import { useEffect, useState } from "react";
import Test from "./components/Test";
import Welcome from "./components/Welcome";
import { useTest } from "./contexts/TestContext";
import { formatTime } from "./helpers/formatTime";

function App() {
  const {
    isTestStarted,
    handleStart,
    studentName,
    handleEnd,
    isTimeUp,
    handleTimeUp,
  } = useTest();
  const [timer, setTimer] = useState(
    Number(localStorage.getItem("timer")) || 60 * 60
  );

  useEffect(() => {
    if (timer === 0) {
      handleTimeUp();
      handleEnd();
      localStorage.removeItem("timer");
    }
  }, [timer]);

  useEffect(() => {
    if (isTestStarted) {
      const intervalId = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        localStorage.setItem("timer", timer.toString());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isTestStarted, timer]);

  if (isTimeUp) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center">
          Time is up! Please submit your test.
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center px-4 mt-4">
      <header className="sticky top-0 w-full bg-brand-500 text-white  p-4 shadow-md flex justify-between items-center z-50">
        <div>
          <h1 className="text-2xl font-bold">FLS</h1>
          <p className="font-semibold">Foursquare Language School</p>
        </div>
        {isTestStarted && (
          <div className="flex justify-center items-center">
            <p className="text-2xl font-semibold">{formatTime(timer)}</p>
          </div>
        )}
        <div className="text-sm">
          <button
            className="bg-brand-100 px-6 py-2 rounded text-primary-500 outline-none border-none cursor-pointer"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center w-full mt-14 mb-8 z-10">
        {isTestStarted && (
          <div className="flex items-center mb-6 text-xl font-semibold text-blue-950">
            <p className="pr-1">Willkommen,</p>
            <p>{studentName}</p>
          </div>
        )}

        {isTestStarted && (
          <div className="flex justify-start items-center w-full text-lg font-medium">
            <p className="me-2">Deutsch: Zwischenprüfung ––</p>
            <p>A1.1</p>
          </div>
        )}
        {/* test */}

        {isTestStarted ? <Test /> : <Welcome />}
      </div>
    </div>
  );
}

export default App;
