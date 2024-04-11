function volume_sphere() {
    //Write your code here
	 const calculateBtn = document.getElementById("submit");
        const radiusInput = document.getElementById("radius");
        const volumeOutput = document.getElementById("volume");

        calculateBtn.addEventListener("click", function() {
            // Get the value of the radius input
            const radius = parseFloat(radiusInput.value);

            // Calculate the volume of the sphere
            const volume = (4/3) * Math.PI * Math.pow(radius, 3);

            // Round the volume to four decimal places
            const roundedVolume = volume.toFixed(4);

            // Display the calculated volume
            volumeOutput.textContent = roundedVolume;
        });
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
