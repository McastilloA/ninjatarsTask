import { InterfaceProject } from './interfaceProject';
import { InterfaceUser } from './interfaceUser';

export class InterfaceInvitation {
    id: number;
    user_id: InterfaceUser;
    project_id: InterfaceProject;
    email: string;
    role: string;
    expires_at: string;
    created_at: string;
    updated_at: string;
}