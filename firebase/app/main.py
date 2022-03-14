import os.path
from flask import Flask, Response, make_response
from flask import render_template


app = Flask(__name__)

@app.route("/")
def home_view():
    return render_template('index.html')

@app.route("/sessao/<mac>")
def sessao(mac):
    return render_template('sessao.html', mac=mac)

