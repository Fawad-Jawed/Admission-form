function generateRollNumber() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!name || !email || !phone || !gender ) {
        alert('Please fill out all fields and select a gender.');

        return;
    }
    const rollNumber = 'R' + Math.floor(Math.random() * 900000 + 100000);
    document.getElementById('result').innerText = `Admission Successful! ${name} Your Roll Number is: ${rollNumber}`;
    document.getElementById('admissionForm').reset();
}
