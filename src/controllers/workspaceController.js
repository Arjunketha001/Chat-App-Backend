import { StatusCodes } from 'http-status-codes';
import {createWorkspaceService, deleteWorkspaceService, getWorkspacesUserIsMemberOfService} from '../services/workspaceService.js';
import { internalErrorResponse, successResponse } from '../utils/common/responseObjects.js';
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



export const getWorkspacesUserIsMemberOfController = async (req, res) => {
    try {
      const response = await getWorkspacesUserIsMemberOfService(req.user);
      return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'Workspaces fetched successfully'));
    } catch (error) {
      console.log(error);
      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
  
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };
  
  export const deleteWorkspaceController = async (req, res) => {
    try {
      const response = await deleteWorkspaceService(
        req.params.workspaceId,
        req.user
      );
      return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'Workspace deleted successfully'));
    } catch (error) {
      console.log(error);
      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
  
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };