import { Ajax } from '../../../Tools/Ajax';
import { IWPosts, IWPages, IWMedia } from './iWPosts';
enum WP {
    sufix = '/wp-json/wp/v2',
    posts = '/posts',
    pages = '/pages',
    media = '/media',
    types = '/types',
    statuses = '/statuses',
    taxonomies = '/taxonomies',
    categories = '/categories',
    tags = '/tags',
    users = '/users',
    comments = '/comments',
    settings = '/settings',
}
export class Wordpress extends Ajax implements iConsumer {
    public path: string;
    public filter: any;
    public runPath: string;
    constructor(path: string) {
        super();
        this.path = path + WP.sufix;
    }
    async get() {
        return this.fetchData(this.runPath, this.filter);
    }
    show(id: Number) {
        throw new Error('Method not implemented.');
    }
    posts(filters: IWPosts = {}) {
        this.runPath = this.path + WP.posts;
        return this.setFetcher(filters);
    }
    pages(filters: IWPages = {}) {
        this.runPath = this.path + WP.pages;
        return this.setFetcher(filters);
    }
    media(filters: IWMedia = {}) {
        this.runPath = this.path + WP.media;
        return this.setFetcher(filters);
    }
    types(filters: any = {}) {
        this.runPath = this.path + WP.types;
        return this.setFetcher(filters);
    }
    statuses(filters: any = {}) {
        this.runPath = this.path + WP.statuses;
        return this.setFetcher(filters);
    }
    taxonomies(filters: any = {}) {
        this.runPath = this.path + WP.taxonomies;
        return this.setFetcher(filters);
    }
    categories(filters: any = {}) {
        this.runPath = this.path + WP.categories;
        return this.setFetcher(filters);
    }
    tags(filters: any = {}) {
        this.runPath = this.path + WP.tags;
        return this.setFetcher(filters);
    }
    users(filters: any = {}) {
        this.runPath = this.path + WP.users;
        return this.setFetcher(filters);
    }
    comments(filters: any = {}) {
        this.runPath = this.path + WP.comments;
        return this.setFetcher(filters);
    }
    settings(filters: any = {}) {
        this.runPath = this.path + WP.settings;
        return this.setFetcher(filters);
    }
    setFetcher(filters: any) {
        this.filter = filters;
        return this;
    }

}
