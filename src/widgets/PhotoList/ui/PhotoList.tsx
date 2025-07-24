import { PhotoCard } from 'entities/photo';
import type { Photo } from 'entities/photo/';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PhotoList.module.css';

export const PhotoList = () => {
	const { id } = useParams();
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
			.then((response) => response.json())
			.then((json) => setPhotos(json))
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
		<div className={cls.CommentList}>
			{photos.map((photo) => (
				<PhotoCard key={photo.id} photo={photo} />
			))}
		</div>
	);
};
