package ejagruti.finsys.modules;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ejagruti.finsys.pageobjects.baseclass;
import ejagruti.finsys.pageobjects.createComapnyPage;
import ejagruti.finsys.pageobjects.homepage;

public class createCompany {
	homepage homepageobj = new homepage(baseclass.driver);
	// loginpage loginpageobj = new loginpage(baseclass.driver);
	createComapnyPage createComapnyPageobj = new createComapnyPage(baseclass.driver);

	@When("^user is clicks on Manage Company link from Financial Analysis breadcrumb$")
	public void managecompnayclick() throws InterruptedException {
		Thread.sleep(1000);
		createComapnyPageobj.companyclick.click();
	}

	@When("^user clicks on New company link$")
	public void user_clicks_on_New_company_link() throws Exception {
		baseclass.driver.switchTo().frame(0);
		createComapnyPageobj.newButton.click();
	}

	@When("^user enter \"([^\"]*)\" as company name$")
	public void compnayname(String comapnyname) {
		createComapnyPageobj.companyName.sendKeys(comapnyname);
	}

	@When("^user selects \"([^\"]*)\" as company type$")
	public void user_selects_as_company_type(String companytype) throws Exception {
		Select companyType = new Select(baseclass.driver.findElement(By.id("companytype")));
		companyType.selectByVisibleText(companytype);
	}

	@When("^user enters \"([^\"]*)\" as email id$")
	public void user_enters_as_email_id(String emailid) throws Exception {
		createComapnyPageobj.email_id.sendKeys(emailid);
	}

	@When("^user enters \"([^\"]*)\" as PAN details$")
	public void user_enters_as_PAN_details(String pan) throws Exception {
		createComapnyPageobj.panDetails.sendKeys(pan);
	}

	@When("^user enters \"([^\"]*)\" as TIN details$")
	public void user_enters_as_TIN_details(String tin) throws Exception {
		createComapnyPageobj.tinDetails.sendKeys(tin);

	}

	@When("^user selects \"([^\"]*)\" as Country$")
	public void user_selects_as_Country(String countryname) throws Exception {
		Select country = new Select(baseclass.driver.findElement(By.id("countryid")));
		country.selectByVisibleText(countryname);
	}

	@When("^user selects \"([^\"]*)\" as State$")
	public void user_selects_as_State(String statename) throws Exception {
		Select state = new Select(baseclass.driver.findElement(By.id("stateidlist")));
		state.selectByVisibleText(statename);
	}

	@When("^user selects \"([^\"]*)\" as City$")
	public void user_selects_as_City(String cityname) throws Exception {
		Select city = new Select(baseclass.driver.findElement(By.xpath("//select[@name='city']")));
		city.selectByVisibleText(cityname);
	}

	@When("^user clicks on SAVE button$")
	public void user_clicks_on_SAVE_button() throws Exception {
		createComapnyPageobj.save.click();
	}
	
	@Then("^verify \"([^\"]*)\" company is added succesfully$")
	public void companyadded(String compnayname){
		createComapnyPageobj.reload.click();
		String val = baseclass.driver.findElement(By.xpath("//tr[@id='datagrid-row-r1-2-0']/td[@field='name']")).getText();
		String temp = val.replace("\n", "");
		if (temp.equalsIgnoreCase(compnayname)) {
			System.out.println(temp + " Company is added [PASS].");
		} else {
			System.out.println("Invalid Company  " + val + "[FAIL]");
		}
		
		
	}

}