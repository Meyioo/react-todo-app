import Header from "../components/header";
import Nav from "../components/nav";
import TodoList from "../components/todoList";

export default function Root() {
  return (
    <>
      <Header />
      <TodoList />
      <Nav />
    </>
  );
}
