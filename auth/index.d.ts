import { Base } from '../base';
export declare class Auth extends Base {
    login(user: string, password: string): Promise<{
        data: boolean;
        error: Error | null;
    }>;
    logout(): Promise<void>;
    isLogged(): Promise<{
        data: boolean;
        error: Error | null;
    }>;
}
