import './App.css';
import TodoContextProvider from './contexts/TodoContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
    return (
      <div>
          <TodoContextProvider>
          <h3> Add Your Thing(s) To Do For The Day:</h3>
          <AddTask />
          <h3> To Do List: </h3>
          <div className="container">
            <TaskList />
          </div>
        </TodoContextProvider>
      </div>
    );
}

export default App;