'use client'

import { Sorting } from "@/app/sorting";
import { Separator } from "@/components/Separator";
import { convertDate } from "@/app/convertDate";
import ProjectType from "@/types/project";

export const Projects = ({ data }: { data: ProjectType }) => {
    return (
        <div>
            <Separator />
            <div className="space-y-2">
                <h1 className="font-bold text-lg">PROJEK</h1>
                <div className="space-y-4">
                    {Sorting(data).map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-lg font-semibold">{item.name}</h1>
                                    <p>({item.skills})</p>
                                </div>
                                <p>{convertDate('two', item.startDate, item.endDate)}</p>
                            </div>
                            <p className="whitespace-pre-line">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
