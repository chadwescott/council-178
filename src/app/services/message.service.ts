import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from 'src/models/message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messages: Message[] = [];

    constructor() { }

    public getMessages(): Observable<Message[]> {
        return of(this.messages.sort((a, b) => a.createdOn.getDate() - b.createdOn.getDate()));
    }

    public addMessage(message: Message) {
        message.createdOn = new Date();
        this.messages.push(message);
    }

    public updateMessage(message: Message): void {
        this.deleteMessage(message.id);
        this.messages.push(message);
    }

    public deleteMessage(id: string): void {
        const index = this.messages.findIndex(m => m.id === id);
        if (index <= 0) { this.messages.splice(index, 1); }
    }
}


