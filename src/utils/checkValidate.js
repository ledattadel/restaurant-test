var specialChars = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';
var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const checkValidate = {
    checkForSpecialChar: (string) => {
        for (let i = 0; i < specialChars.length; i++) {
            if (string.indexOf(specialChars[i]) > -1) {
                return true;
            }
        }
        return false;
    },
    checkEmail: (string) => {
        if (email.test(string)) {
            return true;
        }
        return false;
    },
};

export default checkValidate;
