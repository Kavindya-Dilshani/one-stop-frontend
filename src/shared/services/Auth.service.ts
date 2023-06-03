
/**
 * This function is used to check the auth status of the user
 * @returns : auth status
 */
const getAuthStatus = () => {
    const token = 'jwt-token';
    if (token) {
        // return !isExpired(token);
        return true;
    } else {
        return false;
    }
}


export const AuthService = {
    getAuthStatus,
};