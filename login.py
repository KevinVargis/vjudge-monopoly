from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


usernameStr = 'user_teamj'
passwordStr = 'aad@123'

def login(quesno,diff):
    # diff = 0
    # # difficulty variable
    # # 0 -> hard
    # # 1-> normal
    # # 2 -> easy

    # quesno = 5
    # # question number 

    # diff=2-diff
    if diff == 1 :
        diff = 2
    elif diff == 2:
        diff = 1
    driverLocation = './chromedriver' #if windows
    browser = webdriver.Chrome(driverLocation) 
    browser.get(('https://vjudge.net/contest'))

    # fill in username and hit the next button

    loginbutton = browser.find_element_by_xpath('//*[@id="navbarResponsive"]/ul/li[8]/a')
    loginbutton.click()


    time.sleep(1)

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

    time.sleep(4)

    path = '//*[@id="listContest"]/tbody/tr[' + str(diff +1) + ']/td[3]/div/a'

    contest = browser.find_element_by_xpath(path)
    contest.click()

    qpath = '//*[@id="contest-problems"]/tbody/tr[' + str(quesno) + ']/td[4]/a'
    question = browser.find_element_by_xpath(qpath)
    question.click()
