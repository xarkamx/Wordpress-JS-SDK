var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Helpers } from './Helpers.js';
export class Ajax extends Helpers {
    fetchData(path, parameters = {}, method = 'get', headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this.objectToSerialize(parameters);
            const args = {
                headers,
                body: null,
                method
            };
            if (method.toLowerCase() === 'get') {
                path += '?' + parameters;
                parameters = '';
            }
            else {
                args.body = parameters;
            }
            args.method = method;
            console.table(args.body);
            const data = yield fetch(path, args);
            const result = yield data.text();
            try {
                return JSON.parse(result);
            }
            catch (e) {
                document.write(result);
            }
        });
    }
}
//# sourceMappingURL=Ajax.js.map