<?php

$data = isset($_REQUEST['data']) ? $_REQUEST['data'] : '<div><b> No content. </b></div>';

// Initialize cURL
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    // Construct the POSTFIELDS with dynamic htmlbody content
    CURLOPT_POSTFIELDS => json_encode(array(
        "from" => array("address" => "noreply@vigtas.com"),
        "to" => array(
            array("email_address" => array("address" => "info@viganium.com", "name" => "Viganium"))
        ),
        "subject" => "New Client",
        "htmlbody" => $data,
    )),
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey wSsVR60irEL1Xf99mWasJrw7z1oDA1ulRxso3lTw6HD+SqrK9sc5wUOaUAD2HaMXQGVrRWESrLl4n00J12YJ3YwtmQ4BACiF9mqRe1U4J3x17qnvhDzKW2hfmhGPK48Kwg5pnWVjE8Eh+g==",
        "cache-control: no-cache",
        "content-type: application/json",
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo "Done";
}
?>
