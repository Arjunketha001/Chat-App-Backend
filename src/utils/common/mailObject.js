import { MAIL_ID } from "../../config/serverConfig.js";



export const workspaceJoinMail= function(workspace,name){
    return {
        from:MAIL_ID,
        subject:"You have been added to a workspace",
        text:`HELLO ${name} !!! You have been added to the workspace ${workspace.name}`
  
    }
}