export const validateRegister = (req, res, next) => {
    const {
        fullName,
        email,
        mobile,
        password,
        confirmPassword
    } = req.body;
    const errors = {
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    };

    if (!fullName?.trim()) {
        errors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/.test(fullName)) {
        errors.fullName = "Please enter a valid full name.";
    }
    else{
        errors.fullName = "";
    }

    if (!email?.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }
    else{
        errors.email = "";
    }

    if (!mobile?.trim()) {
        errors.mobile = "Mobile number is required.";
    } else if (!/^(\+880|880|0)1[3-9]\d{8}$/.test(mobile)) {
        errors.mobile = "Please enter a valid mobile number.";
    }
    else{
        errors.mobile = "";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/.test(password)) {
        errors.password ="Password must contain uppercase, lowercase, number, special character and be at least 8 characters.";
    }
    else{
        errors.password = "";
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
    }
    else{
        errors.confirmPassword = "";
    }

    if (Object.values(errors).some((err) => err !== "")) {
        return res.status(400).json({
            success: false,
            errors
        });
    }
    next();
};

export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const errors = {
        email: "",
        password: ""
    };
    if(!email?.trim()){
        errors.email = "Email is required.";
    }
    else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
        errors.email = "Please enter a valid email address.";
    }
    else{
        errors.email = "";
    }

    if(!password){
        errors.password = "Password is required.";
    }
    else{
        errors.password = "";
    }

    if (Object.values(errors).some(Boolean)) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            token: null,
            user: null
        });
    }
    next();
};