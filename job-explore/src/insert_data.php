<?php

$servername = "localhost";
   $username = "root";
$password = "";
$dbname = "mysql";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname,3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// List of data
$job_data_list = [
    ["title" => "Associate software engineer", "degree" => true, "major" => "computer science"],
    ["title" => "Data Analyst", "degree" => true, "major" => "statistics"],
    ["title" => "Web Developer", "degree" => true, "major" => "computer science"],
    ["title" => "Marketing Specialist", "degree" => true, "major" => null],
];

// Insert data into the database
foreach ($job_data_list as $job_data) {
    $title = $conn->real_escape_string($job_data["title"]);
    $degree = $job_data["degree"];
    $major = $conn->real_escape_string($job_data["major"]);

    $sql = "INSERT INTO job_listings (title, degree, major) VALUES ('$title', $degree, '$major')";

    if ($conn->query($sql) === TRUE) {
        echo "Record inserted successfully\n";
    } else {
        echo "Error inserting record: " . $conn->error . "\n";
    }
}

// Close connection
$conn->close();
?>
