<?php
// PDO e MySQLi
// PDO é mais moderno

$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'primeiro_banco';

try {
    $pdo = new PDO(
        "mysql:host=$servidor;dbname=$banco",
        $usuario,
        $senha
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Banco de dados conectado com sucesso!";
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
}
