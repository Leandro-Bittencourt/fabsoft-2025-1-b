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
        Pokemon zimba = new Pokemon("Zimba");

        Cliente leandro = new Cliente("Leandro");
        leandro.setNome("Leandro Bittencourt");
        leandro.setCidade(joinville);

        leandro.getListaPokemon().add(richard);
        leandro.getListaPokemon().add(zimba);
        //leandro.getListaPokemon().add(123);
        //leandro.getListaPokemon().add(2.2);
        //leandro.getListaPokemon().add("richard tem bigode");
        //leandro.getListaPokemon().add(true);

        for(int i=0;i<leandro.getListaPokemon().size();i++){
            var umPokemon = leandro.getListaPokemon().get(i);
            System.out.println(umPokemon);
        }

        for(var umPokemon : leandro.getListaPokemon()) {
            System.out.println(umPokemon);
        }

        //gere um código para listar pokemons utilizando o método stream
        leandro.getListaPokemon().stream().forEach(System.out::println);

        Cliente mariazinha = new Cliente("Mariazinha");
        mariazinha.setNome("Mariaznha");


        System.out.println(leandro);
        System.out.println(mariazinha);
    }
}
