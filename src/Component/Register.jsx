// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // function Register() {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     role: 'Patient'
// //   });
// //   const navigate = useNavigate();

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("Registration Successful! Please Login.");
// //         navigate('/login');
// //       } else {
// //         alert(data.message || "Registration Failed");
// //       }
// //     } catch (error) {
// //       alert("Server connection failed. Is the backend running?");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-6">
// //       <div className="bg-white w-full max-w-md p-8 'rounded-4xl' shadow-2xl">
// //         <div className="flex items-center gap-3 mb-8 justify-center">
// //           <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">⚕️</div>
// //           <h1 className="text-2xl font-bold text-slate-800">MediDash</h1>
// //         </div>

// //         <h2 className="text-xl font-bold text-center text-slate-700 mb-6">Create Account</h2>

// //         <form onSubmit={handleRegister} className="space-y-4">
// //           <input 
// //             type="text" 
// //             placeholder="Full Name" 
// //             className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //             onChange={(e) => setFormData({...formData, username: e.target.value})}
// //             required 
// //           />
// //           <input 
// //             type="email" 
// //             placeholder="Email Address" 
// //             className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //             onChange={(e) => setFormData({...formData, email: e.target.value})}
// //             required 
// //           />
// //           <input 
// //             type="password" 
// //             placeholder="Password" 
// //             className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //             onChange={(e) => setFormData({...formData, password: e.target.value})}
// //             required 
// //           />
          
// //           <select 
// //             className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
// //             onChange={(e) => setFormData({...formData, role: e.target.value})}
// //             value={formData.role}
// //           >
// //             <option value="Patient">Patient</option>
// //             <option value="Doctor">Doctor</option>
// //             <option value="Admin">Admin</option>
// //           </select>

// //           <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg mt-4">
// //             Register Now
// //           </button>
// //         </form>

// //         <p className="mt-6 text-center text-slate-500">
// //           Already have an account? <Link to="/login" className="text-indigo-600 font-bold">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     role: 'Patient'
//   });
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // If remember me is checked, save the email for the next login
//     if (rememberMe) {
//       localStorage.setItem('rememberedEmail', formData.email);
//     }

//     try {
//       const response = await fetch('http://127.0.0.1:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Registration Successful!");
//         navigate('/login');
//       } else {
//         alert(data.message || "Registration Failed");
//       }
//     } catch (error) {
//       alert("Server connection failed. Is your Python backend running?");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
//       <div className="bg-white w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[750px]">
        
//         {/* Left Side: Medical Branding (Matches Login) */}
//         <div className="md:w-5/12 bg-indigo-600 relative hidden md:block overflow-hidden">
//           <img 
//             src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop" 
//             alt="Medical Tech" 
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>
//           <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-2xl">⚕️</div>
//               <span className="text-2xl font-black tracking-tighter uppercase">MediDash</span>
//             </div>
//             <div>
//               <h1 className="text-4xl font-extrabold leading-[1.1] mb-4">Join the <br /> <span className="text-indigo-300">Network.</span></h1>
//               <p className="text-indigo-100/80 text-sm font-medium max-w-xs leading-relaxed">Create your account to start managing health data and accessing smart diagnostic tools.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Register Form */}
//         <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white">
//           <div className="max-w-md mx-auto w-full">
//             <div className="mb-8 text-center md:text-left">
//               <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
//               <p className="text-slate-500 font-medium">Join MediDash today.</p>
//             </div>

//             <form onSubmit={handleRegister} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input 
//                   type="text" 
//                   placeholder="First Name" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all"
//                   onChange={(e) => setFormData({...formData, firstName: e.target.value})}
//                   required 
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="Last Name" 
//                   className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all"
//                   onChange={(e) => setFormData({...formData, lastName: e.target.value})}
//                   required 
//                 />
//               </div>

//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all"
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 required 
//               />

//               <input 
//                 type="password" 
//                 placeholder="Create Password" 
//                 className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all"
//                 onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 required 
//               />

//               <select 
//                 className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
//                 onChange={(e) => setFormData({...formData, role: e.target.value})}
//               >
//                 <option value="Patient">Register as Patient</option>
//                 <option value="Doctor">Register as Doctor</option>
//                 <option value="Admin">Register as Admin</option>
//               </select>

//               <div className="flex items-center px-1">
//                 <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
//                   <input 
//                     type="checkbox" 
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" 
//                   /> 
//                   Remember me for login
//                 </label>
//               </div>

//               <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
//                 Create Account
//               </button>
//             </form>

//             {/* Social Options (Matches Login) */}
//             <div className="mt-8">
//               <div className="relative flex items-center gap-4 mb-6">
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Or sign up with</span>
//                 <div className="flex-grow border-t-2 border-slate-100"></div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button type="button" className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
//                   <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
//                   Google
//                 </button>
//                 <button type="button" className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
//                   <span className="text-xl">📱</span>
//                   Phone
//                 </button>
//               </div>
//             </div>

//             <p className="mt-8 text-center text-slate-500 font-medium">
//               Already have an account? <Link to="/login" className="text-indigo-600 font-black hover:underline ml-1">Sign In</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Patient'
  });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // IMAGE OPTIONS (UNSPLASH):
  // 1. High-Tech Lab (Current): https://images.unsplash.com/photo-1576089230635-c3f25c7e3f89?q=80&w=2070&auto=format&fit=crop
  // 2. Clear medical visualization: https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop
  // 3. Modern Doctor with Tablet: https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2070&auto=format&fit=crop

  const handleRegister = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', formData.email);
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
        navigate('/login');
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      alert("Server connection failed. Is your Python backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden flex flex-col md:flex-row min-h-[750px]">
        
        {/* Left Side: Medical Branding (Updated Image Logic) */}
        <div className="md:w-5/12 bg-indigo-600 relative hidden md:block overflow-hidden">
          <img 
            // Swapped image for a more high-tech laboratory setting
            src="https://images.unsplash.com/photo-1576089230635-c3f25c7e3f89?q=80&w=2070&auto=format&fit=crop" 
            alt="Advanced Medical Research" 
            // object-cover is crucial for scaling properly
            className="absolute inset-0 w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-indigo-900/60 to-transparent"></div>
          <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-2xl shadow-inner">⚕️</div>
              <span className="text-2xl font-black tracking-tighter uppercase">MediDash</span>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.1] mb-4">Secure Health <br /> <span className="text-indigo-300">Management.</span></h1>
              <p className="text-indigo-100/80 text-sm font-medium max-w-xs leading-relaxed">Join the network for unified access to records, diagnostic insights, and patient care tools.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Register Form (Unchanged Logic) */}
        <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
              <p className="text-slate-500 font-medium">Join MediDash today.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
                <input type="text" placeholder="Last Name" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="password" placeholder="Create Password" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
              <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600" onChange={(e) => setFormData({...formData, role: e.target.value})}>
                <option value="Patient">Register as Patient</option>
                <option value="Doctor">Register as Doctor</option>
                <option value="Admin">Register as Admin</option>
              </select>
              <div className="flex items-center px-1">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" /> 
                  Remember me for login
                </label>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                Create Account
              </button>
            </form>

            <div className="mt-8">
              <div className="relative flex items-center gap-4 mb-6"><div className="flex-grow border-t-2 border-slate-100"></div><span className="text-slate-400 text-xs font-black uppercase tracking-widest">Or sign up with</span><div className="flex-grow border-t-2 border-slate-100"></div></div>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" /> Google
                </button>
                <button type="button" onClick={() => alert("Phone login enabled")} className="flex items-center justify-center gap-3 p-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 font-bold text-slate-700">
                  <span className="text-xl">📱</span> Phone
                </button>
              </div>
            </div>
            <p className="mt-8 text-center text-slate-500 font-medium">Already have an account? <Link to="/login" className="text-indigo-600 font-black hover:underline ml-1">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;