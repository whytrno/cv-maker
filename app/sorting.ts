export const Sorting = <Type>(data: Type[]) => {
    return data.sort((a, b) => {
        // @ts-ignore
        const aDate = new Date(a.startDate);
        // @ts-ignore
        const bDate = new Date(b.startDate);
        return bDate.getTime() - aDate.getTime();
    });
};
