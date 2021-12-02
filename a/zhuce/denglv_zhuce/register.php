<?php include('server.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sign Up</title>
        <link rel="stylesheet"href="/skin/css/signup.css">
    </head>
    <body>
        <div class="signup-box">
            <h1>Sign Up</h1>
            <h4>It's free and only takes a minute</h4>
            <form method="post" action=“register.php”> 
                <!--display validation errors here-->
                <?php include('errors.php'); ?>

                <label for="userName">Username</label>
                <input type="text" id="userName" placeholder="">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="">
                <label for="psw">Password</label>
                <input type="password" id="password" placeholder="">
                <label for="pwd_confirm">Confirm Password</label>
                <input type="password" id="pwd_confirm" placeholder="">
                <input type="button" class="signupbtn" onclick="/skin/js/signup()" value="Sumbit">
            </form>
            <p class="para-2">By clicking the Sign Up button, you agree to our<br>
            <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
            </p>
        </div>
        <p>Already have an account?<a href="login.php">Login here </a></p>
    </body>
</html>