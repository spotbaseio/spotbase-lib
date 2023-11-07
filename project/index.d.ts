import { Base } from '../base';
import { Domains } from './types';
export declare class Project extends Base {
    getProjectDomains(project: string): Promise<any>;
    patchProjectDomains(project: string, data: Domains): Promise<string>;
    deleteProjectDomains(project: string, data: Domains): Promise<string>;
}
