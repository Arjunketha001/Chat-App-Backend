import { StatusCodes } from "http-status-codes";

import { getMessageService } from "../services/messageService"
import { successResponse } from "../utils/common/responseObjects";


export const getMessages = async (req, res) => {
    try {

        if (!req.params.channelId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "ChannelId and WorkSpaceId are required" });
        }
        const messages = await getMessageService(
            {channelId:req.params.channelId,
                // workSpaceId:req.params.workSpaceId
        },req.query.page || 1, req.query.limit || 20,
        req.user
    );

        return res.status(StatusCodes.OK).json(successResponse("Messages fetched successfully", messages));

    } catch (error) {
        if (error.StatusCodes){
            return res.status(error.StatusCodes).json(error);
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}