import './App.css';
import DisplayComments from './Components/DisplayComments';
import PostComment from './Components/PostComment';
import { CommentsProvider } from './Context/CommentsContext';

function App() {
  return (

    <CommentsProvider>
      <div className="App">
        <h1>Discussion</h1>
        <PostComment />
        <br /><hr />
        <DisplayComments />
      </div>
    </CommentsProvider>
  );
}

export default App;
