Feature: Create company 
#This is how background can be used to eliminate duplicate steps 

Background: 
  Given I have already opened "Firefox" browser
  And   I Enter the Finsys Application URL "http://localhost:90/finsys"
  Then  I should see home page of finsys application
  
  When  I enter username as "dummyfm" and password as "passw0rd"
  And   I click on Login button
  
#Create company using all valid details
Scenario: 
   When I enter company name as "ICRE"
   And  I select company type as "IT"
   And  I select company subtype as "Development"
   And  I enter address as "Kolhapur"
   And  I enter phone number as "9404986858"
   And  I enter email as "vikrambugade@yahoo.com"
   And  I enter pan details as "ABCDE1234F"
   And  I enter tin details as "abcdefghij"
   And  I enter mobile as "9404986858"
   And  I enter website as "www.ejagruti.com"
   And  I select country as "INDIA"
   And  I select state as "MAHARASHTRA"
   And  I select city as "KOLHAPUR"
   And  I enter total employee as "50"
   And  I click on Save button
   Then I should see saved company name "ICRE" in the first row of table 

#Create company using duplicate company name and valid details 
Scenario:
   When I click on manage company 
   And  I click on New button 
   And  I enter company name as "ICRE"
   And  I select company type as "Marketing"
   And  I select company subtype as "Service"
   And  I enter address as "pune"
   And  I enter phone number as "7038509090"
   And  I enter email as "vikram_bugade@yahoo.com"
   And  I enter pan details as "PQRST1234F"
   And  I enter tin details as "MNOPQRTSU"
   And  I enter mobile as "9404986858"
   And  I enter website as "www.ICRE.com"
   And  I select country as "INDIA"
   And  I select state as "MAHARASHTRA"
   And  I select city as "PUNE"
   And  I enter total employee as "100"
   And  I click on Save button
   Then I should see error message as "Company Already Exists.Please Select different Company Name!!!"
  
   #Create company using all invalid details 
Scenario: 
   When I click on manage company 
   And  I click on New button
   And  I enter company name as "X"
   And  I select company type as "Select company type"
   And  I enter address as "p"
   And  I enter phone number as "7038"
   And  I enter email as "v"
   And  I enter pan details as "P"
   And  I enter tin details as "M"
   And  I enter mobile as "9"
   And  I enter website as "w"
   And  I select country as "select country"
   And  I select state as "select state"
   And  I select city as "select state"
   And  I enter total employee as "10000000"
   And  I click on Save button 
   Then I should see error message as "Please Select Company Type!!!"