import type { Photo } from '../model/types/photo';
import cls from './PhotoCard.module.css';

type PhotoCardProps = {
	photo: Photo;
};

export const PhotoCard = ({ photo }: PhotoCardProps) => {
	return <img src={photo.url} alt={photo.title} className={cls.photo} loading='lazy' />;
};
