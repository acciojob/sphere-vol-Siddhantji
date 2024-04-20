function volume_sphere() {
    const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");

    // Get the value of the radius input
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius < 0) {
        // Set the output to 'NaN' if radius is not a valid number
        volumeOutput.value = 'NaN';
    } else {
        // Calculate and display the volume if radius is valid
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        // Round the volume to four decimal places
        const roundedVolume = volume.toFixed(4);
        // Display the calculated volume
        volumeOutput.value = roundedVolume;
    }
}

window.onload = function() {
    const calculateBtn = document.getElementById("submit");
    calculateBtn.addEventListener("click", volume_sphere);
};
