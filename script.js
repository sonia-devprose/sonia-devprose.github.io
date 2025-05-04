document.addEventListener('DOMContentLoaded', ()=>{
	const emailInput = document.querySelector('.input')
	const passwordInput = document.querySelector('.password')
	const toggleIcon = document.querySelector(".eye-icon")
	const loginButton = document.querySelector(".field button-field")
	const loginForm = document.querySelector('form')


if (toggleIcon) {
toggleIcon.addEventListener('click', () =>{
	// toggle logic, that is toggle to text if it is password-coded and vice-versa
	const type = passwordInput.type === 'password' ? 'text' : 'password';
	passwordInput.type = type;
	toggleIcon.classList.toggle("bxs-show");
toggleIcon.classList.toggle("bxs-hide");
}
)
}

// Fake login validation
loginForm.addEventListener('submit', (e) =>{
	e.preventDefault()

	const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert('⚠️ Please fill in both email and password.');
			loginButton.disabled=false; //re-enable button
      return;
    }

    const validEmail = 'test@example.com';
    const validPassword = 'Test@123';

    if (email === validEmail && password === validPassword) {
      alert('✅ Login successful!');
      localStorage.setItem('userEmail', email); // save user email to local storage

		//redirect to dashboard after 1.5 seconds
		setTimeout(() =>{
window.location.href= "dashboard.html"

		}, 1500)
		} 
		else {
      alert('❌ Invalid email or password.');
			loginButton.disabled=false; //re-enable button
    }

})


}
)

