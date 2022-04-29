import { Access } from './access-enum';
import { MessageStatus } from './message-status-enum';

export class Message {
    public constructor(
        public id: string,
        public title: string,
        public content: string,
        public status: MessageStatus,
        public access: Access,
        public createdOn: Date) {
    }
}
