import { AlbumCard, type Album } from 'entities/album';
import cls from './AlbumList.module.css';

type AlbumListProps = {
	albums: Album[];
};

export const AlbumList = ({ albums }: AlbumListProps) => {
	return (
		<div className={cls.CommentList}>
			{albums.map((album) => (
				<AlbumCard key={album.id} album={album} />
			))}
		</div>
	);
};
