import { IWPosts, IWPages, IWMedia } from './iWPosts.js';
import { WPAjax, WP } from './WPAjax.js';
import { JWTAccess } from './jwtAccess.js';
export class Wordpress {
    public path: string;
    public wpfetch: WPAjax;
    public access: JWTAccess;
    public credentials: iJWTCredentials;
    constructor(path: string, credentials: iJWTCredentials = null, access: JWTAccess = null) {
        this.path = path;
        this.credentials = credentials;
        this.access = (access == null) ? new JWTAccess() : access;
        if (credentials != null) {
            this.injectAccess(this.access);
        }
    }
    injectAccess(access: JWTAccess) {
        WPAjax.prototype.access = this.access;
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
        const wpfetch = new WPAjax(this.path, this.credentials);
        wpfetch.filter = filters;
        wpfetch.route = wpRoute;
        return wpfetch;
    }
}
