package br.univille.projetofabricasoftwareagendamentodeconsultas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;
import br.univille.projetofabricasoftwareagendamentodeconsultas.repository.PacienteRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.PacienteService;

@Service
public class PacienteServiceImpl implements PacienteService{

    @Autowired
    private PacienteRepository repository;

    @Override
    public Paciente save(Paciente paciente) {
        repository.save(paciente);
        return paciente;
    }   

    @Override
    public List<Paciente> getAll() {
        return repository.findAll();
    }

    @Override
    public Paciente getById(Long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get(); 
        return null;
    }

    @Override
    public Paciente delete(Long id) {
        var paciente = getById(id);
        if (paciente != null)
            repository.deleteById(id);
        return paciente;
    }

}
