var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Ajax } from './../../../Tools/Ajax.js';
export var WP;
(function (WP) {
    WP["sufix"] = "/wp-json/wp/v2";
    WP["prefix"] = "/wp/v2";
    WP["posts"] = "/posts";
    WP["pages"] = "/pages";
    WP["media"] = "/media";
    WP["types"] = "/types";
    WP["statuses"] = "/statuses";
    WP["taxonomies"] = "/taxonomies";
    WP["categories"] = "/categories";
    WP["tags"] = "/tags";
    WP["users"] = "/users";
    WP["comments"] = "/comments";
    WP["settings"] = "/settings";
})(WP || (WP = {}));
export class WPAjax extends Ajax {
    constructor(url, credentials = null) {
        super();
        this.url = url;
        this.credentials = credentials;
        this.path = this.url + WP.sufix;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateRules(this.route, this.filter);
            const getPath = this.path + this.route;
            return this.fetchData(getPath, this.filter, 'get');
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetchData(this.runPath, this.filter);
        });
    }
    publish() {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield this.access.getUserData(this.url, this.credentials);
            const token = userData.token;
            yield this.validateRules(this.route, this.filter, 'post');
            const postPath = this.path + this.route;
            console.log(this.filter);
            return this.fetchData(postPath, this.filter, 'post', {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded'
            });
        });
    }
    getRules() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.url + WP.sufix;
            if (this.rules != null) {
                return this.rules;
            }
            const rules = yield this.fetchData(path);
            this.rules = rules;
            return rules;
        });
    }
    validateRules(wpRoute, filter = {}, method = 'GET') {
        return __awaiter(this, void 0, void 0, function* () {
            const rules = yield this.getRules();
            const ruleName = WP.prefix + wpRoute;
            const methodIndex = rules.routes[ruleName].methods.indexOf(method.toUpperCase());
            const endpoints = rules.routes[ruleName].endpoints[methodIndex];
            return this._checkEndpoints(endpoints, filter);
        });
    }
    _checkEndpoints(rules, filter) {
        rules = rules.args;
        for (const index in rules) {
            const rule = rules[index];
            if (rule.required) {
                if (filter[index] === undefined)
                    throw index + ' es requerido';
            }
            if (filter[index] === undefined)
                continue;
            if (typeof filter[index] != rule.type) {
                console.log(typeof filter[index].prototype, rule.type);
            }
            if (rule.enum != undefined) {
                if (rule.enum.indexOf(filter[index]) == -1) {
                    throw index + " contiene un valor invalido (" + filter[index] + "), se esperaba alguno de los siguientes: " + rule.enum.join();
                }
            }
        }
        return 1;
    }
}
//# sourceMappingURL=WPAjax.js.map