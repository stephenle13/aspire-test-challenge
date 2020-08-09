class NumberUtils {

    /**
     * Auto generate number with 9 digit
     */
    autoGenerateNumber() {
        return Math.floor(10000000 + Math.random() * 90000000);
    }

    /**
     * Auto generate UEN with format: number 9 degit and end with fixed letter D
     */
    autoGenerateUEN() {
        return `${Math.floor(100000000 + Math.random() * 900000000)}D`;
    }
}


module.exports = new NumberUtils();
