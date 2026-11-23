# Documentação da API — Serviços

## 1. Identificação

| Informação | Valor |
| --- | --- |
| Nome do projeto | CiroLancers |
| Turma e equipe | 2info3 / CiroLancers |
| Repositório | https://github.com/Hackatonn-2026/RemontadaLancers |
| Entidade documentada | Serviços |
| Integrante responsável | Valentina Damas |
| Versão e data | 1.0 / 22/11/2026 |

## 2. Finalidade da entidade

Um serviço representa uma necessidade publicada por um cliente. A listagem permite que freelancers encontrem pedidos e enviem uma solicitação para atendê-los.

## 3. Campos e regras

| Campo | Tipo | Obrigatório | Descrição ou regra |
| --- | --- | --- | --- |
| `id` | Gerado pelo JSON Server | Sim | Identificador do serviço. Os dados iniciais usam números; no teste com JSON Server `1.0.0-beta.15`, o ID criado foi texto. |
| `usuarioId` | Número | Sim | Identifica o usuário que publicou o serviço. |
| `titulo` | Texto | Sim | Nome resumido do pedido; não pode ficar vazio. |
| `categoria` | Texto | Sim | Categoria escolhida no cadastro. |
| `descricao` | Texto | Sim | Descrição do serviço; não pode ficar vazia. |
| `localizacao` | Texto | Sim | Região ou zona selecionada. |
| `preco` | Número | Sim | Orçamento estimado; a tela não aceita valor negativo. |
| `orcamento` | Texto | Sim | Valor formatado em reais, por exemplo `R$ 150,00`. |

O formulário também pede data e turno, mas esses valores aparecem apenas no resumo e não são enviados à API atualmente.

As validações são feitas pela aplicação. O JSON Server não verifica essas regras dos campos.

## 4. Endpoints

URL base local: `http://localhost:3000`

Coleção no `db.json`: `servicos`

| Método | Endpoint | O que faz | Resposta observada ou esperada |
| --- | --- | --- | --- |
| GET | `/servicos` | Lista os serviços. | `200 OK` |
| GET | `/servicos/:id` | Busca um serviço pelo ID. | `200 OK`; `404` quando não encontrado |
| POST | `/servicos` | Cadastra um serviço. | `201 Created` |
| PATCH | `/servicos/:id` | Atualiza os campos enviados. Este CRUD usa PATCH. | `200 OK` |
| DELETE | `/servicos/:id` | Exclui o serviço pelo ID. | `200 OK` no teste local |

O CRUD escolheu `PATCH` porque a atualização envia os campos editados do serviço. `PUT` não é usado.

## 5. Corpos das requisições

### POST `/servicos`

O ID é gerado pelo JSON Server e não deve ser enviado no cadastro.

```json
{
  "usuarioId": 1,
  "titulo": "Instalação de tomadas",
  "categoria": "Elétrica",
  "descricao": "Preciso instalar três tomadas em um quarto.",
  "localizacao": "Zona Oeste",
  "preco": 150,
  "orcamento": "R$ 150,00"
}
```

### PATCH `/servicos/:id`

O exemplo altera apenas o preço e o orçamento:

```json
{
  "preco": 180,
  "orcamento": "R$ 180,00"
}
```

GET e DELETE não precisam de corpo JSON.

## 6. Relacionamentos

- Um usuário pode publicar mais de um serviço. O vínculo é guardado em `usuarioId`.
- A categoria fica salva como texto em `categoria`; não há `categoriaId` no cadastro atual.
- As solicitações guardam `servicoId` no `localStorage` do navegador. Antes de excluir, a tela verifica se há solicitações ligadas ao serviço.
- As avaliações existentes no projeto ficam ligadas aos dados do profissional; o CRUD de serviços não grava avaliações.

## 7. Telas e comportamento esperado

| Tela ou ação | Comportamento |
| --- | --- |
| Listagem (`/servicos`) | Busca os registros e mostra carregamento, lista vazia ou falha. |
| Cadastro (`/cadastro-servico`) | Exige usuário logado, título, descrição e orçamento válido; envia POST. |
| Detalhes (`/servicos/:id`) | Busca o registro pelo ID e mostra mensagem se não for encontrado. |
| Edição | Preenche os campos com os dados atuais, valida título, descrição e orçamento e envia PATCH. |
| Exclusão | Impede excluir serviço com solicitações vinculadas, pede confirmação e só então envia DELETE. |

Depois de cadastrar, editar ou excluir, a tela de serviços é carregada novamente. A mensagem de sucesso só aparece após a resposta da API ser verificada. Cancelar a confirmação de exclusão não envia DELETE.

As chamadas `fetch` ficam nas telas que as utilizam: cadastro em `CadastroServicoView.vue`; listagem, edição e exclusão em `ServicosView.vue`; consulta por ID em `DetalhesServicoView.vue`.

## 8. Códigos de resposta

| Código | Significado | Uso neste CRUD |
| --- | --- | --- |
| `200` | Requisição concluída. | Listagem, consulta, atualização e exclusão, conforme observado no servidor local. |
| `201` | Recurso criado. | Cadastro por POST; observado no teste local. |
| `400` | Requisição inválida. | O JSON Server não valida automaticamente os campos. A aplicação faz validações simples no formulário. |
| `404` | Recurso não encontrado. | A tela de detalhes mostra mensagem quando a busca retorna 404. |
| `500` | Erro interno do servidor. | Não foi provocado no teste; erros de resposta da API são apresentados como falha na tela. |

No teste local, uma consulta ao ID logo após a exclusão também respondeu `200`. Por isso, a tela de detalhes confere se a resposta contém um `id` antes de exibir o registro.

## 9. Registro dos testes

Responsável pelos testes: Valentina Damas

Data: 22/11/2026

Atualização escolhida: PATCH

Os testes de API foram feitos com um serviço temporário, removido ao final.

| Operação | Teste realizado | Código observado | Resultado |
| --- | --- | ---: | --- |
| Cadastrar | Enviar dados válidos por POST. | `201` | Serviço de teste criado. |
| Listar | Conferir o serviço criado na coleção. | `200` | Serviço apareceu na lista. |
| Consultar ID | Consultar o ID criado e um ID inexistente. | `200` / `404` | O existente foi retornado e o inexistente foi informado como não encontrado. |
| Atualizar | Alterar preço e orçamento com PATCH. | `200` | O preço alterado apareceu na resposta. |
| Excluir | Excluir o registro de teste. | `200` | O registro temporário não permaneceu no `db.json`. |

Observação: após DELETE, a consulta direta ao ID excluído retornou `200` no JSON Server usado. O código da tela de detalhes também confere se a resposta contém um `id`.

## 10. Como iniciar e divisão do trabalho

Versão instalada do JSON Server: `1.0.0-beta.15`.

Instale as dependências na raiz do projeto:

```sh
npm install
```

Inicie a API em um terminal:

```sh
npm run api
```

Inicie a aplicação em outro terminal:

```sh
npm run dev
```

A API local usa `http://localhost:3000` e o Vite usa `http://localhost:5173`. O CRUD da entidade serviços é responsabilidade de Valentina Damas.
