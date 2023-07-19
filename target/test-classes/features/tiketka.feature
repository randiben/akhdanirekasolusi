Feature: Tiket Kereta Api

	Scenario: User can Access Tokopedia Tiket Kereta Api
	#TC1
		Given User access page
		Then Tokopedia tiket kereta api will be displayed
		
	Scenario: To ensure can select option for field Asal
	#TC2
		Given User access page
		When Click on field Asal
		And Click on option bandung
		Then option will be selected as Asal "bandung (bd)"
		
	Scenario: To ensure can search option for field Asal
	#TC3
		Given User access page
		When Click on field Asal
	  And Input on field Asal "bandung"
		Then Option will be displayed

		
	Scenario: To ensure error message will be displayed when input invalid value at field Asal
	#TC4
		Given User access page
		When Click on field Asal
		And Input on field Asal "malaysia"
		Then Error message will be displayed "Nggak ada hasil yang cocok" 

		
	Scenario: To ensure can search option for field Tujuan
	#TC5
		Given User access page
		When Click on field Tujuan
		And Input on field Tujuan "jakarta"
		Then Option will be displayed
		
	Scenario: To ensure can select option for field Tujuan
	#TC6
		Given User access page
		When Click on field Tujuan
		And Scroll down page 20
		And Click on option tujuan gambir
		Then option will be selected as Tujuan "gambir (gmr"
		
	Scenario: To ensure error message will be displayed when input invalid value at field Tujuan
	#TC7
		Given User access page
		When Click on field Tujuan
		And Input on field Tujuan "malaysia"
		Then Error message tujuan will be displayed "Nggak ada hasil yang cocok"

	Scenario: To ensure can swap location between field Asal and Field Tujuan
	#TC8
		Given User access page
		When Click on field Asal
		And Click on option bandung
		And Click on field Tujuan
		And Scroll down page 20
		And Click on option tujuan gambir
		And Click on button swap
		Then option will be selected as Asal Tujuan "gambir (gmr)" "bandung (bd)"

	Scenario: To ensure error message will be displayed when field Asal & Tujuan have a same value
	#TC9
		Given User access page
		When Click on field Asal
		And Click on option bandung
		And Click on field Tujuan
		And Scroll down page 20
		And Click on option tujuan bandung
		Then Error text will be displayed "Stasiun keberangkatan dan tujuan tidak boleh sama."
		
	Scenario: To ensure can select date on field Berangkat
	#TC10
		Given User access page
		When Click on field Berangkat
		And Select date "20230720"
		Then Date Berangkat is "20 jul 2023" 
		
	Scenario: Page navigated to Search Result tiket kereta api Page when all field is filled with valid value and click Cari Tiket button
	#TC18
		Given User access page
		When Click on field Asal
		And Click on option bandung
		And Click on field Tujuan
		And Scroll down page 20
		And Click on option tujuan gambir
		And Click on field Berangkat
		And Select date "20230720"
		And Click on Cari Tiket button
		Then Page is navigated to search result
		