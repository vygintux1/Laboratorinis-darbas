
const devices = {
    light: {
        name: "Light",
        isOn: false
    },
};
const camera = {
    name: "Camera",
    images: [
        "Paveiksleliai/Kamera1.png",
        "Paveiksleliai/Kamera2.png",
        "Paveiksleliai/Kamera3.png",
        "Paveiksleliai/Kamera4.png"
    ],
    currentImageIndex: 0
};

document.addEventListener("DOMContentLoaded", function () {
    const cameraBox = document.getElementById("cameraBox");

    window.toggleCamera = function () {
        const cameraImage = document.createElement("img");
        cameraImage.src = camera.images[camera.currentImageIndex];
        cameraImage.style.width = "600px";
        cameraImage.style.height = "350px";
        cameraBox.innerHTML = "";
        cameraBox.appendChild(cameraImage);

        camera.currentImageIndex = (camera.currentImageIndex + 1) % camera.images.length;
    };

    const devicesContainer = document.getElementById("devicesContainer");

    Object.keys(devices).forEach(deviceId => {
        createDeviceElement(deviceId);
    });

    function createDeviceElement(deviceId) {
        const device = devices[deviceId];
        const deviceElement = document.createElement("div");
        devicesContainer.appendChild(deviceElement);
    }

    window.toggleDevice = function () {
        const isOn = !cameraBox.classList.contains('on');
        cameraBox.classList.toggle('on', isOn);

        if (isOn) {
            colorBox.style.backgroundColor = 'black';
            lightButton.textContent = "Turn On";
        } else {
            colorBox.style.backgroundColor = 'yellow';
            lightButton.textContent = "Turn Off";
        }
    };

    window.updateTemperature = function () {
        const temperatureValue = document.getElementById("temperatureValue");
        const temperatureSlider = document.getElementById("temperatureSlider");
        temperatureValue.textContent = temperatureSlider.value + "°C";
    };
});
