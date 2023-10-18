import { Tasks } from './TasksStore.ts';
import { UserAuth } from './UserAuthStore.ts';

export type RootState = {
    userAuth: UserAuth;
    tasks: Tasks;
}