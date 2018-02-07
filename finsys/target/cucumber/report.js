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
  "name": "user enter the url \"http://localhost:90/finsys/login.html\"",
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
      "name": "@CreateComapny"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user clicks on New company link",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_clicks_on_New_company_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id actionid\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027manishs-PC\u0027, ip: \u0027192.168.151.179\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:997)\r\n\tat ejagruti.finsys.modules.createCompany.user_clicks_on_New_company_link(createCompany.java:26)\r\n\tat ✽.user clicks on New company link(src/test/resources/FeatureCollections/CreateCompany.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters \"Finsys BDD\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.EnterUserName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"IT\" as company type",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_company_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"amitb@iprogrammer.com\" as email id",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_enters_as_email_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"pandetails\" as PAN details",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_enters_as_PAN_details(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"tandetails\" as TIN details",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_enters_as_TIN_details(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"INDIA\" as Country",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_Country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"MAHARASHTRA\" as State",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_State(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"PUNE\" as City",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on SAVE button",
  "keyword": "And "
});
formatter.match({
  "location": "createCompany.user_clicks_on_SAVE_button()"
});
formatter.result({
  "status": "skipped"
});
});