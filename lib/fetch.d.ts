export as namespace Fetch;
export class Fetch{
    constructor(token: string)
    public get(url: string, configuration?: RequestInit, json?: boolean): Promise<any>
    public post(url: string, data: Object, json?: boolean): Promise<any>
    public put(url: string, data: Object, json?: boolean): Promise<any>
    public delete(url: Object, json?: boolean): Promise<any>
    #auth_header: string;
    other_headers: {
        [key: string]: string
    }
    #base_url: string;
    error(err: Error): void
}