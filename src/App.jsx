// // import React from 'react'

// // function App() {
// //   return (
// //     <div style={{ backgroundColor: 'blue', color: 'white', padding: '50px', height: '100vh' }}>
// //       <h1>SYSTEM CHECK: ONLINE</h1>
// //       <p>If you can see this blue screen, your React "Heart" is beating, Daniel.</p>
// //     </div>
// //   )
// // }

// // export default App


// import { useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// function App() {
//   const [formData, setFormData] = useState({
//     first_name: '', last_name: '', email: '', password: '', role: 'Patient'
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       // const res = await axios.post('http://127.0.0.1:5000/register', formData)
//       // const res = await axios.post('http://127.0.0.1:5000/register', formData)
//       // axios.post('[http://127.0.0.1:5000/register](http://127.0.0.1:5000/register)', formData)
//       // Ensure the URL uses the IP address 127.0.0.1
//       const res = await axios.post('http://127.0.0.1:5000/register', formData);
//       alert("Success: " + res.data.message)
//     } catch (err) {
//       alert("Error: " + (err.response?.data?.error || "Server unreachable"))
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
//       {/* Cinematic Header */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-light text-slate-800 tracking-tight">
//           MED<span className="font-bold text-blue-600">SYSTEM</span>
//         </h1>
//         <p className="text-slate-500 mt-2">Centralized Patient & Staff Registry</p>
//       </div>

//       <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-1">
//               <label className="text-xs font-semibold text-slate-500 uppercase">First Name</label>
//               <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 onChange={(e) => setFormData({...formData, first_name: e.target.value})} required />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs font-semibold text-slate-500 uppercase">Last Name</label>
//               <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 onChange={(e) => setFormData({...formData, last_name: e.target.value})} required />
//             </div>
//           </div>

//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-500 uppercase">Medical Email</label>
//             <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
//               onChange={(e) => setFormData({...formData, email: e.target.value})} required />
//           </div>

//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-500 uppercase">Secure Password</label>
//             <input type="password" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
//               onChange={(e) => setFormData({...formData, password: e.target.value})} required />
//           </div>

//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-500 uppercase">Access Role</label>
//             <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none"
//               onChange={(e) => setFormData({...formData, role: e.target.value})}>
//               <option value="Patient">Patient</option>
//               <option value="Doctor">Doctor</option>
//               <option value="Admin">System Admin</option>
//             </select>
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform active:scale-95">
//             Register New Account
//           </button>
//           <p className="text-center text-slate-500 mt-4">
//            Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./Login";
// import Register from "./Register";
// import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* <--- IS THIS HERE? */}
//       </Routes>
//     </Router>
//   );
// }
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import Dashboard from './Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-slate-50">
//         <Routes>
//           {/* Automatically open Login when the app starts */}
//           <Route path="/" element={<Navigate to="/login" />} />
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* Catch-all: redirect any unknown URL to login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import Dashboard from './Dashboard';

import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';
import ForgotPassword from './Component/ForgotPassword';

// Inside your Routes:

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />

      </Routes>
    </Router>
  );
}

export default App;