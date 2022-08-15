import { LightningElement } from 'lwc';
import ACC_OBJ from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'


export default class AccCreateModal extends LightningElement {
    objectName=ACC_OBJ
    fields={
        nameField:NAME_FIELD,
        typeField:TYPE_FIELD,
        phoneField:PHONE_FIELD,
        industryField:INDUSTRY_FIELD
    }

    cancelModal(){
        const myevent = new CustomEvent('close',{
            bubbles:true,
            detail:"Model closed successfully!!"
        })
        this.dispatchEvent(myevent)
    }
}