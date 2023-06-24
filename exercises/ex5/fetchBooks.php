<?php
    include "config.php";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    if(mysqli_connect_errno()) {
        die("DB Connection Failed:" . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }

    $query = "SELECT * FROM tbl_19_books";
    if(isset($_GET['category']) && $_GET['category'] != 'All') {
        $category = mysqli_real_escape_string($connection, $_GET['category']);
        $query .= " WHERE category = '$category'";
    }
    $result = mysqli_query($connection, $query);

    if(!$result) {
        die("DB Query Failed.");
    }

    while($row = mysqli_fetch_assoc($result)) {
        echo "<section class = 'book'>";
        echo "<h3>" . "<a href='prodPage.php?prodId=" . $row['id'] . "'>" . $row['name'] . "</a>" . "</h3>";
        echo "<img src = '" . $row['img1_url'] . "' alt = 'bookImg'>";
        echo "<img src = '" . $row['img2_url'] . "' alt = 'bookImg'>"; 
        echo "<br>";
        echo "<p>Price:" . $row['price'] . "$</p>";
        echo "</section>";
    }

    mysqli_free_result($result);
    mysqli_close($connection);
?>
