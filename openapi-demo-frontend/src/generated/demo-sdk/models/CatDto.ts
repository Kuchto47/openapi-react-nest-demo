/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI example
 * description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CatBreed } from './CatBreed';
import {
    CatBreedFromJSON,
    CatBreedFromJSONTyped,
    CatBreedToJSON,
} from './CatBreed';

/**
 * 
 * @export
 * @interface CatDto
 */
export interface CatDto {
    /**
     * The name of the cat
     * @type {string}
     * @memberof CatDto
     */
    name: string;
    /**
     * The age of the cat
     * @type {number}
     * @memberof CatDto
     */
    age: number;
    /**
     * 
     * @type {CatBreed}
     * @memberof CatDto
     */
    breed: CatBreed;
}



/**
 * Check if a given object implements the CatDto interface.
 */
export function instanceOfCatDto(value: object): value is CatDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('age' in value) || value['age'] === undefined) return false;
    if (!('breed' in value) || value['breed'] === undefined) return false;
    return true;
}

export function CatDtoFromJSON(json: any): CatDto {
    return CatDtoFromJSONTyped(json, false);
}

export function CatDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'age': json['age'],
        'breed': CatBreedFromJSON(json['breed']),
    };
}

export function CatDtoToJSON(value?: CatDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'age': value['age'],
        'breed': CatBreedToJSON(value['breed']),
    };
}

