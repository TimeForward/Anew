<?php
$fortunes = [
    "You will have a great day!",
    "A new opportunity will come your way.",
    "Good things are coming your way.",
    "Your hard work will pay off.",
    "You will achieve your goals."
];
// Randomly select a fortune from the array
$randomIndex = array_rand($fortunes);
$fortune = $fortunes[$randomIndex];
// Output the fortune
echo $fortune;
?>