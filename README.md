# Tax-Calculator

## Overview
The Tax Calculator is a web application designed to help individuals estimate their income tax liability based on various financial parameters. Whether you're a salaried employee, self-employed professional, or a freelancer, this tool provides a quick and convenient way to calculate your taxes.

## Features

1.**User-friendly Interface**: Clean and intuitive design for seamless user interaction.  
2.**Input Validation**: Built-in validation to ensure accurate data entry.  
3.**Dynamic Tooltip**: Informational tooltips provide guidance on each input field.  
4.**Responsive Design**: Optimized for desktop and mobile devices for accessibility.  
5.**Real-time Results**: Instantaneous calculation and display of tax amounts.

## Technologies Used

1.**HTML**: Markup language for structuring the web page.  
2.**CSS**: Stylesheet language for styling the user interface.  
3.**JavaScript**: Programming language for interactive functionality.  
4.**Bootstrap**: Front-end framework for responsive design components.  

## How to Use

1.**Clone the Repository**: Clone this repository to your local machine using Git.
git clone https://github.com/abhi8281/tax-calculator.git

2.**Open the Application**: Navigate to the project directory and open the index.html file in your preferred web browser.

3.**Enter Your Details**: Fill in the required information, including gross annual income, extra income, age group, and deductions.

4.**Submit Calculation**: Click the "Submit" button to initiate the tax calculation process.

5.**View Results**: The calculated tax amount will be displayed in a modal window for your reference.


## Screenshots

## Test Case 1: Calculating Tax with High Gross Income

Input:  
Gross Annual Income: ₹40,00,000  
Extra Income: ₹0  
Age Group: Under 40 (Age 30)  
Deductions: ₹0  

<img width="959" alt="1" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/99e32da0-195c-4ba5-94e4-116199a1fc6a">

<img width="958" alt="2" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/2d671412-86b0-44c3-80db-017d94c896b6">

## Calculation Steps:

### Calculate the total income:
Total Income = Gross Annual Income + Extra Income - Deductions  
Total Income = ₹40,00,000 + ₹0 - ₹0  
Total Income = ₹40,00,000  

### Calculate the taxable income:
Taxable Income = Total Income - Taxable Threshold  
Taxable Income = ₹40,00,000 - ₹8,00,000  
Taxable Income = ₹32,00,000  

### Apply the tax rate based on the age group:
Tax = Taxable Income * Tax Rate  
Tax = ₹32,00,000 * 30%  
Tax = ₹9,60,000  

## Explanation:
1.With a gross annual income of ₹40,00,000 and no deductions, the total income is calculated to be ₹40,00,000.  
2.As the total income exceeds the taxable threshold, the taxable income is ₹32,00,000.  
3.Since the individual is under 40 years old, the tax rate of 30% is applied to the taxable income.  
4.The calculated tax amount is ₹9,60,000.  




## Test Case 2: Calculating Tax with Deductions

Input:  
Gross Annual Income: ₹500000  
Extra Income: ₹100000  
Age Group: Under 40 (Age 30)  
Deductions: ₹100000  
<img width="959" alt="3" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/b917406d-fad3-4488-a891-a69044106c35">

<img width="958" alt="4" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/f267eece-66e8-4516-b0e5-e461557c442c">


## Calculation Steps:

### Calculate the total income:
Total Income = Gross Annual Income + Extra Income - Deductions  
Total Income = ₹5,00,000 + ₹1,00,000 - ₹1,00,000  
Total Income = ₹5,00,000  

### Calculate the taxable income:
Since the total income is below the taxable threshold, no tax is applicable. However, we will proceed with the calculation for demonstration.  
Taxable Income = Total Income - Taxable Threshold  
Taxable Income = ₹5,00,000 - ₹8,00,000  
Taxable Income = ₹0  

### Apply the tax rate based on the age group:
As the taxable income is ₹0, no tax is applicable. However, for demonstration, we'll use the tax rate.  
Tax = Taxable Income * Tax Rate  
Tax = ₹0 * 30%  
Tax = ₹0  

## Explanation:
1.With a gross annual income of ₹5,00,000, extra income of ₹1,00,000, and deductions of ₹1,00,000, the total income remains ₹5,00,000.  
2.As the total income is below the taxable threshold of ₹8,00,000, no tax is applicable.  
3.However, for demonstration, we applied the tax rate of 30% to the taxable income, resulting in a tax amount of ₹0.  


## Test Case 3: Calculating Tax with Deductions

Input:  
Gross Annual Income: ₹50,00,000  
Extra Income: ₹100000  
Age Group: Between 40 and 60  
Deductions: ₹100000  
<img width="959" alt="5" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/d1e5fc71-3241-4f3b-ade7-7537999fcb16">

<img width="954" alt="6" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/3f77140d-d435-4789-a937-42f66ec601e9">

## Calculation Steps:

### Calculate the total income:
Total Income = Gross Annual Income + Extra Income - Deductions  
Total Income = ₹50,00,000 + ₹1,00,000 - ₹1,00,000  
Total Income = ₹50,00,000  

### Calculate the taxable income:
Taxable Income = Total Income - Taxable Threshold  
Taxable Income = ₹50,00,000 - ₹8,00,000  
Taxable Income = ₹42,00,000  

### Apply the tax rate based on the age group:
Tax = Taxable Income * Tax Rate  
Tax = ₹42,00,000 * 40%  
Tax = ₹16,80,000  

## Explanation:
1.With a gross annual income of ₹50,00,000, extra income of ₹1,00,000, and deductions of ₹1,00,000, the total income is ₹50,00,000.  
2.Since the total income exceeds the taxable threshold of ₹8,00,000, tax calculation is necessary.  
3.Deductions of ₹1,00,000 reduce the taxable income to ₹42,00,000.  
4.Applying the tax rate of 40% to the taxable income results in a tax liability of ₹16,80,000.  


## Test Case 4: Calculating Tax for Age Greater Than 60

Input:  
Gross Annual Income: ₹50,00,000  
Extra Income: ₹100000  
Age Group: Greater than 60  
Deductions: ₹100000  
<img width="959" alt="7" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/96cf3efa-6d51-442d-a58b-ea1fbbe9f82c">

<img width="959" alt="8" src="https://github.com/abhi8281/Tax-Calculator/assets/113692838/39e6134a-f142-4393-9a68-ef2df9a0eeb8">

## Calculation Steps:

### Calculate the total income:
Total Income = Gross Annual Income + Extra Income - Deductions  
Total Income = ₹50,00,000 + ₹1,00,000 - ₹1,00,000  
Total Income = ₹50,00,000  

### Calculate the taxable income:
Taxable Income = Total Income - Taxable Threshold  
Taxable Income = ₹50,00,000 - ₹8,00,000  
Taxable Income = ₹42,00,000  

### Apply the tax rate based on the age group:
Tax = Taxable Income * Tax Rate  
Tax = ₹42,00,000 * 10%  
Tax = ₹4,20,000  

## Explanation:
1.With a gross annual income of ₹50,00,000, extra income of ₹1,00,000, and deductions of ₹1,00,000, the total income is ₹50,00,000.  
2.Since the total income exceeds the taxable threshold of ₹8,00,000, tax calculation is necessary.  
3.Deductions of ₹1,00,000 reduce the taxable income to ₹42,00,000.  
4.Applying the tax rate of 10% to the taxable income results in a tax liability of ₹4,20,000.  



## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or submit a pull request.
