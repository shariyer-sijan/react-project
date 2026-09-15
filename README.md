# DevStack

DevStack is a simple React project where developers can explore different technologies and add their favorite technologies to their personal development stack.

## Live Website

[Visit DevStack](https://react-project-devstack.netlify.app/)



## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite

## Features

1. **Explore Technologies**  
   Users can explore different technologies and see their details.

2. **Add to Stack**  
   Users can add technologies to their own development stack and remove them when needed.

3. **Interactive UI**  
   The project has responsive design, buttons, toast notifications, and dynamic UI updates.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to child . State is used to store and manage data.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a component. In this project, I use it to manage the available technologies and the user's development stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run code after a component renders.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, I used it to show an empty stack message:

{Stack.length ? "Remove All" : "Your stack is empty."}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data can be passed from parent to child using props. A child can send data using hook .




