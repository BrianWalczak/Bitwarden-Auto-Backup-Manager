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
exports.DeleteBiometricPromptCancelledData = exports.PROMPT_CANCELLED = void 0;
const migrator_1 = require("../migrator");
exports.PROMPT_CANCELLED = {
    key: "promptCancelled",
    stateDefinition: { name: "biometricSettings" },
};
class DeleteBiometricPromptCancelledData extends migrator_1.Migrator {
    migrate(helper) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all((yield helper.getAccounts()).map((_a) => __awaiter(this, [_a], void 0, function* ({ userId }) {
                if (helper.getFromUser(userId, exports.PROMPT_CANCELLED) != null) {
                    yield helper.removeFromUser(userId, exports.PROMPT_CANCELLED);
                }
            })));
        });
    }
    rollback(helper) {
        return __awaiter(this, void 0, void 0, function* () {
            throw migrator_1.IRREVERSIBLE;
        });
    }
}
exports.DeleteBiometricPromptCancelledData = DeleteBiometricPromptCancelledData;
//# sourceMappingURL=46-delete-orphaned-biometric-prompt-data.js.map