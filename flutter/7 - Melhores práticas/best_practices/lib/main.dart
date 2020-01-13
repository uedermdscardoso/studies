
import 'package:flutter/material.dart';

//Best Practices
// ** Classe de Aplicação
class BestPracticesApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Best Practices',
      theme: ThemeData(primarySwatch: Colors.purple), //Define a cor no fundo da AppBar
      home: new PrincipalPage(),
    ); //Baseado no design material
  }
}

// *** Página Principal
class PrincipalPage extends StatelessWidget {

  double numero1 = 0.0;
  double numero2 = 0.0;

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Best Practices - Flutter')
      ),
      body: new Container(
        padding: EdgeInsets.all(16.0), //Espera um double e não inteiro
        child: new Column(
          children: <Widget>[
            new TextField(
              decoration: new InputDecoration(
                labelText: 'Primeiro número: '
              ),
              keyboardType: TextInputType.number,
              onChanged: (value) {
                try{
                  numero1 = double.parse(value);
                } catch(ex){
                  numero1 = 0.0;
                }
              }
            ), //TextField 1
            new TextField(
              decoration: new InputDecoration(
                labelText: 'Segundo número: '
              ),
              keyboardType: TextInputType.number,
              onChanged: (value) {
                try{
                  numero2 = double.parse(value);
                } catch(ex){
                  numero2 = 0.0;
                }
              },
            ), //TextField 2
            new RaisedButton(
              child: new Text('Calcular'),
              onPressed: () {
                double adicao = numero1 + numero2;
                showDialog(
                  context: context,
                  //builder: (context) => //Com lambda, não precisa do return porque já cria uma instância do AlertDialog e retorna
                  //  new AlertDialog(
                  //    title: new Text('Resultados'),
                  //    content: new Text('- Adição: $adicao'),
                  //)
                  builder: (BuildContext context) {
                    return new AlertDialog(
                      title: new Text('Resultados'),
                      content: new Text('- Adição: $adicao'),
                    );
                  }, //Qual widget tem quer ser retornado por builder
                );
              },
            )
          ],
        )
      ),
    );
  }

}

//Clique botão direito e em "Reformat Code With dartfmt" para identar o código conforme os padrões do dart

//void main(){
//  runApp(new BestPracticesApp());
//}

//Usando lampda
void main() => runApp(new BestPracticesApp());