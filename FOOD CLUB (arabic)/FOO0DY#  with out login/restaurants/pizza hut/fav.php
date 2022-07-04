<html>
<head>
<title>Favorite</title>
</head>
<body>
<div id="container">
<i class="fas fa-heart"></i>
</div>
<script>
	const button = document.querySelector("#container .fa-heart");
	
	button. onclick = (fav())=>{
		let xhr = new XMLHttpRequest();
	xhr.open ("GET", "fav.php?userid=1&contentid=1", true);
	xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){

                if (xhr.status === 200){
                    button.classList.toggle("active");
                }
            }
																
	    }
	xhr.send();
	}
</script>
</body>
</html>
<?php
// FAV.PHP New Check if it works
    if(isset($_GET[ "userid"])){
        $userid = $_GET["userid"]:
        $contentid = $_GET[ "contentid"]:

        $select = $connect->prepare ("SELECT * FROM favbutton WHERE userid = ?");
        $select->execute([$userid]);
        $number=$select->rowCount();
        if ($number>0){
            $delete = $connect->prepare ("DELETE FROM favbutton WHERE contentid = ?");
            $delete->execute([$contentid]);
        }else{
            $insert = $connect->prepare ("INSERT INTO favbutton (userid, contentid) VALUES (?,?)");
            $insert->execute ([$userid, $contentid]);
        }
    }
?>