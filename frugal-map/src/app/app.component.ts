// Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Implémenter OnInit
export class AppComponent implements OnInit {

// Fonction d'initialisation du composant.
  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([48.856614, 2.3333333], {icon: myIcon}).bindPopup('Paris, Population : 2 millions 161',).addTo(myfrugalmap).openPopup();
    L.marker([51.509093, -0.094151], {icon: myIcon}).bindPopup('Londres, Population : 8 millions 982').addTo(myfrugalmap).openPopup();
    L.marker([40.4167754, -3.7037902], {icon: myIcon}).bindPopup('Madrid, Population : 3 millions 223').addTo(myfrugalmap).openPopup();
    L.marker([41.902784, 12.496366], {icon: myIcon}).bindPopup('Rome, Population : 2 millions 873').addTo(myfrugalmap).openPopup();
    L.marker([52.520007, 13.404954], {icon: myIcon}).bindPopup('Berlin, Population : 3 millions 645').addTo(myfrugalmap).openPopup();
    L.marker([45.249134, -0.386362], {icon: myIcon}).bindPopup('chez moi !').addTo(myfrugalmap).openPopup()

  }
}
