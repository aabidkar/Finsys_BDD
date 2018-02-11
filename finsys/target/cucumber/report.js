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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027l-btn-icon icon-save\u0027]\"}\n  (Session info: chrome\u003d64.0.3282.140)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 18 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027manishs-PC\u0027, ip: \u0027192.168.151.179\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\amitb\\AppData\\Local\\Temp\\scoped_dir5796_20725}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.140, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8fc72adf9e2b3f81e33caa320dce5055\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027l-btn-icon icon-save\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat ejagruti.finsys.modules.createCompany.user_clicks_on_New_company_link(createCompany.java:31)\r\n\tat ✽.user clicks on New company link(src/test/resources/FeatureCollections/CreateCompany.feature:19)\r\n",
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