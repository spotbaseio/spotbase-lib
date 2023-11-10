import { SupabaseClient } from '@supabase/supabase-js';
type Config = {
    version?: string;
    basePath?: string;
};
export type Pagination = {
    page?: number;
    per_page?: number;
};
export declare abstract class Base {
    private version;
    private basePath;
    private defaultVersion;
    private defaultBaseURL;
    private authToken;
    protected supabase: SupabaseClient;
    constructor(config: Config);
    protected request<T>(endpoint: string, auth?: boolean, options?: RequestInit): Promise<T>;
    protected setAuthToken(token: string): void;
    protected getAuthToken(): string;
}
export {};
