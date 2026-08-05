class AuthService {
    static async register(userData) {
        try {
            console.log("Registering user:", userData.body);
            console.log(userData.file);
        }
        catch (error) {
            console.error("Error registering user:", error);
        }
    }
}

export default AuthService;