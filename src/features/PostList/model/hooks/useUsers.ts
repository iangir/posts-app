import type { User } from 'entities/user/';
import { useEffect, useState } from 'react';
import { api } from 'shared/api/api';

export const useUsers = (userId?: string) => {
	const [users, setUser] = useState<User | User[] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setLoading(true);
				setError(null);

				const url = `/users/${userId || ''}`;
				const data = await api.get<User>(url);
				setUser(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch user');
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, [userId]);

	return { users, loading, error };
};
