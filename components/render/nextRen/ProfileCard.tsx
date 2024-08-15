// components/ProfileCard.tsx

import React from 'react';

const ProfileCard = () => {
  return (
    <div className="w-full min-w-16 h-20 bg-slate-300 text-black border border-pink-400">
      <h1>This is the first component</h1>
    </div>
  );
};

export default ProfileCard;

export const code =`this will be displayed in the div with id code `

// Example usage code
export const SrcCode1 = `import React from 'react';

const ProfileCard = () => {
  return (
    <div className="w-[20rem] h-20 bg-slate-300 text-black border border-pink-400">
      <h1>This is the first component</h1>
    </div>
  );
};

export default ProfileCard;`;

export const SrcCode2 = `This is just for a test`;

// CSS animation for gradient border
export const Modifications = `
@keyframes gradient-border {
  0% {
    border-color: #f00; /* Red */
  }
  25% {
    border-color: #0f0; /* Green */
  }
  50% {
    border-color: #00f; /* Blue */
  }
  75% {
    border-color: #ff0; /* Yellow */
  }
  100% {
    border-color: #f00; /* Red */
  }
}

.animate-gradient-border {
  animation: gradient-border 3s infinite;
}`;

// Dependencies list
export const dependencies = [
  'npm install framer-motion',
  'npm install react-icons',
];
