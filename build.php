<?php

const SOURCE_DIR = 'pages';
const OUTPUT_DIR = 'build';

$files = scandir(SOURCE_DIR);

foreach ($files as $filename) {
    if (!checkFileExtension($filename, 'php')) {
        continue;
    }
    build($filename);
}

function build($filename)
{
    ob_start();
    include(SOURCE_DIR . '/' . $filename);
    file_put_contents(OUTPUT_DIR . '/' . convertFileExtension($filename, 'html'), ob_get_clean());
}

function convertFileExtension($filename, $newExtension)
{
    return basename($filename, '.' . getFileExtension($filename)) . '.' . $newExtension;
}

function checkFileExtension($filename, $extension)
{
    return (getFileExtension($filename) === $extension);
}

function getFileExtension($filename)
{
    $pathinfo = pathinfo($filename);
    return $pathinfo['extension'];
}