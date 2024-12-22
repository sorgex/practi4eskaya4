
 const newYear = new Date("2025-01-01T00:00:00");
        
 function updateTimer() {
	 const now = new Date();
	 
	 const diff = newYear - now;
	 
	 let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	 let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	 let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	 let seconds = Math.floor((diff % (1000 * 60)) / 1000);
	 
		 document.querySelector('.day').innerHTML = `${Math.abs(days).toString().padStart(2, '0')} дней `
		 document.querySelector('.hours').innerHTML = `${Math.abs(hours).toString().padStart(2, '0')} часов `
		 document.querySelector('.minuts').innerHTML = `${Math.abs(minutes).toString().padStart(2, '0')} минут `
		 document.querySelector('.seconds').innerHTML = `${Math.abs(seconds).toString().padStart(2, '0')} секунд`
 }
 
 const timerId = setInterval(updateTimer, 1000);
 updateTimer();



































 function createStar() {
	let star = document.createElement('div');
	star.classList.add("djisfhg");
	document.body.appendChild(star);
	let s = star.style;
	
	s.width = "40px";
	s.height = "40px";
	s.backgroundColor = "white";
	s.position = "absolute";
	s.transition = `${1 + r(3)}s cubic-bezier(${r()}, ${r()}, ${r()}, ${r()})`;
	s.left = `${20 + r(window.innerWidth - 20)}px`;
	s.top = "-30px";

	setTimeout(() => {
		s.top = "1550px";
		s.transform = `rotate(${r(2000) - 1000}deg) translate(${r(200) - 100}px) rotate(${r(1000) - 500}deg)`;
		s.backgroundColor = `hsl(${r(360)}, ${25 + r(50)}%, ${25 + r(50)}%)`;
		// s.opacity = 0;
	}, 100);

	setTimeout(() => star.remove(), 7000);

	return star;
}

let r = i => Math.random() * (i || 1);

setInterval(() => {
	let star = createStar();

	const messages = Array.from(document.querySelectorAll('.pozdravlenie'));

	star.addEventListener('click', () => {
		const randomIndex = Math.floor(Math.random() * messages.length);
		const selectedMessage = messages[randomIndex];
		selectedMessage.style.display = 'block';
		setTimeout(() => selectedMessage.style.display = 'none', 3000);
	});
}, 0);


// let qwe = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20]
// function pozdraw(){
// 	let = random4ik = Math.floor(Math.random()*qwe.length)
// 	outputDiv.textContent = messages[random4ik];
//     outputDiv.style.display = "block";
// }
 
//  document.addEventListener("DOMContentLoaded", function() {
//     if (confirm("Хотите включить фоновую музыку?")) {
//         const audio = document.getElementById("backgroundMusic");
//         audio.play();
//     }
// });