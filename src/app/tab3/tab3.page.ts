import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  articles: { title: string, summary: string, link: string }[] = [
    {
      title: "Peras en almíbar de miel",
      summary: "Descubre el perfecto bocadillo crujiente y dulce con nuestra receta de Semillas de Calabaza Asadas con Miel. Con solo unos pocos ingredientes simples, puedes transformar las semillas de calabaza en un delicioso bocadillo. Saborea la irresistible combinación de Miel de Flores Silvestres y semillas de calabaza asadas solas, úsalas como una adición saludable a mezclas para bocadillos o granola, o espolvoréalas sobre verduras asadas.",
      link: "https://ashevillebeecharmer.com/articles/poached-pears-honey-simple-syrup/"
    },
    {
      title: "Vino caliente con miel infundida en chai",
      summary: "El vino caliente es una tradición navideña para muchos encantadores de abejas, especialmente cuando se hace con nuestra propia Miel Infundida en Chai. Lo bueno del vino caliente es que es una manera fácil de mejorar un vino menos caro. ",
      link: "https://ashevillebeecharmer.com/articles/mulled-wine-with-chai-infused-honey/"
    },
    {
      title: "Galletas de miel de calabaza chai",
      summary: "¿A qué huele el otoño? A especias de calabaza. Así es. ¡Y a Chai! En la barra de degustación de Asheville Bee Charmer, nuestra Miel Infundida en Chai es una de las mieles más populares. Esta receta de galletas de miel de calabaza chai demuestra perfectamente el impacto delicioso que una buena miel infusionada puede tener. Y la adición de calabaza hace que esta galleta sea un manjar perfecto para la temporada. Estas galletas son geniales porque no son demasiado dulces. Pero si buscas dulzura adicional, agrega glaseado.",
      link: "https://ashevillebeecharmer.com/articles/pumpkin-chai-honey-cookies/"
    }
  ];
  constructor() {}

}
