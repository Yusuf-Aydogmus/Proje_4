<DOCTYPE html>
<html>
    <head></head>
    
    
    <body>
    
    
    
        <h1> Login İşlemi Başarılı</h1>
    
    <?php
	$username=$_POST['ad'];
	$password=$_POST['sifre'];
	
	if($username=="g191210071@sakarya.edu.tr" &&$password=="123"){
	 echo " Hoşgeldiniz ".$_POST['ad']. " adlı kullanıcı";
	
	}else{
		header("Location:Login.html");
	}
    ?>
    </body>    
    
    
    
    
    
    
</html>    
