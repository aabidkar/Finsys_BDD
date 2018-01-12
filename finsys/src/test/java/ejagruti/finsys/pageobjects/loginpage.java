package ejagruti.finsys.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class loginpage {

	WebDriver localdriverobject;

	public loginpage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.localdriverobject = driver;
		System.out.println("INSIDE CONSTRUCTOR$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	}

	@FindBy(how = How.XPATH, using = "//input[@placeholder='Username']")
	public WebElement username;
	@FindBy(how = How.XPATH, using = "//input[@placeholder='Password']")
	public WebElement password;
	@FindBy(how = How.XPATH, using = "//span[.='Login']")
	public WebElement loginbutton;
	@FindBy(how=How.ID, using="error")
	public static WebElement textAlert;
	

}
