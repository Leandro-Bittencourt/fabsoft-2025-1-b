import br.univille.entity.Cliente;
import br.univille.entity.Pokemon;
import br.univille.entity.Cidade;

public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");

        Pokemon richard = new Pokemon("Richard");

        Cliente leandro = new Cliente("Leandro");
        leandro.setNome("Leandro Bittencourt");
        leandro.setCidade(joinville);

        leandro.getListaPokemon().add(richard);

        Cliente mariazinha = new Cliente("Mariazinha");
        mariazinha.setNome("Mariaznha");


        System.out.println(leandro);
        System.out.println(mariazinha);
    }
}
