## Project Description

### Project Name: Dev Stack

Project Description:
Dev Stack is a developer-focused website where users can explore different technologies and create their own development stack by selecting the technologies they use or want to learn.

### Technologies Used:

* React
* Vite
* TypeScript
* JSON
* Tailwind CSS
* DaisyUI
* React Toastify

### 1. Explore Technologies

Users can browse different frontend, programming language, styling, and DevOps technologies. Each technology includes information such as its description, category, difficulty level, and rating.

### 2. Build Your Own Stack

Users can select different technologies and add them to their personal stack. They can also remove individual technologies or clear the entire stack.

### 3. Interactive User Experience

This project uses React state management and React Toastify to provide instant feedback when users add or remove technologies from their stack.

# Answers to the React Questions

### Q: What is JSX and why is it used in React?

* JSX is a JavaScript syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to write and understand.

### Q: What is the difference between props and state?

* Props are data passed from a parent component to a child component, while state is data managed inside a component that can change over time.

### Q: What does the useState hook do, and where did you use it in this project?

* The `useState` hook is used to store and update data inside a React component. I used it in the App component to manage the selected technologies in the user's stack and update the UI when technologies are added or removed.

### Q: What does the useEffect hook do, and why did you need it to load the JSON data?

* The `useEffect` hook is used to perform an action when a component loads or when specific data changes. I used it to load the technology data from the JSON file when the application starts.

### Q: Why does every item in a .map() list need a unique key prop?

* A unique `key` helps React identify each item in a list. It helps React efficiently update the list when an item is added, removed, or changed.

### Q: What is conditional rendering? Show one place you used it (example: the empty stack message).

* Conditional rendering means showing different UI based on a condition. I used it in the stack section to show an empty stack message when no technology has been selected.

### Q: How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

* A parent component can pass data to a child component using props. A child component can send information back to the parent by calling a function that the parent passes through props.
