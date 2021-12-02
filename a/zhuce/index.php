
<?php include('server.php');
    //if user is not logged in, they cannot access this page
    if(empty($_SESSION['username'])){
        header('location: /a/zhuce/denglv_zhuce/login.php');
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <tittle>As a member, you can enjoy the feast of training video</tittle>
    </head>
    <body>
        <p>注册成功</p>
        <p><a href="http://127.0.0.1:5500/index.html">Logout</p>
        <div class="content">
        <?php if(isset($_SESSION['success'])): ?>
            <div>
                <h3>
                    <?php 
                        echo $_SESSION['success'];
                        unset($_SESSION['success']);
                    ?>
                </h3>
            </div>    
        <?php endif ?>
        </div>
    </body>
</html>
