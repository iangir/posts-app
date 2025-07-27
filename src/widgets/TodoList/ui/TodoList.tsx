import { TodoItem, type Todo } from 'entities/todo';
import cls from './TodoList.module.css';

type TodoListProps = {
	todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
	return (
		<ul className={cls.TodoList}>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
