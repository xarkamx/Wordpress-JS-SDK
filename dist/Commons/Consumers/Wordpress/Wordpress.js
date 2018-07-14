import { WPAjax, WP } from './WPAjax.js';
export class Wordpress {
    constructor(path, nonce = '') {
        this.path = path;
        this.nonce = nonce;
    }
    show(id) {
        throw new Error('Method not implemented.');
    }
    posts(filters = {}) {
        return this.setFetcher(filters, WP.posts);
    }
    pages(filters = {}) {
        return this.setFetcher(filters, WP.pages);
    }
    media(filters = {}) {
        return this.setFetcher(filters, WP.media);
    }
    types(filters = {}) {
        return this.setFetcher(filters, WP.types);
    }
    statuses(filters = {}) {
        return this.setFetcher(filters, WP.statuses);
    }
    taxonomies(filters = {}) {
        return this.setFetcher(filters, WP.taxonomies);
    }
    categories(filters = {}) {
        return this.setFetcher(filters, WP.categories);
    }
    tags(filters = {}) {
        return this.setFetcher(filters, WP.tags);
    }
    users(filters = {}) {
        return this.setFetcher(filters, WP.users);
    }
    comments(filters = {}) {
        return this.setFetcher(filters, WP.comments);
    }
    settings(filters = {}) {
        return this.setFetcher(filters, WP.settings);
    }
    setFetcher(filters, wpRoute) {
        const wpfetch = new WPAjax(this.path, this.nonce);
        wpfetch.filter = filters;
        wpfetch.route = wpRoute;
        return wpfetch;
    }
}
//# sourceMappingURL=Wordpress.js.map