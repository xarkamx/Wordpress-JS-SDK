import { Ajax } from "../../../Tools/Ajax.js";
enum JWTPATHS {
    PREFIX = "/wp-json/jwt-auth/v1",
    TOKEN = "/token",
}
export class JWTAccess extends Ajax {
    public userData: any;
    async getUserData(url: string, credentials: iJWTCredentials) {
        if (this.userData != null) {
            return this.userData;
        }
        const tokenPath: string = url + JWTPATHS.PREFIX + JWTPATHS.TOKEN;
        this.userData = await this.fetchData(tokenPath, credentials, 'post');
        return this.userData;
    }
}