export const validateRegister = (req, res, next) => {
    const {
        fullName,
        email,
        mobile,
        password,
        confirmPassword
    } = req.body;
    const errors = {};

    if (!fullName?.trim()) {
        errors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/.test(fullName)) {
        errors.fullName = "Please enter a valid full name.";
    }

    if (!email?.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!mobile?.trim()) {
        errors.mobile = "Mobile number is required.";
    } else if (!/^(\+880|880|0)1[3-9]\d{8}$/.test(mobile)) {
        errors.mobile = "Please enter a valid mobile number.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/.test(password)) {
        errors.password ="Password must contain uppercase, lowercase, number, special character and be at least 8 characters.";
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }
    next();
};