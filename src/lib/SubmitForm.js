import { authClient } from "./auth-client";

async function SubmitForm(formData){
   let {data,error} = await authClient.signUp.email({
    name: formData.fullName,
    email: formData.email,
    password: formData.password,
    
   })
   console.log(data, error, formData);
   
}

export default SubmitForm;