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
  "name": "user enter the url \"http://localhost/finsys/login.html\"",
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
<<<<<<< HEAD
formatter.step({
  "name": "user is on the application home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user gets the message starting with \"Welcome\" on the top",
  "keyword": "And "
});
formatter.match({
  "location": "login.CheckForHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "login.close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
=======
>>>>>>> d7730519b3cc6fcb38a4b6708fd9c2980f81a8ce
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
formatter.match({
  "location": "createCompany.user_clicks_on_New_company_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Finsys BDD\" as company name",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.compnayname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"IT\" as company type",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_company_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"amitb@iprogrammer.com\" as email id",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_enters_as_email_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"pandetails\" as PAN details",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_enters_as_PAN_details(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user enter the url \"http://localhost/finsys/login.html\"",
  "keyword": "And "
=======
  "name": "user enters \"tandetails\" as TIN details",
  "keyword": "When "
>>>>>>> d7730519b3cc6fcb38a4b6708fd9c2980f81a8ce
});
formatter.match({
  "location": "createCompany.user_enters_as_TIN_details(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"INDIA\" as Country",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_Country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"MAHARASHTRA\" as State",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_State(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"PUNE\" as City",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_selects_as_City(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SAVE button",
  "keyword": "And "
});
formatter.match({
  "location": "createCompany.user_clicks_on_SAVE_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Finsys BDD\" company is added succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "createCompany.companyadded(String)"
});
formatter.result({
  "status": "passed"
});
});