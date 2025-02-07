import workspaceRepository from "../repositories/workspaceRepository.js";
import { isUserMemberOfWorkspace } from "./workspaceService.js";


export const isMemeberParofWorkspaceService = async (workspaceId, memberId) => {
    const workspace = await workspaceRepository.getById(workspaceId);
    if (!workspace) {
      throw new Error("Workspace not found");
    }
    const isUserMember = isUserMemberOfWorkspace(workspace, memberId);
  
    if (!isUserMember) {
      throw new Error("User is not a member of the workspace");
    }  
    return workspaceRepository.getById(memberId);
};