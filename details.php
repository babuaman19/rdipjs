<?php
  include('details.html');
  $name=$_GET['firstname'];
  $email=$_GET['email'];
  $phone=$_GET['phone'];

  echo "Name: $name<br>";
  echo "Phone No: $phone<br>";
  echo "E-Mail: $email<br>";
?>