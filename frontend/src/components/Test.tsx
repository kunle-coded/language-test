import { questions } from "../data";

function Test() {
  return (
    <div className="w-full mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-300 rounded shadow-md ${
              index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
            }`}
          >
            <div className="flex flex-col items-start">
              <div className="mb-1">
                <span className="text-lg font-bold">{question.id}.</span>
              </div>
              <div className="flex flex-col question">
                <div className="flex justify-start items-center ms-1">
                  <span className="me-3">
                    <div className="flex justify-center items-center w-2.5 h-2.5 bg-blue-500"></div>
                  </span>
                  <p className="text-primary-400 font-semibold">
                    {question.question}
                  </p>
                </div>
              </div>
              {question.question_2 && (
                <div className="flex flex-col question">
                  <div className="flex justify-start items-center ms-1">
                    <span className="me-3">
                      <div className="flex justify-center items-center w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </span>
                    <p className="text-primary-400 font-semibold">
                      {question.question_2}
                    </p>
                  </div>
                </div>
              )}
              {question.type === "multiple_choice" ? (
                <div className="options flex flex-wrap mt-3 ms-1">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex justify-start me-4">
                      <input type="radio" className="me-2" />
                      <span className="me-1 text-blue-900 font-semibold">
                        {index === 0
                          ? "a."
                          : index === 1
                          ? "b."
                          : index === 2
                          ? "c."
                          : "d."}
                      </span>
                      <p key={index}>{option}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-3 ms-1 w-full">
                  <input
                    type="text"
                    placeholder="Enter answer"
                    className="w-[100%] md:w-[60%] h-8 pl-2 bg-white border border-solid border-brand-500 placeholder:text-sm font-normal focus:border-2 focus:outline-none "
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
