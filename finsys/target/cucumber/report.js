$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "user is successfully logged in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the \"Chrome\" browser",
  "keyword": "When "
});
formatter.match({
  "location": "login.OpenBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the url \"http://localhost/finsys/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.LaunchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality for valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@EnToEnd"
    }
  ]
});
formatter.step({
  "name": "user is on the application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.LoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"dummyfm\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.EnterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"passw0rd\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.EnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.LoginButtonClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the application home page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the message starting with \"Welcome\" on the top",
  "keyword": "And "
});
formatter.match({
  "location": "login.CheckForHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user is successfully logged in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the \"Chrome\" browser",
  "keyword": "When "
});
formatter.match({
  "location": "login.OpenBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the url \"http://localhost/finsys/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.LaunchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "name": "user is on the application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.LoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"dummyfm\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.EnterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Password\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.EnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.LoginButtonClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the same login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the message starting with \"Please Enter Valid Username or Password!!!\" on the bottom",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_gets_the_message_starting_with_on_the_bottom(String)"
});
formatter.result({
  "status": "passed"
});
});