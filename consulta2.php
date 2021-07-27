<?php 
include ("conecta.php"); 
 
 
    $pdo = connect();
    $sql = "SELECT Menu,Nivel from app_menudetalle where idM='".$_POST['id']."'";
    $query = $pdo->prepare($sql);
    $query->execute();
    $list = $query->fetchAll();
    echo json_encode($list);

?>