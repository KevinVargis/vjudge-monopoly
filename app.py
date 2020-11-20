#main.py
from flask import Flask
from flask import url_for, jsonify, render_template, request
import checker, test,login

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/foo', methods=['POST'])
def foo():
    data = request.get_json()
    answer = checker.check(data["level"])
    print(answer)
    return jsonify({"message": answer})

@app.route('/bar', methods=['POST', 'GET'])
def bar():
    # print("i do be called")
    data = request.get_json()
    # print(data["param"])
    # hai = test.ans(data["param"])
    # print(hai)
    login.login(data["qno"],data["level"])
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=8080, debug=True)