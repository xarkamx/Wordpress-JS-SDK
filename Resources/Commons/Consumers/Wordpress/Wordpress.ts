import { IWPosts, IWPages, IWMedia } from './iWPosts.js';
import { WPAjax, WP } from './WPAjax.js';
export class Wordpress {
    public path: string;
    public wpfetch: WPAjax;
    public nonce: string;
    constructor(path: string, nonce: string = '') {
        this.path = path;
        this.nonce = nonce;
    }
    show(id: Number) {
        throw new Error('Method not implemented.');
    }
    posts(filters: IWPosts = {}) {
        return this.setFetcher(filters, WP.posts);
    }
    pages(filters: IWPages = {}) {
        return this.setFetcher(filters, WP.pages);
    }
    media(filters: IWMedia = {}) {
        return this.setFetcher(filters, WP.media);
    }
    types(filters: any = {}) {
        return this.setFetcher(filters, WP.types);
    }
    statuses(filters: any = {}) {
        return this.setFetcher(filters, WP.statuses);
    }
    taxonomies(filters: any = {}) {
        return this.setFetcher(filters, WP.taxonomies);
    }
    categories(filters: any = {}) {
        return this.setFetcher(filters, WP.categories);
    }
    tags(filters: any = {}) {
        return this.setFetcher(filters, WP.tags);
    }
    users(filters: any = {}) {
        return this.setFetcher(filters, WP.users);
    }
    comments(filters: any = {}) {
        return this.setFetcher(filters, WP.comments);
    }
    settings(filters: any = {}) {
        return this.setFetcher(filters, WP.settings);
    }
    setFetcher(filters: any, wpRoute: string) {
        const wpfetch = new WPAjax(this.path, this.nonce);
        wpfetch.filter = filters;
        wpfetch.route = wpRoute;
        return wpfetch;
    }
}
