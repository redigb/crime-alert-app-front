import { useState } from "react";

interface Props {
    options: string[];
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

export default function SelectIncidente({ options, value, error, onChange }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-72 space-y-1">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full text-left bg-[#13151f] border rounded-lg px-4 py-3 text-white transition 
          ${error ? "border-red-500" : "border-[#2e3347]"}`}
            >
                {value || "Seleccionar..."}
            </button>

            {open && (
                <ul className="absolute z-10 mt-1 w-full bg-[#13151f] border border-[#2e3347] rounded-md shadow-md max-h-60 overflow-auto text-white">
                    {options.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => {
                                onChange(opt);
                                setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-[#2e3347] cursor-pointer"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}
