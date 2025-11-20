
/////////////////////////////
//1
const fs=require('fs');

// fs.writeFile('index.html',`<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>Login</title>
//   <style>
//   .floating-links {
//       position: fixed;
//       top: 15px;
//       right: 15px;
//       background: #ffffff;
//       padding: 10px 15px;
//       border-radius: 8px;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.15);
//       display: flex;
//       gap: 12px;
//       font-family: Arial, sans-serif;
//     }

//     .floating-links a {
//       text-decoration: none;
//       color: #0077ff;
//       font-weight: bold;
//     }

//     .floating-links a:hover {
//       text-decoration: underline;
//     }
//     :root{
//       --bg1:#f8f9fb;
//       --bg2:#e3e9f5;
//       --card:#ffffff;
//       --accent:#2563eb;
//       --muted:#6b7280;
//       font-family:Inter, system-ui, sans-serif;
//     }

//     body{
//       margin:0;
//       height:100vh;
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       background:linear-gradient(135deg,var(--bg1),var(--bg2));
//       padding:30px;
//     }

//     .card{
//       width:100%;
//       max-width:380px;
//       background:var(--card);
//       padding:28px;
//       border-radius:14px;
//       box-shadow:0 8px 26px rgba(0,0,0,0.08);
//     }

//     h1{
//       margin:0 0 10px 0;
//       font-size:22px;
//     }
//     p.lead{
//       margin:0 0 22px 0;
//       color:var(--muted);
//       font-size:14px;
//     }

//     form{display:grid; gap:14px;}

//     label{
//       font-size:14px;
//       margin-bottom:6px;
//       color:#374151;
//     }

//     .field{display:flex; flex-direction:column;}

//     input[type="text"],input[type="password"]{
//       padding:12px 14px;
//       border:1px solid #e3e6ec;
//       border-radius:10px;
//       font-size:14px;
//       transition:0.15s;
//     }

//     input:focus{
//       border-color:var(--accent);
//       box-shadow:0 4px 16px rgba(37,99,235,0.15);
//       outline:none;
//     }

//     .actions{
//       margin-top:10px;
//       display:flex;
//       justify-content:flex-end;
//     }

//     button{
//       padding:10px 18px;
//       border:0;
//       border-radius:10px;
//       background:linear-gradient(180deg,var(--accent),#1d4ed8);
//       color:white;
//       font-weight:600;
//       cursor:pointer;
//       transition:0.12s;
//     }

//     button:hover{opacity:0.97;}
//     button:active{transform:translateY(1px) scale(.99);} 
//   </style>
// </head>
// <body>
// <div class="floating-links">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//   </div>
//   <div class="card">
//     <h1>Login</h1>
//     <p class="lead">Enter your username and password to continue.</p>

//     <form action="#" method="post" autocomplete="on">
//       <div class="field">
//         <label for="username">Username</label>
//         <input id="username" type="text" name="username" required placeholder="Your username" autocomplete="username" />
//       </div>

//       <div class="field">
//         <label for="password">Password</label>
//         <input id="password" type="password" name="password" required placeholder="Your password" autocomplete="current-password" />
//       </div>

//       <div class="actions">
//         <button type="submit">Login</button>
//       </div>

//     </form>
//   </div>
// </body>
// </html>`,(err)=>{
//   if(err) throw error
// })
// fs.writeFile('register.html',`<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>Sign Up</title>
//   <style>
//   .floating-links {
//       position: fixed;
//       top: 15px;
//       right: 15px;
//       background: #ffffff;
//       padding: 10px 15px;
//       border-radius: 8px;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.15);
//       display: flex;
//       gap: 12px;
//       font-family: Arial, sans-serif;
//     }

//     .floating-links a {
//       text-decoration: none;
//       color: #0077ff;
//       font-weight: bold;
//     }

//     .floating-links a:hover {
//       text-decoration: underline;
//     }
//     :root{
//       --bg:#f5f7fa;
//       --card:#ffffff;
//       --muted:#6b7280;
//       --accent:#22c55e; /* green */
//       --success:#16a34a;
//       --danger:#dc2626;
//       color-scheme: light;
//     }

//     *{box-sizing:border-box}
//     html,body{
//       height:100%;margin:0;
//       font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto;
//       background:#e9f5ec;
//       color:#0f172a;
//     }

//     .wrap{min-height:100%;display:flex;align-items:center;justify-content:center;padding:40px}

//     .card{
//       width:100%;max-width:480px;
//       background:var(--card);
//       border-radius:14px;
//       padding:28px;
//       box-shadow:0 6px 20px rgba(0,0,0,0.08);
//       border:1px solid #d1e7d8;
//     }

//     h1{margin:0 0 6px;font-size:22px;color:#0f172a}
//     p.lead{margin:0 0 20px;color:var(--muted);font-size:14px}

//     form{display:grid;gap:14px}

//     .field{display:flex;flex-direction:column;gap:6px}

//     label{font-size:13px;color:#374151}

//     input[type="text"], input[type="email"], input[type="password"]{
//       background:#f9fdfb;
//       border:1px solid #cfe9d7;
//       padding:12px 14px;
//       border-radius:8px;
//       color:#0f172a;
//       font-size:14px;
//       transition:all .14s ease;
//     }

//     input:focus{
//       border-color:var(--accent);
//       box-shadow:0 0 0 3px rgba(34,197,94,0.25);
//       background:#ffffff;
//     }

//     .row{display:flex;gap:12px}
//     .row > .field{flex:1}

//     .hint{font-size:12px;color:var(--muted)}

//     .btn{
//       display:inline-flex;align-items:center;justify-content:center;
//       padding:12px 14px;
//       border-radius:10px;
//       border:0;
//       background:var(--accent);
//       color:#ffffff;
//       font-weight:600;
//       cursor:pointer;
//       font-size:14px;
//       box-shadow:0 4px 12px rgba(34,197,94,0.3);
//       transition:background .15s ease;
//     }

//     .btn:hover{background:#1ca14b}

//     .small{font-size:13px}

//     .errors{color:var(--danger);font-size:13px;margin-top:6px}
//     .success{color:var(--success);font-size:13px;margin-top:6px}

//     .footer{display:flex;align-items:center;justify-content:space-between;margin-top:12px}

//     @media (max-width:520px){.card{padding:18px}}
//   </style>
// </head>
// <body>
// <div class="floating-links">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//   </div>
//   <div class="wrap">
//     <main class="card">
//       <h1>Create your account</h1>
//       <p class="lead">Sign up to get access. It only takes a minute.</p>

//       <form id="signup" novalidate>
//         <div class="field">
//           <label for="username">Username</label>
//           <input id="username" name="username" type="text" placeholder="jane_doe" required minlength="3" aria-describedby="usernameHelp">
//           <div id="usernameHelp" class="hint">Choose 3–30 characters. Letters, numbers and _ are allowed.</div>
//         </div>

//         <div class="field">
//           <label for="email">Email address</label>
//           <input id="email" name="email" type="email" placeholder="you@example.com" required aria-describedby="emailHelp">
//           <div id="emailHelp" class="hint">We'll send a confirmation email. Use a real address.</div>
//         </div>

//         <div class="row">
//           <div class="field password-wrap">
//             <label for="password">Password</label>
//             <input id="password" name="password" type="password" placeholder="Create a strong password" required minlength="8" aria-describedby="pwHelp">
//             <button type="button" class="toggle-pw" data-target="password">Show</button>
//             <div id="pwHelp" class="hint">At least 8 characters. Use letters, numbers & symbols.</div>
//           </div>

//           <div class="field password-wrap">
//             <label for="confirm">Confirm password</label>
//             <input id="confirm" name="confirm" type="password" placeholder="Repeat password" required minlength="8">
//             <button type="button" class="toggle-pw" data-target="confirm">Show</button>
//           </div>
//         </div>

//         <div class="footer">
//           <div class="small hint">By signing up you agree to our <a href="#" style="color:inherit;text-decoration:underline;">terms</a>.</div>
//           <button class="btn" type="submit">Sign up</button>
//         </div>

//         <div id="message" aria-live="polite"></div>
//       </form>
//     </main>
//   </div>

  
// </body>
// </html>
// `,(err)=>{
//   if(err) throw error
// })
// fs.writeFile('pasForget.html',`<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>Forgot Password</title>
//   <style>
//   .floating-links {
//       position: fixed;
//       top: 15px;
//       right: 15px;
//       background: #ffffff;
//       padding: 10px 15px;
//       border-radius: 8px;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.15);
//       display: flex;
//       gap: 12px;
//       font-family: Arial, sans-serif;
//     }

//     .floating-links a {
//       text-decoration: none;
//       color: #0077ff;
//       font-weight: bold;
//     }

//     .floating-links a:hover {
//       text-decoration: underline;
//     }
//     :root{
//       --bg1:#f7f9fc;
//       --bg2:#e5edfa;
//       --card:#ffffff;
//       --accent:#7c3aed;
//       --muted:#6b7280;
//       font-family:Inter, system-ui, sans-serif;
//     }

//     body{
//       margin:0;
//       height:100vh;
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       background:linear-gradient(135deg,var(--bg1),var(--bg2));
//       padding:30px;
//     }

//     .card{
//       width:100%;
//       max-width:420px;
//       background:var(--card);
//       padding:30px;
//       border-radius:14px;
//       box-shadow:0 8px 28px rgba(0,0,0,0.08);
//     }

//     h1{
//       margin:0 0 10px 0;
//       font-size:22px;
//     }
//     p.lead{
//       margin:0 0 22px 0;
//       color:var(--muted);
//       font-size:14px;
//       line-height:1.5;
//     }

//     form{display:grid; gap:16px;}

//     label{
//       font-size:14px;
//       margin-bottom:6px;
//       color:#374151;
//     }

//     .field{display:flex; flex-direction:column;}

//     input[type="email"]{
//       padding:12px 14px;
//       border:1px solid #e1e5ec;
//       border-radius:10px;
//       font-size:14px;
//       transition:0.15s;
//     }

//     input:focus{
//       border-color:var(--accent);
//       box-shadow:0 4px 18px rgba(124,58,237,0.20);
//       outline:none;
//     }

//     .actions{
//       margin-top:10px;
//       display:flex;
//       justify-content:flex-end;
//     }

//     button{
//       padding:10px 20px;
//       border:0;
//       border-radius:10px;
//       background:linear-gradient(180deg,var(--accent),#5b21b6);
//       color:white;
//       font-weight:600;
//       cursor:pointer;
//       transition:0.12s;
//     }

//     button:hover{opacity:0.97;}
//     button:active{transform:translateY(1px) scale(.99);} 
//   </style>
// </head>
// <body>
// <div class="floating-links">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//   </div>
//   <div class="card">
//     <h1>Forgot Password</h1>
//     <p class="lead">Enter your email address, and we will send you instructions to reset your password.</p>

//     <form action="#" method="post" autocomplete="on">
//       <div class="field">
//         <label for="email">Email address</label>
//         <input id="email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
//       </div>

//       <div class="actions">
//         <button type="submit">Send Reset Link</button>
//       </div>
//     </form>
//   </div>
// </body>
// </html>`,(err)=>{
//   if(err) throw error
// })
// fs.writeFile('login.html','Tomer Farag',(err)=>{
//   if(err) throw err
// })
// fs.appendFile('aboutMe.text','Beit Shemesh',(err)=>{
//   if(err) throw err
// })
// /////////////////////////////
// fs.readFile('aboutMe.text',(err,data)=>{
//   if(err) throw err
//   const getData=data.toString()
//   const newArr=getData.split(' ')
//   let wordsAmount=0;
//   newArr.forEach((value)=>{
//     wordsAmount+=value.length
//   })
//   console.log(`the number of the letters in the folder is: ${wordsAmount}`);
// })
// const express=require('express')
////////////////////////////////////////////////////////////////////////////////
const express=require('express')
const app=express()
const port=3000;
const db=require('mongoose');
const { json } = require('zod');
db.connect('mongodb+srv://Tomer_SV:WARwar0102@cluster0.mnrtrei.mongodb.net/').then(()=>console.log('connect to mongoob')).catch((err)=>console.log(`connection to mongoob fail: ${err}`))
app.use(express.urlencoded({extended:false}))
app.use(express.static('html'));
app.use(express.json());
app.post('/submit-data',(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(username==='israel@svcollege.co.il'&&password==='1234'){res.send(`${username} connect succesfuly`)}else{res.send('user doesnt found')}
    
})

//2
let users=[]
app.post('/register-data',(req,res)=>{
   const username=req.body.username
   const email=req.body.email
   const password=req.body.password
   const confirm=req.body.confirm
   if(username.length>=4 && username.length<=8 && email.includes('@') && password.length>=5 && password.length<=10 && password.includes('$') && password===confirm){
    users.push({username,email,password})
    res.redirect('/welcome.html')
   }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /fetch homework
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1
app.get('/',(req,res)=>{
  const data=req.body.then((data)=>data).catch((err)=>console.log(err));//בגלל שהוא מקבל json
  res.send(`hello "message": "Hello ${firstName} ${lastName}!
`).json
})
//2
const sentData=function(event){
  event.preventDefault();
  const resultContect=document.getElementById('resultt')
  const firstName=document.getElementById('first');
  const lastName=document.getElementById('last');
  const data=(fetch('/second-form',{
    headers:{
      'Accept': 'application/json',
      'Contect-Type':'application/json'
    },
    method:'post',
    body:json.stringify({
      firstName,
      lastName
    })

  }).then((res)=>res.json()).then((data)=>data).catch((err)=>{if(err)throw err}))
    resultContect.textContent=`Hello ${data.firstName} ${data.lastName}`
}
//////////////////////////////////////////////////////////////////////////
//mongoose
///////////////////////////////////////////////////////////////////////////
const StudentSchema=db.Schema({
  "firstName": string,
  "lastName": string,
  "age": number,
  "course": string
})
const student=db.model('Student',StudentSchema)
async function addUsers() {
  await student.create({ firstName: "Tomer", lastName: "Levi", age: 20 });
  await student.create({ firstName: "Dana", lastName: "Cohen", age: 25 });
  await student.create({ firstName: "Avi", lastName: "Mor", age: 30 });

  console.log("3 users added");
}

addUsers();


app.listen(port,()=>console.log(`this web is listening to port ${port}`))