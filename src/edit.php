<?php
// Récupérer le nom de la voiture depuis la requête
$carId = $_GET['carId'];

// Charger les données des voitures
$carsData = file_get_contents('./data/cars.json');
$cars = json_decode($carsData, true);

// Trouver la voiture sélectionnée
$selectedCar = array_find($cars, function ( $value) use ($carId) {
    return $value['id'] == $carId;
});

if ($selectedCar) {
    // Afficher les détails de la voiture
    echo "<div>";
    echo "<h2>" . htmlspecialchars($selectedCar['modelName']) . "</h2>";
    echo "<p>Marque: " . htmlspecialchars($selectedCar['brand']) . "</p>";
    echo "<p>Année: " . htmlspecialchars($selectedCar['year']) . "</p>";
    echo "<p>Puissance: " . htmlspecialchars($selectedCar['power']) . " chevaux</p>";
    echo "</div>";
} else {
    echo "Voiture non trouvée.";
}
?>
