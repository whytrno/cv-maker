'use client'


import { Sorting } from "@/app/sorting";
import { Separator } from "@/components/Separator";
import { convertDate } from "@/app/convertDate";
import OrganizationType from "@/types/organization";

export const Organizations = ({ data }: { data: OrganizationType }) => {
    return (
        <>
            <Separator />
            <div className="space-y-2">
                <h1 className="font-bold text-lg">Organisasi</h1>
                <div className="space-y-4">
                    {Sorting(data).map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="w-1/2">
                                    <h1 className="text-lg font-semibold">{item.name}</h1>
                                    <p>{item.position}</p>
                                </div>
                                <p className="break-all">{convertDate('two', item.startDate, item.endDate)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
