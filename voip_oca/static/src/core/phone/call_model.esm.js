/* @odoo-module */

import {Record} from "@mail/core/common/record";

/**
 * @typedef Data
 * @property {[number, string]} partner_id
 * @property {[number, string]} user_id
 * @property {[number, string]} create_uid
 * @property {[number, string]} write_uid
 * @property {string} phone_number
 * @property {'incoming'|'outgoing'} type_call
 * @property {'aborted', 'calling', 'missed', 'ongoing', 'rejected', 'terminated'} state
 * @property {string} activity_name
 * @property {string} end_date
 * @property {string} start_date
 * @property {string} create_date
 * @property {string} write_date
 */

export class Call extends Record {
    static id = "id";
    /** @type {Object.<number, import("models").Call>} */
    static records = {};
    /** @returns {import("models").Call} */
    static get(data) {
        return super.get(data);
    }
    /**
     * @param {Data} data
     * @param {Object} [param1]
     * @param {boolean} param1.broadcast
     * @returns {import("models").Call|import("models").Call[]}
     */
    static insert() {
        return super.insert(...arguments);
    }
}

Call.register();
