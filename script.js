function volume_sphere(event) {
    event.preventDefault();
    let r = document.getElementById("radius").value;
    if (isNaN(r) || r < 0) {
        document.getElementById('volume').value = 'NaN';
    } else {
        let v = (4/3) * Math.PI * Math.pow(r, 3);
        document.getElementById('volume').value = v.toFixed(4);
    }
}
 window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}