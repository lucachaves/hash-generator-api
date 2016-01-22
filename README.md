# hash-generator-api

Para executar o projeto é necessário que seu computador possui o node.js e o openssl instalados. A princípio o primeiro passo consiste em copiar o projeto:

```
git clone https://github.com/lucachaves/hash-generator-api.git
```

Depois será necessário instalar as dependências e executar o servidor:

```
npm install
npm start
```

## API

### Gerar hash por tipo

Para gerar o hash a partir de um texto é necessário utilizar o método **GET** para a rota `/hash/:tipo/:string`, sendo o parametro **:tipo** determinado para especificar o hash e **:string** o texto que irá gerar o hash:

```
http://localhost:5000/hash/:tipo/:string
```

Exemplos:

* Obter hash md5 da string "luiz":
```
http://localhost:5000/hash/md5/luiz
```
  Resultado:

```javascript
{
  "kind": "md5",
  "string": "luiz",
  "hash": "77949c9f02621a4c85964be115a9dcc9"
}
```

* Obter hash sha1 da string "luiz":
```
http://localhost:5000/hash/sha1/luiz
```
  Resultado:

```json
{
  "kind": "sha1",
  "string": "luiz",
  "hash": "d41299ad60d93e51ccd50a655482a9177c2e2679"
}
```

### Obter tipos de hash

Para obter os tipos de algoritmos de hash disponível é necessário utilizar o método **GET** para a rota `/hash/types`:

```
http://localhost:5000/hash/types
```

Resultado: 

```json
{
  "types": ["md2","md4","md5","mdc2","rmd160","sha","sha1"]
}
```

