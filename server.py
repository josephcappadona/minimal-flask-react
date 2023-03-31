#!/usr/bin/env python

import os
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/api/analysis', methods=['POST'])
def api_analysis():
    data = request.json

    if 'value' not in data:
        error_code = 401
        ret = {'message': 'POST was unsuccessful'}
    else:
        error_code = 201
        ret = {'message': 'POST was successful'}
    return json.dumps(ret), error_code


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
