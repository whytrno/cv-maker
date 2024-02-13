'use client'

import { Separator } from "@/components/Separator";

export const About = ({ about }: { about: string }) => {
    return (
        <>
            <Separator />
            <div className="space-y-2">
                <h1 className="font-bold text-lg">TENTANG SAYA</h1>
                <p>{about}</p>
            </div>
        </>
    );
};
