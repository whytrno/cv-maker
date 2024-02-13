'use client'

import { Separator } from "@/components/Separator";

export const Skills = ({ data }: { data: string[] }) => {
    return (
        <>
            <Separator />
            <div className="space-y-2">
                <h1 className="font-bold text-lg">SKILL</h1>
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            {item}
                            {index < data.length - 1 && ', '}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
