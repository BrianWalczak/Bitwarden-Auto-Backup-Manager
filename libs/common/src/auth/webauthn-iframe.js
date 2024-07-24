"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAuthnIFrame = void 0;
class WebAuthnIFrame {
    constructor(win, webVaultUrl, webAuthnNewTab, platformUtilsService, i18nService, successCallback, // eslint-disable-line
    errorCallback, // eslint-disable-line
    infoCallback) {
        this.win = win;
        this.webVaultUrl = webVaultUrl;
        this.webAuthnNewTab = webAuthnNewTab;
        this.platformUtilsService = platformUtilsService;
        this.i18nService = i18nService;
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
        this.infoCallback = infoCallback;
        this.iframe = null;
        this.parseFunction = this.parseMessage.bind(this);
        this.connectorLink = win.document.createElement("a");
    }
    init(data) {
        const params = new URLSearchParams({
            data: this.base64Encode(JSON.stringify(data)),
            parent: encodeURIComponent(this.win.document.location.href),
            btnText: encodeURIComponent(this.i18nService.t("webAuthnAuthenticate")),
            v: "1",
        });
        if (this.webAuthnNewTab) {
            // Firefox fallback which opens the webauthn page in a new tab
            params.append("locale", this.i18nService.translationLocale);
            this.platformUtilsService.launchUri(`${this.webVaultUrl}/webauthn-fallback-connector.html?${params}`);
        }
        else {
            this.connectorLink.href = `${this.webVaultUrl}/webauthn-connector.html?${params}`;
            this.iframe = this.win.document.getElementById("webauthn_iframe");
            this.iframe.allow = "publickey-credentials-get " + new URL(this.webVaultUrl).origin;
            this.iframe.src = this.connectorLink.href;
            this.win.addEventListener("message", this.parseFunction, false);
        }
    }
    stop() {
        this.sendMessage("stop");
    }
    start() {
        this.sendMessage("start");
    }
    sendMessage(message) {
        if (!this.iframe || !this.iframe.src || !this.iframe.contentWindow) {
            return;
        }
        this.iframe.contentWindow.postMessage(message, this.iframe.src);
    }
    base64Encode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(("0x" + p1));
        }));
    }
    cleanup() {
        this.win.removeEventListener("message", this.parseFunction, false);
    }
    parseMessage(event) {
        if (!this.validMessage(event)) {
            return;
        }
        const parts = event.data.split("|");
        if (parts[0] === "success" && this.successCallback) {
            this.successCallback(parts[1]);
        }
        else if (parts[0] === "error" && this.errorCallback) {
            this.errorCallback(parts[1]);
        }
        else if (parts[0] === "info" && this.infoCallback) {
            this.infoCallback(parts[1]);
        }
    }
    validMessage(event) {
        if (event.origin == null ||
            event.origin === "" ||
            event.origin !== this.connectorLink.origin ||
            event.data == null ||
            typeof event.data !== "string") {
            return false;
        }
        return (event.data.indexOf("success|") === 0 ||
            event.data.indexOf("error|") === 0 ||
            event.data.indexOf("info|") === 0);
    }
}
exports.WebAuthnIFrame = WebAuthnIFrame;
//# sourceMappingURL=webauthn-iframe.js.map