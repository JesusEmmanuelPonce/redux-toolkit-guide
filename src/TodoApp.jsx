import { useGetTodosQuery } from "./store/apis"

const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();

    return (
        <section>
            <h1>Todo App</h1>

            <hr />

            {isLoading ? "Fetching" : ""}

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </section>
    )
}

export default TodoApp