import { Base } from '../base';
import { Domain, UserProject } from './types';
export declare class Project extends Base {
    getProjectDomains(project: string): Promise<{
        data: Domain[];
        error: Error | null;
    }>;
    patchProjectDomains(project: string, domains: Domain[]): Promise<{
        data: string;
        error: Error | null;
    }>;
    deleteProjectDomains(project: string, domains: Domain[]): Promise<{
        data: string;
        error: Error | null;
    }>;
    getProjects(start: number, offset: number): Promise<{
        data: UserProject[];
        error: Error | null;
    }>;
    getProject(id: string): Promise<{
        data: UserProject;
        error: Error | null;
    }>;
}
