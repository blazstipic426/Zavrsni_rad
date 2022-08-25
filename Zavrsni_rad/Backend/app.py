from flask_mysqldb import MySQL
from  flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask import Flask, jsonify,render_template
import pymysql

app = Flask(__name__,template_folder='template')
app.config.from_object(__name__)
CORS(app,resources={r'/*': {'origins': '*'}})



app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'webcam'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 3307

mysql = MySQL(app)

@app.route("/")
def index():
    cur = mysql.connection.cursor()
    users = cur.execute("SELECT * FROM zavrsni_rad2 order by id")
    if users > 0:
        userDetails = cur.fetchall()
        return jsonify({
            'members': userDetails 
       })


if __name__=="__main__":
    app.run(debug=True)
