<?php

include "data.php";
// extract all genres into an array
$genres = [];
foreach ($discs as $disc) {
  if (!in_array($disc["genre"], $genres)) {
    $genres[] = $disc["genre"];
  }
  //   $genres[] = $disc["genre"];
}

header("Content-Type: application/json");
echo json_encode($genres);

?>
