package ejagruti.finsys.modules;

import cucumber.api.java.en.When;
import ejagruti.finsys.pageobjects.createComapnyPage;
import ejagruti.finsys.pageobjects.homepage;
import ejagruti.finsys.pageobjects.loginpage;

public class createCompany {
	homepage homepageobj = null;
	loginpage loginpageobj = null;
	createComapnyPage createComapnyPageobj = null;

	@When("^user is clicks on Manage Company link from Financial Analysis breadcrumb$")
	public void clickLink(String BrowserName) {
		System.out.println("Test");
	}

}