$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/CreateCompany.feature");
formatter.feature({
  "name": "Create Compnay Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateComapny"
    }
  ]
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
  "name": "user enter the url \"http://localhost:/finsys/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "login.LaunchApplication(String)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat ejagruti.finsys.modules.login.EnterUserName(login.java:52)\r\n\tat ✽.user enters \"dummyfm\" as username(src/test/resources/FeatureCollections/CreateCompany.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters \"passw0rd\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "login.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.LoginButtonClick()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets the message starting with \"Welcome\" on the top browser",
  "keyword": "And "
});
formatter.match({
  "location": "createCompany.CheckForHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Create Company with all valid inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateComapny"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@CreateComapny"
    }
  ]
});
formatter.step({
  "name": "user is clicks on Manage Company link from Financial Analysis breadcrumb",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});