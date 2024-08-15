import CopyButton from "@/components/root/renderpage/CopyButton";

const CodeBlock = ({ id, code }: { id: string; code: string }) => (
    <div className="flex flex-col md:flex-row justify-between border border-zinc-600 bg-zinc-900 h-full w-[100%] md:w-[90%] overflow-auto mt-5 rounded-lg p-4 text-lg relative">
        <div id={id} className="max-w-[85%] overflow-auto">
            <pre className="whitespace-pre-wrap text-sm md:text-lg">{code}</pre>
        </div>
        <div className="absolute top-4 right-4">
            <CopyButton textToCopy={code} />
        </div>
    </div>
);

export default CodeBlock;
