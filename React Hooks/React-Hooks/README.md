In this module we are understanding the React Hooks .
(Resource Followed - Code Evolution , React Hooks Playlist )
Why Hooks are used ? What are Hooks ? What is the need if we had Class Components ?



useState

1. Counter.jsx (Explaining the usage of useState Hook and also about the use of previous State )
2. FirstandLastName (Objects with useState and also the main use of Previous here)
3. AddEmployee (useState with Arrays)


useEffect

1. Replacing all the State LifeCycle methods ,Explanation 
2. Conditional Rendering (with Dependency Array)
3. MouseMove(Tracking the mouse move , Understanding why we need to Render only once )
4. useEffect with CleanUp (with return function )- Even though the Toggle removes the Component "MouseMove" from the DOM , the event listener is still listening . That should not happen , if the element is removed from the dom , its event listener should not be active ,this can result in memory leak and thats why CleanUp is very important(and CleanUp / componentDidUnmount is done by returning in useEffect. )
5. Fetching Data with useEffect



useContext 

This hook is seperate because it is provided inside the React library (it is inbuilt) and it was introduced to manage the Prop Drilling problem and also the first step towards "state management". It provides access to global Storage so that data should not pass through components from each level rather should be accessed from a centralized position 

State Management History - 
1. Prop Drilling 
2. useContext 
3. React-redux 
4. Redux Toolkit 
5. Zustand 


useReducer 







useRef 
useCallback 
useMemo
-------------
Custom Hook 