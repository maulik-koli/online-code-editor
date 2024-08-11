# React Code Editor App

## Description

This is a real-time code editor application inspired by CodePen. Users can write HTML, CSS, and JavaScript code in separate editors and see the live output in a preview pane. The app provides a dark-themed interface with syntax highlighting for code editing.

## Features

- Real-time code preview
- Separate editors for HTML, CSS, and JavaScript
- Syntax highlighting using CodeMirror
- Responsive design with a dark blue theme

## Technology

- React.js
- CodeMirror
- HTML, CSS, JavaScript

## Dependencies

- **react**: 18.2.0
- **react-dom**: 18.2.0
- **react-codemirror2**: 7.2.1
- **codemirror**: 5.65.9

## Additional Libraries

- `codemirror`
- `react-codemirror2`

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.commaulik-koli/online-code-editor.git

2. **Navigate to the project directory:**
   ```bash
   cd online-code-editor

3. **Install dependencies:**
   ```bash
   npm install
   
4. **Start the application:**
   ```bash
   npm run dev

5. **Open your browser and navigate to:**
   ```bach
   http://localhost:5173/
   ```

## Project Structure

  ```
  online-code-editor/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  ├── src/
  │   ├── components/
  │   │   ├── Code.jsx
  │   │   ├── Editor.jsx
  │   │   ├── Header.jsx
  │   │   ├── Output.jsx
  │   ├── context/
  │   │   └── DataText.jsx
  │   ├── App.jsx
  │   ├── index.jsx
  ├── package.json
  └── package-lock.json
  ```

## Working

- **App.jsx**: Integrates `Header`, `Code`, and `Output` components.
- **Code.jsx**: Renders `Editor` components for HTML, CSS, and JavaScript.
- **Editor.jsx**: Uses CodeMirror to provide syntax highlighting and editing features.
- **Output.jsx**: Displays live code output using an iframe.
- **DataText.jsx**: Manages the state of code snippets using React context.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request with a description of your changes.

## Acknowledgements

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [CodeMirror](https://codemirror.net/): A versatile text editor implemented in JavaScript.
- [React-Codemirror2](https://github.com/Sciss/react-codemirror2): React bindings for CodeMirror.
- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.

---
