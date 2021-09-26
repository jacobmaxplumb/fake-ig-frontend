import { updateUser } from "../services/firebase.service";

export const USER_UPDATED = "[Shared] User Updated";

export const userUpdatedAction = (user) => {
    updateUser(user);
    return {type: USER_UPDATED};
}