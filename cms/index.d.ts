import { Config } from './types';
import { Base } from '../base';
export declare class CMS extends Base {
    getCMSConfig(project: string, token: string): Promise<Config>;
    patchCMSConfig(project: string, token: string, data: Config): Promise<string>;
    getItems(project: string, token: string): Promise<any>;
    getFields(project: string, token: string): Promise<any>;
    getProgress(project: string, token: string): Promise<any>;
}
