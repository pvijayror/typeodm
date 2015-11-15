import {ObjectPropertyMetadata} from "./ObjectPropertyMetadata";

/**
 * Function that returns a type of the field. Type can be either string or some class.
 */
export type FieldTypeInFunction = ((type?: any) => Function|string);

/**
 * This metadata interface contains all information about some document's field.
 */
export interface FieldMetadata extends ObjectPropertyMetadata {

    /**
     * Field name to be used in the database.
     */
    name?: string;

    /**
     * The type of the field.
     */
    type: FieldTypeInFunction;

    /**
     * Indicates if this field is document's id or not.
     */
    isId: boolean;

    /**
     * Indicates if this field will contain ObjectId.
     */
    isObjectId: boolean;

    /**
     * Indicates if field value should be auto generated or not.
     * @deprecated
     */
    isAutoGenerated?: boolean;

    /**
     * Indicates if this field is array or not.
     */
    isArray: boolean;

    /**
     * Indicates if field will contain a create date or not.
     */
    isCreateDate: boolean;

    /**
     * Indicates if field will contain an update date or not.
     */
    isUpdateDate: boolean;
}