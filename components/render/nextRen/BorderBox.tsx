import React from 'react';

const BorderBox = () => {
    return (
        <div>BorderBox</div>
    )
}

export default BorderBox;


export const BoprderBoxBundle = {
    code: `import React from 'react';

const BorderBox = () => {
    return (
        <div>BorderBox</div>
    )
}
    
export default BorderBox;`,

    SrcCode: [
        {
            name: "components/Comp1.tsx",
            code: `this is also a special test`,
        },
    ],

    dependencies: [
        'npm install react-icons',
    ],
};
