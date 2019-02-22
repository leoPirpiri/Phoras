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


#### materiais baseados para implementação:
[Sawp](http://www.sawp.com.br/blog/?p=563)

[IACS](http://iacs-courses.seas.harvard.edu/courses/am225/notes/am225_ridders.pdf)

