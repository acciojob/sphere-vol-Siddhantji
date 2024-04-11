function volume_sphere() {
    //Write your code here
	const r = document.getElementById("radius");
	let v = document.getElementById("vaolume"); 
	let btn = document.getElementById("submit");
	btn.addEventListener("click",function () {
		const radius = parseFloat(r.value);

            // Calculate the volume of the sphere
            const volume = (4/3) * Math.PI * Math.pow(radius, 3);

            // Round the volume to four decimal places
            const roundedVolume = volume.toFixed(4);

            // Display the calculated volume
            volume.textContent = "Volume: " + roundedVolume;
	})
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
