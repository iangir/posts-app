import type { Photo } from '../model/types/photo';
import cls from './PhotoCard.module.css';

type PhotoCardProps = {
	photo: Photo;
};

export const PhotoCard = ({ photo }: PhotoCardProps) => {
	return (
		<figure className={cls.PhotoCard}>
			<img
				src={`https://dummyjson.com/icon/${photo.title}/150`}
				title={photo.title}
				alt={photo.title}
				className={cls.photo}
				loading='lazy'
			/>
		</figure>
	);
};
