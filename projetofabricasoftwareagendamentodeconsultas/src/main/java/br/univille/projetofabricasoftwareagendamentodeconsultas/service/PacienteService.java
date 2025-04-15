package br.univille.projetofabricasoftwareagendamentodeconsultas.service;

import java.util.List;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;

public interface PacienteService {
    Paciente save(Paciente paciente); 
    List<Paciente> getAll();
    Paciente getById(Long id);
    Paciente delete(Long id);
    
}
