#main.py
from flask import Flask
from flask import url_for, jsonify, render_template
import checker

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/foo', methods=['POST'])
def foo():
    answer = checker.check()
    return jsonify({"message": answer})

if __name__ == "__main__":
    app.run(port=8080, debug=True)