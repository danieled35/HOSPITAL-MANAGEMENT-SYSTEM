import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [target, setTarget] = useState('');
  const [step, setStep] = useState(1); // 1: Select/Input, 2: OTP, 3: New Pass
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!target) return alert("Please enter your details");
    
    // Simulate API Call to Flask
    console.log(`Sending code to ${target} via ${method}`);
    alert(`A 6-digit security code has been sent to your ${method}: ${target}. (Demo Code: 123456)`);
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setStep(3);
    } else {
      alert("Invalid code. Please try again.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Password updated successfully!");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white w-full max-w-lg p-12 rounded-[3rem] shadow-2xl border border-slate-100">
        
        {/* Progress Indicator */}
        <div className="flex justify-between mb-12 relative px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {s}
              </div>
              <span className="text-[10px] uppercase font-black mt-2 tracking-tighter text-slate-400">Step {s}</span>
            </div>
          ))}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900">Security Recovery</h2>
          <p className="text-slate-500 font-medium mt-2">
            {step === 1 && "Choose how to verify your identity"}
            {step === 2 && "Enter the verification code"}
            {step === 3 && "Create a strong new password"}
          </p>
        </div>

        {/* STEP 1: Method & Input */}
        {step === 1 && (
          <form onSubmit={handleSendCode} className="space-y-6">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
              <button 
                type="button" 
                onClick={() => setMethod('email')} 
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${method === 'email' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
              >
                Email Address
              </button>
              <button 
                type="button" 
                onClick={() => setMethod('phone')} 
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${method === 'phone' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
              >
                Phone Number
              </button>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Registered {method}</label>
              <input 
                type={method === 'email' ? 'email' : 'tel'} 
                placeholder={method === 'email' ? 'doctor@medisystem.com' : '+1 (555) 000-0000'}
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all text-slate-700 font-medium"
                onChange={(e) => setTarget(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform hover:scale-[1.01]">
              Send Verification Code
            </button>
          </form>
        )}

        {/* STEP 2: Code Entry */}
        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="space-y-8">
            <div className="flex justify-center gap-4">
              <input 
                type="text" 
                maxLength="6"
                placeholder="------"
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 text-center text-4xl font-black tracking-[0.5em] text-indigo-600"
                onChange={(e) => setOtp(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-100 transition-all">
              Verify Code
            </button>
            <p className="text-center text-sm text-slate-400 font-medium">
              Didn't get the code? <button type="button" onClick={() => setStep(1)} className="text-indigo-600 font-bold underline">Try again</button>
            </p>
          </form>
        )}

        {/* STEP 3: Reset Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <input 
              type="password" 
              placeholder="New Secure Password" 
              className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500"
              required 
            />
            <input 
              type="password" 
              placeholder="Confirm New Password" 
              className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500"
              required 
            />
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-100 transition-all transform hover:scale-[1.01]">
              Reset & Sign In
            </button>
          </form>
        )}

        <div className="mt-10 text-center">
          <Link to="/login" className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-all">
            ← Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;