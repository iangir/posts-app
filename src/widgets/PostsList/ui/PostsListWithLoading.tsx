import { withLoading } from 'shared/lib/hoc/withLodaing';
import { PostsList } from './PostsList';

export const PostsListWithLoading = withLoading(PostsList);
