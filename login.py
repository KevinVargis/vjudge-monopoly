from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


usernameStr = 'TeamJ'
passwordStr = 'aad@123'

driverLocation = './chromedriver' #if windows
browser = webdriver.Chrome(driverLocation) 
browser.get(('https://vjudge.net/contest'))

time.sleep(4)
# fill in username and hit the next button

loginbutton = browser.find_element_by_xpath('//*[@id="navbarResponsive"]/ul/li[8]/a')
loginbutton.click()


time.sleep(2)
username = browser.find_element_by_xpath('//*[@id="login-username"]')
username.send_keys(usernameStr)

# nextButton = browser.find_element_by_id('identifierNext')
# nextButton.click()

# wait for transition then continue to fill items
password = browser.find_element_by_xpath('//*[@id="login-password"]')
password.send_keys(passwordStr)

# password = WebDriverWait(browser, 10).until(
#     EC.presence_of_element_located((By.NAME, "password")))

# password.send_keys(passwordStr)

signInButton = browser.find_element_by_xpath('//*[@id="btn-login"]')
signInButton.click()