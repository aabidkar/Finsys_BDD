package ejagruti.finsys.modules;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ejagruti.finsys.pageobjects.baseclass;
import ejagruti.finsys.pageobjects.createComapnyPage;
import ejagruti.finsys.pageobjects.homepage;
import ejagruti.finsys.pageobjects.loginpage;

public class createCompany {
	homepage homepageobj = null;
	loginpage loginpageobj = null;
	createComapnyPage createComapnyPageobj = null;
	

	@Then("^user click on login button$")
	public void LoginClick() {
}
	
	@And("^user gets the message starting with \"(.*)\" on the top browser$")
	public void CheckForHomePage(String message) {
		baseclass.wait.until(ExpectedConditions.textToBePresentInElement(homepageobj.logout, "LOGOUT"));
		String welcomemsg = homepageobj.welcomemessage.getText();
		System.out.println(welcomemsg + " --------------------");
	}

	@When("^When user is clicks on Manage Company link from Financial Analysis breadcrumb$")
	public void ManageCompanyLink() {
		createComapnyPageobj.manageCompany.click();

	}


}
