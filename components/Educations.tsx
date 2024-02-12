import {Sorting} from "@/app/sorting";
import {Separator} from "@/components/Separator";
import {convertDate} from "@/app/convertDate";
import EducationType from "@/types/education";

export const Educations = ({data}: { data: EducationType }) => {
    return (
        <>
            <Separator/>
            <div className="space-y-2">
                <h1 className="font-bold text-lg">PENDIDIKAN</h1>
                <div className="space-y-4">
                    {Sorting(data).map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-lg font-semibold">{`${item.degree} ${item.school}`}</h1>
                                </div>
                                <p>{convertDate('two', item.startDate, item.endDate)}</p>
                            </div>
                            <p className="whitespace-pre-line">{item.major}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
