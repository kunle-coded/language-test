import { useState } from "react";
import { useTest } from "../contexts/TestContext";

function Welcome() {
  const [name, setName] = useState("");
  const { handleRegister, studentName } = useTest();

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
  }

  function handleSubmit() {
    handleRegister(name);
  }

  return (
    <div className="flex justify-center items-start w-full md:max-w-4xl h-full">
      <div className="flex flex-col items-center w-full mt-10 mx-8">
        <div className="flex items-center text-3xl font-semibold text-blue-950 text-center">
          {studentName ? (
            <p className="pr-1">Willkommen, {studentName} 😀</p>
          ) : (
            <p className="pr-1">Willkommen! 😀</p>
          )}
        </div>

        {!studentName && (
          <p className="text-center mt-3">Please enter your to continue.</p>
        )}

        {!studentName && (
          <div className="flex justify-center items-center w-full md:w-[35%] mt-8">
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              autoComplete="false"
              className="w-full h-[38px] p-3 border-solid border-l border-t border-b focus:outline-none border-brand-500"
              onChange={handleName}
            />
            <button
              className="h-[38px] px-8 text-white font-medium border border-solid border-brand-500 bg-brand-500 cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
        <div className="flex flex-col mt-12">
          <p className="text-center text-lg font-semibold">
            Please read the following instruction before starting the test!
          </p>

          <p className="mt-4 mb-1">General information:</p>
          <ol className="list-decimal leading-8">
            <li>
              To start the test, click the start button at the top right corner
              of the page
            </li>
            <li>
              You have 60 minutes to complete the test. The timer will start
              once you click the start button
            </li>
            <li>
              You can only submit the test once. Make sure you have a stable
              internet connection before starting the test
            </li>
            <li>
              Once you submit the test, you will be redirected to the result
              page
            </li>
          </ol>
          <p className="mt-4 mb-1">Information about the test:</p>
          <ol className="list-decimal leading-8">
            <li>
              The test consists of 40 questions. Each question has multiple
              choices (A, B, C, D)
            </li>
            <li>
              To answer a question, click the radio button{" "}
              <span>
                <input type="radio" disabled />
              </span>{" "}
              next to the answer
            </li>
            <li>You can only select one answer for each question</li>
            <li>
              There are 2 fill-in-the-blank questions, where you have to type
              the correct answer.
            </li>
            <li>There are no negative marks for wrong answers</li>
            <li>
              You will be able to see the result immediately after submitting
              the test
            </li>
          </ol>
          <p className="mt-4 mb-1">Good luck! 🍀</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
