import { useEffect, useState } from 'react';
import { api } from 'shared/api/api';

export type Geo = {
	lat: string;
	lng: string;
};

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

export type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
};

export const useUser = (userId: string) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setLoading(true);
				setError(null);

				const data = await api.get<User>(`/users/${userId}`);
				setUser(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch user');
			} finally {
				setLoading(false);
			}
		};

		if (userId) {
			fetchUser();
		}
	}, [userId]);

	return { user, loading, error };
};
