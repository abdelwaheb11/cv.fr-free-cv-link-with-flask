from bs4 import BeautifulSoup
import requests


def getCV(link_cv):
    try:
        doc = requests.get(link_cv)
        soup = BeautifulSoup(doc.content, 'html.parser')
        cv = soup.find('div', {'class': "w-full mx-auto block shadow-md rounded object-cover object-left-top overflow-hidden select-none"})
        return str(cv) if cv else False
    except Exception as e:
        return False
 