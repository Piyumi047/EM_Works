public with sharing class AccountDetails{

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        try {
            List<Account> acclist = [SELECT Name,Phone,Type,Industry FROM Account order by LastModifiedDate DESC];
            return acclist;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}
