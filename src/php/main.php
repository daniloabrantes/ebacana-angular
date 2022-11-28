<?php

include_once('./formu.php');

if(isset($_POST['submit'])){


$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$entrega = $_POST['entrega'];
$cep = $_POST['cep'];
$rua = $_POST['rua'];
$bairro = $_POST['bairro'];
$num = $_POST['num'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];
$pagamento = $_POST['pagamento'];
$observacao = $_POST['observacao'];

$result = mysqli_query($conexao, "INSERT INTO cliente(NOME, TELEFONE, EMAIL, ENTREGA, CEP, RUA, BAIRRO, NUM, CIDADE, UF, PAGAMENTO, OBSERVACAO) 
            VALUES ('$nome', '$telefone', '$email', '$entrega', '$cep', '$rua', '$bairro', '$num', '$cidade', '$uf', '$pagamento', '$observacao')");

}

?>