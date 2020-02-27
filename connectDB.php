<?php
    $host = "localhost";
    $user = "dldkfka331";
    $pw = "dkfka2142!";
    $dbName = "dldkfka331";
    $dbConnect = new mysqli($host, $user, $pw, $dbName);
    $dbConnect->set_charset("utf8");

    if(mysqli_connect_error()){
        echo "Connection failed";
        echo mysqli_connect_error();
    } else {
        echo "Connection success";
    }
?>