import {Sorting} from "@/app/sorting";
import {Separator} from "@/components/Separator";
import {convertDate} from "@/app/convertDate";
import CertificateType from "@/types/certificate";

export const Certificates = ({data}: { data: CertificateType }) => {
    return (
        <>
            <Separator/>
            <div className="space-y-2">
                <h1 className="font-bold text-lg">SERTIFIKAT</h1>
                <div className="space-y-3">
                    {Sorting(data).map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-lg font-semibold">{item.name}</h1>
                                </div>
                                <p>{convertDate('one', item.startDate)}</p>
                            </div>
                            <p className="whitespace-pre-line">{item.organizer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
