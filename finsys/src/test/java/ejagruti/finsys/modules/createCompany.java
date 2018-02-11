package ejagruti.finsys.modules;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ejagruti.finsys.pageobjects.baseclass;
import ejagruti.finsys.pageobjects.createComapnyPage;
import ejagruti.finsys.pageobjects.homepage;
import ejagruti.finsys.pageobjects.loginpage;

public class createCompany {
	homepage homepageobj = new homepage(baseclass.driver);
	loginpage loginpageobj = new loginpage(baseclass.driver);
	createComapnyPage createComapnyPageobj = new createComapnyPage(baseclass.driver);
	//homepageobj = new homepage(baseclass.driver);

	@When("^user is clicks on Manage Company link from Financial Analysis breadcrumb$")
	public void managecompnayclick() throws InterruptedException {
		//baseclass.driver.findElement(By.xpath("//a[@title='Manage Company']")).click();
		createComapnyPageobj.companyclick.click();
	}
	
	@When("^user clicks on New company link$")
	public void user_clicks_on_New_company_link() throws Exception {
		baseclass.driver.switchTo().frame("actionid");
		createComapnyPageobj.save.click();
	}

	@When("^user selects \"([^\"]*)\" as company type$")
	public void user_selects_as_company_type(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user enters \"([^\"]*)\" as email id$")
	public void user_enters_as_email_id(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user enters \"([^\"]*)\" as PAN details$")
	public void user_enters_as_PAN_details(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user enters \"([^\"]*)\" as TIN details$")
	public void user_enters_as_TIN_details(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user selects \"([^\"]*)\" as Country$")
	public void user_selects_as_Country(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user selects \"([^\"]*)\" as State$")
	public void user_selects_as_State(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user selects \"([^\"]*)\" as City$")
	public void user_selects_as_City(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user clicks on SAVE button$")
	public void user_clicks_on_SAVE_button() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

}