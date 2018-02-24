#StyoryType=WEB
#Owner=ejagruti
#CreationDate=24-12-2017 Sunday
@Login 
Feature: Login Feature 

Background: user is successfully logged in 
	When user opens the "Chrome" browser 
	And user enter the url "http://localhost/finsys/login.html" 
	
@EnToEnd 
Scenario: Login Functionality for valid username and password 
	Given user is on the application login page 
	And user enters "dummyfm" as username 
	And user enters "passw0rd" as password 
	And user clicks on login button 
	Then user is on the application home page 
	And user gets the message starting with "Welcome" on the top 
	Then close the browser 
	
@EndToEnd 
Scenario: Login Functionality for valid username and invalid password 
	Given user is on the application login page 
	When user enters "dummyfm" as username 
	When user enters "Password" as password 
	And user clicks on login button 
	Then user is on the same login page 
	And user gets the message starting with "Please Enter Valid Username or Password!!!" on the bottom 
	Then close the browser 
	
@EndToEnd 
Scenario: Login Functionality for invalid username and valid password 
	Given user is on the application login page 
	When user enters "dummm" as username 
	When user enters "Password" as password 
	And user clicks on login button 
	Then user is on the same login page 
	And user gets the message starting with "Please Enter Valid Username or Password!!!" on the bottom 
	Then close the browser 
	
@EndToEnd 
Scenario: Login Functionality for blank username and  password 
	Given user is on the application login page 
	And user clicks on login button 
	Then user is on the same login page 
	And user gets the message starting with "Please Enter Valid Username or Password!!!" on the bottom 
	Then close the browser 
	
@EndToEnd 
Scenario: 
	Login Functionality by passing special characters in username and invalid password 
	Given user is on the application login page 
	When user enters "@#%$@$#54325" as username 
	When user enters "test" as password 
	And user clicks on login button 
	Then user is on the same login page 
	And user gets the message starting with "Please Enter Valid Username or Password!!!" on the bottom 
	Then close the browser