function unix(dt, type){
	const second = dt * 1000
	const data = new Date(second)

	let result = 
	type == 'day' ? data.toLocaleString('ru-Ru', { day: 'numeric' }) :
	type == 'weekday' ? data.toLocaleString('ru-Ru', { weekday: 'short' }) :
	type == 'month' ? data.toLocaleString('ru-Ru', { month: 'long' }) : ''


	return result
}

export default unix;