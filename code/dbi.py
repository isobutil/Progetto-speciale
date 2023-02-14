import sqlite3


def add_user(name, surname, mail, hash): 
    conn = sqlite3.connect('code/db/database.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    success = False
    
    sql = 'INSERT INTO users(mail, name, surname, hash) VALUES(?,?,?,?)'
    cursor.execute(sql, (mail, name, surname, hash))

    try:
        conn.commit()
        success = True

    except Exception as e:
        print('ERROR', str(e))
        conn.rollback()

    cursor.close()
    conn.close()

    return success

def get_events(): 
    conn = sqlite3.connect('code/db/database.db')
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()   

    
    sql = 'SELECT * FROM events'
    cursor.execute(sql)
    events = cursor.fetchall()
    


    cursor.close()
    conn.close()

    return events



