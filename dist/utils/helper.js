"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapItemsToDates = exports.getDates = void 0;
exports.parseStringToArray = parseStringToArray;
exports.stripSlashes = stripSlashes;
exports.filterSubscriptionData = filterSubscriptionData;
exports.hasPermission = hasPermission;
exports.getQrCodeData = getQrCodeData;
const member_role_enum_1 = require("../src/enums/member-role.enum");
const create_qr_code_dto_1 = require("../src/qr-codes/dto/create-qr-code.dto");
function parseStringToArray(str) {
    if (!str) {
        return null;
    }
    const obj = Object.fromEntries(str.split(',').map((entry) => {
        let [key, value] = entry.split(':').map((s) => s.trim());
        value = value?.replace(/^"(.*)"$/, '$1');
        return [key, value];
    }));
    return obj;
}
function stripSlashes(str) {
    if (str) {
        return str.replace(/\\(.)/g, '$1');
    }
    return str;
}
async function filterSubscriptionData(stripeSubscription, stripeService) {
    let latestInvoice = stripeSubscription.latest_invoice;
    if (typeof latestInvoice === 'string') {
        latestInvoice = await stripeService.retrieveLatestInvoice(latestInvoice);
    }
    return {
        subscriptionId: stripeSubscription?.id,
        customerId: stripeSubscription.customer,
        latestInvoice: {
            id: latestInvoice?.id,
            amountDue: latestInvoice?.amount_due
                ? latestInvoice.amount_due / 100
                : null,
            hostedInvoiceUrl: latestInvoice?.hosted_invoice_url,
            invoicePdf: latestInvoice?.invoice_pdf,
            currency: latestInvoice?.currency,
        },
        plan: {
            id: stripeSubscription.items?.data[0]?.price?.id,
            amount: stripeSubscription.items?.data[0]?.price?.unit_amount / 100,
            interval: stripeSubscription.items?.data[0]?.price?.recurring?.interval,
            intervalCount: stripeSubscription.items?.data[0]?.price?.recurring?.interval_count,
            product: stripeSubscription.items?.data[0]?.price?.product,
        },
        status: stripeSubscription.status,
    };
}
const getDates = (startDate, endDate, rate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    if (rate === 'month') {
        currentDate.setUTCDate(1);
    }
    if (rate === 'year') {
        currentDate.setUTCMonth(0, 1);
    }
    while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().split('T')[0]);
        switch (rate) {
            case 'day':
                currentDate.setUTCDate(currentDate.getUTCDate() + 1);
                break;
            case 'week':
                currentDate.setUTCDate(currentDate.getUTCDate() + 7);
                break;
            case 'month':
                currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);
                break;
            case 'year':
                currentDate.setUTCFullYear(currentDate.getUTCFullYear() + 1);
                break;
            default:
                currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        }
    }
    return dates;
};
exports.getDates = getDates;
const mapItemsToDates = (dates, parsedResult) => {
    const mappedResult = dates.map((date) => {
        const matchingItem = parsedResult.find((item) => item.period.toISOString().split('T')[0] === date);
        const totalScans = matchingItem ? parseInt(matchingItem.totalScans) : 0;
        const totalUniqueScans = matchingItem
            ? parseInt(matchingItem.totalUniqueScans)
            : 0;
        const totalVisits = matchingItem ? parseInt(matchingItem.totalVisits) : 0;
        return {
            period: date,
            totalScans,
            totalUniqueScans,
            totalVisits,
        };
    });
    return mappedResult;
};
exports.mapItemsToDates = mapItemsToDates;
function hasPermission(user, moduleName, permissionType) {
    if (!user.isMember)
        return true;
    const module = user.modules.find((m) => m.name === moduleName);
    if (!module)
        return false;
    switch (user.memberRole.name) {
        case member_role_enum_1.MemberRoleEnum.COLLABORATOR:
            return !!user.userPermissions[permissionType];
        case member_role_enum_1.MemberRoleEnum.LIMITED:
            return false;
        default:
            return true;
    }
}
function getQrCodeData(qrCode) {
    const createQrCodeDto = new create_qr_code_dto_1.CreateQrCodeDto();
    createQrCodeDto.qr_type_id = qrCode.qr_type_id || qrCode.qr_type?.id;
    createQrCodeDto.name = qrCode.name + ' - duplicate';
    createQrCodeDto.folder_id = qrCode.folder_id || qrCode.folder?.id;
    createQrCodeDto.domain_id = qrCode.domain_id;
    createQrCodeDto.content = qrCode.content;
    createQrCodeDto.style = qrCode.style;
    createQrCodeDto.scanLimit = qrCode.scanLimit;
    createQrCodeDto.allowScanLimit = qrCode.allowScanLimit;
    createQrCodeDto.accessPassword = qrCode.accessPassword;
    createQrCodeDto.activePassword = qrCode.activePassword;
    createQrCodeDto.user_id = qrCode.user_id;
    createQrCodeDto.schedule = qrCode.schedule;
    createQrCodeDto.stats = qrCode.stats;
    createQrCodeDto.googleAnalyticsId = qrCode.googleAnalyticsId;
    createQrCodeDto.facebookPixelId = qrCode.facebookPixelId;
    createQrCodeDto.trackEvents = qrCode.trackEvents;
    createQrCodeDto.googleTagManagerId = qrCode.googleTagManagerId;
    createQrCodeDto.status = qrCode.status;
    createQrCodeDto.type = qrCode.type || qrCode.qr_type?.type;
    return createQrCodeDto;
}
//# sourceMappingURL=helper.js.map