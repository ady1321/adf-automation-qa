// spec.js

describe('ADF Demo App', function() {

	it('Login', function() {
		 browser.get('http://qaexercise.envalfresco.com/settings');
		 browser.driver.manage().window().maximize();
		 element(by.id('adf-provider-selector')).click();
		 element(by.id('mat-option-1')).click();
		 browser.sleep('5000');
		 element(by.id('host-button')).click();
		 browser.sleep('5000');
		 element(by.id('username')).sendKeys('guest@example.com');
		 element(by.id('password')).sendKeys('Password');
		 element(by.id('login-button')).click();
		 browser.sleep('5000');
		 browser.get('http://qaexercise.envalfresco.com/files');
		 browser.sleep('5000');
		 element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();
		 browser.sleep('5000');
		 element(by.id('adf-folder-name-input')).sendKeys('ady1321');
		 element(by.id('adf-folder-create-button')).click();
		 browser.sleep('5000');
		 element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();
		 browser.sleep('5000');
		 element(by.id('adf-folder-name-input')).sendKeys('ady1321');
		 element(by.id('adf-folder-create-button')).click();
		 browser.sleep('5000');
	        });
    it('should click on the cancel button', () => {
        // Disable wait for Angular
        browser.ignoreSynchronization = true;
        // Wait 2 seconds for the page to be loaded
        browser.sleep(2000)
        $('#adf-folder-cancel-button').click();
        // Wait to verify that the trade button has been clicked.
        browser.sleep(5000);
        element(by.xpath('//*[@id="action_menu_right_0"]/span/mat-icon')).click();
        browser.sleep(5000);
    	element(by.xpath('//button[@aria-label="Delete"]')).click();
        browser.sleep('5000');
    })
	 
});