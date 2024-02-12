import data from "@/app/data";

export const Header = () => {
    return (
        <>
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold text-center">{data.name}</h1>
                <p className="text-center">{data.city} {data.postalCode} |
                    {data.linkedin} | {data.phone} | {data.email}</p>
            </div>
        </>
    );
};
