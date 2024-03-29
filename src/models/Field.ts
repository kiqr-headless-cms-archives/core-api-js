/* tslint:disable */
/* eslint-disable */
/**
 * Core API
 * Core API for KIQR Headless CMS
 *
 * The version of the OpenAPI document: 0.16.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    type?: FieldTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    contentType?: string;
}


/**
 * @export
 */
export const FieldTypeEnum = {
    String: 'string',
    Text: 'text',
    Editor: 'editor'
} as const;
export type FieldTypeEnum = typeof FieldTypeEnum[keyof typeof FieldTypeEnum];


/**
 * Check if a given object implements the Field interface.
 */
export function instanceOfField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FieldFromJSON(json: any): Field {
    return FieldFromJSONTyped(json, false);
}

export function FieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): Field {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'contentType': !exists(json, 'content_type') ? undefined : json['content_type'],
    };
}

export function FieldToJSON(value?: Field | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'label': value.label,
        'type': value.type,
        'content_type': value.contentType,
    };
}

