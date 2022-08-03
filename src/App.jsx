import './App.css';
import DisplayComments from './Components/DisplayComments';
import PostComment from './Components/PostComment';
import { CommentsProvider } from './Context/CommentsContext';
import { UsersProvider } from './Context/UsersContext';

function App() {
  return (

    <UsersProvider>
      <CommentsProvider>
        <div className="App">
          <h1>Discussion</h1>
          <PostComment />
          <br /><hr />
          <DisplayComments />
        </div>
      </CommentsProvider>
    </UsersProvider>
  );
}

export default App;
