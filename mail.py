import smtplib, ssl


def send_message(sender_email, password, receiver_email, text):
	port = 465  # для SSL подключения
	smtp_server = "smtp.gmail.com"

	header ='\r\n'.join((
		'From: {0}'.format(sender_email),
		'To: {0}'.format(receiver_email),
	))

	message = '\r\n'.join((
	'Subject: Test', header, text
	))
 
	context = ssl.create_default_context()
	with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
	    server.login(sender_email, password)
	    server.sendmail(sender_email, receiver_email, message)











