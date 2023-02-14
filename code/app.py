# import module
from flask import Flask, render_template, request, session, url_for, redirect
from flask_session import Session
import dbi
import hashlib

# create the application
app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = 'kAd4GembIq99Askdj'
app.config['SESSION_PERMANENT'] = False
Session(app)


@app.route('/')
def home():


    events = dbi.get_events()

    return render_template('index.html', events=events)



@app.route('/', methods = ['POST'])
def new_user():
    name = request.form.get('name')
    surname = request.form.get('surname')
    mail = request.form.get('mail')
    stringHashing = name + surname + mail
    hash = hashlib.md5(stringHashing.encode()).hexdigest()

    app.logger.debug(hash)
    if (dbi.add_user(name,surname,mail,hash)):
        app.logger.debug('SUCCESFULLY ADDED')
        if 'signed' not in session:
            session["signed"] = hash
            session["user"] = name + " " + surname
    else:
        app.logger.debug('ERROR INSERTING NEW USER')
        
    
    return redirect(url_for('home'))


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)