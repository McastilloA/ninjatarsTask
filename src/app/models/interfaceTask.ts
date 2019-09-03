import { InterfaceProject } from './interfaceProject';
import { InterfaceUser } from './interfaceUser';

export interface InterfaceTask {
    id?: number;
    project_id?: InterfaceProject;
    parent_id?: number;
    user_id?: InterfaceUser;
    user_to_id?: InterfaceUser;
    name?: string;
    description?: string;
    tags?: string;
    status?: string;
    hours?: number;
    limit_date?: Date;
    attachment?: string;
    closed_at?: Date;
    created_at?:Date;
    updated_at?: Date;
}
