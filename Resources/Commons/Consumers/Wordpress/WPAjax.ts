import { Ajax } from './../../../Tools/Ajax.js';
export enum WP {
    sufix = '/wp-json/wp/v2',
    prefix = '/wp/v2',
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
export class WPAjax extends Ajax implements iConsumer {
    public url: string;
    public access: any;
    public filter: any;
    public runPath: string;
    public credentials: string;
    public publishData: any;
    public rules: any;
    public route: string;
    public path: string;
    constructor(url: string, credentials: any = null) {
        super();
        this.url = url;
        this.credentials = credentials;
        this.path = this.url + WP.sufix;
    }
    async get() {
        await this.validateRules(this.route, this.filter);
        const getPath = this.path + this.route;
        return this.fetchData(getPath, this.filter, 'get');
    }
    async show(id: any) {
        return this.fetchData(this.runPath, this.filter);
    }

    async publish() {
        const userData = await this.access.getUserData(this.url, this.credentials);
        const token = userData.token;
        await this.validateRules(this.route, this.filter, 'post');
        const postPath = this.path + this.route;
        console.log(this.filter);
        return this.fetchData(postPath, this.filter, 'post', {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }
    async getRules() {
        const path = this.url + WP.sufix;
        if (this.rules != null) {
            return this.rules;
        }
        const rules = await this.fetchData(path);
        this.rules = rules;
        return rules;
    }
    async validateRules(wpRoute: string, filter: any = {}, method: string = 'GET') {
        const rules: any = await this.getRules();
        const ruleName: string = WP.prefix + wpRoute
        const methodIndex = rules.routes[ruleName].methods.indexOf(method.toUpperCase());
        const endpoints = rules.routes[ruleName].endpoints[methodIndex];
        return this._checkEndpoints(endpoints, filter);
    }
    _checkEndpoints(rules: any, filter: any) {
        rules = rules.args;
        for (const index in rules) {
            const rule = rules[index];
            if (rule.required) {
                if (filter[index] === undefined) throw index + ' es requerido';
            }
            if (filter[index] === undefined) continue;

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