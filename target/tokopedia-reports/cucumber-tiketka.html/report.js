$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tiketka.feature");
formatter.feature({
  "name": "Tiket Kereta Api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can Access Tokopedia Tiket Kereta Api",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tokopedia tiket kereta api will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.tokopedia_tiket_kereta_api_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can select option for field Asal",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Asal",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Asal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option bandung",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_bandung()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "option will be selected as Asal \"bandung (bd)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.option_will_be_selected_as_Asal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can search option for field Asal",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Asal",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Asal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input on field Asal \"bandung\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.input_on_field_Asal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Option will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.option_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure error message will be displayed when input invalid value at field Asal",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Asal",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Asal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input on field Asal \"malaysia\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.input_on_field_Asal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message will be displayed \"Nggak ada hasil yang cocok\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.error_message_will_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can search option for field Tujuan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Tujuan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input on field Tujuan \"jakarta\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.input_on_field_Tujuan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Option will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.option_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can select option for field Tujuan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Tujuan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll down page 20",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.scroll_down_page(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option tujuan gambir",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_tujuan_gambir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "option will be selected as Tujuan \"gambir (gmr)\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "To ensure error message will be displayed when input invalid value at field Tujuan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Tujuan",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Tujuan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input on field Tujuan \"malaysia\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.input_on_field_Tujuan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message tujuan will be displayed \"Nggak ada hasil yang cocok\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.error_message_tujuan_will_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can swap location between field Asal and Field Tujuan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Asal",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Asal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option bandung",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_bandung()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Tujuan",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Tujuan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll down page 20",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.scroll_down_page(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option tujuan gambir",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_tujuan_gambir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on button swap",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_button_swap()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "option will be selected as Asal Tujuan \"gambir (gmr)\" \"bandung (bd)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.option_will_be_selected_as_Tujuan(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure error message will be displayed when field Asal \u0026 Tujuan have a same value",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Asal",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Asal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option bandung",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_bandung()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Tujuan",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Tujuan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll down page 20",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.scroll_down_page(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option tujuan bandung",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_option_tujuan_bandung()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error text will be displayed \"Stasiun keberangkatan dan tujuan tidak boleh sama.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.error_text_will_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To ensure can select date on field Berangkat",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User access page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.user_access_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on field Berangkat",
  "keyword": "When "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.click_on_field_Berangkat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select date \"20230720\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.select_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Date Berangkat is \"20 jul 2023\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tokopedia.tiketKA.date_Berangkat_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});