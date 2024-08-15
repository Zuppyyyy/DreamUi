"use client";

import { useState, useMemo } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"; // Importing Heroicon
import Tabs from "@/components/root/renderpage/Tabs";
import CopyButton from "@/components/root/renderpage/CopyButton";
import CodeBlock from "@/components/root/renderpage/CodeBlock";
import { Nextcomponents } from "@/src/render/constants/nextComp"; // Import your components array
import { usePathname } from "next/navigation";

const Components = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    // Extract the ID from the pathname
    const componentId = useMemo(() => {
        const parts = pathname.split("/");
        return parseInt(parts[parts.length - 1], 10); // Extracts the ID from the last part of the path
    }, [pathname]);

    // Find the component based on the extracted ID
    const component = Nextcomponents.find(comp => comp.id === componentId);

    return (
        <div className="bg-black text-white mt-10 md:ml-10 px-4 w-full h-full max-h-[90%] overflow-y-auto text-base md:text-xl">
            <div>
                <h1 id="name" className="text-5xl font-extrabold">{component?.name || "Component Not Found"}</h1>
                <p id="description" className="text-lg mt-4 text-zinc-300">{component?.description || "No description available."}</p>
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="p-6">
                {activeTab === 0 && (
                    <div className="h-full w-full">
                        <div className="border border-zinc-500 inline-block min-h-96 w-[100%] md:w-[90%] overflow-auto mt-10 rounded-2xl">
                            {/* Overview Content */}
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="h-full w-full">
                        {/* Render main code */}
                        {component?.code?.code && (
                            <CodeBlock id="code" code={component.code.code} />
                        )}
                    </div>
                )}
            </div>

            <div id="installation" className="text-lg text-white mt-10">
                <h1 className="text-2xl font-bold">Installation</h1>

                {component?.code?.dependencies?.length > 0 && (
                    <div id="dependency" className="mt-10">
                        <h2>Install all these dependencies</h2>
                        {/* Loop through dependencies */}
                        {component.code.dependencies.map((dependency, index) => (
                            <CodeBlock key={index} id={`dependency${index + 1}`} code={dependency} />
                        ))}
                    </div>
                )}

                {component?.code?.Modifications && (
                    <div id="Modifications" className="mt-10">
                        <h2>Make these Modifications in your GlobalCss</h2>
                        <CodeBlock id="modifications" code={component.code.Modifications} />
                    </div>
                )}

                {component?.code?.SrcCode?.length > 0 && (
                    <div id="SrcCode" className="mt-10">
                        <h2>Add these Components</h2>
                        {/* Loop through SrcCode array */}
                        {component.code.SrcCode.map((srcCode, index) => (
                            <div key={index} className="mt-10">
                                <div className="bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded">{srcCode.name}</div>
                                <CodeBlock id={`SourceCode${index + 1}`} code={srcCode.code} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Components;
