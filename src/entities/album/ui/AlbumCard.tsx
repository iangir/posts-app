import { Link } from 'react-router-dom';
import type { Album } from '../model/types/album';

type AlbumCardProps = {
	album: Album;
};

export const AlbumCard = ({ album }: AlbumCardProps) => {
	return (
		<div>
			<Link to={`/albums/${album.id}/photos`}>
				<h2>{album.title}</h2>
			</Link>
		</div>
	);
};
