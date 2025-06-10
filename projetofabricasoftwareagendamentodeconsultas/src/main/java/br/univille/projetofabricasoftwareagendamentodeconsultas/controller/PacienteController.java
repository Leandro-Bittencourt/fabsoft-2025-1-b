package br.univille.projetofabricasoftwareagendamentodeconsultas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Paciente;
import br.univille.projetofabricasoftwareagendamentodeconsultas.service.PacienteService;

@RestController
@RequestMapping("/api/v1/paciente")
public class PacienteController {

    @Autowired
    private PacienteService service;

    @GetMapping
    public ResponseEntity<List<Paciente>> getPaciente() {
        var listaPacientes = service.getAll();

        return new ResponseEntity<List<Paciente>>(listaPacientes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Paciente> postPaciente(@RequestBody Paciente paciente) {
        if(paciente == null){
            return ResponseEntity.badRequest().build();
        }
        if(paciente.getId() == 0){
            service.save(paciente);
            return new ResponseEntity<Paciente>(paciente, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }  
    @PutMapping("/{id}")
    public ResponseEntity<Paciente>
        putPaciente(@PathVariable long id,
            @RequestBody Paciente paciente) {

        if(id <=0 || paciente == null){
            return ResponseEntity.badRequest().build();
        }
        var pacienteAntigo = service.getById(id);
        if (pacienteAntigo == null){
            return ResponseEntity.notFound().build();
        } 
        pacienteAntigo.setNome(paciente.getNome());
        pacienteAntigo.setCpf(paciente.getCpf());
        pacienteAntigo.setTelefone(paciente.getTelefone()); 
        pacienteAntigo.setEmail(paciente.getEmail());   
        pacienteAntigo.setConvenio(paciente.getConvenio()); 
        pacienteAntigo.setEndereco(paciente.getEndereco());
        service.save(pacienteAntigo);
        return new ResponseEntity<Paciente>(pacienteAntigo, 
                HttpStatus.OK);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Paciente> deletePaciente(@PathVariable long id) {
            if(id <=0){
                return ResponseEntity.badRequest().build();
            }
            var pacienteExcluido = service.getById(id);
            if (pacienteExcluido == null){
                return ResponseEntity.notFound().build();
            } 
            service.delete(id);

            return new ResponseEntity<Paciente>(pacienteExcluido,
                    HttpStatus.OK);
        }
    }  
