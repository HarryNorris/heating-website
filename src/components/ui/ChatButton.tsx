import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with an Engineer
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden animate-fade-in-up">
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold">Engineer Chat</h3>
              <p className="text-xs text-emerald-100">Usually replies in 5 mins</p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-stone-50 space-y-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-stone-200 rounded-full flex-shrink-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" alt="Engineer" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-700">
                Hi there! I'm Sarah, a lead engineer. How can I help with your heating today?
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-stone-100 bg-white">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full px-4 py-2 bg-stone-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      )}
    </>
  );
};
