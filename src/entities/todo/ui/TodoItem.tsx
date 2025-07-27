import type { Todo } from '../model/types/todo';
import cls from './TodoItem.module.css';

type TodoCardProps = {
	todo: Todo;
};

export const TodoItem = ({ todo }: TodoCardProps) => {
	return (
		<li className={cls.TodoItem} key={todo.id}>
			<label
				className={cls.title}
				style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
				htmlFor={todo.id}
			>
				<input
					className={cls.checkbox}
					type='checkbox'
					checked={todo.completed}
					id={todo.id}
					readOnly
				/>
				{todo.title}
			</label>
		</li>
	);
};
