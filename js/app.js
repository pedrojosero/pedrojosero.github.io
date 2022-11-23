const form = document.getElementById('formulario');
const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');
const noExito = document.getElementById('noexito')
const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

btnSi.addEventListener('click', () => {
	const formu = `
    <label class="label" for="nombre">Guest Name <span class="required">(required)</span></label>
      <div class="contenedor-input">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <input type="text" id="nombre" name="nombre" placeholder="Pete Michell">
      </div>
    
    
    <h4>thinks it will be a...</h4>
    
    <div class="radio-buttons" id="accordion">
      <label class="custom-radio" for="first">
        <input type="radio" value="Boy" name="accordion" id="first" checked />
        <span class="radio-btn"
          ><i class="las la-check"></i>
          <div class="hobbies-icon">
            <img src="img/baby.png" alt="baby-boy">
            <h3>Boy</h3>
          </div>
        </span>
      </label>
      <label class="custom-radio" for="second">
        <input type="radio" value="Girl" name="accordion" id="second" />
        <span class="radio-btn"
          ><i class="las la-check"></i>
          <div class="hobbies-icon">
            <img src="img/baby-girl.png" alt="baby-girl">
            <h3>Girl</h3>
          </div>
        </span>
      </label>
    </div>
    <div class="botones">
    <button type="submit" class="btn-agregar" id="btn-agregar">submit</button>
    </div>


	`;

	form.innerHTML += formu;
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    await fetch('https://sheet.best/api/sheets/61786ca2-0443-4d6a-b84f-84304ba3ffd8', {
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Genero": formulario.accordion.value
        })
    });

    registro.classList.remove('activo');
    exito.classList.add('activo');
    main.classList.add('gracias-container');


});