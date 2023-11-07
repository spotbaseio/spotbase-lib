import { Base } from '../base';
export declare class Auth extends Base {
    login(user: string, password: string): Promise<void>;
    logout(): Promise<void>;
}
