import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { PostList } from 'widgets/PostList/';
import { postsArray } from './postsReqestMock';

function App() {
	return (
		<MainLayout>
			<PostList posts={postsArray} />
		</MainLayout>
	);
}

export default App;
