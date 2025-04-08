package br.univille.projetofabricasoftwareagendamentodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projetofabricasoftwareagendamentodeconsultas.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
