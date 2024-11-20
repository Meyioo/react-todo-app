export default function TodoItem({ todo }) {
  const completed = false;
  return (
    <div className="flex w-full justify-between border-b-2 p-2 text-left">
      <div className="flex">
        if(!completed){" "}
        {
          <div className="me-4 ms-2 flex items-center">
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
              id="checkbox"
            />
          </div>
        }
        <div>
          <strong className="font-medium text-gray-900"> {todo.title} </strong>
          <p className="mt-1 text-pretty text-sm text-gray-700">
            {todo.description}
          </p>
        </div>
      </div>
    </div>
  );
}
