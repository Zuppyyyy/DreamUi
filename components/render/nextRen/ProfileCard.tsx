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

  Modifications: `const customStyle = {

    lineHeight: '1.5',
  
    fontSize: '1rem',
  
    borderRadius: '5px',
  
    backgroundColor: '#f7f7f7',
  
    padding: '20px'
  
  };`,

  dependencies: [
    'npm install framer-motion',
    'npm install react-icons',
  ],
};
