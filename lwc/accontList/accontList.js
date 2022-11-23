import { LightningElement,wire, track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 
import {showToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJ from '@salesforce/schema/Account'
import getAccounts from '@salesforce/apex/AccountDetails.getAccList'


const columns =[
    // { label: 'Id', fieldName: 'Id' ,visible:true, searchble:true},
    {label:'Account Name', fieldName:'Name', type:'text'},
    {label:'Phone', fieldName:'Phone', type:'Phone'},
    {label:'Type', fieldName:'Type', type:'text'},
    {label:'Industry', fieldName:'Industry', type:'text'},
    {type:"button", typeAttributes:{
        label:'Edit',
        name:'Edit',
        title:'Edit',
        disabled: false,
        value:'edit',
        iconPosition:'center'
    }},
    {type:"button", typeAttributes:{
        label:'View',
        name:'View',
        title:'View',
        disabled: false,
        value:'view',
        iconPosition:'center'
    }}
]

export default class AccontList extends NavigationMixin(LightningElement) {

    data=ACCOUNT_OBJ
    columns=columns;

    @wire(getAccounts)accounts;
     
    @track openModal = false;
    addAccHandler() {
        this.openModal = true;
    }
    closeHandler(){
        this.openModal = false;
        const toastEvent=new showToastEvent({
            title:"Account created",
            message:"Successfully created",
            variant:"succcess"
        })
        this.dispatchEvent(toastEvent)
    }
    
    callRowAction( event ) {  
          
        const recId =  event.detail.row.Id;  
        const actionName = event.detail.action.name;  
        if ( actionName === 'Edit' ) {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'edit' 
                }  
            })  
  
        } else if ( actionName === 'View') {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'view'  
                }  
            })  
  
        }          
  
    }  
  
}