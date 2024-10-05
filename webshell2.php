<?php
if (isset($_GET['url'])) {
    $url = $_GET['url'];
    $command = "curl -k " . escapeshellarg($url);
    $output = shell_exec($command);
    echo "<pre>$output</pre>";
} else {
    echo "No URL provided.";
}
?>
