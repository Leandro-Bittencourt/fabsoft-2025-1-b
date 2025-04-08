package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

@Repository
public interface PacienteRepository
    extends JpaRepository<Paciente, Long> {
    //método de busca de lista de pacientes com nome entre dois valores
    List<Paciente> findByNomeBetween(String nome1, String nome2);
}
