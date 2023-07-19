package runnerfiles;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions (features = "src/test/resources/features",
					glue="com.tokopedia",
					plugin = {"pretty",
							"html:target/tokopedia-reports/cucumber-tiketka.html",
							"json:target/tokopedia-reports/tiketka.json"
							})

public class RunnerFiles extends AbstractTestNGCucumberTests {

}
