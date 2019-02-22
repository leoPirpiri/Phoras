# Phoras
## Método de Ridder:
Para a primeira etapa dos trabalhos de cálculo numérico, o grupo Phoras ficou responsável pela implementação do método de Ridders. Esse método faz a avaliação da aproximação obtida no método da _falsa posição_. Seu objetivo é otimizar a busca pela raiz, para isso usa-se função exponencial.

### Funcionamento do método:
Quando uma raiz é considerada entre x1 e x2, esse método avalia a função no ponto médio x3= (x1 + x2) /2. 
Em seguida, calcula a única função exponencial que transforma a função em uma linha reta. É resolvido por eQ, que é determinado por: 

![](https://i.imgur.com/BtiXu0N.png)

Esta função quadrática pode ser resolvida por:

![](https://i.imgur.com/OQyMZK9.png)

O método da falsa posição é aplicado para os pontos f(x1), f(x3)eQ, f(x2)e2Q, gerando um novo valor  para a raiz, o x4, que será utilizado como um dos dois valores na próxima etapa de iteração.  
![](https://i.imgur.com/CVfi8pm.png)


### O trabalho:
Esse trabalho foi desenvolvido em 2 partes:
###### Primeira parte:
A primeira etapa do nosso trabalho foi o desenvolvimento de um site, utilizando HTML e CSS, para que o usuário tenha a sua disposição uma interface gráfica onde possa estar selecionando o método de Ridder e fazendo sua própria analise de forma interativa.
###### Segunda parte:
A segunda parte do trabalho foi o desenvolvimento do metódo de Ridder, cuja implementação foi toda feita em Python. Esse código roda no backend, mostrando os resultados no frontend.
###### Como funciona:
O funcionamento do trabalho é feito através de uma união do Python com o HTML. Após o usuário inserir os dados no site, uma função do python é rodada gerando uma imagem com a plotagem de um gráfico.

A implementação do Ridder é feito da seguinte da maneira:
```
fd = F(xd) 
fe = F(xe)
d0 = abs(fd - fe)
x = xd - fd*(xe-xd)/(fe - fd)
fx = F(x)

a = (fe - fx)/(fx - fd)
b = (fe - fx)/(fe - a*fx)
beta = b - 1
alfa = a - 1
lnb = beta - beta*beta/2 + beta*beta*beta/3
lna = alfa - alfa*alfa/2 + alfa*alfa*alfa/3
root = xe + d0*lnb/lna
froot = F(root)

```
_fd_  e _fe_ são as imagens dos limites laterais direito e esquerdo respectivamente.

_d0_ é a diferença dos limites laterais em módulo

_x_ é o método da falsa posição aplicado no ponto  _xe_ e _xd_

_fx_ é aplicação do método da falsa posição na função

A plotagem do gráfico foi feita da seguinte maneira: 

```
dominio = np.arange(-3.14, 3.14, 0.01)    # cria eixo x de dados
imagem = F(dominio)                       # calcula eixo y de dados
pl.plot(dominio,imagem,color = 'red')
#pl.scatter(dominio,imagem)
pl.legend
pl.grid()
# pl.axis([-1,1,-1,1])
pl.title('Gráfico')
pl.savefig('Grafico.png')
pl.show()

```
_pl.plot_  utilizado para fazer a plotagem do gráfico
_pl.savefig_ utilizado para salvar a plotagem em png e ser mostrada no site



#### materiais baseados para implementação:
[Sawp](http://www.sawp.com.br/blog/?p=563)

[IACS](http://iacs-courses.seas.harvard.edu/courses/am225/notes/am225_ridders.pdf)

