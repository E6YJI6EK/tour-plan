from flask import Flask, render_template, url_for, request, redirect
from mail import send_message


app = Flask(__name__)

@app.route("/main", methods=['POST', 'GET'])
def main():
    if request.method == 'POST':
        if 'subscribe' in request.form.keys():
            send_message('subscribe', email=request.form['subscribe_mail'])
            return redirect(url_for('subscribe'))
        else:
            send_message('bid', email=request.form['mail'], phone=request.form['phone'], name=request.form['name'], text=request.form['message'])
            return redirect(url_for('put_bid'))
    else:
        return render_template('index.html', title='Home', current_url=url_for('main'))


@app.route('/put_bid', methods=['POST', 'GET'])
def put_bid():
    if request.method == 'POST':
        send_message('bid', email=request.form['mail'], phone=request.form['phone'], name=request.form['name'], text=request.form['message'])
        return redirect(url_for('put_bid'))
    return render_template('thankyou.html', title='Thank You!', current_url=url_for('put_bid'))


@app.route('/subscribe', methods=['POST', 'GET'])
def subscribe():
    if request.method == 'POST':
        send_message('bid', email=request.form['mail'], phone=request.form['phone'], name=request.form['name'], text=request.form['message'])
        return redirect(url_for('put_bid'))
    return render_template('subscribe.html', title='Subscribe', current_url=url_for('subscribe'))


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html', title='Page not found'), 404

if __name__ == '__main__':
    app.run(debug=True)