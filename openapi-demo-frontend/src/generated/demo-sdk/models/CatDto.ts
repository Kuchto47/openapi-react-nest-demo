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

import { exists, mapValues } from '../runtime';
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
     * The breed of the cat
     * @type {string}
     * @memberof CatDto
     */
    breed: CatDtoBreedEnum;
}


/**
 * @export
 */
export const CatDtoBreedEnum = {
    Siamese: 'Siamese',
    Bengal: 'Bengal',
    Persian: 'Persian'
} as const;
export type CatDtoBreedEnum = typeof CatDtoBreedEnum[keyof typeof CatDtoBreedEnum];


/**
 * Check if a given object implements the CatDto interface.
 */
export function instanceOfCatDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "age" in value;
    isInstance = isInstance && "breed" in value;

    return isInstance;
}

export function CatDtoFromJSON(json: any): CatDto {
    return CatDtoFromJSONTyped(json, false);
}

export function CatDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'age': json['age'],
        'breed': json['breed'],
    };
}

export function CatDtoToJSON(value?: CatDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'age': value.age,
        'breed': value.breed,
    };
}

