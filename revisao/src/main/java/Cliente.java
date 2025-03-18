public class Cliente {
    //variável - atributi
    private String nome;

    //construtor - mesmo nome da classe e não tem retorno
    //2 funções - inicializar atributos
    //obrigar a passagem de valores
    public Cliente(String nome) {
        this.nome = nome;
    }
    public Cliente() {
        //polimorfismo - várias formas de existir a mesma coisa
    }

    //método
    //sobreescrita de método(meu pai me deu pronto e eu zuera reescrevi)
    @Override
    public String toString(){
        return getNome();
        //quando da F5 os nomes aparecem, ao invés de um código
    }

    //método
    public String getNome() {return nome;
    
    }

    public void setNome(String nome){
        this.nome = nome;
    }
 
 }
