import { useContext } from "react";
import { TodosContext } from "../context/todo.context";

export default function Nav() {
  const { todos } = useContext(TodosContext);
  const hasSelection = todos?.some((todo) => todo.selected);

  return (
    <div className="sticky bottom-0 w-full pt-5">
      <div className="mx-auto w-full">
        <div className=" bg-white px-7 shadow-lg">
          <div className="flex">
            <div className="group flex-1">
              <a
                href="/"
                className="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
              >
                <span className="block px-1 pb-2 pt-1">
                  <i className="far fa-list mb-1 block pt-1 text-2xl"></i>
                  <span className="block pb-1 text-xs">Offen</span>
                </span>
              </a>
            </div>
            <div className="group m-auto flex-1">
              <button
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white disabled:bg-blue-500"
                aria-label="Check"
                disabled={!hasSelection}
              >
                <i className="fas fa-check"></i>
              </button>
            </div>
            <div className="group flex-1">
              <a
                href="{base}/abgeschlossen"
                className="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
              >
                <span className="block px-1 pb-2 pt-1">
                  <i className="fas fa-clipboard-check mb-1 block pt-1 text-2xl"></i>
                  <span className="block pb-1 text-xs">Abgeschlossen</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
