import {Sorting} from "@/app/sorting";
import {Separator} from "@/components/Separator";
import {convertDate} from "@/app/convertDate";
import AwardType from "@/types/award";

export const Awards = ({data}: { data: AwardType }) => {
    return (
        <>
            <Separator/>
            <div className="space-y-2">
                <h1 className="font-bold text-lg">PENGHARGAAN</h1>
                <div className="space-y-4">
                    {Sorting(data).map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-lg font-semibold">{item.event}</h1>
                                    </div>
                                    <p>{convertDate('one', item.startDate)}</p>
                                </div>
                                <p className="whitespace-pre-line">{item.organizer}</p>
                            </div>
                            <p className="whitespace-pre-line">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
