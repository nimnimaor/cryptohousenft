<?php
$link = mysqli_connect('localhost', 'b57899400499a0', 'f9570ff2 ');
if (!$link) {
die('Could not connect: ' . mysqli_error());
}
echo 'Connected successfully';
mysqli_close($link);
?>