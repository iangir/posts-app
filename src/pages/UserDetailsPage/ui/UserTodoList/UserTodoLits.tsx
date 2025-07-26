import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './UserTodoList.module.css';

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export const UserTodoList = () => {
	const { id } = useParams();
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.catch((err) => {
				console.log(err instanceof Error ? err.message : 'Failed to fetch todos');
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return <Loader />;
	}

	return (
		<ul className={cls.UserTodoList}>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input type='checkbox' checked={todo.completed} readOnly />
					<span
						className={cls.title}
						style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
					>
						{todo.title}
					</span>
				</li>
			))}
		</ul>
	);
};
