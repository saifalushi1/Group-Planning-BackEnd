<h1>Grouper App</h1>

<h3><u>About Our App</u></h3>
Our idea for an application is a social media application in which users can input their schedule into a calendar.  The users can then join groups with their friends and the application will compare everyone’s schedules to show when the group can hang out.
<br><br>

<h3><u>BackEnd Wireframe</u></h3>
<img src="/Resources/backend-diagram.jpg">
<br>
<h3><u>Example Models</u></h3>
The app will be utilizing two Schemas.  One for the individual user and one for individual groups.
<br><br>
UserSchema
	username: String,
	password: String,
	name: String, 
	events: [Objects],
	groups: [Objects]
<br>
GroupSchema
	groupName: String,
	members: [Objects]
	events: [Objects]
<br><br>