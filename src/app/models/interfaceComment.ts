import { InterfaceUser } from './interfaceUser';
import { InterfaceTask } from './interfaceTask';

export class InterfaceComment {
    id: number;
    user_id: InterfaceUser;
    task_id: InterfaceTask;
    content: string;
    status: string;
    created_at: string;
    updated_at: string;
}