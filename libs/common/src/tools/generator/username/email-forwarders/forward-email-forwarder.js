"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardEmailForwarder = void 0;
const utils_1 = require("../../../../platform/misc/utils");
class ForwardEmailForwarder {
    generate(apiService, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (options.apiKey == null || options.apiKey === "") {
                throw "Invalid Forward Email API key.";
            }
            if (((_a = options.forwardemail) === null || _a === void 0 ? void 0 : _a.domain) == null || options.forwardemail.domain === "") {
                throw "Invalid Forward Email domain.";
            }
            const requestInit = {
                redirect: "manual",
                cache: "no-store",
                method: "POST",
                headers: new Headers({
                    Authorization: "Basic " + utils_1.Utils.fromUtf8ToB64(options.apiKey + ":"),
                    "Content-Type": "application/json",
                }),
            };
            const url = `https://api.forwardemail.net/v1/domains/${options.forwardemail.domain}/aliases`;
            requestInit.body = JSON.stringify({
                labels: options.website,
                description: (options.website != null ? "Website: " + options.website + ". " : "") +
                    "Generated by Bitwarden.",
            });
            const request = new Request(url, requestInit);
            const response = yield apiService.nativeFetch(request);
            if (response.status === 200 || response.status === 201) {
                const json = yield response.json();
                return (json === null || json === void 0 ? void 0 : json.name) + "@" + (((_b = json === null || json === void 0 ? void 0 : json.domain) === null || _b === void 0 ? void 0 : _b.name) || options.forwardemail.domain);
            }
            if (response.status === 401) {
                throw "Invalid Forward Email API key.";
            }
            const json = yield response.json();
            if ((json === null || json === void 0 ? void 0 : json.message) != null) {
                throw "Forward Email error:\n" + json.message;
            }
            if ((json === null || json === void 0 ? void 0 : json.error) != null) {
                throw "Forward Email error:\n" + json.error;
            }
            throw "Unknown Forward Email error occurred.";
        });
    }
}
exports.ForwardEmailForwarder = ForwardEmailForwarder;
//# sourceMappingURL=forward-email-forwarder.js.map