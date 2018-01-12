package org.ej.finsys.features.codebehind;

import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(format = {"pretty", "html:target/html"},
features = {"FeatureCollections"}
	) 
public class runTest {

}



Seleium grid