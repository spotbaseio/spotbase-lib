import { Config, Addon } from './types';
import { Base } from '../base';
export declare class CMS extends Base {
    getCMSConfig(project: string, token: string): Promise<{
        data: Config;
        error: Error | null;
    }>;
    patchCMSConfig(project: string, token: string, config: Config): Promise<{
        data: string;
        error: Error | null;
    }>;
    getItems(project: string, token: string): Promise<{
        data: any;
        error: Error | null;
    }>;
    getFields(project: string, token: string): Promise<{
        data: any;
        error: Error | null;
    }>;
    getProgress(project: string, token: string): Promise<{
        data: any;
        error: Error | null;
    }>;
    getAddon(id: string): Promise<{
        data: Addon;
        error: Error | null;
    }>;
    getAddons(project_id: string, start: number, offset: number): Promise<{
        data: Addon[];
        error: Error | null;
    }>;
}
