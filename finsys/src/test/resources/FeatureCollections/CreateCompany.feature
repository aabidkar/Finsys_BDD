#StyoryType=WEB
#Owner=ejagruti
#CreationDate=24-12-2017 Sunday
@CreateComapny 
Feature: Create Compnay Feature 

Background: user is successfully logged in & should able to create company 
	When user opens the "Chrome" browser 
	And user enter the url "http://localhost:/finsys/login.html" 
	And user enters "Dummyfm" as username 
	And user enters "passw0rd" as password 
	And user clicks on login button 
	And user gets the message starting with "Welcome" on the top 
	
@SmokeTest @CreateComapny @SmokeTest 
Scenario: Create Company with all valid inputs 
	When user is clicks on Manage Company link from Financial Analysis breadcrumb 
	#When user clicks on New company link
	#When user enters "Finsys BDD" as username
	#When user selects "IT" as company type
	#When user enters "amitb@iprogrammer.com" as email id
	#When user 