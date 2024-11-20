import ButtonLink from "./button-link";
import Searchbar from "./searchbar";

export default function Header({
  title = "Offene Aufgaben",
  showSearch = true,
}) {
  return (
    <header className="sticky top-0 w-full border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex justify-between gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <ButtonLink label="Neu" href="todos-anlegen" />
          </div>
        </div>
      </div>
      {showSearch && <Searchbar />}
    </header>
  );
}
