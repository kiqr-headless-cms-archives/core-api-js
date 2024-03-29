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


import * as runtime from '../runtime';
import type {
  CreateSchemaRequest,
  Schema,
} from '../models';
import {
    CreateSchemaRequestFromJSON,
    CreateSchemaRequestToJSON,
    SchemaFromJSON,
    SchemaToJSON,
} from '../models';

export interface CreateSchemaOperationRequest {
    projectId: string;
    createSchemaRequest?: CreateSchemaRequest;
}

export interface GetSchemaRequest {
    projectId: string;
    schemaId: string;
}

export interface GetSchemasRequest {
    projectId: string;
}

/**
 * SchemasApi - interface
 * 
 * @export
 * @interface SchemasApiInterface
 */
export interface SchemasApiInterface {
    /**
     * 
     * @summary Create a schema
     * @param {string} projectId 
     * @param {CreateSchemaRequest} [createSchemaRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemasApiInterface
     */
    createSchemaRaw(requestParameters: CreateSchemaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Schema>>;

    /**
     * Create a schema
     */
    createSchema(requestParameters: CreateSchemaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Schema>;

    /**
     * 
     * @summary Retrieve details about schema
     * @param {string} projectId 
     * @param {string} schemaId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemasApiInterface
     */
    getSchemaRaw(requestParameters: GetSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Schema>>;

    /**
     * Retrieve details about schema
     */
    getSchema(requestParameters: GetSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Schema>;

    /**
     * 
     * @summary Retrieve a projects history of schemas
     * @param {string} projectId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemasApiInterface
     */
    getSchemasRaw(requestParameters: GetSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schema>>>;

    /**
     * Retrieve a projects history of schemas
     */
    getSchemas(requestParameters: GetSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schema>>;

}

/**
 * 
 */
export class SchemasApi extends runtime.BaseAPI implements SchemasApiInterface {

    /**
     * Create a schema
     */
    async createSchemaRaw(requestParameters: CreateSchemaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Schema>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling createSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/projects/{projectId}/schemas`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSchemaRequestToJSON(requestParameters.createSchemaRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaFromJSON(jsonValue));
    }

    /**
     * Create a schema
     */
    async createSchema(requestParameters: CreateSchemaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Schema> {
        const response = await this.createSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve details about schema
     */
    async getSchemaRaw(requestParameters: GetSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Schema>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getSchema.');
        }

        if (requestParameters.schemaId === null || requestParameters.schemaId === undefined) {
            throw new runtime.RequiredError('schemaId','Required parameter requestParameters.schemaId was null or undefined when calling getSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/projects/{projectId}/schemas/{schemaId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"schemaId"}}`, encodeURIComponent(String(requestParameters.schemaId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaFromJSON(jsonValue));
    }

    /**
     * Retrieve details about schema
     */
    async getSchema(requestParameters: GetSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Schema> {
        const response = await this.getSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a projects history of schemas
     */
    async getSchemasRaw(requestParameters: GetSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schema>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getSchemas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/projects/{projectId}/schemas`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SchemaFromJSON));
    }

    /**
     * Retrieve a projects history of schemas
     */
    async getSchemas(requestParameters: GetSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schema>> {
        const response = await this.getSchemasRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
