import { LightningElement,wire, track} from 'lwc';
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import Name from '@salesforce/schema/Account.Name';
import getAccounts from '@salesforce/apex/AccountDetails.getAccList'


const columns =[
    {label:'Account Name', fieldName:'Name', type:'text'},
    {label:'Phone', fieldName:'Phone', type:'Phone'},
    {label:'Type', fieldName:'Type', type:'text'},
    {label:'Industry', fieldName:'Industry', type:'text'}
]

export default class AccontList extends LightningElement {

    data=ACCOUNT_OBJ
    columns=columns;

    @wire(getAccounts)accounts;
     
    @track openModal = false;
    addAccHandler() {
        this.openModal = true;
    }
    closeHandler(){
        this.openModal = false;
    }
    
}