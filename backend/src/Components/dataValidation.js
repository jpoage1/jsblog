class validateData {
	constructor(value) {
		this.value = value;
	}
	timestamp () {
		const timestamp = this.integer(this.value);
		const date_format = new Date().getTime();
		return `${date_format}`;
	}
	string () {
		const escapedString = this.escapeString(this.value)
		return `'${escapedString}'`;
	}
	float() {
		return parseFloat(this.value);
	}
	integer () {
		return parseInt(this.value);
	};
	number() {
		return Number(this.value);
	}
	boolean() {
		switch(this.value.toLowerCase().trim()){
	        case "true": case "yes": case "1": return true;
	        case "false": case "no": case "0": case null: return false;
	        default: return Boolean(string);
	    }
	}
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
