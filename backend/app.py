import flask
from flask import Flask, request
from flask_cors import CORS, cross_origin
from content_based import content_based as cb
from collaborative_filtering import collaborative_filtering as cf

app = Flask(__name__)
CORS(app)


@app.route("/collaborative", methods=['POST'])
def collaborative():
    inp = request.json
    out = cf(int(inp['candidate']))
    print(out)
    return out


@app.route("/", methods=['POST'])
def content_based():
    inp = request.json
    out = cb(int(inp['item_id']), int(inp['num']))
    print(out)
    return out


if __name__ == '__main__':
    app.run(debug=True)
