<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];

    // Configuración de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Servidor SMTP (puedes cambiarlo si usas otro proveedor)
        $mail->SMTPAuth = true;
        $mail->Username = 'tuemail@gmail.com'; // Cambia esto por tu correo Gmail
        $mail->Password = 'tupassword'; // Contraseña de tu correo (o contraseña de aplicación si usas Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom('tuemail@gmail.com', 'Formulario de Reserva'); // Correo del remitente
        $mail->addAddress('maurorjzeballos@hotmail.com'); // Correo de destino (el tuyo)

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = "Nueva Reserva - $nombre";
        $mail->Body = "<h1>Nueva Reserva</h1>
                        <p><strong>Nombre y Apellido:</strong> $nombre</p>
                        <p><strong>Correo Electrónico:</strong> $correo</p>";
        $mail->AltBody = "Nueva Reserva\nNombre y Apellido: $nombre\nCorreo Electrónico: $correo";

        // Enviar el correo
        $mail->send();
        header("Location: gracias.html"); // Redirecciona a la página de confirmación
        exit;
    } catch (Exception $e) {
        echo "Hubo un error al enviar la reserva. Intenta de nuevo. Error: {$mail->ErrorInfo}";
    }
}
?>
