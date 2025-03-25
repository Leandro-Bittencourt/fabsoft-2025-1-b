package br.univille.entity;

import java.util.ArrayList;

public class Cliente {
    //variável - atributi
    private long id;
    private String nome;
    private String endereço;

    private ArrayList<Pokemon> listaPokemon = new ArrayList<Pokemon>();

    public ArrayList<Pokemon> getListaPokemon() {
        return listaPokemon;
    }
    public void serListaPokemon(ArrayList<Pokemon> listaPokemon){
        this.listaPokemon = listaPokemon;
    }

    private Cidade cidade;

    public Cidade getCidade() {
        return cidade;
    }
    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getEndereço() {
        return endereço;
    }
    public void setEndereço(String endereço) {
        this.endereço = endereço;
    }
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
