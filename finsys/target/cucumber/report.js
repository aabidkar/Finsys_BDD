$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/CreateCompany.feature");
formatter.feature({
  "name": "Create Compnay Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "user is successfully logged in \u0026 should able to create company",
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
  "name": "user enter the url \"localhost:90/finsys/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.LaunchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_is_on_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Dummyfm\" as username",
  "keyword": "And "
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
formatter.scenario({
  "name": "Create Company with all valid inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is clicks on Manage Company link from Financial Analysis breadcrumb",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.managecompnayclick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New company link",
  "keyword": "When "
});
