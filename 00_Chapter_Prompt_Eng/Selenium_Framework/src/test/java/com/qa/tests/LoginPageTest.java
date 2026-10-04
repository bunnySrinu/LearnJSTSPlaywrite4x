package com.qa.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginPageTest extends BaseTest {
    private static final String SALESFORCE_LOGIN_URL = "https://login.salesforce.com/?locale=in";
    private static final String INVALID_USERNAME = "invalid@example.com";
    private static final String INVALID_PASSWORD = "invalidPassword123";

    @Test
    public void shouldDisplayErrorForInvalidCredentials() {
        loginPage.open(SALESFORCE_LOGIN_URL);
        loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);

        Assert.assertTrue(loginPage.isErrorDisplayed(), "Expected an error for invalid credentials.");
    }

    @Test
    public void shouldDisplayValidationForEmptyCredentials() {
        loginPage.open(SALESFORCE_LOGIN_URL);
        loginPage.login("", "");

        Assert.assertTrue(loginPage.isErrorDisplayed() || !loginPage.isUsernameDisplayed() || !loginPage.isPasswordDisplayed(),
                "Expected validation for empty username and password.");
    }

    @Test
    public void shouldLoginSuccessfullyWithValidCredentials() {
        String username = System.getProperty("salesforce.username");
        String password = System.getProperty("salesforce.password");

        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new RuntimeException("Set -Dsalesforce.username and -Dsalesforce.password before running the valid login test.");
        }

        loginPage.open(SALESFORCE_LOGIN_URL);
        loginPage.login(username, password);

        Assert.assertTrue(driver.getCurrentUrl().contains("lightning") || driver.getCurrentUrl().contains("home"),
                "Expected successful login redirect after valid authentication.");
    }
}
