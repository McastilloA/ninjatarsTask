import { InterfaceUser } from './interfaceUser';
import { InterfaceProject } from './interfaceProject';

export class InterfaceMember {
    id: number;
    user_id: InterfaceUser;
    project_id: InterfaceProject;
    role: string;
    created_at: string;
    updated_at: string;
}