from flask import Flask, request, redirect

app = Flask(__name__)
app.debug = True

@app.route('/', methods=['post', 'get'])
def mail():
    sender_email = "egogorka74@gmail.com"  # Ваш емайл
    password = "google_blyat^123"
    receiver_email = request.form.get()
    text = request.form.get()

if __name__ == "__main__":
    app.run()