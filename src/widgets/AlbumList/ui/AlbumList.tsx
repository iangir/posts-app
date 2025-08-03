import { AlbumCard, type Album } from 'entities/album';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './AlbumList.module.css';

type AlbumListProps = {
	albums: Album[];
	loading: boolean;
	error: string | undefined;
};

export const AlbumList = ({ albums, loading, error }: AlbumListProps) => {
	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={cls.AlbumList}>
			{albums.map((album) => (
				<AlbumCard key={album.id} album={album} />
			))}
		</div>
	);
};
