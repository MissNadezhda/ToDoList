import './App.css';
import image from './one.jpg';
import imageTwo from './Checklist.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className="container">
    <img src={image} alt='one' width='200px' />
    </div>
    <div className="container">
    <h1>Список дел</h1>
    </div>
    <ToDoList/>
    <div className="container">
        <img src={imageTwo} alt='checklist' width='200px'/>
        </div>
    </div>
  );
}

export default App;

