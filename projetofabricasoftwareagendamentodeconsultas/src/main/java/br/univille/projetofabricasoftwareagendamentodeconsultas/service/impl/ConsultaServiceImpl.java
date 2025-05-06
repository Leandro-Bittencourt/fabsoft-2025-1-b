package br.univille.projetofabricasoftwareagendamentodeconsultas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.ConsultaRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.ConsultaService;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.NotificacaoService;

@Service
public class ConsultaServiceImpl implements ConsultaService {

    @Autowired
    private ConsultaRepository consultaRepository;

    @Autowired
    private NotificacaoService notificacaoService;

    @Override
    public Consulta agendarConsulta(Consulta consulta) {
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
