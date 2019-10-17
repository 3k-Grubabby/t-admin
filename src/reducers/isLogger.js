const loggerReducer = (state=false,action)=>{
    if(action.username=='wang' && action.password=='123' && action.type=='SIGN_IN'){
        return true;
    }else{
        return false;
    }
}
export default loggerReducer