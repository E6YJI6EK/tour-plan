import smtplib, ssl
from config import sender_email, receiver_email, password
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header


def send_message(type, email, phone='', name='', text=''):
	port = 465  # для SSL подключения
	smtp_server = "smtp.gmail.com"
	
	msg = MIMEMultipart('alternative')
	msg.set_charset('utf8')
	msg['FROM'] = sender_email
	msg['To'] = receiver_email

	if type == 'bid':
		body = '''
			<b>Email:</b> {0} <br>
			<b>Phone:</b> {1} <br>
			<b>Name:</b> {2} <br>
			<h2>Message</h2> <br><hr>
			{3}
		'''.format(email, phone, name, text)
		msg['Subject'] = Header('New bid!'.encode('utf-8'),
		    'UTF-8'
		).encode()
	elif type == 'subscribe':
		text = 'This person has subscribed to newsletter.'
		body = '''
			<b>Email:</b> {0} <br>
			<h2>{1}</h2> <hr>
		'''.format(email, text)
		msg['Subject'] = Header('New subscriber!'.encode('utf-8'),
		    'UTF-8'
		).encode()
		msg['To'] = receiver_email
	_attach = MIMEText(body.encode('utf-8'), 'html', 'UTF-8')        
	msg.attach(_attach)	

	context = ssl.create_default_context()
	with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
		server.login(sender_email, password)
		msg.attach(_attach)
		server.sendmail(sender_email, receiver_email, msg.as_string())











