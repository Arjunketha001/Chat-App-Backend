import { JOIN_CHANNEL } from "../utils/common/eventConstants.js";


export default function messageHandlers(io, socket) {
    socket.on(JOIN_CHANNEL, async function joinChannelHandler(data, cb) {
      if (!data || !data.channelId) {
        return cb({
          success: false,
          message: "Invalid channel ID",
        });
      }
      const roomId = data.channelId;
      socket.join(roomId);
      console.log("User joined channel", roomId, socket.id);
  
      cb({
        success: true,
        message: "Joined channel successfully",
        data: roomId,
      });
    });
  }
  