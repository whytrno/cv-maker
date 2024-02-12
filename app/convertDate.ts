export const convertDate = (type: string, startDate: string, endDate?: string | null) => {
    const indonesiaMonth = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const dateFinal = new Date(startDate);

    if (type === 'one') {
        return `${indonesiaMonth[dateFinal.getMonth()]} ${dateFinal.getFullYear()}`;
    } else if (type === 'two') {
        if (endDate) {
            const endDateFinal = new Date(endDate);
            return `(${indonesiaMonth[dateFinal.getMonth()]} ${dateFinal.getFullYear()} - ${indonesiaMonth[endDateFinal.getMonth()]} ${endDateFinal.getFullYear()})`;
        } else {
            return `(${indonesiaMonth[dateFinal.getMonth()]} ${dateFinal.getFullYear()} - Sekarang)`
        }
    }
}