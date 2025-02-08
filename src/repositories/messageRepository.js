import Message from '../schema/message.js';
import crudRepository from './crudRepository.js';


export const messageRepository = {
    ...crudRepository(Message),
    // messageParams is an object that which we use to find corresponding messages
    getPaginatedMessages: async function (messageParams, page, limit) {
        const messages = await Message.find(messageParams)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('senderId','username email avatar');
        return messages;
    }
}