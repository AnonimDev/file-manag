<?php
include "php/header.php";
?>

<div class="container">
    <div class="starter-template">
        <h1>Файловый менеджер</h1><br>
            <select class="sel">
                <option selected disabled>Выбирете шрифт</option>
                <option value="1">Мелкий</option>
                <option value="2">Средний</option>
                <option value="3">Крупный</option>
            </select>
        <div class="box">
            <div class="box-elem">
                <div class="elem"></div>
                <div class="elem-size"></div>
                <div class="elem-info"></div>
            </div>
        </div>
    </div>
</div>
<?php
include "php/footer.php";
?>