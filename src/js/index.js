/* Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem. Para isso vamos precisar trabalhar com dois elementos

1 - listagem
2 -  cartào do pokemon

Precisamos criar duas variáveis JS pra trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem dos pokemons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
- remover a classe ativo que marca o pokemon selecionado
- adicionar classe ativo no item da lsita selecionado
*/

// Precisamos criar duas variáveis JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem dos pokemons

listaSelecaoPokemons.forEach(pokemon => {
    //remover a classe aberto só do cartão que está aberto
    pokemon.addEventListener('click', () => {
       
       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')

       //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value
        const idDocartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDocartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //remover a classe ativo que marca o pokemon selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar classe ativo no item da lsita selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})