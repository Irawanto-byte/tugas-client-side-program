
function displaymessage(){
			alert("Hi guys...! Selamat Pagi!");
	}
	
	function menampilkannama(e){
		e.preventDefault()
		let h1 = document.getElementById('pesan')
		let nama=document.forms["FormNama"]["nama"].value;
		h1.innerHTML = nama;
		alert(nama)
	}
