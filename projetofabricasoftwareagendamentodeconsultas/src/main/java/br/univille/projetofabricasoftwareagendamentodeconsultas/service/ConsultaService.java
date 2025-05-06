package br.univille.projetofabricasoftwareagendamentodeconsultas.service;

import java.util.List;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;

public interface ConsultaService {
    Consulta agendarConsulta(Consulta consulta);
    List<Consulta> listarPorMedico(Long idMedico);
    List<Consulta> listarPorPaciente(Long idPaciente);
}
