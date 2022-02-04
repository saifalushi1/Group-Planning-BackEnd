<h1>Grouper App</h1>

<h3>About Our App</h3>
Our idea for an application is a social media application in which users can input their schedule into a calendar.  The users can then join groups with their friends and the application will compare everyone’s schedules to show when the group can hang out.
<br><br>

<h3>BackEnd Wireframe</h3>
<img src="/Resources/backend-diagram.jpg">
<br>
<h3>Example Models</h3>
The app will be utilizing two Schemas.  One for the individual user and one for individual groups.
<br><br>
<h4>UserSchema</h4>
<br>
	username: String,
<br>
	password: String,
<br>
	name: String, 
<br>
	events: [Objects],
<br>
	groups: [Objects]
<br>
<h4>GroupSchema</h4>
<br>
	groupName: String,
<br>
	members: [Objects]
<br>
	events: [Objects]
<br><br>