<?php
// Récupérer le nom de la voiture depuis la requête
$id = $_GET['id'];
$module = $_GET['module'];

// Charger les données des voitures
$data = file_get_contents('./data/' . $module . '.json');
$data = json_decode($data, true);

// Trouver la voiture sélectionnée
$selected = array_find($data, function ( $value) use ($id) {
    return $value['id'] == $id;
});

if ($selected) {
    echo "<div>";
    foreach ($selected as $key => $value) {
        echo "<p> $key :" . htmlspecialchars($value) . "</p>";
    }
} else {
    echo "Non trouvée.";
}
?>
