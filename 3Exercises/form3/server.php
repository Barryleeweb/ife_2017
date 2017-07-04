<?php

$bigid = $_GET["bigname"]; 
if(isset($bigid)){ 
  if($bigid == 1){
    $select = array(
        '0' => ['id' => 1,'title' => 'JS'], 
        '1' => ['id' => 2,'title' => 'PHP'],
        '2' => ['id' => 3,'title' => 'C++'],
        '3' => ['id' => 4,'title' => 'LUA'],
        '4' => ['id' => 5,'title' => 'CSS'],
    );
  }else if($bigid == 2){
      $select = array(
        '0' => ['id' => 1,'title' => '人人'], 
        '1' => ['id' => 2,'title' => 'FACEBOOK'],
        '2' => ['id' => 3,'title' => '微博'],
        '3' => ['id' => 4,'title' => '朋友圈'],
        '4' => ['id' => 5,'title' => '空间'],
    );
  }else if($bigid == 3){
      $select = array(
        '0' => ['id' => 1,'title' => '牛肉面'], 
        '1' => ['id' => 2,'title' => '土豆粉'],
        '2' => ['id' => 3,'title' => '盖饭'],
        '3' => ['id' => 4,'title' => '火锅'],
        '4' => ['id' => 5,'title' => '大便'],
    );
  }
  echo json_encode($select); 
}