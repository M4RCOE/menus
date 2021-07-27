<?php 
include ("conecta.php"); 
 
 
    $pdo = connect();
    $sql = "SELECT nomMenu,id from app_menu";
    $query = $pdo->prepare($sql);
    $query->execute();
    $list = $query->fetchAll();
    echo json_encode($list);

?>