export default class MessageModel {
    type: "text" | "picture" | "video" | "document" | "audio";
    content: any;
    status: "read" | "unread" | "delibered" | "pending";
    sender: "me" | "contact";

    constructor() {
        this.type = "text";
        this.content = null;
        this.status = "unread";
        this.sender = "me";
    }
}