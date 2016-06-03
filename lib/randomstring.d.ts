export interface Options {
    length?: number;
    charset?: Charset;
    capitalization?: Capitalization;
    readable?: boolean;
}

export enum Charset {
    alphanumeric = 1,
    numeric,
    alphabetic,
    hex,
    charset
}

export enum Capitalization {
    uppercase = 1,
    lowercase
}

export declare function Generate(options?: Options | number | Object ): string;
