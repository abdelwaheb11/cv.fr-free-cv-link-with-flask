from flask import Flask , render_template ,request
from scraping.getcv import getCV


app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    cv=None
    link_cv=""
    if request.method == 'POST':
        link_cv=request.form['link']
        cv=getCV(link_cv) 
        cv = cv if cv else None

    return render_template('index.html',data=cv,link_cv=link_cv)

if __name__ == '__main__':
    app.run(debug=True)