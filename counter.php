<?php
// Function to read and update the visitor count
function updateVisitorCount() {
    $countFile = 'count.txt';

    // Check if the count file exists
    if (file_exists($countFile)) {
        // Read the current count
        $count = (int) file_get_contents($countFile);

        // Increment the count by 1
        $count++;

        // Write the updated count back to the file
        file_put_contents($countFile, $count);

        return $count;
    } else {
        // If the count file doesn't exist, create it with an initial count of 1
        file_put_contents($countFile, '1');

        return 1;
    }
}

// Get the current visitor count
$visitorCount = updateVisitorCount();
?>
