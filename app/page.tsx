'use client'

import CvPage from "@/components/Cv";
import rawData from "./data";
import { useEffect, useRef, useState } from "react";
import Toolbar from "@/components/Toolbar";
import "@/public/print.css";

export default function Home() {
    const [data, setData] = useState(rawData);
    const [preview, setPreview] = useState(false);

    const handleChange = (e: { target: { value: string; }; }) => {
        try {
            const updated = JSON.parse(e.target.value);
            setData(updated);
        } catch {
            setData(data);
        }
    }

    return (
        <>
            {preview ? <CvPage data={data} /> : (
                <div className="flex gap-10 relative">
                    <div className="relative w-[40%]">
                        <textarea className="fixed top-0 left-0 w-[40%] h-screen overflow-auto text-black p-5" value={JSON.stringify(data, null, 2)}
                            onChange={handleChange} />
                    </div>
                    <div className="w-[60%]">
                        <CvPage data={data} />
                    </div>

                </div>
            )}
            <Toolbar preview={preview} setPreview={setPreview} />
        </>
    )
}
