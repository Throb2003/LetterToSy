php
// Database connection
$host = 'localhost';
$user = 'username';
$password = 'password';
$dbname = 'database_name';

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$hobbies = $_POST['hobbies'];

// Prepare insert statement
$stmt = $conn->prepare('INSERT INTO form_data (first_name, last_name, dob, email, gender, hobbies) VALUES (?, ?, ?, ?, ?, ?)');

// Bind parameters
$stmt->bind_param('ssssss', $firstName, $lastName, $dob, $email, $gender, $hobbies);

// Execute insert statement
$stmt->execute();

// Close statement and connection
$stmt->close();
$conn->close();

// Send response back to client
echo 'Form data inserted successfully.';
