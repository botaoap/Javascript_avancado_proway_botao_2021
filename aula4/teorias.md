## Conceitos de GitHub
- Branch
- Pull Request

## Gerenciadores de Pacotes
- NPM
- YARN

## JavaScript Modular
- Conceito usado em aplicacoes de grande porte, pois facilita a manutencao
- Nasceu da necessidade de codigo bem organizado e dividio em modulos
- Facilita o entendimento das funcionalidades e evita fazer a mistura das coisas
- Em resumo é importar e exportar funcinalidades
- Ao utilizar, precisa dizer q esta usando o TypeModule
- Usamos o export no arquivo onde fizemos a declaracao do recurso
    export function exibirMensagem() {/*seu codigo aqui*/}
- No arquivo onde desejamos usarr o recurso, fazemos o import.
    import { exibirMensagem } from './util.js<nomde do aquivo>'
    import { exibirMensagem as showMessage} from './util.js' /*cpm alias*/
    import*from './util.js' /*importando todos os itens do pacote*/
- Se exportar como default, quando importar com mesmo nome ou nao
    export default usuario;
    import user from './util.js'; ou import usuario from './util.js';

## Programacao assincrona
- Diferenca entre assincrono e sincrono
  - Se as operacoes nao sao pesadas, o modo sincrono sera suficiente
  - Um exemplo pratico de forma assincrona, quando voce mostrar algum indicatico de progresso (loader) voce pode deixar trabalhando no fundo a continuacao de continuar de execucoes pesadas ou quando voce nao tem dependencia entre os processos, comi sso nao precisa "esperar" uma acao terminar para outra comecar.

## Programcao Funcional
- Segundo Eric Eliott, Programacao funciona é o processo de construir software atraves de composicao de funcoes puras, evitando compartilhamento de estados, dados mutaveis e efeitos colaterais. É declarativa ao inves de imperativa.
- Funcoes puras é aquela que sempre tras o mesmo resultado com os mesmos parametros, ou seja, ela nao depende de valores mutavei.
- Imutabilidade é como se usassemos uma const, ou sejs, o valor é o mesmo ate finalizar
- Imperativo é quando dizemos para fazer algo e como isso sera feito
  - Foca no como e nao no que
  - Dificil legibilidade
  - Eficiente
  - Consolidado(domina o mercado), modelo natural do problema
- Declarativo é dizer o que desejamos, mas sem especificar como.
  - Nao oferece alocacao explicita de memoria ou declaracao explicita de varaveis atrapalhando/atrasando a resolucao de muitos problemas reais.
  - Reduzir efeitos colaterais
  - Minimizar mutabilidade
  - Mais legibilidade e menos bugs
## ProtoType
- Prototype é um frameWork para sanar alguns pontos que sao considerados por alguns os problemas do JavaScript
- O JavaScript parece bem confuso para alguns tipos de desenvolvedores, como quem vem de linguagens fortemente tipadas.
- Linguagens fortemente tipadas sao aquelas que geralmente geram erros/exception quando tenta-se oprecaoes com tipos diferentes, usualmente as variaveis ja nascem com um tipo (string, number) e se pode as vezes ate criar seus proprios tipos.
- JavaScript possui tipagem dinamica e fraca, o que permite codigo mais enxuto, sem compilacoes, trazendo mais velocidade, mas sem seguranca basica do compilador.
- O JavaScript so tem um construtor, que é objetos,
    console:
    const aba = [1,2,3,'a','b']
    aba.__proto__

    const aba2 = {a:1, b:2}
    aba2

    aba3 = {aba2}
    aba.3 -> nao funciona, pois o aba2 n esta dentro do prototype do aba3
    aba3.__proto__ = aba2
    aba3.a -> agr funciona, pois o aba2 esta dentro do prototype do aba3

    -> Acessar variaveis atraves do prototype
    const aba = {a: 'aa', b:11}
    const aba2 = {c: 'cc', d:22}
    const aba3 = {e: 'ee', f:33}

    aba2.__proto__ = aba
    aba2.a
    aba3.__proto__ = aba2
    aba3.a

    function aquario(peixes) {
        this.peixes = peixes;
    }

    aquario.prototype = {
        adicionarPeixe: function(peixe) {
            if(!this.peixes){
            this.peixes = [];
            }
        this.peixes.push(peixe);
        }
    }

    const meuAquario = new aquario(['salmao','tucunare']);

    meuAquario.adicionarPeixe('tainha');

    function aquarioNovo() {
        aquario.call(this);
    }

    aquarioNovo.prototype = Object.create(aquario.prototype);

    const meuAquarioNovo = new aquarioNovo();
    
    meuAquarioNovo.adicionarPeixe('sardinha')

## APIS
- Application Programming, ou API, é um conjunto de padroes de uma interface, ou seja, é um padrao ou norma que permite a comunicacao de plataformas usando geralmente protocolos.
- A partir delas, é possivel a criacao de software, como aplicativos.
- APIs visao simplificar o trabalho de programadores, nao sendo necessario usar codigo personalizado para cada funcao, facilitando criacao de plataformas, apps e softwares, alem de ser algo seguro, bloqueando acesso de alguns recursos.
- Visam a troca de dados para um fim especifico, como um pagamento, informacoes basicas do usuario, sinais vitais de um aparelho, etc.
- APIs tambem sao muito usadas para integracoes entre sistemas e vao desde coisas muito simples à mais complexas, como para sistemas de saude ou financeiros, como (OpenBanking)[https://openbanking-brasil.github.io/areadesenvolvedor/]
- Exemplos
  - Monitores Philips ou Dixtal com software como Tasy
  - WhatsApp com sistema operacional do celular e agenda de contatos
  - Facebook e Instagram que funcionam juntos em postagens e gerenciamento
  - Facebook/Instagram com lojas virtuais
  - Redes sociais com facilidade de login em sites
  - APIs do Open Banking Brasil
  - PagSeguro dentro de sites
- Exemplos para NodeJs
  - GraphQL
  - REST

## REST
- Representional State Transfer, ou simplesmente Rest é um estilo/arquitetura que fornece padroes entre software
- É baseado em requisicao HTTP, como GET, POST, DELETE e UPDATE do protocolo HTTP
- Usa conceito de regras de CRUD
  - Criacao/Post
  - Leitura/Get
  - Upadate
  - Delete
- É um Client-server: Permite a modularizacao, desde que exista uma padronizacao de ocmunicacao,  interface e servidor ficam separados.
- É Stateledd, ou seja, nem servidor, nem cliente precisa saber o status que o outro se encontra. Desta forma nao precisam saber das mensagens anteriores para compreender a atual.
- Pode trabalhar em camadas, permitindo uso de restricoes em diferentes camadas, visando seguranca e desempenho.
- Possui padronizacao de interface, usando o principio da generalidadem sando 4 fatoes.
  - Identificar recursos
  - Gerenciar recursos por representacoes
  - ENviar mensagens auto descritivas
  - Reunir varias midias num ambiente(hipermidia)
- Usa status de quisicao: 200 para sucesso/ok e 201 para sucesso em retorno de obejto/requisicao bem sucedida tipica do Post
- Lembrado que há outros status HTTP:
  - Respostas de informacao (100-199)
  - Respostas de sucesso(200-299)
  - Redirecionamentos(300-399), exemplo 301 - Moved Permanetly
  - Erros de cliente(400-499), exemplo 404 - Not Found
  - Erros do servidor(500-599), exemplo 500 - Internal Server Error.

## GraphQL
- Graphic Query Lenguage (GraphQL) nada mais é do que uma Linguagem de Consulta de Dados em Grafos
- Foi desenvolvida pelo Facebook e é bem similar a uma estrutura oriantada a objetos.
- É umaforma de permitir que o cliente indique ao servidor quais como eles que os dados deverao ser enviados.
    Descreva os seus dados
    type Project{
        dsNome: String
        dsEndereco: String
        dtNascimento: Date
        id: Number
    }

    Solicite oq que quer e como quer
    project(name: "GraphQL") {
        dsNome
        RG: id
    }
    
    Obtenha os resultados
    "project":{
        "dsNome":"Jose"
        "RG": 1234567
    }

## GraphQL vs Rest
- GraphQL é mais eficiente e flexivel que o Rest
- GraphQL permite realizar buscar declarativas onde cliente define especificamente os dados necessarios da API
- Rest foi cirado para aplicacoes relativamente simples em relacao as de hoje
- Rest é mais popular

## TDD
- Test Driven Development ou TDD é um processo de desenvolvimento visando o desenvolvimento rapido e buscando o que foi solicitado
- Baseado em pequenos ciclos usando casos de tetes
- Se ecreve o teste antes do codigo
- Estrutura RED-GREEN-REFACTOR
- Cria o caso de teste -> Testa (ele falha) -> Cria o codigo (funciona) -> refatora o fonte -> Cria o caso de teste
- Teste Unitario: focado em pequnas partes do software, os quais sao rapidos por testar partes isoladas.
- Testes de integracao: focado em verifcar a comunicacao entre componentes dos sistemas e verificar se esta conforme defnido.
- Teste End to End/e2e: focado em percorrer o caminho do usuario fara no software.
- Frameworks para usar TDD
  - (Jest)[https://jestjs.io]
    - By Facebook, pode ser usado no Node, React, Angular entre outros.
    - npm install jest
  - (Mocha)[https://mochajs.org]
    - É um  framework JavaScript open-source para testes assincronos para browsers e Node
    - npm install mochac
  - (Chai)[https://www.chaijs.com]
    - É uma biblioteca para Node que auxilia para testes TDD
    - Funciona bem em Mocha
    - npm install chai
  - (Jasmine)[https://jasmine.github.io]
    - É um framework JavaScript usado para testar tanto a logica quanto o comportamento de software
    - npm install jasmine
## FLOW
- Criado pelo Facebook, é quase um "concorrente" do TypeScript, que diferente dele, nao chega a ser uma outra linguagem
- Trata-se de uma static type checker (checador de tipos estaticos) que da a tipagem, sem mudar a lingaguem
- Usa sintaxe similar ao TypeScript

## Renderizacao do lado do Servidor(SSR)
- Server Side Rendering, é um processo para pegar todo o JavaScript e CSS e realiza-lo do lado do servidor, o qual o enviara como estaico 
- É uma boa opcao em comparacao com SPA, para indexacao/ranqueamento Google, o que para alguns sites é vital
- É possivel usar usar Express como framework que vai abstrair a complexidade desta estrutura, alem de carios outros, como NextJs, que é bem recomendado.