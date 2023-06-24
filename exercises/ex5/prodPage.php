<?php

    include "config.php";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    if(mysqli_connect_errno()) {
        die("DB Connection Failed:" . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }

    if (isset($_GET['prodId']) && is_numeric($_GET['prodId'])) {
        $prodId = $_GET['prodId'];
        $query = "SELECT * FROM tbl_19_books WHERE id = $prodId";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die("DB Query Failed.");
        }

        $row = mysqli_fetch_assoc($result);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link href = "css/styles.css" rel = "stylesheet"></a>
</head>
<body>
    <section class = "wrapper">
        <h1>Book Page</h1>
       <?php
        echo "<h2>" . $row['name'] . "</h2>";
        echo "<img src = '" . $row['img1_url'] . "' alt = bookImg>";
        echo "<img src = '" . $row['img2_url'] . "' alt = bookImg>";
        echo "<p><b> Price = " . $row['price'] . "$</b></p>";
        echo "<p><b>Category = " . $row['category'] . "</b></p>"
        ?>
    </section>

    <?php
        if($result) mysqli_free_result($result);
    ?>
</body>
</html>

<?php
    } else {
        die("prodId is not set or is not a valid number.");
    }
    mysqli_close($connection);
?>