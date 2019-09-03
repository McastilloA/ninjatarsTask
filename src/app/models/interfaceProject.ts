import { InterfaceTask } from './interfaceTask';

export interface InterfaceProject {
    id: number;
    name: string;
    description: string;
    git_url: string;
    private_information: string;
    created_at: string;
    updated_at: string;
    tasks: InterfaceTask;
}