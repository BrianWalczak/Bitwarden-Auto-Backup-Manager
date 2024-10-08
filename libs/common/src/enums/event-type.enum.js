"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
// Increment by 100 for each new set of events
var EventType;
(function (EventType) {
    EventType[EventType["User_LoggedIn"] = 1000] = "User_LoggedIn";
    EventType[EventType["User_ChangedPassword"] = 1001] = "User_ChangedPassword";
    EventType[EventType["User_Updated2fa"] = 1002] = "User_Updated2fa";
    EventType[EventType["User_Disabled2fa"] = 1003] = "User_Disabled2fa";
    EventType[EventType["User_Recovered2fa"] = 1004] = "User_Recovered2fa";
    EventType[EventType["User_FailedLogIn"] = 1005] = "User_FailedLogIn";
    EventType[EventType["User_FailedLogIn2fa"] = 1006] = "User_FailedLogIn2fa";
    EventType[EventType["User_ClientExportedVault"] = 1007] = "User_ClientExportedVault";
    EventType[EventType["User_UpdatedTempPassword"] = 1008] = "User_UpdatedTempPassword";
    EventType[EventType["User_MigratedKeyToKeyConnector"] = 1009] = "User_MigratedKeyToKeyConnector";
    EventType[EventType["User_RequestedDeviceApproval"] = 1010] = "User_RequestedDeviceApproval";
    EventType[EventType["Cipher_Created"] = 1100] = "Cipher_Created";
    EventType[EventType["Cipher_Updated"] = 1101] = "Cipher_Updated";
    EventType[EventType["Cipher_Deleted"] = 1102] = "Cipher_Deleted";
    EventType[EventType["Cipher_AttachmentCreated"] = 1103] = "Cipher_AttachmentCreated";
    EventType[EventType["Cipher_AttachmentDeleted"] = 1104] = "Cipher_AttachmentDeleted";
    EventType[EventType["Cipher_Shared"] = 1105] = "Cipher_Shared";
    EventType[EventType["Cipher_UpdatedCollections"] = 1106] = "Cipher_UpdatedCollections";
    EventType[EventType["Cipher_ClientViewed"] = 1107] = "Cipher_ClientViewed";
    EventType[EventType["Cipher_ClientToggledPasswordVisible"] = 1108] = "Cipher_ClientToggledPasswordVisible";
    EventType[EventType["Cipher_ClientToggledHiddenFieldVisible"] = 1109] = "Cipher_ClientToggledHiddenFieldVisible";
    EventType[EventType["Cipher_ClientToggledCardCodeVisible"] = 1110] = "Cipher_ClientToggledCardCodeVisible";
    EventType[EventType["Cipher_ClientCopiedPassword"] = 1111] = "Cipher_ClientCopiedPassword";
    EventType[EventType["Cipher_ClientCopiedHiddenField"] = 1112] = "Cipher_ClientCopiedHiddenField";
    EventType[EventType["Cipher_ClientCopiedCardCode"] = 1113] = "Cipher_ClientCopiedCardCode";
    EventType[EventType["Cipher_ClientAutofilled"] = 1114] = "Cipher_ClientAutofilled";
    EventType[EventType["Cipher_SoftDeleted"] = 1115] = "Cipher_SoftDeleted";
    EventType[EventType["Cipher_Restored"] = 1116] = "Cipher_Restored";
    EventType[EventType["Cipher_ClientToggledCardNumberVisible"] = 1117] = "Cipher_ClientToggledCardNumberVisible";
    EventType[EventType["Cipher_ClientToggledTOTPSeedVisible"] = 1118] = "Cipher_ClientToggledTOTPSeedVisible";
    EventType[EventType["Collection_Created"] = 1300] = "Collection_Created";
    EventType[EventType["Collection_Updated"] = 1301] = "Collection_Updated";
    EventType[EventType["Collection_Deleted"] = 1302] = "Collection_Deleted";
    EventType[EventType["Group_Created"] = 1400] = "Group_Created";
    EventType[EventType["Group_Updated"] = 1401] = "Group_Updated";
    EventType[EventType["Group_Deleted"] = 1402] = "Group_Deleted";
    EventType[EventType["OrganizationUser_Invited"] = 1500] = "OrganizationUser_Invited";
    EventType[EventType["OrganizationUser_Confirmed"] = 1501] = "OrganizationUser_Confirmed";
    EventType[EventType["OrganizationUser_Updated"] = 1502] = "OrganizationUser_Updated";
    EventType[EventType["OrganizationUser_Removed"] = 1503] = "OrganizationUser_Removed";
    EventType[EventType["OrganizationUser_UpdatedGroups"] = 1504] = "OrganizationUser_UpdatedGroups";
    EventType[EventType["OrganizationUser_UnlinkedSso"] = 1505] = "OrganizationUser_UnlinkedSso";
    EventType[EventType["OrganizationUser_ResetPassword_Enroll"] = 1506] = "OrganizationUser_ResetPassword_Enroll";
    EventType[EventType["OrganizationUser_ResetPassword_Withdraw"] = 1507] = "OrganizationUser_ResetPassword_Withdraw";
    EventType[EventType["OrganizationUser_AdminResetPassword"] = 1508] = "OrganizationUser_AdminResetPassword";
    EventType[EventType["OrganizationUser_ResetSsoLink"] = 1509] = "OrganizationUser_ResetSsoLink";
    EventType[EventType["OrganizationUser_FirstSsoLogin"] = 1510] = "OrganizationUser_FirstSsoLogin";
    EventType[EventType["OrganizationUser_Revoked"] = 1511] = "OrganizationUser_Revoked";
    EventType[EventType["OrganizationUser_Restored"] = 1512] = "OrganizationUser_Restored";
    EventType[EventType["OrganizationUser_ApprovedAuthRequest"] = 1513] = "OrganizationUser_ApprovedAuthRequest";
    EventType[EventType["OrganizationUser_RejectedAuthRequest"] = 1514] = "OrganizationUser_RejectedAuthRequest";
    EventType[EventType["Organization_Updated"] = 1600] = "Organization_Updated";
    EventType[EventType["Organization_PurgedVault"] = 1601] = "Organization_PurgedVault";
    EventType[EventType["Organization_ClientExportedVault"] = 1602] = "Organization_ClientExportedVault";
    EventType[EventType["Organization_VaultAccessed"] = 1603] = "Organization_VaultAccessed";
    EventType[EventType["Organization_EnabledSso"] = 1604] = "Organization_EnabledSso";
    EventType[EventType["Organization_DisabledSso"] = 1605] = "Organization_DisabledSso";
    EventType[EventType["Organization_EnabledKeyConnector"] = 1606] = "Organization_EnabledKeyConnector";
    EventType[EventType["Organization_DisabledKeyConnector"] = 1607] = "Organization_DisabledKeyConnector";
    EventType[EventType["Organization_SponsorshipsSynced"] = 1608] = "Organization_SponsorshipsSynced";
    EventType[EventType["Organization_CollectionManagementUpdated"] = 1609] = "Organization_CollectionManagementUpdated";
    EventType[EventType["Policy_Updated"] = 1700] = "Policy_Updated";
    EventType[EventType["ProviderUser_Invited"] = 1800] = "ProviderUser_Invited";
    EventType[EventType["ProviderUser_Confirmed"] = 1801] = "ProviderUser_Confirmed";
    EventType[EventType["ProviderUser_Updated"] = 1802] = "ProviderUser_Updated";
    EventType[EventType["ProviderUser_Removed"] = 1803] = "ProviderUser_Removed";
    EventType[EventType["ProviderOrganization_Created"] = 1900] = "ProviderOrganization_Created";
    EventType[EventType["ProviderOrganization_Added"] = 1901] = "ProviderOrganization_Added";
    EventType[EventType["ProviderOrganization_Removed"] = 1902] = "ProviderOrganization_Removed";
    EventType[EventType["ProviderOrganization_VaultAccessed"] = 1903] = "ProviderOrganization_VaultAccessed";
    EventType[EventType["OrganizationDomain_Added"] = 2000] = "OrganizationDomain_Added";
    EventType[EventType["OrganizationDomain_Removed"] = 2001] = "OrganizationDomain_Removed";
    EventType[EventType["OrganizationDomain_Verified"] = 2002] = "OrganizationDomain_Verified";
    EventType[EventType["OrganizationDomain_NotVerified"] = 2003] = "OrganizationDomain_NotVerified";
    EventType[EventType["Secret_Retrieved"] = 2100] = "Secret_Retrieved";
})(EventType || (exports.EventType = EventType = {}));
//# sourceMappingURL=event-type.enum.js.map