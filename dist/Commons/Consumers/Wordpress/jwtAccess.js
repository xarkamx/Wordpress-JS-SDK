var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Ajax } from "../../../Tools/Ajax.js";
var JWTPATHS;
(function (JWTPATHS) {
    JWTPATHS["PREFIX"] = "/wp-json/jwt-auth/v1";
    JWTPATHS["TOKEN"] = "/token";
})(JWTPATHS || (JWTPATHS = {}));
export class JWTAccess extends Ajax {
    getUserData(url, credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userData != null) {
                return this.userData;
            }
            const tokenPath = url + JWTPATHS.PREFIX + JWTPATHS.TOKEN;
            this.userData = yield this.fetchData(tokenPath, credentials, 'post');
            return this.userData;
        });
    }
}
//# sourceMappingURL=jwtAccess.js.map