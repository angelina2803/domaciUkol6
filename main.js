// ukol1
const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}
//ukol2

const formatDate = ({ day, month, year }) => {

    const datum = {
        keyDay: String(day).padStart(2, '0'),
        keyMonth: String(month).padStart(2, '0'),
        keyYear: String(year),
    }

    const { keyDay, keyMonth, keyYear } = datum;

    return keyDay + "." + keyMonth + "." + keyYear;
}
//ukol3
const round = (cislo) => {
	const celaCast = Math.trunc(cislo)
	const necelaCast = cislo - celaCast
	if (Math.abs(necelaCast) === 0.5) {
		if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2 * necelaCast
		}
	}
	return Math.round(cislo)
}