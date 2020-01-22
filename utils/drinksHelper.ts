export const removeEmpty = (obj: any) => {
	Object.keys(obj).forEach(function(key) {
		(obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
		(obj[key] === undefined || obj[key] === null || obj[key] === "" || obj[key] === " ") && delete obj[key]
	});
	return obj;
};

export const getObjProps = (obj: any, str: string) => {
    const keys = Object
        .keys(obj)
        .filter((k) => {
            if (k.toLowerCase().includes(str)) {
                const a = obj[k];
                return a;
            }
        });
    const values = keys.map((k: string) => obj[k]);
    return values;
}