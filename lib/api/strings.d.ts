import { DefaultResponse, LokaliseResponse, Request } from '../services/request';
import { PlaceholderFormat, PlatformBitMask, PluralFormat } from '../index';
export interface LocaleKey {
    key: string;
    platform_mask: PlatformBitMask;
    context: string;
    translation: string;
    plural_key: string;
    is_hidden: string;
    created_at: string;
    tags?: string[];
    modified_at: string;
    fuzzy: string;
    is_archived: string;
}
export interface LocaleKeyAppend extends LocaleKey {
    filename_web: string;
    hidden: number;
    translations: {
        [locale: string]: string;
    };
    plural: string;
}
export interface StringsList {
    strings: {
        [lang: string]: LocaleKey[];
    };
    response: LokaliseResponse;
}
export interface StringsListParams {
    id: string;
    langs?: object[];
    platform_mask?: PlatformBitMask;
    keys?: object[];
    tags?: object[];
    plural_format?: PluralFormat;
    icu_numeric?: boolean;
    placeholder_format?: PlaceholderFormat;
}
export interface AddKeysParams {
    id: number;
    data: LocaleKeyAppend[];
}
export interface AddKeysResponse {
    result: {
        inserted: string;
        updated: string;
    };
    response: LokaliseResponse;
}
export interface RemoveKeysParams {
    id: number;
    keys: string[];
}
export declare class Strings extends Request {
    constructor(token: string);
    list(params: StringsListParams): Promise<StringsList>;
    add(params: AddKeysParams): Promise<AddKeysResponse>;
    remove(params: RemoveKeysParams): Promise<DefaultResponse>;
}
