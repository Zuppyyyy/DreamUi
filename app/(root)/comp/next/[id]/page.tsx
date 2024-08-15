"use client";

import { useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"; // Importing Heroicon
import Tabs from "@/components/root/renderpage/Tabs";
import CopyButton from "@/components/root/renderpage/CopyButton";
import CodeBlock from "@/components/root/renderpage/CodeBlock";

const Components = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-black text-white mt-10 md:ml-10 px-4 w-full h-full max-h-[90%] overflow-y-auto text-base md:text-xl">
            <div>
                <h1 id="title" className="text-5xl font-extrabold">Cover</h1>
                <p id="desc" className="text-lg mt-4 text-zinc-300">This is the first component of our page. Fully responsive and attractive</p>
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="p-6">
                {activeTab === 0 && (
                    <div className="h-full w-full">
                        <div className="border border-zinc-500 h-96 w-[90%] overflow-auto mt-10 rounded-2xl">
                            {/* Overview Content */}
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="h-full w-full">
                        <CodeBlock id="code" code={`import React from 'react';`} />
                    </div>
                )}
            </div>

            <div id="installation" className="text-lg text-white mt-10">
                <h1 className="text-2xl font-bold">Installation</h1>

                <div id="dependency" className="mt-10">
                    <h2>Install all these dependencies</h2>
                    <CodeBlock id="dependency1" code={`npm install framer-motion;`} />
                    <CodeBlock id="dependency2" code={`npm install i`} />
                </div>

                <div id="SrcCode" className="mt-10">
                    <h2>Copy the Source Code</h2>

                    <div className="mt-10 bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded">component/ui/component name</div>
                    <CodeBlock id="SourceCode" code={`This is the Source Code`} />
                </div>
            </div>
        </div>
    );
};

export default Components;
