import type { Post } from 'entities/post';
import { useEffect, useState } from 'react';
import { api } from 'shared/api/api';

export const usePosts = (userId?: string) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const url = '/posts';
				const params = userId ? { userId } : undefined;

				const data = await api.get<Post[]>(url, params);
				setPosts(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch posts');
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, [userId]);

	return { posts, loading, error };
};
