<?php
include "data.php";

$filterType = $_GET["filterType"] ?? "genre";
$filterValue = $_GET["filterValue"] ?? "";
$filteredArray = [];

// filter data

if ($filterValue === "all") {
  $filteredArray = $discs;
} else {
  foreach ($discs as $disc) {
    if ($disc[$filterType] == $filterValue) {
      $filteredArray[] = $disc;
    }
  }
}

header("Content-Type: application/json");
echo json_encode($filteredArray);
?>
