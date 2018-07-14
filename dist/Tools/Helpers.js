export class Helpers {
    objectToSerialize(param) {
        const keys = Object.keys(param), values = [];
        // tslint:disable-next-line:forin
        for (const k in keys) {
            const value = typeof param[keys[k]] === 'object' &&
                Array.isArray(param[keys[k]]) === false
                ? JSON.stringify(param[keys[k]])
                : param[keys[k]];
            values.push(keys[k] + '=' + value);
        }
        return values.join('&');
    }
    findInArrayOfObjects(arrg, key, value) {
        // tslint:disable-next-line:forin
        for (const index in arrg) {
            const item = arrg[index];
            if (item[key] === value) {
                return item;
            }
        }
    }
    fileTo64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((load, reject) => {
            reader.onload = load;
            reader.onerror = reject;
        });
    }
    merge(...objs) {
        const finalObject = {};
        // tslint:disable-next-line:forin
        for (const index in objs) {
            const obj = objs[index];
            for (const keys in obj) {
                if (obj[keys] !== '') {
                    finalObject[keys] = obj[keys];
                }
            }
        }
        return finalObject;
    }
    searchAndDestroy(args, key, value) {
        const filter = args.filter((item, index) => {
            return item[key] !== value;
        });
        return filter;
    }
    searchAndInsert(args, where, val, key, insert) {
        return args.map((item, index) => {
            if (item[where] === val) {
                item[key] = insert;
            }
            return item;
        });
    }
    searchByKey(args, key, value) {
        const filter = args.filter((item, index) => {
            return item[key] === value;
        });
        return filter;
    }
    searchInObject(args, query) {
        return args.filter((item, index) => {
            for (const key in item) {
                if (item[key] == null) {
                    continue;
                }
                const data = item[key].toString();
                const regQuery = RegExp(query, 'i');
                const match = data.match(regQuery);
                if (match != null) {
                    return true;
                }
            }
            return false;
        });
    }
    getObjectTitles(obj) {
        const result = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push({ key });
            }
        }
        return result;
    }
    flatMultilevel(multiLevelObject) {
        let flatObject = {};
        for (const key in multiLevelObject) {
            if (multiLevelObject.hasOwnProperty(key)) {
                const item = multiLevelObject[key];
                flatObject[key] = item;
                flatObject = this.merge(flatObject, item);
            }
        }
        return flatObject;
    }
    searchAndGetIndex(arr, key, query) {
        // tslint:disable-next-line:forin
        for (const index in arr) {
            const item = arr[index];
            if (item[key] === query) {
                return index;
            }
        }
    }
    searchCommonAndUpdate(contentID, newData, currentData) {
        const data = this.flatMultilevel(newData);
        const index = this.searchAndGetIndex(currentData, 'id', contentID);
        for (const key in data) {
            if (currentData[index][key] !== undefined) {
                currentData[index][key] = data[key];
            }
        }
        return currentData;
    }
    splitOnUpperCase(text) {
        text = text.split(/(?=[A-Z])/);
        return text.join(' ');
    }
    orderBy(data, by, direction = 'asc') {
        return data.sort((a, b) => {
            if (a[by] == null) {
                return 1;
            }
            if (b[by] == null) {
                return 1;
            }
            if (typeof a[by] !== 'number') {
                return direction === 'asc'
                    ? a[by].localeCompare(b[by])
                    : b[by].localeCompare(a[by]);
            }
            return direction === 'asc' ? a[by] - b[by] : b[by] - a[by];
        });
    }
    dateToYears(fecha) {
        const now = new Date();
        const born = new Date(fecha);
        const diff = now - born;
        const age_dt = new Date(diff);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}
//# sourceMappingURL=Helpers.js.map