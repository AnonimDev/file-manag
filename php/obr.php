<?php

if (isset($_POST['dir'])){
    $dir = $_POST['dir'];
    if (empty($dir)) {
        $dir = not_repeat(dirname(__FILE__));
    } else not_repeat($dir);
        echo open($dir);
} else echo 'Ошибка при отправке данных!!!';


function not_repeat($dir){

    $arr = explode(DIRECTORY_SEPARATOR, $dir);
    $arr = array_shift($arr);
    $arr .= DIRECTORY_SEPARATOR;

    if ($dir = $arr) {
        $arr = explode(DIRECTORY_SEPARATOR, $dir);
        array_pop($arr);
        $arr = implode(DIRECTORY_SEPARATOR, $arr);
        return $arr;
    } else return $dir;
}

function filesize_format($filesize){
    $formats = array(' Б',' КБ',' МБ',' ГБ',' ТБ');// варианты размера файла
    $format = 0;// формат размера по-умолчанию

    // прогоняем цикл
    while ($filesize > 1024 && count($formats) != ++$format)
    {
        $filesize = round($filesize / 1024, 2);
    }
    $formats[] = ' ТБ';

    return $filesize.$formats[$format];
}

function open($dir){

    $dirs = array();
    $files = array();
    $rez = '';

    $path = trim($dir, '/');

    if ($dir = @opendir($path)) {
        while (false !== ($file = readdir($dir))) {
            if ($file == '.' || $file == '..') continue;

            if (is_file($path . DIRECTORY_SEPARATOR . $file)) {
                $files[] = $path . DIRECTORY_SEPARATOR . $file;
            } else {
                $dirs[] = $path . DIRECTORY_SEPARATOR . $file;
            }
            sort($dirs);
            sort($files);
        }

        closedir($dir);


        $rez .= '<div class="box-elem"><div class="elem"><p><input id="checkbox" type="checkbox" value="' . $arr . '"/>&nbsp;<label>/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></p></div><div class="elem-size"></div><div class="elem-info"></div></div>';
        if (!empty($dirs)) {
            foreach ($dirs as $key => $value) {
                $a = mb_strtolower(mb_substr(mb_strrchr($dirs[$key], DIRECTORY_SEPARATOR), 1));
                $rez .= '<div class="box-elem"><div class="elem"><b><p><input id="checkbox" type="checkbox" value="' . $dirs[$key] . '"/>&nbsp;<label>' . $a . '</label></p></b></div><div class="elem-size"></div><div class="elem-info">Папка</div></div>';
            }
        }
        if (!empty($files)) {
            foreach ($files as $key => $value) {
                $a = mb_strtolower(mb_substr(mb_strrchr($files[$key], DIRECTORY_SEPARATOR), 1));
                $rez .= '<div class="box-elem"><div class="elem"><p><input id="checkbox" type="checkbox" value="' . $files[$key] . '"/>&nbsp;<label>' . $a . '</label></p></div><div class="elem-size">' . filesize_format(filesize($files[$key])) . '</div><div class="elem-info">Файл</div></div>';
            }
        }
    } else {
        $rez .= '<div class="box-elem"><div class="elem"><p><input id="checkbox" type="checkbox" value="' . $arr . '"/>&nbsp;<label>/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></p></div><div class="elem-size"></div><div class="elem-info"></div></div>';
        $rez .= '<br><br>Не могу открыть директорию';
    }

    return $rez;
}

