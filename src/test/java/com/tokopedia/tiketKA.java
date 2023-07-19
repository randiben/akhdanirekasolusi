package com.tokopedia;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class tiketKA {

	WebDriver driver = null;
	String baseUrl = "https://tiket.tokopedia.com/kereta-api/";
	String actualResult, actualResult2, expectedResult;
	int y = 0;
	
	
	@Given("User access page")
	public void user_access_page() {
		WebDriverManager.chromedriver().setup();
		this.driver = new ChromeDriver();
		driver.navigate().to(this.baseUrl);
		driver.manage().window().maximize();
	}

	@Then("Tokopedia tiket kereta api will be displayed")
	public void tokopedia_tiket_kereta_api_will_be_displayed() {
		expectedResult = "Pesan tiket kereta online di Tokopedia";
//		header
		WebElement header = driver.findElement(By.className("css-1i82c75"));
		actualResult = header.getText();
		assertEquals(expectedResult.toLowerCase(), actualResult.toLowerCase());
//		field Lokasi
		driver.findElement(By.xpath("//input[@class=\"css-22hwsp\"][@data-testid=\"selectorAsal\"]")).isDisplayed();
		driver.findElement(By.xpath("//input[@class=\"css-22hwsp\"][@data-testid=\"selectorTujuan\"]")).isDisplayed();
		driver.findElement(By.className("css-1o0w0r")).isDisplayed();
//		field Date
		driver.findElement(By.xpath("//div[@class=\"css-22hwsp\"][@data-testid=\"selectorBerangkat\"]")).isDisplayed();
		driver.findElement(By.xpath("//div[@class='css-1bh52ki e3y1k2n0']")).isDisplayed();
//		field Penumpang
		driver.findElement(By.xpath("//div[@class=\"css-22hwsp\"][@data-testid=\"selectorJumlah Penumpang\"]")).isDisplayed();
		driver.findElement(By.xpath("//button[@class='button css-d41a3e-unf-btn eg8apji0']")).isDisplayed();
		driver.close();
	}

	@When("Click on field Asal")
	public void click_on_field_Asal() {
		driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorAsal']")).click();	
	}
	

	@When("Click on option bandung")
	public void click_on_option_bandung() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@class='css-128hibx'][@label='Bandung-Bandung-BD']")).click();
	}
	
	@When("Click on option tujuan bandung")
	public void click_on_option_tujuan_bandung() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@class='css-1q62ntx']//div[@class='css-128hibx'][@label='Bandung-Bandung-BD']")).click();
	}

	@Then("option will be selected as Asal {string}")
	public void option_will_be_selected_as_Asal(String asal) {
		actualResult = driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorAsal']")).getAttribute("value");
		assertEquals(asal, actualResult.toLowerCase());
		driver.close();
	}

	@When("Input on field Asal {string}")
	public void input_on_field_Asal(String asal) {
		driver.findElement(By.xpath("//input[@class='css-dlo3vd'][@data-testid='selectorAsal']")).sendKeys(asal);
	}

	@Then("Option will be displayed")
	public void option_will_be_displayed() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@class='css-128hibx']")).isDisplayed();
		driver.close();
	}

	@Then("Error message will be displayed {string}")
	public void error_message_will_be_displayed(String error) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		actualResult = driver.findElement(By.xpath("//div[@class='error-no-results']//div[@class='line-one']")).getText();
		assertEquals(error.toLowerCase(), actualResult.toLowerCase());		
		driver.close();
	}
	
	@Then("Error message tujuan will be displayed {string}")
	public void error_message_tujuan_will_be_displayed(String error) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		actualResult = driver.findElement(By.xpath("//div[@class='css-1q62ntx']//div[@class='error-no-results']//div[@class='line-one']")).getText();
		assertEquals(error.toLowerCase(), actualResult.toLowerCase());		
		driver.close();
	}
	
	@Then("Error text will be displayed {string}")
	public void error_text_will_be_displayed(String error) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		actualResult = driver.findElement(By.xpath("//div[@class='error-text']")).getText();
		assertEquals(error.toLowerCase(), actualResult.toLowerCase());		
		driver.close();
	}

	@When("Click on field Tujuan")
	public void click_on_field_Tujuan() {
		driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorTujuan']")).click();
	}

	@When("Input on field Tujuan {string}")
	public void input_on_field_Tujuan(String tujuan) {
		driver.findElement(By.xpath("//input[@class='css-dlo3vd'][@data-testid='selectorTujuan']")).sendKeys(tujuan);
	}
	
	@When("Click on option tujuan gambir")
	public void click_on_option_tujuan_gambir() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@class='css-1q62ntx']//div[@class='css-128hibx'][@label='Jakarta-Gambir-GMR']")).click();
	}
	
	@Then("option will be selected as Tujuan {string}")
	public void option_will_be_selected_as_Tujuan(String tujuan) {
		actualResult = driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorTujuan']")).getAttribute("value");
		assertEquals(tujuan, actualResult.toLowerCase());
		driver.close();
	}

	@Then("option will be selected as Asal Tujuan {string} {string}")
	public void option_will_be_selected_as_Asal_Tujuan(String asal, String tujuan) {
		actualResult = driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorAsal']")).getAttribute("value");
		assertEquals(asal, actualResult.toLowerCase());
		
		actualResult = driver.findElement(By.xpath("//input[@class='css-22hwsp'][@data-testid='selectorTujuan']")).getAttribute("value");
		assertEquals(tujuan, actualResult.toLowerCase());
		driver.close();
	}

	@When("Click on button swap")
	public void click_on_button_swap() {
		driver.findElement(By.className("css-1o0w0r")).click();
	}

	@When("Click on field Berangkat")
	public void click_on_field_Berangkat() {
		driver.findElement(By.xpath("//div[@class='css-22hwsp'][@data-testid='selectorBerangkat']")).click();
	}

	@When("Select date {string}")
	public void select_date(String date) {
		driver.findElement(By.xpath("//td[@data-testid='date"+date+"']")).click();
	}
	
	@When("Click on Cari Tiket button")
	public void click_on_cari_tiket_button() {
		driver.findElement(By.className("button css-d41a3e-unf-btn eg8apji0")).click();
	}
	
	@When("Scroll down page {int}")
	public void scroll_down_page(int x) throws InterruptedException  {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		for (int i = 0; i <= x; i++) {js.executeScript("window.scrollBy(0, " + i + ")");
		}
	}

	@Then("Date Berangkat is {string}")
	public void date_Berangkat_is(String date) {
		actualResult = driver.findElement(By.xpath("//div[@class='css-22hwsp'][@data-testid='selectorBerangkat']")).getText();
		assertEquals(date, actualResult.toLowerCase());
		driver.close();
	}
	
	@Then("Page is navigated to search result")
	public void page_is_navigated_to_search_result() {
		expectedResult = "Pilih tiket berangkat ";
		driver.findElement(By.className("css-lwa81l-unf-btn eg8apji0")).isDisplayed();
		actualResult = driver.findElement(By.className("result_title")).getText();
		assertEquals(expectedResult.toLowerCase(), actualResult.toLowerCase());
	}

	
}
