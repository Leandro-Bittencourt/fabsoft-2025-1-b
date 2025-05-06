package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
    List<Consulta> findByMedicoId(Long idMedico);
    List<Consulta> findByPacienteId(Long idPaciente);
    List<Consulta> findByStatus(String status);
}
