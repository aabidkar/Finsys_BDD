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
  "name": "user is clicks on Manage Company link from Financial Analysis breadcrumb",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.managecompnayclick(String)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027ejagruti.finsys.modules.createCompany.managecompnayclick(String) in file:/C:/WorkSpace/Finsys_BDD/finsys/target/test-classes/\u0027 with pattern [^user is clicks on Manage Company link from Financial Analysis breadcrumb$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep text: user is clicks on Manage Company link from Financial Analysis breadcrumb\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:111)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:66)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on New company link",
  "keyword": "When "
});
formatter.match({
  "location": "createCompany.user_clicks_on_New_company_link()"
});
formatter.result({
  "status": "skipped"
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