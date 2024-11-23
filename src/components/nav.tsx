import { FaCheck, FaClipboard, FaList } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTodoStore } from "../store/hooks/useTodoStore";

export const Nav = () => {
  const location = useLocation();
  const { todos, closeSelectedTodos } = useTodoStore();
  const hasSelectedTodos = todos.some((todo) => todo.selected);

  return (
    <div className="sticky bottom-0 w-full pt-5">
      <div className="mx-auto w-full">
        <div className="bg-white px-7 shadow-lg">
          <div className="flex">
            <div className="group flex-1">
              <Link
                to="/"
                className="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
              >
                <span className="flex flex-col items-center px-1 pb-2 pt-1">
                  <FaList className="mb-1 block pt-1 text-3xl" />
                  <span className="block pb-1 text-xs">Offen</span>
                </span>
              </Link>
            </div>

            {location.pathname === "/" && (
              <div className="group m-auto flex-1">
                <button
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white disabled:bg-blue-500"
                  aria-label="Check"
                  disabled={!hasSelectedTodos}
                  onClick={closeSelectedTodos}
                >
                  <FaCheck className="text-2xl" />
                </button>
              </div>
            )}

            <div className="group flex-1">
              <Link
                to="/abgeschlossen"
                className="mx-auto flex w-full   justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
              >
                <span className="flex flex-col items-center px-1 pb-2 pt-1 ">
                  <FaClipboard className="mb-1 block pt-1 text-3xl" />
                  <span className="block pb-1 text-xs">Abgeschlossen</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
