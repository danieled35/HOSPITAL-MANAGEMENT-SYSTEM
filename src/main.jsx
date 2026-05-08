// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import App from './App.jsx'
// import Login from './Login.jsx'
// import Register from './Register.jsx'
// import Dashboard from './Dashboard.jsx' // 1. Import the new file
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<App />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* 2. Add the route here */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)