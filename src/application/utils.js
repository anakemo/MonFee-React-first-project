import decode from 'jwt-decode'


export const checkTokenValidity=(token)=>{
    const expirationDate=decode(token).exp;
    console.log("epp" , expirationDate, token);
    const isExpired=expirationDate * 1000 < new Date().getTime();
    return isExpired
};

export const getUserInitials=(firstName,lastName)=>{
    if (!firstName || !lastName){
        return " NU";
    }
    const initials= `${firstName.charAt(0)}${lastName.charAt(0)}`
    return initials.toUpperCase();
}

export const isUserAdmin=(userInfo)=>{
return userInfo.role.includes("admin");
};
