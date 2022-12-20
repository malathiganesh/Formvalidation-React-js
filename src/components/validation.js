export const usernameValidator = username =>{
    const nameRegex=/^[A-Za-z0-9_\s]+$/;
    return nameRegex.test(username)
}

export const emailValidator = email =>{
    const emailRegex=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
    return emailRegex.test(email)
}

export const passwordValidator = password =>{
    const passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}