import './App.css';
import DisplayComments from './Components/DisplayComments';
import PostComment from './Components/PostComment';

function App() {
  return (
    <div className="App">
      <h1>Discussion</h1>
      <PostComment />
      <DisplayComments />
    </div>
  );
}

export default App;
