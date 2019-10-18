const loggerReducer = (state=false,action)=>{
    if(action.type=='SIGN_IN' && action.isLogged ){
        return true;
    }else{
        return false;
    }
}
export default loggerReducer