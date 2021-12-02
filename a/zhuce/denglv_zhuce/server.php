<?php
session_start();
$username="";
$email="";
$errors="";

//connect to the database
$db = mysqli_connect('localhost','root','', 'database123');
//if the register button is clicked
if(isset($_POST['register'])){
    $username = mysql_real_escape_string($_POST['username']);
    $email = mysql_real_escape_string($_POST['email']);
    $password_1 = mysql_real_escape_string($_POST['password_1']);
    $password_2 = mysql_real_escape_string($_POST['password_2']);

    //ensure that form fields are filled properly
    if(empty($username)){
        array_push($errors,"Username is required");
    }
    if(empty($email)){
        array_push($errors,"email is required");
    }
    if(empty($password_1)){
        array_push($errors,"password_1 is required");
    }
    if(empty($password_2)){
        array_push($errors,"password_2 is required");
    }
    if(empty($password_1 != $password_2)){
        array_push($errors,"the two password do not match");
    }

    //if there are no error, save user to database
    if(count($errors) == 0){
        $password = md5($password_1);//encrypt password
        $sql = "INSERT INTO users (username, email, password) 
        VALUES ('$username', '$email', '$password')";
        mysql_query($db, $sql);
        $_SESSION['username'] = $username;
        $_SESSION['success'] = "You are now logged in";
        header('location: http://127.0.0.1:5500/index.html');//redirect to home page
    }
}

    //log user in from login page
    if(isset($_POST['login'])){
        $username = mysql_real_escape_string($_POST['username']);
        $password = mysql_real_escape_string($_POST['password']);

        //ensure that form fields are filled properly
        if(empty($username)){
            array_push($errors, "Username is required");
        }
        if(empty($password)){
            array_push($errors, "Password is required");
        }
        if(count($errors) == 0){
            $password = md5($password);//encrypt password before comparing
            $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
            $result = mysqli_query($db, $query);
                if(mysqli_num_rows($result)==1){
                    //log user in 
                    $_SESSION['username'] = $username;
                    $_SESSION['success'] = "You are now logged in";
                    header('location: http://127.0.0.1:5500/index.html');
                }
        }
    }


    //logout
    if(isset($_GET['logout'])){
        session_destroy();
        unset($_SESSION['username']);
        header('http://127.0.0.1:5500/index.html');
    }else{
        array_push($errors, "wrong the username and password combination");
        header('location: /a/zhuce/denglv_zhuce/login.php');
    }

?>