# THA - JavaScript & SQL injections

## JavaScript Injections
The purpose of JS Injection is to inject JavaScript code, that runs from the client-side.JS Injection offers many possibilities for a hacker to gain control over users’ information and change, as well as restrict or block operations and manipulate parameters (for example cookies). Therefore, this can lead to some serious damages, information leakage and even hacking.
### Prevention
Helmet’s XSS filter is a relatively simple middleware that will set the X-XSS-Protectionheader. On most browsers, it will set it to 1; mode=block. On old Internet Explorer versions, it will set it to 0 to disable it.

<br>// Make sure you run "npm install helmet" to get the Helmet package.
<br>var helmet = require('helmet') 

<br>// Sets "X-XSS-Protection: 1; mode=block".
<br>app.use(helmet.xssFilter())


## SQL Injections 
### A classic example using MySQL
Imagine a web app that requires you to verify your bank account so you can access your personal funds. Upon verifying some information, the system will aggregate and display your total balance so you can do things like bank transfers, make payments, etc.
<center><img src="https://www.veracode.com/sites/default/files/blog-sql-injection-form.png" ></center>

Behind the scenes, a Node.js developer has implemented the following code:<br><br>
connection.query("SELECT * FROM bank_accounts WHERE dob = '"+ req.body.dob +"' AND bank_account = '"+ req.body.account_number +"'",function(error, results){});

### Prevention
### Using Placeholders
You can map values in the array to placeholders (the question marks) in the same order as they are passed <br><br>
connection.query("SELECT * FROM bank_accounts WHERE dob = ? AND bank_account = ?",[
     req.body.dob,
     req.body.account_number
    ],function(error, results){});
    
  <br><br> 
## Source
### <a src="http://bestirtech.com/blog/2018/11/what-is-js-injection-and-how-to-block-it/" > JS injections </a>   <a src="https://www.veracode.com/blog/secure-development/how-prevent-sql-injection-nodejs" > SQL injections </a>

