import { ReactNode } from "react";

type InfoboxProps = {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

function Infobox({ mode, children }: InfoboxProps) {
    if (mode === 'hint') {
        return <aside className="text-green-500 border border-green-500 bg-gray-700 text-center font-normal p-2 rounded">
            <p>{children}</p>
        </aside>
    }

    return (
        <aside className="border border-yellow-500 bg-gray-700 text-center rounded p-2 my-2 space-y-2">
            <h2 className={`text-yellow-600 text-lg font-bold`}>Warning</h2>
            <p className="text-yellow-500 font-thin">{children}</p>
        </aside>
    );
}

export default Infobox;
