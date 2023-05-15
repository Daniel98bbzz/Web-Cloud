<!DOCTYPE html>
<html>
<head>
    <title>Patient Information</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
        body {
            padding: 20px;
        }

        .card {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2>Patient Information</h2>
            </div>
            <div class="card-body">
                <p><strong>First Name: </strong><?php echo htmlspecialchars($_GET['firstName']); ?></p>
                <p><strong>Last Name: </strong><?php echo htmlspecialchars($_GET['lastName']); ?></p>
                <p><strong>ID: </strong><?php echo htmlspecialchars($_GET['id']); ?></p>
                <p><strong>Gender: </strong><?php echo htmlspecialchars($_GET['gender']); ?></p>
                <p><strong>Risk Level: </strong><?php echo htmlspecialchars($_GET['risk']); ?></p>
                <p><strong>Department: </strong><?php echo htmlspecialchars($_GET['department']); ?></p>
                <p><strong>Room Number: </strong><?php echo htmlspecialchars($_GET['roomNum']); ?></p>
                <p><strong>Bed Number: </strong><?php echo htmlspecialchars($_GET['bedNum']); ?></p>
                <p><strong>Message: </strong><?php echo nl2br(htmlspecialchars($_GET['message'])); ?></p>
            </div>
        </div>
    </div>
</body>
</html>