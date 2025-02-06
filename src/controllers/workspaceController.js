import {createWorkspaceService} from '../services/workspaceService.js';
// import {customErrorResponse} from '../utils/response.js';
export const createWorkspaceController = async (req,res) => {
    try {

        const response=await createWorkspaceService ({
            ...req.body,
            owner:req.user
        })

        return res.status(201).json(response);
        
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}