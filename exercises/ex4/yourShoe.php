<?php
$shoe_name = $_GET['shoe_name'];
$color = $_GET['color'];
$size = $_GET['size'];


$available_colors = ['Red', 'Blue', 'Green', 'Black', 'White'];

if (in_array($color, $available_colors)) {
    $color_status = "Available";
} else {
    $color_status = "Not Available";
}


$processed_data = "{$size}-{$color}";


echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Shoe Edit Result</title>
    <link rel='stylesheet' href='css/styles.css'>
</head>
<body>
    <h1>Shoe Edit Result</h1>
    <p>Shoe Name: {$shoe_name}</p>
    <p>Color: {$color} ({$color_status})</p>
    <p>Size: {$size}</p>
    <p>Shoe Details: {$processed_data}</p>
</body>
</html>";
?>
