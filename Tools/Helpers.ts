export class Helpers {
  objectToSerialize(param: any) {
    const keys = Object.keys(param),
      values = [];
    // tslint:disable-next-line:forin
    for (const k in keys) {
      const value =
        typeof param[keys[k]] === 'object' &&
        Array.isArray(param[keys[k]]) === false
          ? JSON.stringify(param[keys[k]])
          : param[keys[k]];
      values.push(keys[k] + '=' + value);
    }
    return values.join('&');
  }

  findInArrayOfObjects(arrg: any, key: string, value: string) {
    // tslint:disable-next-line:forin
    for (const index in arrg) {
      const item = arrg[index];
      if (item[key] === value) {
        return item;
      }
    }
  }
  fileTo64(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((load: any, reject: any) => {
      reader.onload = load;
      reader.onerror = reject;
    });
  }
  merge(...objs: Array<any>) {
    const finalObject: any = {};
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
  searchAndDestroy(args: Array<any>, key: string, value: string) {
    const filter = args.filter((item, index) => {
      return item[key] !== value;
    });
    return filter;
  }
  searchAndInsert(args: any, where: any, val: any, key: any, insert: any) {
    return args.map((item: any, index: any) => {
      if (item[where] === val) {
        item[key] = insert;
      }
      return item;
    });
  }
  searchByKey(args: any, key: any, value: any) {
    const filter = args.filter((item: any, index: any) => {
      return item[key] === value;
    });
    return filter;
  }
  searchInObject(args: any, query: any) {
    return args.filter((item: any, index: any) => {
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
  getObjectTitles(obj: any) {
    const result: any[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push({ key });
      }
    }
    return result;
  }
  flatMultilevel(multiLevelObject: any) {
    let flatObject: any = {};
    for (const key in multiLevelObject) {
      if (multiLevelObject.hasOwnProperty(key)) {
        const item = multiLevelObject[key];
        flatObject[key] = item;
        flatObject = this.merge(flatObject, item);
      }
    }
    return flatObject;
  }
  searchAndGetIndex(arr: any, key: any, query: any) {
    // tslint:disable-next-line:forin
    for (const index in arr) {
      const item = arr[index];
      if (item[key] === query) {
        return index;
      }
    }
  }
  searchCommonAndUpdate(contentID: any, newData: any, currentData: Array<any>) {
    const data: any = this.flatMultilevel(newData);
    const index: any = this.searchAndGetIndex(currentData, 'id', contentID);
    for (const key in data) {
      if (currentData[index][key] !== undefined) {
        currentData[index][key] = data[key];
      }
    }
    return currentData;
  }
  splitOnUpperCase(text: any) {
    text = text.split(/(?=[A-Z])/);
    return text.join(' ');
  }
  orderBy(data: any, by: any, direction: String = 'asc') {
    return data.sort((a: any, b: any) => {
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
  dateToYears(fecha: any) {
    const now: any = new Date();
    const born: any = new Date(fecha);
    const diff = now - born;
    const age_dt = new Date(diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}
