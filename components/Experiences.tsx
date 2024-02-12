import {Sorting} from "@/app/sorting";
import {Separator} from "@/components/Separator";
import ExperienceType from "@/types/experience";
import {convertDate} from "@/app/convertDate";

interface ExperiencesProps {
    data: null
}

export const Experiences = ({data}: { data: ExperienceType }) => {
    return (
        <>
            <Separator/>
            <div className="space-y-2">
                <h1 className="font-bold text-lg">PENGALAMAN</h1>
                <div className="space-y-4">
                    {Sorting(data).map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="w-1/2">
                                    <h1 className="text-lg font-semibold">{item.company}</h1>
                                    <p>{item.position}</p>
                                    <p>({item.technology})</p>
                                </div>
                                <p className="break-all">{convertDate('two', item.startDate, item.endDate)}</p>
                            </div>
                            <p className="whitespace-pre-line">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
