package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage extends BasePage {
    private final By usernameInput = By.xpath("//input[@id='username' or @name='username' or @type='email']");
    private final By passwordInput = By.xpath("//input[@id='password' or @name='pw' or @type='password']");
    private final By loginButton = By.xpath("//input[@id='Login' or @name='Login' or @type='submit']");
    private final By errorMessage = By.xpath("//div[contains(@class,'error') or @id='error' or @id='errorDiv'] | //div[contains(@class,'error') and contains(.,'Please')] | //div[@id='error']");

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public void open(String url) {
        driver.get(url);
    }

    public void login(String username, String password) {
        waitForElementVisible(usernameInput);
        WebElement usernameElement = driver.findElement(usernameInput);
        usernameElement.clear();
        usernameElement.sendKeys(username);

        WebElement passwordElement = driver.findElement(passwordInput);
        passwordElement.clear();
        passwordElement.sendKeys(password);

        driver.findElement(loginButton).click();
    }

    public boolean isUsernameDisplayed() {
        return driver.findElement(usernameInput).isDisplayed();
    }

    public boolean isPasswordDisplayed() {
        return driver.findElement(passwordInput).isDisplayed();
    }

    public boolean isErrorDisplayed() {
        try {
            waitForElementVisible(errorMessage);
            return !driver.findElements(errorMessage).isEmpty();
        } catch (TimeoutException e) {
            return false;
        }
    }

    public String getErrorText() {
        return driver.findElement(errorMessage).getText().trim();
    }

    public boolean isLoginSuccessful(String expectedUrlFragment) {
        return driver.getCurrentUrl().contains(expectedUrlFragment);
    }
}
