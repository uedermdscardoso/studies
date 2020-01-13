import 'package:flutter/material.dart';

//Qualquer coisa visual  é widget como botões, input, etc.abstract
//Precisa extender um widget para que possa ser renderizada
//StatefullWidget guarda estado (reage a alterações dessas informações que são geradas a partir da nossa view)
//StatelessWidget não guarda estado (não precisa reagir a alterações)
class AppFirstFlutter extends StatelessWidget { //Widget - Componente Visual

  double numero1;
  double numero2;

  //Esse método indica como o seu widget tem que ser renderizado pelo flutter.
  @override
  Widget build(BuildContext context) {
    TextField firstTextField = new TextField(
      decoration: InputDecoration(
          labelText: 'Primeiro número'
      ), //Decoração de Input
      keyboardType: TextInputType.number, //Aparece teclado só com números para ser digitado
      onChanged: (value){ //Intercepta cada caracter digitado pelo usuário no input e reage ao evento onChanged
        try{
          numero1 = double.parse(value);
        } catch(ex){
          numero1 = 0;
        }
      },
    );

    TextField secondTextField = new TextField(
      decoration: InputDecoration(
        labelText: 'Segundo número'
      ),
      keyboardType: TextInputType.number,
      onChanged: (value) {
        try{
          numero2 = double.parse(value);
        } catch(ex){
          numero2 = 0;
        }
      },
    );

    RaisedButton calcRaisedButton = new RaisedButton(
      child: new Text('Calcular'), //Define os widget que são os filhos de RaisedButton
      onPressed: () {
        double adicao = numero1 + numero2;
        AlertDialog alert = new AlertDialog(
          content: new Text("Soma: \$$adicao"), //\$ permite a interpolação para que reconheça as variáveis (strings interpoladas)
        );
        showDialog(context: context, child: alert); //Contexto de qual o dialog será exibido  -- Child é o resultado para exibir o AlertDialog
      },
    );

    //O flutter trabalha com o conceito de árvore, onde contém um widget pai que contém widgets filhos.
    //Container define uma estrutura hierárquica
    //Corpo
    Container container = new Container(
      padding: EdgeInsets.all(20.0), //all refere a todos os lados (left, right, top, bottom)  //20 pontos
      child: new Column( //Dentro do container, tem uma coluna e tem vários widget dentro da coluna
        children: <Widget>[firstTextField, secondTextField, calcRaisedButton], //Um vetor de widgets
      ), //quais serão os elementos filhos do container
    );

    //Cabeçalho - Barra de Título
    AppBar appBar = new AppBar(
      title: new Text('Soma de dois números'), //Text é um widget filho de AppBar
    );

    //Juntar o cabeçalho e o corpo
    Scaffold scaffold = new Scaffold(appBar: appBar, body: container,); //Definidor de layouts

    return scaffold; //Retorna o scaffold que contém o cabeçalho e o corpo.

  }

}
/*
  Exemplo de StatefullWidget

  Uma tela de listagem que apresenta os itens de uma API pode ser considerada como um widget stateful,
  já que ela deverá ser alterada quando um novo elemento for retornado pela nossa API.
  Nesse caso, a alteração significa que a lista deverá conter um novo elemento que foi adicionado quando for retornado pela API.
*/

/*
  Exemplo de StatelessWidget

  São widgets que não precisam de alteração como uma label de título da aplicação que nunca tem o seu valor alteado.
*/


//Primeiro método que será executado para rodar a aplicação flutter
//O flutter tem o hot reload que recarrega a aplicação após alguma alteração no código sem precisar compilar novamente.
void main(){
  runApp(new MaterialApp(
    title: 'App Flutter',
    home: new AppFirstFlutter() //Exporta todo o layout que foi definido na classe AppFirstFlutter
  )); //Rodar uma aplicação que usa Material Design
}