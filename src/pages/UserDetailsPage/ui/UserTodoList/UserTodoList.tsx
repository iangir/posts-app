import { useGetTodosByUserIdQuery } from 'entities/todo/model/api/todosApi';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { TodoList } from 'widgets/TodoList';
import cls from './UserTodoList.module.css';

export const UserTodoList = () => {
	const { id } = useParams();

	const { data: todos, isLoading: loading, error } = useGetTodosByUserIdQuery(id ?? '1');

	if (!todos) return null;

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <h2>Что то пошло не так</h2>;
	}

	const total = todos.length;
	const completed = todos.filter((todo) => todo.completed).length;
	const todosLeft = total - completed;

	return (
		<div className={cls.UserTodoList}>
			<span className={cls.info}>
				Todos: {total} | Completed: {completed} | Left: {todosLeft}
			</span>
			<TodoList todos={todos} />
		</div>
	);
};
