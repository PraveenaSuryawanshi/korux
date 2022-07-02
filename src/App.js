import { useState } from "react";
import React from "react";
import Tabcomponent from "./components/tab";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={toggleModal}
          className="bg-white hover:bg-gray-100 m-auto block text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Open Model
        </button>
      </div>

      {isOpen === true ? (
        <>
          <div
            id="defaultModal"
            className="overflow-y-auto modal overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
          >
            <div className="relative p-4 w-full max-w-6xl m-auto  h-full md:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow mt-7 dark:bg-gray-700">
                {/* Modal header  */}
                <div className="bg-lime-500 flex justify-between items-start py-2 px-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    Alets
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      onClick={toggleModal}
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* Modal body  */}

                <div class="shadow-sm overflow-hidden bg-slate-50">
                 <Tabcomponent />
                </div>
                {/* Modal footer  */}
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="defaultModal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    onClick={toggleModal}
                    data-modal-toggle="defaultModal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default App;
