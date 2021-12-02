<?php include('server.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Login</title>
        <link rel="stylesheet"href="/skin/css/login.css">
    </head>
    <body>
        <div class="login-box">
            <form id="user_login" action="">
                <!--display validation errors here-->
                <?php include('erros.php'); ?>

                <h1>Log in</h1>
                <h4>It's free and only takes a minute</h4>
                <label>Username</label>
                <input class="username" id="username" type="text" placeholder="">
                <label>Password</label>
                <input class="password" id="password" type="password" placeholder="">
                <input type="button" onclick="/a/zhuce/denglv_zhuce/login.php" value="Login">
            </form>
            <p class="para-1">By clicking the Sign Up button, you agree to our<br>
            <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
            </p>
        </div>
        <p>Don't have an account?<a href="/a/zhuce/denglv_zhuce/register.php">signup here </a></p>
    </body>
</html>