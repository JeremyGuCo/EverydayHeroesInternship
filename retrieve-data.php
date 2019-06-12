<?php

   // Define database connection parameters
   $host = 'localhost';
   $db_user = 'root';
   $db_pass = '';
   $db_name = 'EverydayHeroes';
   $cs = 'utf8';

      // Set up the PDO parameters
try {
   $dsn = "mysql:host=" . $host . ";port=3000;dbname=" . $db_name . ";charset=" . $cs;
   $opt = array(
       PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
       PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
       PDO::ATTR_EMULATE_PREPARES => false,
   );
} catch (PDOException $e) {
   echo $e->getMessage();
}

// Create a PDO instance (connect to the database)
$pdo = new PDO($dsn, $db_user, $db_pass, $opt);
$data = [];


// Attempt to query database table and retrieve data
$stmt = $pdo->query('SELECT firstName, lastName, date, content FROM temoignages ORDER BY date DESC');
$a = $stmt->rowCount();

if($a) {
   while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
       // Assign each row of data to associative array
       $data[] = $row;
   }
} else {
   echo 'No data';
}

// Return data as JSON
echo json_encode(array('testimonies' => $data, 'count' => $a));


?>

