package br.univille.projetofabricasoftwareagendamentodeconsultas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.ConsultaRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.MedicoRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.PacienteRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.ConsultaService;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.NotificacaoService;

@Service
public class ConsultaServiceImpl implements ConsultaService {

    @Autowired
    private ConsultaRepository consultaRepository;

    @Autowired
    private MedicoRepository medicoRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private NotificacaoService notificacaoService;

    @Override
    public Consulta agendarConsulta(Consulta consulta) {
        Medico medico = medicoRepository.findById(consulta.getMedico().getId())
                .orElseThrow(() -> new RuntimeException("Médico não encontrado"));

        Paciente paciente = pacienteRepository.findById(consulta.getPaciente().getId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        consulta.setMedico(medico);
        consulta.setPaciente(paciente);

        Consulta nova = consultaRepository.save(consulta);
        notificacaoService.agendarNotificacao(nova);
        return nova;
    }

    @Override
    public List<Consulta> listarPorMedico(Long idMedico) {
        return consultaRepository.findByMedicoId(idMedico);
    }

    @Override
    public List<Consulta> listarPorPaciente(Long idPaciente) {
        return consultaRepository.findByPacienteId(idPaciente);
    }
}
