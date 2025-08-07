document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const checkReg = await fetch(`http://localhost:3000/users?email=${email}`);
  const users = await checkReg.json();

  if (users.length > 0) {
    alert('Usuario ya registrado');
    return;
  }

  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password, role })
  });

  alert('Registro exitoso');
  window.location.href = '../index.html';
});