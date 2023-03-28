import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  optredens : IOptredens[] = [

                              {datum: '05/09/2020', plaats: 'Amor, Antwerpen', featuring: ''},
                              {datum: '04/09/2020', plaats: 'Amor, Antwerpen', featuring: ''},
                              {datum: '02/09/2020', plaats: 'Campo Solar, Damme', featuring: 'w. Het Zesde Metaal'},
                              {datum: '01/09/2020', plaats: 'Campo Solar, Damme', featuring: 'w. Het Zesde Metaal'},
                              {datum: '30/08/2020', plaats: 'Dranouter sessies, Dranouter', featuring: 'w. Roosbeef'},
                              {datum: '23/02/2020', plaats: 'Afsnis, Gent', featuring: ''},
                              {datum: '16/02/2020', plaats: 'living room concert, Tielt', featuring: ''},
                              {datum: '14/02/2020', plaats: 'Volta, Brussel', featuring: 'w. Solak'},
                              {datum: '26/11/2019', plaats: 'Witzli Poetzli, Antwerpen', featuring: 'w. Matt Watts'},
                              {datum: '07/11/2019', plaats: 'Cactus @ Villa Bota, Brugge', featuring: 'w. Juan Wauters'},
                              {datum: '13/06/2019', plaats: 'Wolfslaar akoestisch, Breda (nl)', featuring: ''},
                              {datum: '28/02/2019', plaats: 'Café Café, Hasselt', featuring: 'w. Danny Blue & The Old Socks'},
                              {datum: '10/10/2018', plaats: 'Cabron, Antwerpen', featuring: 'w. Philemon'},
                              {datum: '13/06/2018', plaats: 'Dok, Gent', featuring: 'w. Yuko'},
                              {datum: '01/02/2018', plaats: 'Trix Café, Antwerpen', featuring: 'w. Lord Huron'},
                              {datum: '26/05/2017', plaats: 'Concertzaal De Casino, Sint-Niklaas', featuring: 'w. Woven Hand'},
                              {datum: '11/05/2017', plaats: 'De Roma, Antwerpen', featuring: 'w. Pascal Deweze'},
                              {datum: '14/04/2017', plaats: 'C-Mine, Genk', featuring: 'w. Maurits Pauwels'},
                              {datum: '04/04/2017', plaats: 'Hoxton Square Bar & Kitchen, London (uk)', featuring: 'w. Fences'},
                              {datum: '03/04/2017', plaats: 'The Tube, Düsseldorf (de)', featuring: 'w. Fences'},
                              {datum: '01/04/2017', plaats: 'Das Bach, Wenen (at)', featuring: 'w. Fences'},
                              {datum: '31/03/2017', plaats: 'Kranhalle, München (de)', featuring: 'w. Fences'},
                              {datum: '30/03/2017', plaats: 'Zoom, Frankfurt (de)', featuring: 'w. Fences'},
                              {datum: '29/03/2017', plaats: 'Cassiopeia, Berlijn (de)', featuring: 'w. Fences'},
                              {datum: '28/03/2017', plaats: 'Uebel & Gefaehrlich, Hamburg (de)', featuring: 'w. Fences'},
                              {datum: '23/12/2016', plaats: 'Arenberg, Antwerpen', featuring: 'w. Maurits Pauwels Groep'},
                              {datum: '19/11/2016', plaats: 'Gebouw T, Bergen op Zoom (nl)', featuring: 'w. Admiral Freebee'},
                              {datum: '18/11/2016', plaats: 'Het Depot, Leuven', featuring: 'w. Maurits Pauwels Groep'},
                              {datum: '16/10/2016', plaats: 'Ancienne Belgique, Brussel', featuring: 'w. Maurits Pauwels Groep'},
                              {datum: '03/09/2016', plaats: 'Villa Pace, Sint-Niklaas', featuring: ''},
                              {datum: '23/06/2016', plaats: 'Dok, Gent', featuring: 'w. Woods'},
                              {datum: '07/05/2016', plaats: 'Aterlier 210, Brussel', featuring: 'w. Kevin Morby'},
                              {datum: '13/11/2014', plaats: 'Trix, Antwerpen', featuring: 'w. Christopher Owens (Girls)'},
                              {datum: '30/11/2013', plaats: 'Klein Mercelis theater, Brussel', featuring: 'w. Tony Dekker (Great Lake Swimmers)'},
                              {datum: '01/08/2013', plaats: 'Vama Veche, Brugge', featuring: ''},
                              {datum: '21/07/2013', plaats: 'Baudelo, Gentse Feesten, Gent', featuring: ''},
                              {datum: '17/05/2013', plaats: 'Vooruit, Gent', featuring: 'w. Ian McCulloch (Echo & the Bunnymen)'},
                              {datum: '12/05/2013', plaats: 'Paard van Troje, Den Haag (nl)', featuring: ''},
                              {datum: '13/04/2013', plaats: 'Arenbergschouwburg, Antwerpen', featuring: 'w. Simon Joyner'},
                              {datum: '09/02/2013', plaats: 'Concertzaal De Casino, Sint-Niklaas', featuring: 'w. Love Like Birds'},
                              {datum: '23/02/2012', plaats: 'Trix, Antwerpen', featuring: 'w. Cloud Control'},
                              {datum: '28/01/2012', plaats: 'Aetherblissement, Keulen (de)', featuring: 'w. Love Like Birds'},
                              {datum: '25/09/2011', plaats: 'Het Steen, Antwerpen', featuring: 'w. Love Like Birds, Oscar and The Wolf'},
                              {datum: '12/07/2011', plaats: 'Boomtown, Handelsbeurs, Gent', featuring: 'w. Connan Mockasin, Architecture in Helsinki'},
                              {datum: '07/07/2011', plaats: 'Mono, Oslo (no)', featuring: 'w. Wooden Wand'},
                              {datum: '07/04/2011', plaats: '4AD, Diksmuide', featuring: 'w. Grant Hart (Hüsker Dü)'},
                              {datum: '03/04/2011', plaats: 'Mezz, Breda (nl)', featuring: ''},
                              {datum: '31/03/2011', plaats: 'Stuk, Leuven', featuring: 'w. Allo Darlin’'},
                              {datum: '12/03/2011', plaats: 'Rataplan, Borgerhout', featuring: 'w. Bony King of Nowhere'},
                              {datum: '29/10/2010', plaats: 'CC Mechelen, Mechelen', featuring: 'w. Bony King of Nowhere'},
                              {datum: '22/06/2010', plaats: 'Scene, Wenen (at)', featuring: 'w. Devendra Banhart'},
                              {datum: '30/06/2010', plaats: 'Rockefeller, Oslo (no)', featuring: 'w. Devendra Banhart'},
                              {datum: '10/02/2010', plaats: 'Handelsbeurs, Gent', featuring: 'w. The Veils'},
                              {datum: '13/09/2009', plaats: 'Trix, Antwerpen', featuring: 'w. Scott Matthew'}];

  
  
 constructor() { }

  ngOnInit() {
  }

}

export interface IOptredens{
  datum: string,
  plaats: string,
  featuring: string
}