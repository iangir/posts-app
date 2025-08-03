import { skipToken } from '@reduxjs/toolkit/query';
import { useGetAlbumsByUserIdQuery } from 'entities/album/model/api/albumsApi';
import { useParams } from 'react-router-dom';
import { AlbumList } from 'widgets/AlbumList';
import cls from './UserAlbumList.module.css';

export const UserAlbumList = () => {
	const { id } = useParams();

	const { data: albums, isLoading, error } = useGetAlbumsByUserIdQuery(id ?? skipToken);

	if (!albums) return null;

	return (
		<div className={cls.UserAlbumList}>
			<AlbumList
				albums={albums}
				loading={isLoading}
				error={error && 'Не удалось загрузить альбомы'}
			/>
		</div>
	);
};
