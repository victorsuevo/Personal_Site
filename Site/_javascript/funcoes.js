function mudaFoto (foto){
		document.getElementById("icone").src = foto;
		}

function showIcon(event, iconId) {
	const icon = document.getElementById(iconId);
    if (icon) {
      icon.style.left = `${event.pageX + 10}px`; // Ajusta a posição do ícone
      icon.style.top = `${event.pageY + 10}px`;
      icon.style.display = 'block'; // Mostra o ícone
    }
  }

function hideIcon(iconId) {
    const icon = document.getElementById(iconId);
    if (icon) {
      icon.style.display = 'none'; // Esconde o ícone
    }
  }