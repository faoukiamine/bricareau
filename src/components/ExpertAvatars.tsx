import React from 'react';
import avatar3 from "@/assets/4a6a1e15-c532-4f23-ae71-5fad72ebf176.jpg";
import avatar2 from "@/assets/a010b2c1-2354-47f6-954e-689f7c64e7a5.jpg";
import avatar1 from "@/assets/7a5891c6-037d-4bf9-9800-3fd63de7ad37.jpg";
import avatar4 from "@/assets/4ccc1173-1991-4bf6-988c-9e9e57f314d3.jpg";
import avatar5 from "@/assets/e5a7b4ba-77df-44dd-b824-80ded58a9125.jpg";

const ExpertAvatars = () => {
  const avatars = [
    { src: avatar1, pos: "object-center" },
    { src: avatar2, pos: "object-center" },
    { src: avatar3, pos: "object-top" }, // Focus on head
    { src: avatar4, pos: "object-top" },
    { src: avatar5, pos: "object-top" },
  ];
  
  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar, i) => (
        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#3d6aab] bg-blue-400 overflow-hidden shadow-xl">
          <img 
            src={avatar.src} 
            alt="Expert" 
            className={`w-full h-full object-cover ${avatar.pos}`} 
          />
        </div>
      ))}
      <div className="w-12 h-12 rounded-full border-4 border-[#3d6aab] bg-white flex items-center justify-center text-blue-900 font-bold text-xs shadow-xl">
        4.9/5
      </div>
    </div>
  );
};

export default ExpertAvatars;
