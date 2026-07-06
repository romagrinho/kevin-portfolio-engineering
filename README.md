# Portfólio de Certificações e Formação - Kevin Magagnini

Este projeto foi desenvolvido com o objetivo de criar um portfólio dinâmico e visualmente atraente para um amigo engenheiro, Kevin Magagnini. A ideia principal é destacar suas certificações e formação acadêmica de forma organizada, permitindo que ele apresente suas qualificações de maneira profissional e moderna.

## Visão Geral do Projeto

O portfólio é uma página web estática que utiliza HTML, CSS e JavaScript para proporcionar uma experiência de usuário fluida e responsiva. Ele permite filtrar as certificações por categorias (Formação Acadêmica, Dados & Tech, Gestão & Processos) e visualizar os certificados diretamente no navegador.

## Funcionalidades

- **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela, garantindo uma ótima visualização em dispositivos móveis e desktops.
- **Filtros Interativos:** Os usuários podem filtrar as certificações por categoria, facilitando a navegação e a busca por informações específicas.
- **Visualização de Certificados:** Cada card de certificação possui um botão para visualizar o certificado em PDF diretamente no navegador, sem a necessidade de download.
- **Estrutura de Código Limpa:** O código foi refatorado para separar o CSS (`style.css`) e o JavaScript (`script.js`) do arquivo HTML (`index.html`), seguindo as melhores práticas de desenvolvimento web para facilitar a manutenção e escalabilidade.

## Estrutura do Projeto

```
. <!-- Diretório raiz do projeto -->
├── index.html          <!-- Página principal do portfólio -->
├── style.css           <!-- Estilos CSS para o portfólio -->
├── script.js           <!-- Lógica JavaScript para filtros e interações -->
├── README.md           <!-- Este arquivo -->
└── certificacoes/      <!-- Pasta para armazenar os PDFs dos certificados -->
    ├── Engenharia_de_Producao_UNIVESP.pdf
    ├── Supply_Chain_Chain_Management_UniCesumar.pdf
    ├── Microsoft_Power_BI_SENAI.pdf
    ├── Dashboard_Excel_SENAI.pdf
    ├── Excel_Avancado_SENAI.pdf
    ├── White_Belt_Six_Sigma_RL_Associados.pdf
    ├── Gestor_do_Futuro_Tetra_Educacao.pdf
    └── Design_Thinking_FIAP.pdf
```

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/romagrinho/kevin-portfolio-engineering.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd kevin-portfolio-engineering
Public

   ```
3. Abra o arquivo `index.html` em seu navegador web para visualizar o portfólio.
```

## Personalização

- **Conteúdo:** Edite o arquivo `index.html` para atualizar as informações de contato, sobre, e adicionar novas certificações.
- **Certificados:** Substitua os arquivos PDF na pasta `certificacoes/` pelos seus próprios certificados. Certifique-se de que os nomes dos arquivos PDF no `index.html` correspondem aos nomes dos arquivos na pasta `certificacoes/`.
- **Estilos:** Modifique o arquivo `style.css` para ajustar as cores, fontes e layout conforme suas preferências.
- **Funcionalidade:** O arquivo `script.js` contém a lógica para os filtros. Caso precise de funcionalidades adicionais, este é o local para implementá-las.

## Contribuições

Sinta-se à vontade para sugerir melhorias ou reportar problemas. Este projeto é um trabalho em andamento e toda contribuição é bem-vinda!

## Autor

Desenvolvido por Romario para Kevin Magagnini Caetano.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.