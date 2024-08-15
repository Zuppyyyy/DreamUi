import React from 'react';

const ProfileCard = () => {
  return (
    <div className="w-[20rem] h-20 bg-slate-300 text-black border border-pink-400">
      <h1>This is the first component</h1>
    </div>
  );
};

export default ProfileCard;


export const CodeBundle = {
  code: `import React from 'react';

const ProfileCard = () => {
  return (
    <div className="w-[20rem] h-20 bg-slate-300 text-black border border-pink-400">
      <h1>This is the first component</h1>
    </div>
  );
};

export default ProfileCard;`,

  SrcCode: [
    {
      name: "components/Comp1.tsx",
      code: `this is also a special test`,
    },
    {
      name: "components/Comp2.tsx",
      code: `This is just for a test`,
    },
  ],

  Modifications: `
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
}`,

  dependencies: [
    'npm install framer-motion',
    'npm install react-icons',
  ],
};
