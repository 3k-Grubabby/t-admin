export const logged = (username,password)=>{
    return {
        type:'SIGN_IN',
        username:username,
        password:password
    }
}