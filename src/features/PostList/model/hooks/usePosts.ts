import type { Post } from 'entities/post';
import { useEffect, useState } from 'react';

export const usePosts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const url = '/posts';

				const data = await fetch(url, { method: 'GET' }).then((res) => res.json());
				setPosts(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch posts');
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return { posts, loading, error };
};
