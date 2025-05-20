package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Consulta;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Medico;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
    List<Consulta> findByMedicoId(Long idMedico);
    List<Consulta> findByPacienteId(Long idPaciente);

    public interface MedicoRepository extends JpaRepository<Medico, Long> {}
    public interface PacienteRepository extends JpaRepository<Paciente, Long> {}

}

