import { ContactModel, MessageModel } from ".";

export default class ChatModel {
    contact: ContactModel;
    messages: MessageModel[];
    lastMessage: MessageModel;
    lastTime: string;
    isOnline: boolean;

    constructor() {
        this.contact = new ContactModel;
        this.messages = [];
        this.lastMessage = new MessageModel;
        this.lastTime = "";
        this.isOnline = false;
    }
}