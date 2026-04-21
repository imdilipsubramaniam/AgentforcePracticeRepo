import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';
export default class CommunityHome extends LightningElement {
    connectedCallback() {
        console.log('community Home Connected CallBack');
        console.log('current user Id', Id);
        const selectedEvent = new CustomEvent('Current_User_Id', {
            detail: { id: Id },
            bubbles: true,
            composed: true
        });
        window.dispatchEvent(selectedEvent);
    }
}
