// // import { useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';


// // import React, { useState, useEffect } from 'react'; // 1. Added useState here
// // import { useNavigate } from 'react-router-dom';

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const username = localStorage.getItem('username') || "Daniel";

// //   // 2. Add the Search State
// //   const [searchQuery, setSearchQuery] = useState('');

// //   // 3. Your Vitals Data
// //   const vitals = [
// //     { name: 'HEARTRATE', value: '72', unit: 'bpm', time: '10 mins ago', icon: '❤️' },
// //     { name: 'BLOOD PRESSURE', value: '120/80', unit: 'mmHg', time: '1 hour ago', icon: '🩺' },
// //     { name: 'SPO2', value: '98', unit: '%', time: '10 mins ago', icon: '🫁' },
// //     { name: 'TEMPERATURE', value: '98.6', unit: '°F', time: '4 hours ago', icon: '🌡️' }
// //   ];

// //   // 4. Create the Filtered List
// //   const filteredVitals = vitals.filter(v => 
// //     v.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <div className="flex h-screen bg-[#f3f4f6] overflow-hidden">
// //       {/* ... (Your Sidebar code remains the same) ... */}

// //       <main className="flex-1 flex flex-col p-6 overflow-y-auto">
        
// //         {/* TOP NAV: Update the Input here */}
// //         <header className="flex justify-between items-center mb-8 bg-white p-3 px-6 rounded-[2rem] shadow-sm border border-slate-100">
// //           <div className="relative w-1/3">
// //             <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
// //             <input 
// //               type="text" 
// //               placeholder="Search vitals (e.g. Heartrate).." 
// //               value={searchQuery} // 5. Connect to state
// //               onChange={(e) => setSearchQuery(e.target.value)} // 6. Update state on type
// //               className="w-full pl-12 pr-4 py-2 bg-slate-50 border-none rounded-full outline-none text-sm focus:ring-2 focus:ring-indigo-200 transition-all" 
// //             />
// //           </div>
// //           {/* ... (rest of header) ... */}
// //         </header>

// //         {/* ... (Emergency Banner) ... */}

// //         {/* VITALS GRID: Use filteredVitals instead of vitals */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //           {filteredVitals.length > 0 ? (
// //             filteredVitals.map((v, i) => (
// //               <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50 hover:shadow-md transition">
// //                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{v.name}</p>
// //                 <div className="flex items-baseline gap-1">
// //                   <h4 className="text-3xl font-black text-slate-800 tracking-tighter">{v.value}</h4>
// //                   <span className="text-xs font-bold text-slate-400">{v.unit}</span>
// //                 </div>
// //                 {/* ... (rest of card content) ... */}
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full py-10 text-center text-slate-400 font-medium">
// //               No matching medical data found.
// //             </div>
// //           )}
// //         </div>

// //         {/* ... (rest of dashboard) ... */}
// //       </main>
// //     </div>
// //   );
// // }


// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const username = localStorage.getItem('username');
// //   const userRole = localStorage.getItem('role');

// //   useEffect(() => {
// //     // If there is no username in storage, kick them back to login
// //     if (!username) {
// //       navigate('/login');
// //     }
// //   }, [username, navigate]);

// //   if (!username) return null; // Don't render anything if not logged in

// //   // ... (rest of your existing Dashboard code)}

// //   // Mock data to match your "Health Chart" screenshots
// //   const vitals = [
// //     { name: 'HEARTRATE', value: '72', unit: 'bpm', time: '10 mins ago', color: 'text-indigo-600' },
// //     { name: 'BLOOD PRESSURE', value: '120/80', unit: 'mmHg', time: '1 hour ago', color: 'text-blue-600' },
// //     { name: 'SPO2', value: '98', unit: '%', time: '10 mins ago', color: 'text-indigo-600' },
// //     { name: 'TEMPERATURE', value: '98.6', unit: '°F', time: '4 hours ago', color: 'text-blue-600' }
// //   ];
    

// //   return (
// //     <div className="flex h-screen bg-[#f3f4f6] overflow-hidden">
      
// //       {/* SIDEBAR: Matching Screenshot 301 */}
// //       <aside className="w-20 bg-white border-r border-slate-100 flex flex-col items-center py-8 gap-10">
// //         <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">⚕️</div>
// //         <nav className="flex flex-col gap-6 text-xl text-slate-400">
// //           <button className="text-indigo-600 bg-indigo-50 p-3 rounded-xl">📺</button>
// //           <button className="hover:text-indigo-600 p-3">❤️</button>
// //           <button className="hover:text-indigo-600 p-3">💼</button>
// //           <button className="hover:text-indigo-600 p-3">📅</button>
// //         </nav>
// //       </aside>

// //       {/* MAIN CONTENT AREA */}
// //       <main className="flex-1 flex flex-col p-6 overflow-y-auto">
        
// //         {/* TOP NAV: Matching Screenshot 301 */}
// //         <header className="flex justify-between items-center mb-8 bg-white p-3 px-6 rounded-[2rem] shadow-sm border border-slate-100">
// //           <div className="relative w-1/3">
// //             <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
// //             <input type="text" placeholder="Search.." className="w-full pl-12 pr-4 py-2 bg-slate-50 border-none rounded-full outline-none text-sm" />
// //           </div>
// //           <div className="flex items-center gap-6">
// //              <div className="flex items-center gap-2">
// //                 <span className="text-xl">NG</span>
// //                 <span className="text-xl">✉️</span>
// //                 <span className="text-xl">🔔</span>
// //              </div>
// //              <div className="flex items-center gap-3">
// //                 <p className="text-slate-800 font-bold text-sm">{username}</p>
// //                 <img src="https://i.pravatar.cc/150?u=daniel" className="w-10 h-10 rounded-xl border-2 border-white shadow-md" alt="User" />
// //                 <button onClick={() => {localStorage.clear(); navigate('/login')}} className="text-xs font-bold text-rose-500 hover:bg-rose-50 p-2 rounded-lg">Logout</button>
// //              </div>
// //           </div>
// //         </header>

// //         {/* EMERGENCY BANNER */}
// //         <div className="bg-[#f05454] text-white p-8 rounded-[2rem] mb-8 relative overflow-hidden shadow-xl shadow-red-100">
// //            <div className="relative z-10">
// //              <p className="text-sm font-semibold opacity-80 uppercase tracking-widest">Emergency Center</p>
// //              <h3 className="text-2xl font-bold mt-1">City General Hospital</h3>
// //              <button className="mt-6 bg-white text-[#f05454] font-bold px-10 py-3 rounded-2xl hover:bg-slate-50 transition uppercase tracking-widest text-sm shadow-lg">
// //                Call Emergency (911)
// //              </button>
// //            </div>
// //            <div className="absolute right-0 bottom-0 opacity-10 text-9xl">🚑</div>
// //         </div>

// //         {/* VITALS GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //           {vitals.map((v, i) => (
// //             <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50 hover:shadow-md transition">
// //               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{v.name}</p>
// //               <div className="flex items-baseline gap-1">
// //                 <h4 className="text-3xl font-black text-slate-800 tracking-tighter">{v.value}</h4>
// //                 <span className="text-xs font-bold text-slate-400">{v.unit}</span>
// //               </div>
// //               {/* This is a "Simple Line" substitute for the chart */}
// //               <div className="mt-4 h-8 w-full">
// //                 <div className="w-full h-[2px] bg-indigo-100 relative top-4"></div>
// //                 <div className="w-full flex justify-between relative -top-0.5">
// //                    {[...Array(5)].map((_, j) => <div key={j} className="w-1 h-1 bg-indigo-400 rounded-full"></div>)}
// //                 </div>
// //               </div>
// //               <p className="mt-2 text-[10px] font-bold text-slate-300 uppercase">{v.time}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* HEALTH CHART PLACEHOLDER */}
// //         <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50 flex-1 min-h-[300px] flex flex-col">
// //            <div className="flex justify-between items-center mb-6">
// //               <h3 className="font-bold text-slate-800 text-lg">Health Chart</h3>
// //               <div className="flex gap-2">
// //                  {['7D', '30D', '1Y'].map(t => <button key={t} className={`px-4 py-1.5 rounded-xl text-xs font-bold ${t==='7D'?'bg-indigo-600 text-white shadow-lg':'bg-slate-100 text-slate-400'}`}>{t}</button>)}
// //               </div>
// //            </div>
// //            <div className="flex-1 flex items-center justify-center border-t border-slate-50 text-slate-300 font-medium">
// //              Visualization Engine Loading...
// //            </div>
// //         </div>

// //       </main>
// //     </div>
// //   );
// // }

// // export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username') || "Daniel";
//   const userRole = localStorage.getItem('role') || "Patient";
  
//   // State for the functional search bar
//   const [searchQuery, setSearchQuery] = useState('');

//   // 1. AUTH GUARD: Redirect to login if no session exists
//   useEffect(() => {
//     if (!localStorage.getItem('username')) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   // 2. DATA: Mock Health Data (Matching your screenshots)
//   const vitals = [
//     { name: 'HEARTRATE', value: '72', unit: 'bpm', status: 'Normal', icon: '❤️', color: 'bg-rose-500' },
//     { name: 'BLOOD PRESSURE', value: '120/80', unit: 'mmHg', status: 'Normal', icon: '🩺', color: 'bg-indigo-500' },
//     { name: 'SPO2', value: '98', unit: '%', status: 'Normal', icon: '🫁', color: 'bg-blue-500' },
//     { name: 'TEMPERATURE', value: '98.6', unit: '°F', status: 'Normal', icon: '🌡️', color: 'bg-orange-500' }
//   ];

//   // 3. SEARCH LOGIC: Filter the cards in real-time
//   const filteredVitals = vitals.filter(v => 
//     v.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
      
//       {/* SIDEBAR: Glassmorphism Style */}
//       <aside className="w-20 md:w-24 bg-white border-r border-slate-100 flex flex-col items-center py-8 gap-10">
//         <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-100">
//           ⚕️
//         </div>
//         <nav className="flex flex-col gap-8 text-2xl text-slate-400">
//           <button className="text-indigo-600 bg-indigo-50 p-3 rounded-2xl transition-all shadow-sm">📺</button>
//           <button className="hover:text-indigo-600 transition-colors">❤️</button>
//           <button className="hover:text-indigo-600 transition-colors">💼</button>
//           <button className="hover:text-indigo-600 transition-colors">📅</button>
//           <button className="hover:text-indigo-600 transition-colors">⚙️</button>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 flex flex-col p-6 md:p-10 overflow-y-auto">
        
//         {/* HEADER: Functional Search & User Profile */}
//         <header className="flex justify-between items-center mb-10 bg-white p-4 px-8 rounded-[2.5rem] shadow-sm border border-slate-50">
//           <div className="relative w-1/3">
//             <span className="absolute left-5 top-3 text-slate-400">🔍</span>
//             <input 
//               type="text" 
//               placeholder="Search health records..." 
//               className="w-full pl-14 pr-6 py-3 bg-slate-50 border-none rounded-full outline-none text-sm focus:ring-2 focus:ring-indigo-100 transition-all"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
          
//           <div className="flex items-center gap-6">
//              <div className="text-right hidden sm:block">
//                 <p className="text-slate-800 font-bold text-sm leading-none">{username}</p>
//                 <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest mt-1">{userRole}</p>
//              </div>
//              <img 
//                src={`https://ui-avatars.com/api/?name=${username}&background=6366f1&color=fff`} 
//                className="w-12 h-12 rounded-2xl border-2 border-white shadow-md" 
//                alt="Avatar" 
//              />
//              <button 
//                onClick={handleLogout}
//                className="p-3 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-100 transition-colors"
//                title="Logout"
//              >
//                🚪
//              </button>
//           </div>
//         </header>

//         {/* EMERGENCY SECTION: Matching Screenshot 301 */}
//         <div className="bg-[#f05454] text-white p-10 rounded-[3rem] mb-10 relative overflow-hidden shadow-2xl shadow-rose-100">
//            <div className="relative z-10 max-w-md">
//              <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">Emergency Center</span>
//              <h3 className="text-3xl font-black mt-4 leading-tight">City General Hospital is available 24/7</h3>
//              <p className="mt-2 opacity-80 text-sm font-medium">Immediate medical assistance is just a click away.</p>
//              <button className="mt-8 bg-white text-[#f05454] font-black px-10 py-4 rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-xs shadow-xl">
//                Call 911 Now
//              </button>
//            </div>
//            <div className="absolute -right-10 -bottom-10 opacity-10 text-[15rem] rotate-12 select-none">🚑</div>
//         </div>

//         {/* VITALS GRID: Dynamically Rendered */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {filteredVitals.length > 0 ? (
//             filteredVitals.map((v, i) => (
//               <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all group">
//                 <div className="flex justify-between items-start mb-6">
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{v.name}</p>
//                   <span className="text-2xl group-hover:scale-125 transition-transform">{v.icon}</span>
//                 </div>
//                 <div className="flex items-baseline gap-2">
//                   <h4 className="text-4xl font-black text-slate-800 tracking-tighter">{v.value}</h4>
//                   <span className="text-sm font-bold text-slate-400">{v.unit}</span>
//                 </div>
//                 {/* Visual Status Indicator */}
//                 <div className="mt-6 flex items-center gap-3">
//                   <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
//                     <div className={`h-full ${v.color} w-3/4 rounded-full`}></div>
//                   </div>
//                   <span className="text-[10px] font-bold text-emerald-500 uppercase">{v.status}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-100">
//               <p className="text-slate-400 font-bold uppercase tracking-widest">No matching records found</p>
//             </div>
//           )}
//         </div>

//         {/* CHART SECTION PLACEHOLDER */}
//         <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-50 min-h-100 flex flex-col">
//           <div className="flex justify-between items-center mb-10">
//              <h3 className="text-xl font-black text-slate-800 tracking-tight">Health Activity</h3>
//              <div className="flex bg-slate-100 p-1.5 rounded-2xl">
//                 {['Day', 'Week', 'Month'].map(t => (
//                   <button key={t} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${t === 'Week' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
//                     {t}
//                   </button>
//                 ))}
//              </div>
//           </div>
//           <div className="flex-1 border-2 border-dashed border-slate-50 rounded-[2xl] flex flex-col items-center justify-center gap-4 text-slate-300">
//              <div className="text-5xl opacity-20">📈</div>
//              <p className="font-bold uppercase tracking-widest text-xs">Visualization Layer Ready</p>
//           </div>
//         </div>

//       </main>
//     </div>
//   );
// }

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  // 1. STATE & USER DATA
  const [searchQuery, setSearchQuery] = useState('');
  const username = localStorage.getItem('username') || "User";
  const userRole = localStorage.getItem('role') || "Patient";

  // 2. AUTH GUARD: Only allow logged-in users
  // useEffect(() => {
  //   if (!localStorage.getItem('username')) {
  //     navigate('/login');
  //   }
  // }, [navigate]);
  useEffect(() => {
    // If the login didn't save the username, this will kick you back to login
    const savedUser = localStorage.getItem('username');
    if (!savedUser) {
      navigate('/login');
    }
  }, [navigate]);

  // 3. MEDICAL DATA (Matching your "MediDash" style)
  const vitals = [
    { name: 'HEARTRATE', value: '72', unit: 'bpm', status: 'Normal', icon: '❤️', color: 'bg-rose-500' },
    { name: 'BLOOD PRESSURE', value: '120/80', unit: 'mmHg', status: 'Normal', icon: '🩺', color: 'bg-indigo-500' },
    { name: 'SPO2', value: '98', unit: '%', status: 'Normal', icon: '🫁', color: 'bg-blue-500' },
    { name: 'TEMPERATURE', value: '98.6', unit: '°F', status: 'Normal', icon: '🌡️', color: 'bg-orange-500' }
  ];

  // 4. FUNCTIONAL SEARCH
  const filteredVitals = vitals.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-20 md:w-24 bg-white border-r border-slate-100 flex flex-col items-center py-8 gap-10">
        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">⚕️</div>
        <nav className="flex flex-col gap-8 text-2xl text-slate-400">
          <button className="text-indigo-600 bg-indigo-50 p-3 rounded-2xl">📺</button>
          <button className="hover:text-indigo-600">❤️</button>
          <button className="hover:text-indigo-600">💼</button>
          <button className="hover:text-indigo-600">📅</button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-6 md:p-10 overflow-y-auto">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-10 bg-white p-4 px-8 rounded-[2.5rem] shadow-sm border border-slate-50">
          <div className="relative w-1/3">
            <span className="absolute left-5 top-3 text-slate-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search medical records..." 
              className="w-full pl-14 pr-6 py-3 bg-slate-50 border-none rounded-full outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-6">
             <div className="text-right">
                <p className="text-slate-800 font-bold text-sm">{username}</p>
                <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">{userRole}</p>
             </div>
             <img 
               src={`https://ui-avatars.com/api/?name=${username}&background=6366f1&color=fff`} 
               className="w-12 h-12 rounded-2xl border-2 border-white shadow-md" 
               alt="User" 
             />
             <button onClick={handleLogout} className="p-3 bg-rose-50 text-rose-500 rounded-2xl">🚪</button>
          </div>
        </header>

        {/* EMERGENCY BANNER */}
        <div className="bg-[#f05454] text-white p-10 rounded-[3rem] mb-10 relative overflow-hidden">
           <div className="relative z-10">
             <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Emergency Services</span>
             <h3 className="text-3xl font-black mt-4">City General Hospital</h3>
             <button className="mt-8 bg-white text-[#f05454] font-black px-10 py-4 rounded-2xl text-xs uppercase shadow-xl">Call 911</button>
           </div>
           <div className="absolute -right-5 -bottom-5 opacity-10 text-[12rem]">🚑</div>
        </div>

        {/* VITALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {filteredVitals.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50 hover:shadow-lg transition-all">
              <div className="flex justify-between mb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{v.name}</p>
                <span className="text-2xl">{v.icon}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h4 className="text-4xl font-black text-slate-800">{v.value}</h4>
                <span className="text-sm font-bold text-slate-400">{v.unit}</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${v.color} w-3/4`}></div>
                </div>
                <span className="text-[10px] font-bold text-emerald-500 uppercase">{v.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIVITY CHART PLACEHOLDER */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-50 min-h-75 flex items-center justify-center text-slate-300">
           <div className="text-center">
             <div className="text-5xl mb-4">📈</div>
             <p className="font-bold uppercase tracking-widest text-xs">Medical Analysis Layer Active</p>
           </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;