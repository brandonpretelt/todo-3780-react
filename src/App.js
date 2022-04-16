import './App.css';
import TodoContextProvider from './contexts/TodoContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {

    return (
      <TodoContextProvider>
        <div className="app-container">
              <h3> Add Your Thing(s) To Do For The Day:</h3>
              <AddTask />
              <h3> To Do List: </h3>
              <div> Actions: Click to mark as done, double click to edit </div>
              <div className="container">
                <TaskList />
              </div>
        </div>
      </TodoContextProvider>
    );
}

export default App;