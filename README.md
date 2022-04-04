-   Todo App must be able to add new todos
    -   fullfilled this requirement by creating an AddTask component
    -   [AddTask Component Code](https://github.com/brandonpretelt/todo-3780-react/blob/c1c7e440701b37cc7a70c7fe6bc9ae9a92b9507c/src/components/AddTask.js#L4)
-   App must be able to edit todos

    -   have yet to complete this one

-   App must be able to delete todos

    -   used context api and reducers to dispatch a delete function
    -   [DeleteButton Code](https://github.com/brandonpretelt/todo-3780-react/blob/c1c7e440701b37cc7a70c7fe6bc9ae9a92b9507c/src/components/DeleteButton.js#L4)
    -   [Delete Todo Reducer Code](https://github.com/brandonpretelt/todo-3780-react/blob/69ce8b9dfb0e517ee6f4038d6d77e7e3fa61fce5/src/reducers/todoReducer.js#L15)

-   App must be able to remove (delete) completed todos
    -   have yet to complete this one
-   App must use a minimum of 4 components

    -   Created AddTask, DeleteButton, TaskItem, TaskList components
    -   [Components Folder](https://github.com/brandonpretelt/todo-3780-react/tree/main/src/components)

-   App must use useContext to pass todos from parent components to children components
    -   Created todocontext w/ reducer and provider
    -   [Context file](https://github.com/brandonpretelt/todo-3780-react/blob/69ce8b9dfb0e517ee6f4038d6d77e7e3fa61fce5/src/contexts/TodoContext.js#L5)
    -   [Reducer file](https://github.com/brandonpretelt/todo-3780-react/blob/39a4ebb96c483e3b94354a132c49e03864462b15/src/reducers/todoReducer.js#L3)
-   App must use at least 1 custom hook
    -   Created a localstorage hook
    -   [LocalStorage hook](https://github.com/brandonpretelt/todo-3780-react/blob/77bcee5013d5796b73ce19928d5dcffba84e9a86/src/hooks/useSetLS.js#L3)
-   App must store todos in local storage and persist through a reload
    -   LS hook and load local data in reducer in context
    -   [GetLocalStorage](https://github.com/brandonpretelt/todo-3780-react/blob/77bcee5013d5796b73ce19928d5dcffba84e9a86/src/contexts/TodoContext.js#L9)
