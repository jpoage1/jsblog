class validateData {
	constructor(value) {
		this.value = value;
	}
	timestamp () {
		const timestamp = new Date(this.value).getTime();
		return `${timestamp}`;
	}
	string () {
		const escapedString = this.escapeString(this.value)
		return `'${escapedString}'`;
	}
	integer () {
		return this.value;
	};
	escapeString (string) {
		var escapedString = string
		.replace(/\\/g, '\\\\')
		.replace(/"/g, '\\"')
		.replace(/'/g, '\\\'');
		return escapedString;
	}
}
const dataValidation = ( validationType, value) => {
	const dataValidation = new validateData(value);
	return dataValidation[validationType].bind(dataValidation)
}
module.exports = dataValidation;
