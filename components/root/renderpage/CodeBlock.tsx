"use client";

import { useState } from "react";
import CopyButton from "@/components/root/renderpage/CopyButton";


const CodeBlock = ({ id, code }: { id: string; code: string }) => (
    <div className="flex justify-between border border-zinc-600 bg-zinc-900 h-full w-[90%] overflow-auto mt-5 rounded-lg p-4 text-lg">
        <div id={id}>
            <pre className="whitespace-pre-wrap max-w-90%">{code}</pre>
        </div>
        <CopyButton textToCopy={code} />
    </div>
);

export default CodeBlock;