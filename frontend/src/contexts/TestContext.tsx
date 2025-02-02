import { createContext, PropsWithChildren, useContext, useState } from "react";

interface TestType {
  isTestStarted: boolean;
  isRegistered: boolean;
  studentName: string;
  isTimeUp: boolean;
  handleStart: () => void;
  handleEnd: () => void;
  handleRegister: (name: string) => void;
  handleTimeUp: () => void;
}

const TestContext = createContext<TestType | undefined>(undefined);

function TestProvider({ children }: PropsWithChildren) {
  const [isTestStarted, setIsTestStarted] = useState(
    localStorage.getItem("test_status") !== null
      ? JSON.parse(localStorage.getItem("test_status") as string)
      : false
  );
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("register") !== null
      ? JSON.parse(localStorage.getItem("register") as string)
      : false
  );
  const [studentName, setStudentName] = useState(
    localStorage.getItem("name") !== null
      ? (localStorage.getItem("name") as string)
      : ""
  );
  const [isTimeUp, setIsTimeUp] = useState(
    localStorage.getItem("time_up") !== null
      ? JSON.parse(localStorage.getItem("time_up") as string)
      : false
  );

  function handleStart() {
    setIsTestStarted(true);
    localStorage.setItem("test_status", JSON.stringify(true));
  }
  function handleEnd() {
    setIsTestStarted(false);
    localStorage.setItem("test_status", JSON.stringify(false));
  }

  function handleRegister(name: string) {
    setIsRegistered(true);
    setStudentName(name);
    localStorage.setItem("name", name);
    localStorage.setItem("register", JSON.stringify(true));
  }

  function handleTimeUp() {
    setIsTimeUp(true);
    localStorage.setItem("time_up", JSON.stringify(true));
  }

  return (
    <TestContext.Provider
      value={{
        isTestStarted,
        isRegistered,
        studentName,
        isTimeUp,
        handleStart,
        handleRegister,
        handleEnd,
        handleTimeUp,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

function useTest() {
  const context = useContext(TestContext);

  if (context === undefined)
    throw new Error("TestContext was used outside TestProvider");
  return context;
}

export { TestProvider, useTest };
