// Exemplo de médicos e horários disponíveis
const horarios = {
    psicologo: ['10:00', '14:00', '16:00'],
    psiquiatra: ['08:00', '13:00', '15:00'],
    terapeuta: ['09:00', '11:00', '13:00']
};

// Função para atualizar a lista de horários com base na seleção do especialista
document.getElementById('especialistaSelect').addEventListener('change', function() {
    const especialista = this.value;
    const horariosDisponiveis = horarios[especialista];

    // Limpa a lista de horários
    const horariosContainer = document.getElementById('horariosDisponiveis');
    horariosContainer.innerHTML = '';

    // Adiciona os horários disponíveis para o especialista selecionado
    horariosDisponiveis.forEach(function(horario) {
        const li = document.createElement('li');
        li.textContent = horario;
        horariosContainer.appendChild(li);
    });
});

// Função para marcar a consulta
document.getElementById('marcarConsultaBtn').addEventListener('click', function() {
    const dataConsulta = document.getElementById('dataConsulta').value;
    const horarioSelecionado = document.querySelector('#horariosDisponiveis li:hover');

    if (dataConsulta && horarioSelecionado) {
        document.getElementById('confirmacao').style.display = 'block';
    } else {
        alert('Por favor, selecione a data e o horário da consulta!');
    }
});
