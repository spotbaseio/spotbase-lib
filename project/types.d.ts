export type Domains = {
    domains: Domain[];
};
export type Domain = {
    id: string;
    name: string;
    value: string;
};
export type UserProject = {
    id: string;
    name: string;
    description: string;
    emoji: string;
    domains: Domain[];
};
export type UserProjectInterface = {
    data: UserProject[];
    error: Error | null;
};
export type DomainsInterface = {
    data: Domain[];
    error: Error | null;
};
