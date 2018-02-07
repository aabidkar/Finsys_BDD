package ejagruti.finsys.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class createComapnyPage {
	WebDriver localdriverobject;
	

	public createComapnyPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.localdriverobject = driver;
		System.out.println("INSIDE CONSTRUCTOR$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	}

	@FindBy(how = How.XPATH, using = "//a[@title='Manage Company']")
	public WebElement manageCompany;
	@FindBy(how = How.XPATH, using = "//span[@class='l-btn-icon icon-add']")
	public WebElement newButton;
	@FindBy(how = How.XPATH, using = "//input[@name='name']")
	public WebElement companyName;
	@FindBy(how = How.ID, using = "companytype")
	public static WebElement companyType;
	@FindBy(how = How.XPATH, using = "//input[@name='email']")
	public WebElement email_id;
	@FindBy(how = How.XPATH, using = "//input[@name='pan']")
	public WebElement panDetails;
	@FindBy(how = How.XPATH, using = "//input[@name='tin']")
	public WebElement tinDetails;
	@FindBy(how = How.ID, using = "countryid")
	public static WebElement country;
	@FindBy(how = How.ID, using = "stateid")
	public static WebElement state;
	@FindBy(how = How.ID, using = "cityid")
	public static WebElement city;
	@FindBy(how = How.XPATH, using = "//span[@class='l-btn-icon icon-save']")
	public WebElement save;

}
