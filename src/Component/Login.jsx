// // // import { useState } from 'react'
// // // import axios from 'axios'
// // // import { Link, useNavigate } from 'react-router-dom'

// // // function Login() {
// // //   const [email, setEmail] = useState('')
// // //   const [password, setPassword] = useState('')
// // //   const [role, setRole] = useState('Patient') // New: Tracking the role
// // //   const navigate = useNavigate()

// // //   // const handleLogin = async (e) => {
// // //   //   e.preventDefault()
// // //   //   try {
// // //   //     const res = await axios.post('http://127.0.0.1:5000/login', { email, password, role })
// // //   //     localStorage.setItem('username', res.data.user.username)
// // //   //     localStorage.setItem('role', role) // Save the role too!
// // //   //     alert("Welcome back, " + res.data.user.username)
// // //   //     navigate('/dashboard')
// // //   //   } catch (err) {
// // //   //     alert("Login Failed: Check your credentials")
// // //   //   }
// // //   // }

// // //   const handleLogin = async (e) => {
// // //   e.preventDefault();
  
// // //   try {
// // //     const response = await fetch('http://127.0.0.1:5000/login', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ 
// // //         email: email, 
// // //         password: password, 
// // //         role: selectedRole // Make sure this matches your button state!
// // //       }),
// // //     });

// // //     const data = await response.json();

// // //     if (response.ok) {
// // //       // 1. SAVE the user info so the Dashboard can see it
// // //       localStorage.setItem('username', data.user.username);
// // //       localStorage.setItem('role', data.user.role);
      
// // //       // 2. REDIRECT to the dashboard
// // //       navigate('/dashboard'); 
// // //     } else {
// // //       alert(data.message || "Login Failed");
// // //     }
// // //   } catch (error) {
// // //     console.error("Error:", error);
// // //     alert("Server is not responding");
// // //   } 
// // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-[#e2e8f0] flex items-center justify-center p-4">
// // // //       {/* Main Glass Card */}
// // // //       <div className="bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
        
// // // //         {/* Left Side: Image & Message (Hidden on small screens) */}
// // // //         {/* <div className="hidden md:flex md:w-1/2 bg-blue-600 relative">
// // // //           <img 
// // // //             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
// // // //             alt="Doctor" 
// // // //             className="absolute inset-0 w-full h-full object-cover opacity-60"
// // // //           />
// // // //           <div className="relative z-10 p-12 self-end text-white">
// // // //             <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
// // // //             <p className="text-lg opacity-90">Sign in to continue to your account</p>
// // // //           </div>
// // // //         </div> */}
// // // //         {/* Left Side: Optimized Image & Message */}
// // // //         <div className="hidden md:flex md:w-1/2 bg-blue-60 relative overflow-hidden">
// // // //           {/* This optimized link uses a high-res wide photo from Unsplash.
// // // //              Crucially, 'object-cover' forces it to fill the box without stretching,
// // // //              while 'object-center' focuses on the doctor.
// // // //           */}
// // // //           <img 
// // // //             src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1600&auto=format&fit=crop" 
// // // //             alt="Doctor" 
// // // //             className="absolute inset-0 w-full h-full object-cover object-center scale-05"
// // // //           />
// // // //           {/* This gradient overlay darkens the image slightly so the white text is readable */}
// // // //           <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent"></div>
          
// // // //           <div className="relative z-10 p-16 self-end text-white">
// // // //             <h1 className="text-6xl font-extrabold mb-5 tracking-tighter leading-tight">Welcome Back</h1>
// // // //             <p className="text-xl opacity-90 font-medium">Sign in to continue to your centralized medical registry.</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Side: The Form */}
// // // //         <div className="p-8 md:p-16 w-full md:w-1/2">
// // // //           <div className="flex items-center gap-2 mb-8">
// // // //             <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl">⚕️</div>
// // // //             <h2 className="text-3xl font-bold text-slate-800 tracking-tight">MediDash</h2>
// // // //           </div>

// // // //           {/* Role Buttons */}
// // // //           <div className="flex gap-3 mb-8">
// // // //             {['Admin', 'Doctor', 'Patient'].map((r) => (
// // // //               <button
// // // //                 key={r}
// // // //                 onClick={() => setRole(r)}
// // // //                 className={`flex-1 py-2 rounded-lg font-bold transition-all ${
// // // //                   role === r ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500'
// // // //                 }`}
// // // //               >
// // // //                 {r}
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           <form onSubmit={handleLogin} className="space-y-6">
// // // //             <div>
// // // //               <label className="block text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email Address</label>
// // // //               <input 
// // // //                 type="email" 
// // // //                 placeholder="admin@email.com"
// // // //                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // // //                 onChange={(e) => setEmail(e.target.value)} 
// // // //                 required 
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Password</label>
// // // //               <input 
// // // //                 type="password" 
// // // //                 placeholder="••••••••"
// // // //                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // // //                 onChange={(e) => setPassword(e.target.value)} 
// // // //                 required 
// // // //               />
// // // //             </div>

// // // //             <div className="flex items-center justify-between text-sm">
// // // //               <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
// // // //                 <input type="checkbox" className="w-4 h-4 rounded" /> Remember me
// // // //               </label>
// // // //               <a href="#" className="text-indigo-600 font-semibold hover:underline">Forgot password?</a>
// // // //             </div>

// // // //             <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition transform active:scale-95">
// // // //               Sign In
// // // //             </button>
// // // //           </form>

// // // //           <p className="mt-8 text-center text-slate-500">
// // // //             Don't have an account? <Link to="/register" className="text-indigo-600 font-bold">Register</Link>
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // //     return (
// // //     <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-0 md:p-6">
// // //       {/* Main Container: Uses a 2-column grid on desktop */}
// // //       <div className="bg-white w-full max-w-[1100px] shadow-2xl rounded-none md:rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[700px]">
        
// // //         {/* LEFT COLUMN: Image Section */}
// // //         <div className="relative h-[40vh] md:h-full w-full">
// // //           <img 
// // //             src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1600&auto=format&fit=crop" 
// // //             alt="Doctor" 
// // //             className="absolute inset-0 w-full h-full object-cover"
// // //           />
// // //           {/* Text Overlay */}
// // //           <div className="absolute inset-0 bg-indigo-900/40 flex flex-col justify-end p-8 md:p-12 text-white">
// // //             <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome Back</h1>
// // //             <p className="text-lg opacity-90">Sign in to continue to your account</p>
// // //           </div>
// // //         </div>

// // //         {/* RIGHT COLUMN: Form Section */}
// // //         <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
// // //           <div className="flex items-center gap-3 mb-8">
// // //             <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">⚕️</div>
// // //             <h1 className="text-2xl font-bold text-slate-800">MediDash</h1>
// // //           </div>

// // //           {/* Role Selectors */}
// // //           <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
// // //              {['Admin', 'Doctor', 'Patient'].map((r) => (
// // //                <button 
// // //                 key={r}
// // //                 onClick={() => setRole(r)}
// // //                 className={`flex-1 py-2 rounded-lg font-bold transition ${role === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
// // //                >
// // //                  {r}
// // //                </button>
// // //              ))}
// // //           </div>

// // //           <form onSubmit={handleLogin} className="space-y-6">
// // //             <input 
// // //               type="email" 
// // //               placeholder="Email Address" 
// // //               className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required 
// // //             />
// // //             <input 
// // //               type="password" 
// // //               placeholder="Password" 
// // //               className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required 
// // //             />
// // //             <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 shadow-lg transition">
// // //               Sign In
// // //             </button>
// // //           </form>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Login


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('Patient'); // Default role
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
    
// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ 
// //           email: email, 
// //           password: password, 
// //           role: role // Matches the state variable below
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         // 1. Store session data
// //         localStorage.setItem('username', data.user.username);
// //         localStorage.setItem('role', data.user.role);
        
// //         // 2. Navigate to Dashboard
// //         navigate('/dashboard'); 
// //       } else {
// //         // Shows error if password or role is incorrect
// //         alert(data.message || "Login Failed: Check your credentials");
// //       }
// //     } catch (error) {
// //       console.error("Connection Error:", error);
// //       alert("Backend server is not responding. Check your terminal!");
// //     } 
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-0 md:p-6 font-sans">
// //       {/* Main Container */}
// //       <div className="bg-white w-full 'max-w-275' shadow-2xl rounded-none md:rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen md: 'min-h-175'">
        
// //         {/* LEFT COLUMN: Visual Branding */}
// //         <div className="relative h-[35vh] md:h-auto w-full overflow-hidden">
// //           <img 
// //             src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1600&auto=format&fit=crop" 
// //             alt="Medical Professional" 
// //             className="absolute inset-0 w-full h-full object-cover scale-110"
// //           />
// //           <div className="absolute inset-0 'bg-gradient-to-t' from-indigo-900/90 via-indigo-900/40 to-transparent flex flex-col justify-end p-8 md:p-16 text-white">
// //             <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Welcome Back</h1>
// //             <p className="text-lg md:text-xl opacity-90 font-medium max-w-sm">
// //               Access your centralized medical registry and health analytics.
// //             </p>
// //           </div>
// //         </div>

// //         {/* RIGHT COLUMN: Form Section */}
// //         <div className="flex flex-col justify-center p-8 md:p-20 bg-white">
// //           <div className="flex items-center gap-3 mb-12">
// //             <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-100">⚕️</div>
// //             <h1 className="text-3xl font-black text-slate-800 tracking-tight">MediDash</h1>
// //           </div>

// //           <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Account Login</h2>

// //           {/* Role Selectors */}
// //           <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-10 shadow-inner">
// //              {['Admin', 'Doctor', 'Patient'].map((r) => (
// //                <button 
// //                 key={r}
// //                 type="button"
// //                 onClick={() => setRole(r)}
// //                 className={`flex-1 py-3 rounded-xl font-bold transition-all duration-200 ${
// //                   role === r 
// //                   ? 'bg-white text-indigo-600 shadow-md scale-100' 
// //                   : 'text-slate-500 hover:text-slate-700'
// //                 }`}
// //                >
// //                  {r}
// //                </button>
// //              ))}
// //           </div>

// //           <form onSubmit={handleLogin} className="space-y-6">
// //             <div className="group">
// //               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
// //               <input 
// //                 type="email" 
// //                 placeholder="name@medical.com" 
// //                 className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 border-transparent focus:border-indigo-200 transition-all"
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required 
// //               />
// //             </div>

// //             <div className="group">
// //               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Password</label>
// //               <input 
// //                 type="password" 
// //                 placeholder="••••••••" 
// //                 className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 border-transparent focus:border-indigo-200 transition-all"
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required 
// //               />
// //             </div>

// //             <div className="flex items-center justify-between py-2">
// //               <label className="flex items-center gap-2 text-xs font-bold text-slate-400 cursor-pointer">
// //                 <input type="checkbox" className="w-4 h-4 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500" /> 
// //                 Remember Me
// //               </label>
// //               <button type="button" className="text-xs font-bold text-indigo-600 hover:underline">Forgot Password?</button>
// //             </div>

// //             <button 
// //               type="submit" 
// //               className="w-full bg-indigo-600 text-white font-black py-5 rounded-[1.5rem] hover:bg-indigo-700 shadow-2xl shadow-indigo-100 transition-all transform active:scale-[0.98] mt-4"
// //             >
// //               Sign In to Dashboard
// //             </button>
// //           </form>

// //           <p className="mt-10 text-center text-slate-400 text-sm font-medium">
// //             New to the platform? <Link to="/register" className="text-indigo-600 font-black hover:underline ml-1">Create Account</Link>
// //           </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;





// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('Patient'); 
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password, role }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         localStorage.setItem('username', data.user.username);
// //         localStorage.setItem('role', data.user.role);
// //         navigate('/dashboard'); 
// //       } else {
// //         alert(data.message || "Login Failed");
// //       }
// //     } catch (error) {
// //       alert("Server connection failed");
// //     } 
// //   };

// //   return (
// //     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
// //       <div className="bg-white w-full max-w-4xl shadow-2xl 'rounded-4xl' overflow-hidden flex flex-col md:flex-row 'min-h-150px'">
        
// //         {/* Left Branding */}
// //         <div className="md:w-1/2 bg-indigo-900 relative">
// //           <img 
// //             src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1600&auto=format&fit=crop" 
// //             alt="Medical" 
// //             className="absolute inset-0 w-full h-full object-cover opacity-50"
// //           />
// //           <div className="relative z-10 p-12 h-full flex flex-col justify-end text-white">
// //             <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
// //             <p className="opacity-80">Sign in to your medical dashboard.</p>
// //           </div>
// //         </div>

// //         {/* Right Form */}
// //         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
// //           <div className="flex items-center gap-3 mb-8">
// //             <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">⚕️</div>
// //             <h2 className="text-2xl font-bold text-slate-800">MediDash</h2>
// //           </div>

// //           <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
// //              {['Admin', 'Doctor', 'Patient'].map((r) => (
// //                <button 
// //                 key={r}
// //                 type="button"
// //                 onClick={() => setRole(r)}
// //                 className={`flex-1 py-2 rounded-lg font-bold text-sm transition ${role === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
// //                >
// //                  {r}
// //                </button>
// //              ))}
// //           </div>

// //           <form onSubmit={handleLogin} className="space-y-5">
// //             <input 
// //               type="email" 
// //               placeholder="Email Address" 
// //               className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //               onChange={(e) => setEmail(e.target.value)}
// //               required 
// //             />
// //             <input 
// //               type="password" 
// //               placeholder="Password" 
// //               className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //               onChange={(e) => setPassword(e.target.value)}
// //               required 
// //             />
// //             <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg">
// //               Sign In
// //             </button>
// //           </form>

// //           <p className="mt-8 text-center text-slate-500 text-sm">
// //             Need an account? <Link to="/register" className="text-indigo-600 font-bold">Register</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Patient');
//   const [rememberMe, setRememberMe] = useState(false); // New state
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, role, rememberMe }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('username', data.user.username);
//         localStorage.setItem('role', data.user.role);
//         // If rememberMe is true, you could also store a token in cookies here
//         navigate('/dashboard'); 
//       } else {
//         alert(data.message || "Login Failed");
//       }
//     } catch (error) {
//       alert("Server connection failed");
//     } 
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-4xl shadow-2xl rounded-[2rem] overflow-hidden flex flex-col md:row min-h-[650px]">
        
//         {/* Left Side branding omitted for brevity */}

//         <div className="md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-slate-800 mb-6">Sign In</h2>

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//             />

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
//                 <input 
//                   type="checkbox" 
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 rounded text-indigo-600" 
//                 /> 
//                 Remember me
//               </label>
//               <button 
//                 type="button"
//                 onClick={() => alert("Redirecting to password recovery...")}
//                 className="text-indigo-600 font-semibold hover:underline"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 shadow-lg">
//               Sign In
//             </button>
//           </form>

//           {/* Social Sign-In Options */}
//           <div className="mt-8">
//             <div className="relative flex items-center gap-4 mb-6">
//               <div className="flex-grow border-t border-slate-200"></div>
//               <span className="text-slate-400 text-xs font-bold uppercase">Or continue with</span>
//               <div className="flex-grow border-t border-slate-200"></div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <button className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition">
//                 <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
//                 <span className="text-sm font-semibold">Google</span>
//               </button>
//               <button 
//                 onClick={() => alert("Phone login coming soon!")}
//                 className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition"
//               >
//                 <span className="text-lg">📱</span>
//                 <span className="text-sm font-semibold">Phone</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Patient');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // Your login fetch logic here...
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
//       <div className="bg-white w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
//         {/* Left Side: Medical Branding */}
//        {/* Left Side: Medical Branding */}
// <div className="md:w-5/12 bg-indigo-600 relative hidden md:block overflow-hidden">
//   {/* The Image - We use 'object-cover' to prevent stretching */}
//   <img 
//     src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
//     alt="Medical Professional" 
//     className="absolute inset-0 w-full h-full object-cover"
//   />
  
//   {/* Modern Gradient Overlay - This makes the image look "pro" and helps the text stand out */}
//   <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>

//   <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
//     <div className="flex items-center gap-3">
//       <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
//         ⚕️
//       </div>
//       <span className="text-2xl font-black tracking-tighter uppercase">MediDash</span>
//     </div>

//     <div>
//       <h1 className="text-4xl font-extrabold leading-[1.1] mb-4">
//         Precision in <br /> 
//         <span className="text-indigo-300">Healthcare.</span>
//       </h1>
//       <p className="text-indigo-100/80 text-sm font-medium max-w-xs leading-relaxed">
//         Access your medical records, diagnostic predictions, and patient data in one secure location.
//       </p>
//     </div>
//   </div>
// </div>

//         {/* Right Side: Modern Form */}
//         <div className="md:w-7/12 p-8 md:p-20 flex flex-col justify-center bg-white">
//           <div className="max-w-md mx-auto w-full">
//             <div className="mb-10 text-center md:text-left">
//               <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
//               <p className="text-slate-500">Please enter your details to sign in.</p>
//             </div>

//             {/* Role Switcher */}
//             <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
//               {['Patient', 'Doctor', 'Admin'].map((r) => (
//                 <button 
//                   key={r}
//                   onClick={() => setRole(r)}
//                   className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${role === r ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
//                 >
//                   {r}
//                 </button>
//               ))}
//             </div>

//             <form onSubmit={handleLogin} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
//                 <input 
//                   type="email" 
//                   placeholder="name@company.com" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="••••••••" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required 
//                 />
//               </div>

//               <div className="flex items-center justify-between px-1">
//                 <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
//                   <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" /> 
//                   Remember me
//                 </label>
//                 <Link to="/forgot-password" size="sm" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot Password?</Link>
//               </div>

//               <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-indigo-200">
//                 Sign In
//               </button>
//             </form>

//             <div className="mt-10">
//               <div className="relative flex items-center gap-4 mb-8">
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Or continue with</span>
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all font-bold text-slate-700">
//                   <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
//                   Google
//                 </button>
//                 <button className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all font-bold text-slate-700">
//                   <span className="text-xl">📱</span>
//                   Phone
//                 </button>
//               </div>
//             </div>

//             <p className="mt-10 text-center text-slate-500 font-medium">
//               Don't have an account? <Link to="/register" className="text-indigo-600 font-black hover:underline ml-1">Create Account</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Patient');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   // 1. "Remember Me" - Load saved email when the page opens
//   useEffect(() => {
//     const savedEmail = localStorage.getItem('rememberedEmail');
//     if (savedEmail) {
//       setEmail(savedEmail);
//       setRememberMe(true);
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevents the page from refreshing
    
//     // 2. Save email if Remember Me is checked
//     if (rememberMe) {
//       localStorage.setItem('rememberedEmail', email);
//     } else {
//       localStorage.removeItem('rememberedEmail');
//     }

//     try {
//       const response = await fetch('http://127.0.0.1:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('username', data.user.username);
//         localStorage.setItem('role', data.user.role);
//         navigate('/dashboard'); // Take us to the dashboard!
//       } else {
//         alert(data.message || "Login Failed");
//       }
//     } catch (error) {
//       alert("Server connection failed. Is your Python backend running?");
//     }
//   };

//   return (
//     // ... (Keep your existing styling divs)
//     <form onSubmit={handleLogin} className="space-y-6"> 
//       <div>
//         <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
//         <input 
//           type="email" 
//           value={email} // Connects to the state
//           className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
//         <input 
//           type="password" 
//           className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//           onChange={(e) => setPassword(e.target.value)}
//           required 
//         />
//       </div>

//       <div className="flex items-center justify-between px-1">
//         <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
//           <input 
//             type="checkbox" 
//             checked={rememberMe}
//             onChange={(e) => setRememberMe(e.target.checked)}
//             className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" 
//           /> 
//           Remember me
//         </label>
//         <button type="button" className="text-sm font-bold text-indigo-600">Forgot Password?</button>
//       </div>

//       {/* IMPORTANT: Added type="submit" so it triggers handleLogin */}
//       <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
//         Sign In
//       </button>
//     </form>
//     // ...
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Patient');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   // 1. Remember Me Logic: Load saved email on mount
//   useEffect(() => {
//     const savedEmail = localStorage.getItem('rememberedEmail');
//     if (savedEmail) {
//       setEmail(savedEmail);
//       setRememberMe(true);
//     }
//   }, []);
//   // Add these functions inside your Login component:
//   const handleGoogleLogin = () => {
//     alert("Redirecting to Google Secure Auth...");
//     // In a real app, you would use: window.location.href = 'http://localhost:5000/login/google';
//   };

//   const handlePhoneLogin = () => {
//   const phone = prompt("Please enter your phone number:");
//     if (phone) {
//     alert('Verification code sent to ${phone}');
//       // Then you would show the code input just like the Forgot Password page
//     }
//   };

//   // Then update the buttons in your JSX:
//   <button type="button" onClick={handleGoogleLogin} className="...">
//     <img src="..." /> Google
//   </button>

//   <button type="button" onClick={handlePhoneLogin} className="...">
//     📱 Phone
//   </button>
//     const handleLogin = async (e) => {
//       e.preventDefault();
      
//       // Save/Remove email from local storage based on checkbox
//       if (rememberMe) {
//         localStorage.setItem('rememberedEmail', email);
//       } else {
//         localStorage.removeItem('rememberedEmail');
//       }

//     try {
//       const response = await fetch('http://127.0.0.1:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('username', data.user.username);
//         localStorage.setItem('role', data.user.role);
//         navigate('/dashboard');
//       } else {
//         alert(data.message || "Login Failed");
//       }
//     } catch (error) {
//       alert("Server connection failed. Is your Flask backend running?");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
//       <div className="bg-white w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
//         {/* Left Side: Medical Branding */}
//         <div className="md:w-5/12 bg-indigo-600 relative hidden md:block overflow-hidden">
//           <img 
//             src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
//             alt="Medical Professional" 
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>
//           <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-2xl">⚕️</div>
//               <span className="text-2xl font-black tracking-tighter uppercase">MediDash</span>
//             </div>
//             <div>
//               <h1 className="text-4xl font-extrabold leading-[1.1] mb-4">Precision in <br /> <span className="text-indigo-300">Healthcare.</span></h1>
//               <p className="text-indigo-100/80 text-sm font-medium max-w-xs leading-relaxed">Access your medical records, diagnostic predictions, and patient data.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Sign In Form */}
//         <div className="md:w-7/12 p-8 md:p-20 flex flex-col justify-center bg-white">
//           <div className="max-w-md mx-auto w-full">
//             <div className="mb-10 text-center md:text-left">
//               <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
//               <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
//             </div>

//             {/* Role Switcher */}
//             <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
//               {['Patient', 'Doctor', 'Admin'].map((r) => (
//                 <button 
//                   key={r}
//                   type="button"
//                   onClick={() => setRole(r)}
//                   className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${role === r ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
//                 >
//                   {r}
//                 </button>
//               ))}
//             </div>

//             <form onSubmit={handleLogin} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
//                 <input 
//                   type="email" 
//                   value={email}
//                   placeholder="name@company.com" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="••••••••" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition-all"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required 
//                 />
//               </div>

//               <div className="flex items-center justify-between px-1">
//                 <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
//                   <input 
//                     type="checkbox" 
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" 
//                   /> 
//                   Remember me
//                 </label>
//                 <button 
//                   type="button" 
//                   onClick={() => alert("Password reset link sent to your email (Demo)")}
//                   className="text-sm font-bold text-indigo-600 hover:text-indigo-700"
//                 >
//                   Forgot Password?
//                 </button>
//               </div>

//               <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-indigo-200">
//                 Sign In
//               </button>
//             </form>

//             {/* Social Options */}
//             <div className="mt-10">
//               <div className="relative flex items-center gap-4 mb-8">
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Or continue with</span>
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button type="button" className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
//                   <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
//                   Google
//                 </button>
//                 <button type="button" onClick={() => alert("Phone login enabled")} className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
//                   <span className="text-xl">📱</span>
//                   Phone
//                 </button>
//               </div>
//             </div>

//             <p className="mt-10 text-center text-slate-500 font-medium">
//               Don't have an account? <Link to="/register" className="text-indigo-600 font-black hover:underline ml-1">Create Account</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Patient');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleGoogleLogin = () => {
    alert("Redirecting to Google Secure Auth...");
  };

  const handlePhoneLogin = () => {
    const phone = prompt("Please enter your phone number:");
    if (phone) {
      alert(`Verification code sent to ${phone}. For demo use: 123456`);
      navigate('/forgot-password'); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('role', data.user.role);
        navigate('/dashboard');
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      alert("Server connection failed. Is your Python backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-5xl shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Side */}
        <div className="md:w-5/12 bg-indigo-600 relative hidden md:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
            alt="Medical" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>
          <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl">⚕️</div>
              <span className="text-2xl font-black tracking-tighter uppercase">MediDash</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1]">Precision in <br /><span className="text-indigo-300">Healthcare.</span></h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-7/12 p-8 md:p-20 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Welcome Back</h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <input 
                type="email" 
                value={email}
                placeholder="Email Address" 
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500"
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500"
                onChange={(e) => setPassword(e.target.value)}
                required 
              />

              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-5 h-5 rounded-lg text-indigo-600" /> 
                  Remember me
                </label>
                <Link to="/forgot-password" size="sm" className="text-sm font-bold text-indigo-600">Forgot Password?</Link>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-200">
                Sign In
              </button>
            </form>

            <div className="mt-10">
              <div className="relative flex items-center gap-4 mb-8">
                <div className="flex-grow border-t-2 border-slate-100"></div>
                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Or continue with</span>
                <div className="flex-grow border-t-2 border-slate-100"></div>
              </div>

             <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" /> Google
                </button>
                <button type="button" onClick={handlePhoneLogin} className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
                  <span className="text-xl">📱</span> Phone
                </button>
              </div>
            </div>

            {/* THIS IS THE MISSING PART */}
            <p className="mt-10 text-center text-slate-500 font-medium">
              Don't have an account? 
              <Link to="/register" className="text-indigo-600 font-black hover:underline ml-1">
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
    