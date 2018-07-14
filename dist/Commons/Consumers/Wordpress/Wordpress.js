var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Ajax } from '../../../Tools/Ajax.js';
var WP;
(function (WP) {
    WP["sufix"] = "/wp-json/wp/v2";
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
export class Wordpress extends Ajax {
    constructor(path) {
        super();
        this.runPath = '';
        this.path = path + WP.sufix;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetchData(this.runPath, this.filter);
        });
    }
    show(id) {
        throw new Error('Method not implemented.');
    }
    posts(filters = {}) {
        this.runPath = this.path + WP.posts;
        return this.setFetcher(filters);
    }
    pages(filters = {}) {
        this.runPath = this.path + WP.pages;
        return this.setFetcher(filters);
    }
    media(filters = {}) {
        this.runPath = this.path + WP.media;
        return this.setFetcher(filters);
    }
    types(filters = {}) {
        this.runPath = this.path + WP.types;
        return this.setFetcher(filters);
    }
    statuses(filters = {}) {
        this.runPath = this.path + WP.statuses;
        return this.setFetcher(filters);
    }
    taxonomies(filters = {}) {
        this.runPath = this.path + WP.taxonomies;
        return this.setFetcher(filters);
    }
    categories(filters = {}) {
        this.runPath = this.path + WP.categories;
        return this.setFetcher(filters);
    }
    tags(filters = {}) {
        this.runPath = this.path + WP.tags;
        return this.setFetcher(filters);
    }
    users(filters = {}) {
        this.runPath = this.path + WP.users;
        return this.setFetcher(filters);
    }
    comments(filters = {}) {
        this.runPath = this.path + WP.comments;
        return this.setFetcher(filters);
    }
    settings(filters = {}) {
        this.runPath = this.path + WP.settings;
        return this.setFetcher(filters);
    }
    setFetcher(filters) {
        this.filter = filters;
        return this;
    }
}
//# sourceMappingURL=Wordpress.js.map