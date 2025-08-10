<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tool4cars</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/clients.js"></script>
    <script src="scripts/content.js"></script>
    <script src="scripts/step2.js"></script>
    <script src="scripts/step3.js"></script>
</head>
<body>
    <div class="dynamic-div" data-module="cars" data-script="ajax">
         <div id="client-content"></div>
         <div id="cars-content"></div>
    </div>
    <div class="dynamic-div" data-module="garages" data-script="ajax">
         <div id="client-content"></div>
         <div id="elements"></div>
    </div>
    <!-- Ajouter des liens pour changer de client -->
    <div>
        <a href="#" class="change-client" data-client="clienta">Client A</a>
        <a href="#" class="change-client" data-client="clientb">Client B</a>
        <a href="#" class="change-client" data-client="clientc">Client C</a>
    </div>
    <a href="#" class="change-module" data-module="cars">Module cars</a>
    <a href="#" class="change-module" data-module="garages">Module garages</a>

</body>
</html>
