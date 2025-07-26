import type { Album } from 'entities/album';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { AlbumList } from 'widgets/AlbumList';
import cls from './UserAlbumList.module.css';

export const UserAlbumList = () => {
	const { id } = useParams();
	const [albums, setAlbums] = useState<Album[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
			.then((response) => response.json())
			.then((json) => setAlbums(json))
			.catch((err) => {
				console.log(err instanceof Error ? err.message : 'Failed to fetch todos');
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={cls.UserAlbumList}>
			<AlbumList albums={albums} />
		</div>
	);
};
