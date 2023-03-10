import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashmachinesService {

  cashMachineLocations : any[] = [
    {
      "kohteenOsoite": "Aleksanterinkatu 23",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168718,
      "koordinaattiLon": 24.941095
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 30",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168930,
      "koordinaattiLon": 24.950720
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 52",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.167880,
      "koordinaattiLon": 24.942500
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 52",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.167820,
      "koordinaattiLon": 24.942850
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 52",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168430,
      "koordinaattiLon": 24.941870
    },
    {
      "kohteenOsoite": "Elielinaukio 3",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171370,
      "koordinaattiLon": 24.940230
    },
    {
      "kohteenOsoite": "Kaisaniemenkatu 5",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171250,
      "koordinaattiLon": 24.947390
    },
    {
      "kohteenOsoite": "Kaisaniemenkatu 5",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171250,
      "koordinaattiLon": 24.947410
    },
    {
      "kohteenOsoite": "Kaivokatu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171000,
      "koordinaattiLon": 24.941670
    },
    {
      "kohteenOsoite": "Kaivokatu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171050,
      "koordinaattiLon": 24.941670
    },
    {
      "kohteenOsoite": "Kaivokatu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171090,
      "koordinaattiLon": 24.941670
    },
    {
      "kohteenOsoite": "Kaivokatu 6",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.170270,
      "koordinaattiLon": 24.942270
    },
    {
      "kohteenOsoite": "Kampinkuja 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168530,
      "koordinaattiLon": 24.929880
    },
    {
      "kohteenOsoite": "Kampinkuja 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168500,
      "koordinaattiLon": 24.929800
    },
    {
      "kohteenOsoite": "Mannerheimintie 14",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168410,
      "koordinaattiLon": 24.940238
    },
    {
      "kohteenOsoite": "Mannerheimintie 20",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169780,
      "koordinaattiLon": 24.938400
    },
    {
      "kohteenOsoite": "Mannerheimintie 20",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169410,
      "koordinaattiLon": 24.938240
    },
    {
      "kohteenOsoite": "Mannerheimintie 20 A",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168850,
      "koordinaattiLon": 24.938180
    },
    {
      "kohteenOsoite": "Mannerheimintie 7",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169650,
      "koordinaattiLon": 24.939340
    },
    {
      "kohteenOsoite": "Mannerheimintie 9",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.170400,
      "koordinaattiLon": 24.938240
    },
    {
      "kohteenOsoite": "Mikonkatu 13",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.170580,
      "koordinaattiLon": 24.945510
    },
    {
      "kohteenOsoite": "Mikonkatu 13",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.170400,
      "koordinaattiLon": 24.945720
    },
    {
      "kohteenOsoite": "Mikonkatu 19",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171710,
      "koordinaattiLon": 24.946230
    },
    {
      "kohteenOsoite": "Mikonkatu 19",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171880,
      "koordinaattiLon": 24.945980
    },
    {
      "kohteenOsoite": "Mikonkatu 7",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169700,
      "koordinaattiLon": 24.946020
    },
    {
      "kohteenOsoite": "Museokatu 40",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.175270,
      "koordinaattiLon": 24.921470
    },
    {
      "kohteenOsoite": "Postikatu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.171027,
      "koordinaattiLon": 24.938357
    },
    {
      "kohteenOsoite": "Salomonkatu 13",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169590,
      "koordinaattiLon": 24.931970
    },
    {
      "kohteenOsoite": "Simonkatu 8",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.169023,
      "koordinaattiLon": 24.936448
    },
    {
      "kohteenOsoite": "Urho Kekkosen Katu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168920,
      "koordinaattiLon": 24.932580
    },
    {
      "kohteenOsoite": "Urho Kekkosen Katu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168870,
      "koordinaattiLon": 24.932670
    },
    {
      "kohteenOsoite": "Urho Kekkosen Katu 1",
      "postinumero": "00100",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.168790,
      "koordinaattiLon": 24.932760
    },
    {
      "kohteenOsoite": "Bulevardi 5",
      "postinumero": "00120",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.165190,
      "koordinaattiLon": 24.939130
    },
    {
      "kohteenOsoite": "Hietalahdenranta 7",
      "postinumero": "00120",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.161058,
      "koordinaattiLon": 24.929899
    },
    {
      "kohteenOsoite": "Iso Roobertinkatu 20 - 22",
      "postinumero": "00120",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163167,
      "koordinaattiLon": 24.941470
    },
    {
      "kohteenOsoite": "Kapteeninkatu 24",
      "postinumero": "00140",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.158572,
      "koordinaattiLon": 24.945957
    },
    {
      "kohteenOsoite": "Per??miehenkatu 10",
      "postinumero": "00150",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.158717,
      "koordinaattiLon": 24.934486
    },
    {
      "kohteenOsoite": "Katajanokan Terminaali",
      "postinumero": "00160",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163670,
      "koordinaattiLon": 24.968110
    },
    {
      "kohteenOsoite": "Liisankatu 18",
      "postinumero": "00170",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.174050,
      "koordinaattiLon": 24.953620
    },
    {
      "kohteenOsoite": "It??merenkatu 14",
      "postinumero": "00180",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163210,
      "koordinaattiLon": 24.914850
    },
    {
      "kohteenOsoite": "It??merenkatu 21",
      "postinumero": "00180",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163600,
      "koordinaattiLon": 24.910560
    },
    {
      "kohteenOsoite": "It??merenkatu 21",
      "postinumero": "00180",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163570,
      "koordinaattiLon": 24.910810
    },
    {
      "kohteenOsoite": "It??merentori 2",
      "postinumero": "00180",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.163734,
      "koordinaattiLon": 24.914050
    },
    {
      "kohteenOsoite": "Lauttasaarentie 28",
      "postinumero": "00200",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.160300,
      "koordinaattiLon": 24.881660
    },
    {
      "kohteenOsoite": "Tyynenmerenkatu 8",
      "postinumero": "00220",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.154440,
      "koordinaattiLon": 24.921130
    },
    {
      "kohteenOsoite": "Tyynenmerenkatu 8",
      "postinumero": "00220",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.154470,
      "koordinaattiLon": 24.921160
    },
    {
      "kohteenOsoite": "Esterinportti 2",
      "postinumero": "00240",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.197321,
      "koordinaattiLon": 24.928256
    },
    {
      "kohteenOsoite": "Mannerheimintie 76",
      "postinumero": "00250",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.184873,
      "koordinaattiLon": 24.922186
    },
    {
      "kohteenOsoite": "Mannerheimintie 58",
      "postinumero": "00260",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.181805,
      "koordinaattiLon": 24.926814
    },
    {
      "kohteenOsoite": "Sandelsinkatu 6",
      "postinumero": "00260",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.178710,
      "koordinaattiLon": 24.923240
    },
    {
      "kohteenOsoite": "Tukholmankatu 11",
      "postinumero": "00270",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.191370,
      "koordinaattiLon": 24.906945
    },
    {
      "kohteenOsoite": "Haartmaninkatu 4",
      "postinumero": "00290",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.190770,
      "koordinaattiLon": 24.907230
    },
    {
      "kohteenOsoite": "Mannerheimintie 160",
      "postinumero": "00300",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.197500,
      "koordinaattiLon": 24.900260
    },
    {
      "kohteenOsoite": "Mannerheimintie 168",
      "postinumero": "00300",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.202690,
      "koordinaattiLon": 24.898880
    },
    {
      "kohteenOsoite": "Tunnelitie 5",
      "postinumero": "00320",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.217136,
      "koordinaattiLon": 24.899781
    },
    {
      "kohteenOsoite": "Munkkiniemen Puistotie 14",
      "postinumero": "00330",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.197340,
      "koordinaattiLon": 24.879300
    },
    {
      "kohteenOsoite": "Raumantie 1",
      "postinumero": "00350",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.205698,
      "koordinaattiLon": 24.877714
    },
    {
      "kohteenOsoite": "Konalantie 6",
      "postinumero": "00370",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.226290,
      "koordinaattiLon": 24.853900
    },
    {
      "kohteenOsoite": "Takomotie 33",
      "postinumero": "00380",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.217511,
      "koordinaattiLon": 24.869753
    },
    {
      "kohteenOsoite": "Ajomiehentie 1",
      "postinumero": "00390",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.238925,
      "koordinaattiLon": 24.851237
    },
    {
      "kohteenOsoite": "Hankasuontie 2",
      "postinumero": "00390",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.245310,
      "koordinaattiLon": 24.845900
    },
    {
      "kohteenOsoite": "N??yttelij??ntie 14",
      "postinumero": "00400",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.229503,
      "koordinaattiLon": 24.895261
    },
    {
      "kohteenOsoite": "Puustellinkuja 2",
      "postinumero": "00410",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.247470,
      "koordinaattiLon": 24.859090
    },
    {
      "kohteenOsoite": "Kantelettarentie 1",
      "postinumero": "00420",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.236690,
      "koordinaattiLon": 24.890420
    },
    {
      "kohteenOsoite": "Kantelettarentie 1",
      "postinumero": "00420",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.237170,
      "koordinaattiLon": 24.894780
    },
    {
      "kohteenOsoite": "Kantelettarentie 1",
      "postinumero": "00420",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.236860,
      "koordinaattiLon": 24.892190
    },
    {
      "kohteenOsoite": "Sitratori 5",
      "postinumero": "00420",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.239250,
      "koordinaattiLon": 24.875340
    },
    {
      "kohteenOsoite": "Vanhaistentie 1",
      "postinumero": "00420",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.241828,
      "koordinaattiLon": 24.885100
    },
    {
      "kohteenOsoite": "Hopeatie 2",
      "postinumero": "00440",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.230080,
      "koordinaattiLon": 24.882850
    },
    {
      "kohteenOsoite": "Kaupintie 3",
      "postinumero": "00440",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.232840,
      "koordinaattiLon": 24.886270
    },
    {
      "kohteenOsoite": "Helsinginkatu 1",
      "postinumero": "00500",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.187810,
      "koordinaattiLon": 24.960100
    },
    {
      "kohteenOsoite": "Helsinginkatu 1",
      "postinumero": "00500",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.187990,
      "koordinaattiLon": 24.961570
    },
    {
      "kohteenOsoite": "Helsinginkatu 19",
      "postinumero": "00500",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.187140,
      "koordinaattiLon": 24.953520
    },
    {
      "kohteenOsoite": "H??meentie 31",
      "postinumero": "00500",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.187802,
      "koordinaattiLon": 24.963071
    },
    {
      "kohteenOsoite": "Aleksis Kiven Katu 11",
      "postinumero": "00510",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.189810,
      "koordinaattiLon": 24.952320
    },
    {
      "kohteenOsoite": "Kotkankatu 5",
      "postinumero": "00510",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.191666,
      "koordinaattiLon": 24.942561
    },
    {
      "kohteenOsoite": "L??ntinen Brahenkatu 2",
      "postinumero": "00510",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.186823,
      "koordinaattiLon": 24.948244
    },
    {
      "kohteenOsoite": "Tivolikuja 1",
      "postinumero": "00510",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.189840,
      "koordinaattiLon": 24.939566
    },
    {
      "kohteenOsoite": "Ratapihantie 6",
      "postinumero": "00520",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.198490,
      "koordinaattiLon": 24.934600
    },
    {
      "kohteenOsoite": "Ratapihantie 6",
      "postinumero": "00520",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.198470,
      "koordinaattiLon": 24.934610
    },
    {
      "kohteenOsoite": "Ratapihantie 6",
      "postinumero": "00520",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.198430,
      "koordinaattiLon": 24.934610
    },
    {
      "kohteenOsoite": "Rautatiel??isenkatu 3",
      "postinumero": "00520",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.202550,
      "koordinaattiLon": 24.935760
    },
    {
      "kohteenOsoite": "Rautatiel??isenkatu 3",
      "postinumero": "00520",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.203110,
      "koordinaattiLon": 24.935630
    },
    {
      "kohteenOsoite": "Hakaniemenranta 1",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.178020,
      "koordinaattiLon": 24.950830
    },
    {
      "kohteenOsoite": "Hakaniemenranta 1",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.178130,
      "koordinaattiLon": 24.951130
    },
    {
      "kohteenOsoite": "Siltasaarenkatu 12",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.178810,
      "koordinaattiLon": 24.949730
    },
    {
      "kohteenOsoite": "Siltasaarenkatu 12",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.178810,
      "koordinaattiLon": 24.949600
    },
    {
      "kohteenOsoite": "Siltasaarenkatu 18-20",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.180210,
      "koordinaattiLon": 24.949290
    },
    {
      "kohteenOsoite": "Siltasaarenkatu 6",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.177744,
      "koordinaattiLon": 24.949774
    },
    {
      "kohteenOsoite": "Viides Linja 10",
      "postinumero": "00530",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.183331,
      "koordinaattiLon": 24.952853
    },
    {
      "kohteenOsoite": "H??meentie 92",
      "postinumero": "00550",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.196160,
      "koordinaattiLon": 24.962280
    },
    {
      "kohteenOsoite": "M??kel??nkatu 31",
      "postinumero": "00550",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.194991,
      "koordinaattiLon": 24.956648
    },
    {
      "kohteenOsoite": "H??meentie 111",
      "postinumero": "00560",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.202770,
      "koordinaattiLon": 24.967760
    },
    {
      "kohteenOsoite": "H??meentie 111",
      "postinumero": "00560",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.202770,
      "koordinaattiLon": 24.967790
    },
    {
      "kohteenOsoite": "Ky??sti Kallion Tie 2",
      "postinumero": "00570",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.186150,
      "koordinaattiLon": 25.007660
    },
    {
      "kohteenOsoite": "K??pyl??ntie 8",
      "postinumero": "00600",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.216203,
      "koordinaattiLon": 24.958658
    },
    {
      "kohteenOsoite": "Pohjolankatu 43",
      "postinumero": "00610",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.216540,
      "koordinaattiLon": 24.953470
    },
    {
      "kohteenOsoite": "M??kitorpantie 1",
      "postinumero": "00620",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.222292,
      "koordinaattiLon": 24.947312
    },
    {
      "kohteenOsoite": "Pakilantie 8 A",
      "postinumero": "00630",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.230928,
      "koordinaattiLon": 24.935065
    },
    {
      "kohteenOsoite": "Kyl??nvanhimmantie 29",
      "postinumero": "00640",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.228750,
      "koordinaattiLon": 24.963570
    },
    {
      "kohteenOsoite": "M??kitorpantie 37",
      "postinumero": "00640",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.228757,
      "koordinaattiLon": 24.962583
    },
    {
      "kohteenOsoite": "Pakilantie 95",
      "postinumero": "00670",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.247680,
      "koordinaattiLon": 24.922770
    },
    {
      "kohteenOsoite": "Torpparinm??entie 1",
      "postinumero": "00690",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.257142,
      "koordinaattiLon": 24.945435
    },
    {
      "kohteenOsoite": "Ala - Malmin Tori 5",
      "postinumero": "00700",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.250911,
      "koordinaattiLon": 25.012896
    },
    {
      "kohteenOsoite": "Malmin Kauppatie 18",
      "postinumero": "00700",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.252080,
      "koordinaattiLon": 25.008880
    },
    {
      "kohteenOsoite": "Malmin Kauppatie 18",
      "postinumero": "00700",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.252240,
      "koordinaattiLon": 25.010140
    },
    {
      "kohteenOsoite": "Malmin Kauppatie 18",
      "postinumero": "00700",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.251980,
      "koordinaattiLon": 25.010680
    },
    {
      "kohteenOsoite": "Malminkaari 17",
      "postinumero": "00700",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.251977,
      "koordinaattiLon": 25.013398
    },
    {
      "kohteenOsoite": "Meripihkatie 1",
      "postinumero": "00710",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.233010,
      "koordinaattiLon": 25.011740
    },
    {
      "kohteenOsoite": "Salpaussel??ntie 11",
      "postinumero": "00710",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.231200,
      "koordinaattiLon": 25.000470
    },
    {
      "kohteenOsoite": "S??terintie 2",
      "postinumero": "00720",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.243419,
      "koordinaattiLon": 24.993912
    },
    {
      "kohteenOsoite": "Kotinummentie 68",
      "postinumero": "00730",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.267320,
      "koordinaattiLon": 25.014500
    },
    {
      "kohteenOsoite": "Jousimiehentie 3",
      "postinumero": "00740",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.274443,
      "koordinaattiLon": 24.989286
    },
    {
      "kohteenOsoite": "Maatullinaukio 1",
      "postinumero": "00750",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.275030,
      "koordinaattiLon": 25.034451
    },
    {
      "kohteenOsoite": "Puistolantori 1",
      "postinumero": "00760",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.274594,
      "koordinaattiLon": 25.045209
    },
    {
      "kohteenOsoite": "Huokotie 1",
      "postinumero": "00770",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.261707,
      "koordinaattiLon": 25.075437
    },
    {
      "kohteenOsoite": "Jakom??enkuja 4",
      "postinumero": "00770",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.261225,
      "koordinaattiLon": 25.075265
    },
    {
      "kohteenOsoite": "Kirkonkyl??ntie 34",
      "postinumero": "00780",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.256630,
      "koordinaattiLon": 24.998570
    },
    {
      "kohteenOsoite": "Latokartanonkaari 23",
      "postinumero": "00790",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.233822,
      "koordinaattiLon": 25.030959
    },
    {
      "kohteenOsoite": "Viikintori 3",
      "postinumero": "00790",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.227334,
      "koordinaattiLon": 25.009453
    },
    {
      "kohteenOsoite": "Kettutie 2",
      "postinumero": "00800",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.204710,
      "koordinaattiLon": 25.034480
    },
    {
      "kohteenOsoite": "Hiihtom??entie 17",
      "postinumero": "00810",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.195179,
      "koordinaattiLon": 25.030784
    },
    {
      "kohteenOsoite": "Hiiht??j??ntie 2",
      "postinumero": "00810",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.194596,
      "koordinaattiLon": 25.028114
    },
    {
      "kohteenOsoite": "Hitsaajankatu 16",
      "postinumero": "00810",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.193135,
      "koordinaattiLon": 25.031501
    },
    {
      "kohteenOsoite": "Insin????rinkatu 2",
      "postinumero": "00810",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.193702,
      "koordinaattiLon": 25.034117
    },
    {
      "kohteenOsoite": "Roihuvuorentie 26",
      "postinumero": "00820",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.202158,
      "koordinaattiLon": 25.059541
    },
    {
      "kohteenOsoite": "Yliskyl??ntie 3",
      "postinumero": "00840",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.180850,
      "koordinaattiLon": 25.052553
    },
    {
      "kohteenOsoite": "Korsholmantie 2",
      "postinumero": "00900",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.214320,
      "koordinaattiLon": 25.083264
    },
    {
      "kohteenOsoite": "Vanhanlinnantie  3",
      "postinumero": "00900",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.213890,
      "koordinaattiLon": 25.088010
    },
    {
      "kohteenOsoite": "Rusthollarintie 2",
      "postinumero": "00910",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.212556,
      "koordinaattiLon": 25.096595
    },
    {
      "kohteenOsoite": "Kiviparintie 2",
      "postinumero": "00920",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.224552,
      "koordinaattiLon": 25.074529
    },
    {
      "kohteenOsoite": "Asiakkaankatu 11",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.209550,
      "koordinaattiLon": 25.081290
    },
    {
      "kohteenOsoite": "It??katu 1",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.212840,
      "koordinaattiLon": 25.084750
    },
    {
      "kohteenOsoite": "It??katu 1-5",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.212030,
      "koordinaattiLon": 25.083370
    },
    {
      "kohteenOsoite": "It??katu 1-5 C",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.212820,
      "koordinaattiLon": 25.085010
    },
    {
      "kohteenOsoite": "It??katu 1-7",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.210490,
      "koordinaattiLon": 25.081140
    },
    {
      "kohteenOsoite": "It??katu 3",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.211000,
      "koordinaattiLon": 25.082820
    },
    {
      "kohteenOsoite": "It??katu 3",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.211510,
      "koordinaattiLon": 25.083020
    },
    {
      "kohteenOsoite": "Kauppakartanonkatu 3",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.208920,
      "koordinaattiLon": 25.085620
    },
    {
      "kohteenOsoite": "Tallinnanaukio 1",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.209980,
      "koordinaattiLon": 25.078500
    },
    {
      "kohteenOsoite": "Turunlinnantie 14",
      "postinumero": "00930",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.210480,
      "koordinaattiLon": 25.078400
    },
    {
      "kohteenOsoite": "Keinulaudankuja 4",
      "postinumero": "00940",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.236630,
      "koordinaattiLon": 25.084200
    },
    {
      "kohteenOsoite": "Keinulaudankuja 4",
      "postinumero": "00940",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.236580,
      "koordinaattiLon": 25.084260
    },
    {
      "kohteenOsoite": "Ostostie 4",
      "postinumero": "00940",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.237960,
      "koordinaattiLon": 25.086450
    },
    {
      "kohteenOsoite": "Vartiokyl??ntie 3",
      "postinumero": "00950",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.218540,
      "koordinaattiLon": 25.102857
    },
    {
      "kohteenOsoite": "Mustalahdentie 2",
      "postinumero": "00960",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.221710,
      "koordinaattiLon": 25.140250
    },
    {
      "kohteenOsoite": "Ounasvaarantie 9",
      "postinumero": "00970",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.238974,
      "koordinaattiLon": 25.112239
    },
    {
      "kohteenOsoite": "Pallaksentie 2",
      "postinumero": "00970",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.238120,
      "koordinaattiLon": 25.111180
    },
    {
      "kohteenOsoite": "Meri-rastilankuja 2",
      "postinumero": "00980",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.203870,
      "koordinaattiLon": 25.118432
    },
    {
      "kohteenOsoite": "Rahtarinkatu 2",
      "postinumero": "00980",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.224790,
      "koordinaattiLon": 25.168160
    },
    {
      "kohteenOsoite": "Vuotie 45",
      "postinumero": "00980",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.206960,
      "koordinaattiLon": 25.145990
    },
    {
      "kohteenOsoite": "Vuotie 45",
      "postinumero": "00980",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.207100,
      "koordinaattiLon": 25.146260
    },
    {
      "kohteenOsoite": "Vuotie 45",
      "postinumero": "00980",
      "postitoimipaikka": "Helsinki",
      "koordinaattiLat": 60.207970,
      "koordinaattiLon": 25.145950
    },
    {
      "kohteenOsoite": "Terveystie 3",
      "postinumero": "01150",
      "postitoimipaikka": "S??derkulla",
      "koordinaattiLat": 60.298810,
      "koordinaattiLon": 25.327240
    },
    {
      "kohteenOsoite": "Kannuskuja 2",
      "postinumero": "01200",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.280030,
      "koordinaattiLon": 25.109290
    },
    {
      "kohteenOsoite": "Laukkarinne 4",
      "postinumero": "01200",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.278910,
      "koordinaattiLon": 25.104300
    },
    {
      "kohteenOsoite": "Laukkarinne 6",
      "postinumero": "01200",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.278755,
      "koordinaattiLon": 25.103924
    },
    {
      "kohteenOsoite": "Porttisuontie 18",
      "postinumero": "01200",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.277728,
      "koordinaattiLon": 25.083470
    },
    {
      "kohteenOsoite": "L??hdepuistontie 20",
      "postinumero": "01230",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.266610,
      "koordinaattiLon": 25.099560
    },
    {
      "kohteenOsoite": "It??inen Valkoisenl??hteent. 19",
      "postinumero": "01260",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.297670,
      "koordinaattiLon": 25.103410
    },
    {
      "kohteenOsoite": "Kuulakuja 5",
      "postinumero": "01280",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.244742,
      "koordinaattiLon": 25.109739
    },
    {
      "kohteenOsoite": "Asematie 10",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.292960,
      "koordinaattiLon": 25.041290
    },
    {
      "kohteenOsoite": "Asematie 2",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.292080,
      "koordinaattiLon": 25.042800
    },
    {
      "kohteenOsoite": "Kielotie 11",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.293150,
      "koordinaattiLon": 25.037930
    },
    {
      "kohteenOsoite": "Kielotie 29",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.300909,
      "koordinaattiLon": 25.040231
    },
    {
      "kohteenOsoite": "Peltolantie 1",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.293727,
      "koordinaattiLon": 25.032057
    },
    {
      "kohteenOsoite": "Ratatie 11",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.292110,
      "koordinaattiLon": 25.043380
    },
    {
      "kohteenOsoite": "Tikkuraitti 20",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.293100,
      "koordinaattiLon": 25.034130
    },
    {
      "kohteenOsoite": "Tikkuraitti 20",
      "postinumero": "01300",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.293090,
      "koordinaattiLon": 25.034130
    },
    {
      "kohteenOsoite": "Leinikkitie 20",
      "postinumero": "01350",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.309880,
      "koordinaattiLon": 25.031440
    },
    {
      "kohteenOsoite": "Koivukyl??n Puistotie 1",
      "postinumero": "01360",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.322834,
      "koordinaattiLon": 25.061910
    },
    {
      "kohteenOsoite": "Niinikuja 2",
      "postinumero": "01360",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.322773,
      "koordinaattiLon": 25.055490
    },
    {
      "kohteenOsoite": "Koivukyl??nv??yl?? 66",
      "postinumero": "01390",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.324328,
      "koordinaattiLon": 25.024241
    },
    {
      "kohteenOsoite": "Tuusulantie 10",
      "postinumero": "01390",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.308171,
      "koordinaattiLon": 24.999114
    },
    {
      "kohteenOsoite": "Ojalehdonkuja 1",
      "postinumero": "01400",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.324999,
      "koordinaattiLon": 25.058150
    },
    {
      "kohteenOsoite": "Maakotkantie 12",
      "postinumero": "01450",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.350290,
      "koordinaattiLon": 25.075390
    },
    {
      "kohteenOsoite": "Merikotkanpolku 2",
      "postinumero": "01450",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.351000,
      "koordinaattiLon": 25.076580
    },
    {
      "kohteenOsoite": "Merikotkanpolku 2",
      "postinumero": "01450",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.351020,
      "koordinaattiLon": 25.076600
    },
    {
      "kohteenOsoite": "Metsolantie 2",
      "postinumero": "01450",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.351016,
      "koordinaattiLon": 25.079549
    },
    {
      "kohteenOsoite": "Minkkikuja 4",
      "postinumero": "01450",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.349930,
      "koordinaattiLon": 25.079520
    },
    {
      "kohteenOsoite": "Marsinrinne 8",
      "postinumero": "01480",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.341863,
      "koordinaattiLon": 25.094663
    },
    {
      "kohteenOsoite": "Valimotie 9",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.272560,
      "koordinaattiLon": 24.970080
    },
    {
      "kohteenOsoite": "Vantaanportinkatu 3",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.291210,
      "koordinaattiLon": 24.965710
    },
    {
      "kohteenOsoite": "Vantaanportinkatu 3",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.291010,
      "koordinaattiLon": 24.965050
    },
    {
      "kohteenOsoite": "Vantaanportinkatu 3",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.290970,
      "koordinaattiLon": 24.965040
    },
    {
      "kohteenOsoite": "Vantaanportinkatu 3",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.291870,
      "koordinaattiLon": 24.965050
    },
    {
      "kohteenOsoite": "Vantaanportinkatu 7",
      "postinumero": "01510",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.291970,
      "koordinaattiLon": 24.964640
    },
    {
      "kohteenOsoite": "Lentoasemantie 1",
      "postinumero": "01530",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.318960,
      "koordinaattiLon": 24.967080
    },
    {
      "kohteenOsoite": "Lentoasemantie 1",
      "postinumero": "01530",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.318280,
      "koordinaattiLon": 24.966690
    },
    {
      "kohteenOsoite": "Lentoasemantie 1",
      "postinumero": "01530",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.318048,
      "koordinaattiLon": 24.966429
    },
    {
      "kohteenOsoite": "Lentoasemantie 1",
      "postinumero": "01530",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.319010,
      "koordinaattiLon": 24.967460
    },
    {
      "kohteenOsoite": "Iskoskuja 3",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.259920,
      "koordinaattiLon": 24.853450
    },
    {
      "kohteenOsoite": "Iskoskuja 3",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.259920,
      "koordinaattiLon": 24.853420
    },
    {
      "kohteenOsoite": "Iskoskuja 3",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.260110,
      "koordinaattiLon": 24.853560
    },
    {
      "kohteenOsoite": "Iskoskuja 3",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.260110,
      "koordinaattiLon": 24.853600
    },
    {
      "kohteenOsoite": "J??nsaksentie 6",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.261939,
      "koordinaattiLon": 24.856176
    },
    {
      "kohteenOsoite": "Myyrm??enraitti 2",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.262800,
      "koordinaattiLon": 24.852120
    },
    {
      "kohteenOsoite": "Uomatie 11",
      "postinumero": "01600",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.269906,
      "koordinaattiLon": 24.848860
    },
    {
      "kohteenOsoite": "Ukonkivenpolku 11",
      "postinumero": "01610",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.262760,
      "koordinaattiLon": 24.869710
    },
    {
      "kohteenOsoite": "Kivivuorentie 4",
      "postinumero": "01620",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.277860,
      "koordinaattiLon": 24.853390
    },
    {
      "kohteenOsoite": "Laajavuorenkuja 2",
      "postinumero": "01620",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.281299,
      "koordinaattiLon": 24.844178
    },
    {
      "kohteenOsoite": "Ainontie 1",
      "postinumero": "01630",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.271015,
      "koordinaattiLon": 24.804015
    },
    {
      "kohteenOsoite": "Nuijatie 12",
      "postinumero": "01650",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.258330,
      "koordinaattiLon": 24.828700
    },
    {
      "kohteenOsoite": "Lammaslammentie 9",
      "postinumero": "01710",
      "postitoimipaikka": "Vantaa",
      "koordinaattiLat": 60.262356,
      "koordinaattiLon": 24.804127
    },
    {
      "kohteenOsoite": "Isosepp??l?? 14",
      "postinumero": "01800",
      "postitoimipaikka": "Klaukkala",
      "koordinaattiLat": 60.373980,
      "koordinaattiLon": 24.759600
    },
    {
      "kohteenOsoite": "Kuonom??entie 2",
      "postinumero": "01800",
      "postitoimipaikka": "Klaukkala",
      "koordinaattiLat": 60.378860,
      "koordinaattiLon": 24.754430
    },
    {
      "kohteenOsoite": "Liikekuja 1",
      "postinumero": "01800",
      "postitoimipaikka": "Klaukkala",
      "koordinaattiLat": 60.380798,
      "koordinaattiLon": 24.751439
    },
    {
      "kohteenOsoite": "Viirintie 9",
      "postinumero": "01800",
      "postitoimipaikka": "Klaukkala",
      "koordinaattiLat": 60.377887,
      "koordinaattiLon": 24.759849
    },
    {
      "kohteenOsoite": "Viirintie 9",
      "postinumero": "01800",
      "postitoimipaikka": "Klaukkala",
      "koordinaattiLat": 60.377890,
      "koordinaattiLon": 24.759850
    },
    {
      "kohteenOsoite": "Keskustie 6",
      "postinumero": "01900",
      "postitoimipaikka": "Nurmij??rvi",
      "koordinaattiLat": 60.462000,
      "koordinaattiLon": 24.807300
    },
    {
      "kohteenOsoite": "Mahlam??entie 2",
      "postinumero": "01900",
      "postitoimipaikka": "Nurmij??rvi",
      "koordinaattiLat": 60.462750,
      "koordinaattiLon": 24.808940
    },
    {
      "kohteenOsoite": "Kauppamiehentie 1",
      "postinumero": "02100",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.176600,
      "koordinaattiLon": 24.802270
    },
    {
      "kohteenOsoite": "L??nsituulenkuja 3",
      "postinumero": "02100",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.175540,
      "koordinaattiLon": 24.803280
    },
    {
      "kohteenOsoite": "L??nsituulentie 10",
      "postinumero": "02100",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.175770,
      "koordinaattiLon": 24.803760
    },
    {
      "kohteenOsoite": "L??nsituulentie 5",
      "postinumero": "02100",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.175290,
      "koordinaattiLon": 24.803750
    },
    {
      "kohteenOsoite": "L??nsituulentie 8",
      "postinumero": "02100",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.175910,
      "koordinaattiLon": 24.802850
    },
    {
      "kohteenOsoite": "Kalevalantie 3",
      "postinumero": "02130",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.185627,
      "koordinaattiLon": 24.807920
    },
    {
      "kohteenOsoite": "Kirvuntie 22",
      "postinumero": "02140",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.204050,
      "koordinaattiLon": 24.804960
    },
    {
      "kohteenOsoite": "Otakaari 11",
      "postinumero": "02150",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.184580,
      "koordinaattiLon": 24.830240
    },
    {
      "kohteenOsoite": "Ukkohauentie 11",
      "postinumero": "02170",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.163017,
      "koordinaattiLon": 24.775722
    },
    {
      "kohteenOsoite": "Komeetankatu 2",
      "postinumero": "02210",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.167120,
      "koordinaattiLon": 24.735042
    },
    {
      "kohteenOsoite": "Kuunkatu 3",
      "postinumero": "02210",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.172970,
      "koordinaattiLon": 24.728159
    },
    {
      "kohteenOsoite": "Matinkatu 22",
      "postinumero": "02230",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.157874,
      "koordinaattiLon": 24.739865
    },
    {
      "kohteenOsoite": "Piispansilta 11",
      "postinumero": "02230",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.162170,
      "koordinaattiLon": 24.738390
    },
    {
      "kohteenOsoite": "Piispansilta 11",
      "postinumero": "02230",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.162110,
      "koordinaattiLon": 24.738440
    },
    {
      "kohteenOsoite": "Piispansilta 11",
      "postinumero": "02230",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.161870,
      "koordinaattiLon": 24.737210
    },
    {
      "kohteenOsoite": "Piispansilta 9 A",
      "postinumero": "02230",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.161290,
      "koordinaattiLon": 24.738600
    },
    {
      "kohteenOsoite": "Martinsillantie 2",
      "postinumero": "02270",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.162003,
      "koordinaattiLon": 24.700991
    },
    {
      "kohteenOsoite": "Malminkorpi 1",
      "postinumero": "02280",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.181300,
      "koordinaattiLon": 24.678130
    },
    {
      "kohteenOsoite": "Espoonlahdenkatu 4",
      "postinumero": "02320",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.148960,
      "koordinaattiLon": 24.657180
    },
    {
      "kohteenOsoite": "Espoonlahdenkatu 4",
      "postinumero": "02320",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.149890,
      "koordinaattiLon": 24.655000
    },
    {
      "kohteenOsoite": "Kivenlahdentie 9",
      "postinumero": "02320",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.152509,
      "koordinaattiLon": 24.658048
    },
    {
      "kohteenOsoite": "Merivalkama 2",
      "postinumero": "02320",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.154447,
      "koordinaattiLon": 24.634721
    },
    {
      "kohteenOsoite": "Magneettikatu 2",
      "postinumero": "02330",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.167700,
      "koordinaattiLon": 24.616900
    },
    {
      "kohteenOsoite": "Kutojantie 1",
      "postinumero": "02360",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.209620,
      "koordinaattiLon": 24.752800
    },
    {
      "kohteenOsoite": "Soukantie 14",
      "postinumero": "02360",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.141381,
      "koordinaattiLon": 24.671166
    },
    {
      "kohteenOsoite": "Asemankaari 1",
      "postinumero": "02400",
      "postitoimipaikka": "Kirkkonummi",
      "koordinaattiLat": 60.121050,
      "koordinaattiLon": 24.441140
    },
    {
      "kohteenOsoite": "Asemankulma 2",
      "postinumero": "02400",
      "postitoimipaikka": "Kirkkonummi",
      "koordinaattiLat": 60.119394,
      "koordinaattiLon": 24.444228
    },
    {
      "kohteenOsoite": "Asemankulma 2",
      "postinumero": "02400",
      "postitoimipaikka": "Kirkkonummi",
      "koordinaattiLat": 60.120100,
      "koordinaattiLon": 24.445000
    },
    {
      "kohteenOsoite": "Munkinm??entie 29",
      "postinumero": "02400",
      "postitoimipaikka": "Kirkkonummi",
      "koordinaattiLat": 60.118150,
      "koordinaattiLon": 24.446770
    },
    {
      "kohteenOsoite": "Tallinm??ki 4",
      "postinumero": "02400",
      "postitoimipaikka": "Kirkkonummi",
      "koordinaattiLat": 60.124350,
      "koordinaattiLon": 24.438510
    },
    {
      "kohteenOsoite": "Tinankuja 1",
      "postinumero": "02430",
      "postitoimipaikka": "Masala",
      "koordinaattiLat": 60.157920,
      "koordinaattiLon": 24.535260
    },
    {
      "kohteenOsoite": "Siuntiontie 504",
      "postinumero": "02580",
      "postitoimipaikka": "Siuntio As",
      "koordinaattiLat": 60.138130,
      "koordinaattiLon": 24.226860
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 3 - 9",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.218880,
      "koordinaattiLon": 24.811440
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 3 - 9",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.218350,
      "koordinaattiLon": 24.811050
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 3 - 9",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.217750,
      "koordinaattiLon": 24.811640
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 7",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.218560,
      "koordinaattiLon": 24.809380
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 7",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.218560,
      "koordinaattiLon": 24.809380
    },
    {
      "kohteenOsoite": "Lepp??vaarankatu 7",
      "postinumero": "02600",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.218560,
      "koordinaattiLon": 24.809380
    },
    {
      "kohteenOsoite": "Karaniityntie 2",
      "postinumero": "02610",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.224313,
      "koordinaattiLon": 24.759769
    },
    {
      "kohteenOsoite": "Nihtisilta 4",
      "postinumero": "02630",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.207470,
      "koordinaattiLon": 24.749090
    },
    {
      "kohteenOsoite": "Sinikalliontie 1",
      "postinumero": "02630",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.204200,
      "koordinaattiLon": 24.768030
    },
    {
      "kohteenOsoite": "Konstaapelinkatu 4",
      "postinumero": "02650",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.221486,
      "koordinaattiLon": 24.812290
    },
    {
      "kohteenOsoite": "Promenadi 1",
      "postinumero": "02700",
      "postitoimipaikka": "Kauniainen",
      "koordinaattiLat": 60.210030,
      "koordinaattiLon": 24.728180
    },
    {
      "kohteenOsoite": "Kuusiniementie 1",
      "postinumero": "02710",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.226520,
      "koordinaattiLon": 24.740901
    },
    {
      "kohteenOsoite": "L??hderanta 1",
      "postinumero": "02720",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.241089,
      "koordinaattiLon": 24.741039
    },
    {
      "kohteenOsoite": "Espoontie 21",
      "postinumero": "02740",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.216690,
      "koordinaattiLon": 24.663390
    },
    {
      "kohteenOsoite": "Sokinsuontie 4",
      "postinumero": "02760",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.200282,
      "koordinaattiLon": 24.669826
    },
    {
      "kohteenOsoite": "Kamreerintie 3",
      "postinumero": "02770",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.203750,
      "koordinaattiLon": 24.656450
    },
    {
      "kohteenOsoite": "Kamreerintie 3",
      "postinumero": "02770",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.204120,
      "koordinaattiLon": 24.656310
    },
    {
      "kohteenOsoite": "Siltakatu 11",
      "postinumero": "02770",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.203610,
      "koordinaattiLon": 24.659020
    },
    {
      "kohteenOsoite": "Sunantie 1",
      "postinumero": "02770",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.204008,
      "koordinaattiLon": 24.660895
    },
    {
      "kohteenOsoite": "Virastopiha 1",
      "postinumero": "02770",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.205699,
      "koordinaattiLon": 24.655156
    },
    {
      "kohteenOsoite": "Klippinkitie 9",
      "postinumero": "02780",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.193430,
      "koordinaattiLon": 24.601060
    },
    {
      "kohteenOsoite": "Koskentie 6",
      "postinumero": "02880",
      "postitoimipaikka": "Veikkola",
      "koordinaattiLat": 60.269400,
      "koordinaattiLon": 24.443860
    },
    {
      "kohteenOsoite": "Juvankartanontie 33",
      "postinumero": "02920",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.269919,
      "koordinaattiLon": 24.757262
    },
    {
      "kohteenOsoite": "Kyl??nportti 16",
      "postinumero": "02940",
      "postitoimipaikka": "Espoo",
      "koordinaattiLat": 60.240270,
      "koordinaattiLon": 24.700740
    },
    {
      "kohteenOsoite": "Naaranpajuntie 3",
      "postinumero": "03100",
      "postitoimipaikka": "Nummela",
      "koordinaattiLat": 60.330719,
      "koordinaattiLon": 24.320538
    },
    {
      "kohteenOsoite": "Tuusankaari 1",
      "postinumero": "03100",
      "postitoimipaikka": "Nummela",
      "koordinaattiLat": 60.332303,
      "koordinaattiLon": 24.330265
    },
    {
      "kohteenOsoite": "Tuusankaari 1",
      "postinumero": "03100",
      "postitoimipaikka": "Nummela",
      "koordinaattiLat": 60.332510,
      "koordinaattiLon": 24.329710
    },
    {
      "kohteenOsoite": "Vihdintie 3",
      "postinumero": "03100",
      "postitoimipaikka": "Nummela",
      "koordinaattiLat": 60.335573,
      "koordinaattiLon": 24.321385
    },
    {
      "kohteenOsoite": "Vihdintie 4",
      "postinumero": "03100",
      "postitoimipaikka": "Nummela",
      "koordinaattiLat": 60.335396,
      "koordinaattiLon": 24.320470
    },
    {
      "kohteenOsoite": "Kirjavantie 2",
      "postinumero": "03400",
      "postitoimipaikka": "Vihti",
      "koordinaattiLat": 60.417700,
      "koordinaattiLon": 24.326460
    },
    {
      "kohteenOsoite": "M??ntyl??nkatu 1",
      "postinumero": "03600",
      "postitoimipaikka": "Karkkila",
      "koordinaattiLat": 60.534434,
      "koordinaattiLon": 24.231589
    },
    {
      "kohteenOsoite": "Tammelantie 8",
      "postinumero": "03600",
      "postitoimipaikka": "Karkkila",
      "koordinaattiLat": 60.536070,
      "koordinaattiLon": 24.211140
    },
    {
      "kohteenOsoite": "Marttilantie 2",
      "postinumero": "03850",
      "postitoimipaikka": "Pusula",
      "koordinaattiLat": 60.473640,
      "koordinaattiLon": 23.981910
    },
    {
      "kohteenOsoite": "Iso Kyl??tie 21",
      "postinumero": "04130",
      "postitoimipaikka": "Sipoo",
      "koordinaattiLat": 60.376120,
      "koordinaattiLon": 25.268400
    },
    {
      "kohteenOsoite": "Aleksis Kiven Tie 1",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.403020,
      "koordinaattiLon": 25.100610
    },
    {
      "kohteenOsoite": "Asemanaukio",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.404756,
      "koordinaattiLon": 25.104547
    },
    {
      "kohteenOsoite": "Kauppakaari 17",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.403833,
      "koordinaattiLon": 25.098146
    },
    {
      "kohteenOsoite": "Kauppakaari 2",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.401660,
      "koordinaattiLon": 25.103660
    },
    {
      "kohteenOsoite": "Kauppakaari 2",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.401660,
      "koordinaattiLon": 25.103670
    },
    {
      "kohteenOsoite": "Nikonkatu 1",
      "postinumero": "04200",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.399614,
      "koordinaattiLon": 25.102522
    },
    {
      "kohteenOsoite": "Ratatie 24",
      "postinumero": "04220",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.401692,
      "koordinaattiLon": 25.146635
    },
    {
      "kohteenOsoite": "Kalevankatu 65",
      "postinumero": "04230",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.420323,
      "koordinaattiLon": 25.089397
    },
    {
      "kohteenOsoite": "Lintulammenkatu 2",
      "postinumero": "04250",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.400003,
      "koordinaattiLon": 25.109054
    },
    {
      "kohteenOsoite": "Koivikontie 2",
      "postinumero": "04260",
      "postitoimipaikka": "Kerava",
      "koordinaattiLat": 60.380401,
      "koordinaattiLon": 25.096312
    },
    {
      "kohteenOsoite": "Autoasemankatu 1",
      "postinumero": "04300",
      "postitoimipaikka": "Tuusula",
      "koordinaattiLat": 60.402850,
      "koordinaattiLon": 25.029570
    },
    {
      "kohteenOsoite": "Hyryl??nkatu 6",
      "postinumero": "04300",
      "postitoimipaikka": "Tuusula",
      "koordinaattiLat": 60.396840,
      "koordinaattiLon": 25.019970
    },
    {
      "kohteenOsoite": "Hyryl??nkatu 6",
      "postinumero": "04300",
      "postitoimipaikka": "Tuusula",
      "koordinaattiLat": 60.396770,
      "koordinaattiLon": 25.020050
    },
    {
      "kohteenOsoite": "Haukantie 2",
      "postinumero": "04320",
      "postitoimipaikka": "Tuusula",
      "koordinaattiLat": 60.374380,
      "koordinaattiLon": 25.017810
    },
    {
      "kohteenOsoite": "Helsingintie 41",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.476790,
      "koordinaattiLon": 25.102510
    },
    {
      "kohteenOsoite": "Helsingintie 41",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.476970,
      "koordinaattiLon": 25.103230
    },
    {
      "kohteenOsoite": "Helsingintie 43",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.477610,
      "koordinaattiLon": 25.104660
    },
    {
      "kohteenOsoite": "Pajalantie 19",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.479239,
      "koordinaattiLon": 25.084631
    },
    {
      "kohteenOsoite": "Rantakatu 5",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.470510,
      "koordinaattiLon": 25.084280
    },
    {
      "kohteenOsoite": "Rantakatu 5",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.470510,
      "koordinaattiLon": 25.084360
    },
    {
      "kohteenOsoite": "Rantakatu 5",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.470440,
      "koordinaattiLon": 25.083580
    },
    {
      "kohteenOsoite": "Sibeliuksenkatu 15",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.472570,
      "koordinaattiLon": 25.089410
    },
    {
      "kohteenOsoite": "Sibeliuksenkatu 17",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.472414,
      "koordinaattiLon": 25.089126
    },
    {
      "kohteenOsoite": "Vehn??tie 2",
      "postinumero": "04400",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.492198,
      "koordinaattiLon": 25.093974
    },
    {
      "kohteenOsoite": "Sipoontie 54",
      "postinumero": "04430",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.465242,
      "koordinaattiLon": 25.119547
    },
    {
      "kohteenOsoite": "Oksapolku 1",
      "postinumero": "04440",
      "postitoimipaikka": "J??rvenp????",
      "koordinaattiLat": 60.492650,
      "koordinaattiLon": 25.067310
    },
    {
      "kohteenOsoite": "Raitakatu 1",
      "postinumero": "04480",
      "postitoimipaikka": "Haarajoki",
      "koordinaattiLat": 60.497916,
      "koordinaattiLon": 25.144038
    },
    {
      "kohteenOsoite": "Vanha Valtatie 195",
      "postinumero": "04500",
      "postitoimipaikka": "Kellokoski",
      "koordinaattiLat": 60.532140,
      "koordinaattiLon": 25.110460
    },
    {
      "kohteenOsoite": "Keskuskatu 1",
      "postinumero": "04600",
      "postitoimipaikka": "M??nts??l??",
      "koordinaattiLat": 60.635153,
      "koordinaattiLon": 25.317101
    },
    {
      "kohteenOsoite": "Keskuskatu 6",
      "postinumero": "04600",
      "postitoimipaikka": "M??nts??l??",
      "koordinaattiLat": 60.635830,
      "koordinaattiLon": 25.319510
    },
    {
      "kohteenOsoite": "Pohjoinen Pikatie 1",
      "postinumero": "04600",
      "postitoimipaikka": "M??nts??l??",
      "koordinaattiLat": 60.673358,
      "koordinaattiLon": 25.352355
    },
    {
      "kohteenOsoite": "S??link????ntie 2",
      "postinumero": "04600",
      "postitoimipaikka": "M??nts??l??",
      "koordinaattiLat": 60.637530,
      "koordinaattiLon": 25.317950
    },
    {
      "kohteenOsoite": "Kiljavantie 3",
      "postinumero": "05200",
      "postitoimipaikka": "Rajam??ki",
      "koordinaattiLat": 60.527680,
      "koordinaattiLon": 24.751200
    },
    {
      "kohteenOsoite": "Osulankuja 3",
      "postinumero": "05400",
      "postitoimipaikka": "Jokela",
      "koordinaattiLat": 60.553390,
      "koordinaattiLon": 24.967050
    },
    {
      "kohteenOsoite": "Lehmustie 1",
      "postinumero": "05460",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.616019,
      "koordinaattiLon": 24.868740
    },
    {
      "kohteenOsoite": "H??meenkatu 18",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.633850,
      "koordinaattiLon": 24.864970
    },
    {
      "kohteenOsoite": "H??meenkatu 3",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.631160,
      "koordinaattiLon": 24.860730
    },
    {
      "kohteenOsoite": "H??meenkatu 9",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.632333,
      "koordinaattiLon": 24.862895
    },
    {
      "kohteenOsoite": "Peltokuumolantie 2",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.618619,
      "koordinaattiLon": 24.802871
    },
    {
      "kohteenOsoite": "Torikatu 7",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.632160,
      "koordinaattiLon": 24.865500
    },
    {
      "kohteenOsoite": "Torikatu 9",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.631685,
      "koordinaattiLon": 24.866324
    },
    {
      "kohteenOsoite": "Uudenmaankatu 3",
      "postinumero": "05800",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.629151,
      "koordinaattiLon": 24.857127
    },
    {
      "kohteenOsoite": "Munckinkatu 37",
      "postinumero": "05820",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.641778,
      "koordinaattiLon": 24.867638
    },
    {
      "kohteenOsoite": "Uudenmaankatu 67",
      "postinumero": "05830",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.619970,
      "koordinaattiLon": 24.844471
    },
    {
      "kohteenOsoite": "Uudenmaankatu 106",
      "postinumero": "05840",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.608506,
      "koordinaattiLon": 24.835632
    },
    {
      "kohteenOsoite": "Jussilankatu 5",
      "postinumero": "05880",
      "postitoimipaikka": "Hyvink????",
      "koordinaattiLat": 60.647850,
      "koordinaattiLon": 24.833460
    },
    {
      "kohteenOsoite": "Aleksanterinkaari 1",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.387400,
      "koordinaattiLon": 25.651070
    },
    {
      "kohteenOsoite": "Aleksanterinkaari 1",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.387400,
      "koordinaattiLon": 25.651150
    },
    {
      "kohteenOsoite": "Lundinkatu 12",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.393650,
      "koordinaattiLon": 25.664260
    },
    {
      "kohteenOsoite": "Mannerheiminkatu 21",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.395714,
      "koordinaattiLon": 25.667927
    },
    {
      "kohteenOsoite": "Piispankatu 32",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.393460,
      "koordinaattiLon": 25.662640
    },
    {
      "kohteenOsoite": "Rauhankatu 27",
      "postinumero": "06100",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.393060,
      "koordinaattiLon": 25.665570
    },
    {
      "kohteenOsoite": "Asentajantie 1",
      "postinumero": "06150",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.399290,
      "koordinaattiLon": 25.684780
    },
    {
      "kohteenOsoite": "Sammontie 1",
      "postinumero": "06150",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.387640,
      "koordinaattiLon": 25.696350
    },
    {
      "kohteenOsoite": "Suolaketie 2",
      "postinumero": "06400",
      "postitoimipaikka": "Porvoo",
      "koordinaattiLat": 60.374420,
      "koordinaattiLon": 25.632240
    },
    {
      "kohteenOsoite": "Kirkkotie 175",
      "postinumero": "07170",
      "postitoimipaikka": "Pornainen",
      "koordinaattiLat": 60.477230,
      "koordinaattiLon": 25.374340
    },
    {
      "kohteenOsoite": "Helkam??entie 15",
      "postinumero": "07230",
      "postitoimipaikka": "Monninkyl??",
      "koordinaattiLat": 60.493045,
      "koordinaattiLon": 25.540345
    },
    {
      "kohteenOsoite": "Koivulinnantie 3",
      "postinumero": "07560",
      "postitoimipaikka": "Pukkila",
      "koordinaattiLat": 60.645421,
      "koordinaattiLon": 25.579407
    },
    {
      "kohteenOsoite": "Virastotie 4",
      "postinumero": "07600",
      "postitoimipaikka": "Myrskyl??",
      "koordinaattiLat": 60.669680,
      "koordinaattiLon": 25.852170
    },
    {
      "kohteenOsoite": "Vanhankyl??ntie 77",
      "postinumero": "07740",
      "postitoimipaikka": "Vanhakyl??",
      "koordinaattiLat": 60.485739,
      "koordinaattiLon": 25.892715
    },
    {
      "kohteenOsoite": "Lapinj??rventie 14 A",
      "postinumero": "07800",
      "postitoimipaikka": "Lapinj??rvi",
      "koordinaattiLat": 60.623260,
      "koordinaattiLon": 26.197930
    },
    {
      "kohteenOsoite": "Koivistontie 2 A",
      "postinumero": "07830",
      "postitoimipaikka": "Pukaro",
      "koordinaattiLat": 60.671043,
      "koordinaattiLon": 26.251426
    },
    {
      "kohteenOsoite": "Arkkitehdintie 5",
      "postinumero": "07900",
      "postitoimipaikka": "Loviisa",
      "koordinaattiLat": 60.452873,
      "koordinaattiLon": 26.206474
    },
    {
      "kohteenOsoite": "Brandesteininkatu 11",
      "postinumero": "07900",
      "postitoimipaikka": "Loviisa",
      "koordinaattiLat": 60.456590,
      "koordinaattiLon": 26.225520
    },
    {
      "kohteenOsoite": "Kuningattarenkatu 11",
      "postinumero": "07900",
      "postitoimipaikka": "Loviisa",
      "koordinaattiLat": 60.456320,
      "koordinaattiLon": 26.227560
    },
    {
      "kohteenOsoite": "Koivulanm??entie 1",
      "postinumero": "07970",
      "postitoimipaikka": "Ruotsinpyht????",
      "koordinaattiLat": 60.522780,
      "koordinaattiLon": 26.469080
    },
    {
      "kohteenOsoite": "Kauppakatu 5-9",
      "postinumero": "08100",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.249650,
      "koordinaattiLon": 24.066050
    },
    {
      "kohteenOsoite": "Laurinkatu 39",
      "postinumero": "08100",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.248518,
      "koordinaattiLon": 24.062126
    },
    {
      "kohteenOsoite": "Laurinkatu 48",
      "postinumero": "08100",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.250850,
      "koordinaattiLon": 24.064640
    },
    {
      "kohteenOsoite": "Ojamonharjuntie 61",
      "postinumero": "08200",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.227720,
      "koordinaattiLon": 24.026320
    },
    {
      "kohteenOsoite": "Ojamonharjuntie 61",
      "postinumero": "08200",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.227830,
      "koordinaattiLon": 24.025000
    },
    {
      "kohteenOsoite": "Hossanm??entie 1",
      "postinumero": "08350",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.292321,
      "koordinaattiLon": 24.061783
    },
    {
      "kohteenOsoite": "M??ntynummentie 46",
      "postinumero": "08500",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.274210,
      "koordinaattiLon": 24.132220
    },
    {
      "kohteenOsoite": "Tietolantie 1",
      "postinumero": "08700",
      "postitoimipaikka": "Lohja",
      "koordinaattiLat": 60.191490,
      "koordinaattiLon": 23.998650
    },
    {
      "kohteenOsoite": "Hakosenkuja 2",
      "postinumero": "09120",
      "postitoimipaikka": "Karjalohja",
      "koordinaattiLat": 60.244598,
      "koordinaattiLon": 23.731404
    },
    {
      "kohteenOsoite": "Kauppakuja 3",
      "postinumero": "09430",
      "postitoimipaikka": "Saukkola",
      "koordinaattiLat": 60.380436,
      "koordinaattiLon": 23.959745
    },
    {
      "kohteenOsoite": "Ola Westmanin Puistotie 9",
      "postinumero": "10210",
      "postitoimipaikka": "Inkoo",
      "koordinaattiLat": 60.045390,
      "koordinaattiLon": 24.004620
    },
    {
      "kohteenOsoite": "Kauppiaankatu 10",
      "postinumero": "10300",
      "postitoimipaikka": "Karjaa",
      "koordinaattiLat": 60.070500,
      "koordinaattiLon": 23.659370
    },
    {
      "kohteenOsoite": "Kauppiaankatu 11",
      "postinumero": "10300",
      "postitoimipaikka": "Karjaa",
      "koordinaattiLat": 60.070942,
      "koordinaattiLon": 23.659344
    },
    {
      "kohteenOsoite": "Kauppiaankatu 6",
      "postinumero": "10300",
      "postitoimipaikka": "Karjaa",
      "koordinaattiLat": 60.070098,
      "koordinaattiLon": 23.659764
    },
    {
      "kohteenOsoite": "Ratakatu 59",
      "postinumero": "10300",
      "postitoimipaikka": "Karjaa",
      "koordinaattiLat": 60.070620,
      "koordinaattiLon": 23.663150
    },
    {
      "kohteenOsoite": "Vanha Turuntie 73",
      "postinumero": "10420",
      "postitoimipaikka": "Pohjankuru",
      "koordinaattiLat": 60.095840,
      "koordinaattiLon": 23.525370
    },
    {
      "kohteenOsoite": "Pit??j??ntie 24",
      "postinumero": "10520",
      "postitoimipaikka": "Tenhola",
      "koordinaattiLat": 60.058550,
      "koordinaattiLon": 23.304830
    },
    {
      "kohteenOsoite": "Asematie 1",
      "postinumero": "10600",
      "postitoimipaikka": "Tammisaari",
      "koordinaattiLat": 59.976366,
      "koordinaattiLon": 23.438749
    },
    {
      "kohteenOsoite": "Asematie 6",
      "postinumero": "10600",
      "postitoimipaikka": "Tammisaari",
      "koordinaattiLat": 59.976993,
      "koordinaattiLon": 23.440325
    },
    {
      "kohteenOsoite": "Kuningattarenkatu 4",
      "postinumero": "10600",
      "postitoimipaikka": "Tammisaari",
      "koordinaattiLat": 59.974642,
      "koordinaattiLon": 23.437621
    },
    {
      "kohteenOsoite": "Raaseporintie 14",
      "postinumero": "10650",
      "postitoimipaikka": "Tammisaari",
      "koordinaattiLat": 59.978370,
      "koordinaattiLon": 23.463910
    },
    {
      "kohteenOsoite": "Nycanderinkatu 18",
      "postinumero": "10900",
      "postitoimipaikka": "Hanko",
      "koordinaattiLat": 59.824750,
      "koordinaattiLon": 22.964630
    },
    {
      "kohteenOsoite": "Revellinkatu 2",
      "postinumero": "10900",
      "postitoimipaikka": "Hanko",
      "koordinaattiLat": 59.828346,
      "koordinaattiLon": 22.965856
    },
    {
      "kohteenOsoite": "Vuorikatu 12",
      "postinumero": "10900",
      "postitoimipaikka": "Hanko",
      "koordinaattiLat": 59.825140,
      "koordinaattiLon": 22.967540
    },
    {
      "kohteenOsoite": "Keskuskatu 12",
      "postinumero": "11100",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.738344,
      "koordinaattiLon": 24.773246
    },
    {
      "kohteenOsoite": "Lopentie 22",
      "postinumero": "11100",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.731541,
      "koordinaattiLon": 24.762811
    },
    {
      "kohteenOsoite": "Voimalankatu 2",
      "postinumero": "11100",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.732470,
      "koordinaattiLon": 24.776630
    },
    {
      "kohteenOsoite": "Voimalankatu 2",
      "postinumero": "11100",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.732070,
      "koordinaattiLon": 24.777580
    },
    {
      "kohteenOsoite": "Voimalankatu 2",
      "postinumero": "11100",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.732950,
      "koordinaattiLon": 24.777730
    },
    {
      "kohteenOsoite": "Kinturintie 2",
      "postinumero": "11120",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.751044,
      "koordinaattiLon": 24.737960
    },
    {
      "kohteenOsoite": "Kontiontie 34",
      "postinumero": "11120",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.747558,
      "koordinaattiLon": 24.769215
    },
    {
      "kohteenOsoite": "Peltosaarenkatu 1",
      "postinumero": "11130",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.738980,
      "koordinaattiLon": 24.800930
    },
    {
      "kohteenOsoite": "Merkoksenkatu 5",
      "postinumero": "11710",
      "postitoimipaikka": "Riihim??ki",
      "koordinaattiLat": 60.721910,
      "koordinaattiLon": 24.734110
    },
    {
      "kohteenOsoite": "Keskustie 1",
      "postinumero": "12100",
      "postitoimipaikka": "Oitti",
      "koordinaattiLat": 60.787000,
      "koordinaattiLon": 25.027890
    },
    {
      "kohteenOsoite": "Heimolantie 1",
      "postinumero": "12400",
      "postitoimipaikka": "Tervakoski",
      "koordinaattiLat": 60.816527,
      "koordinaattiLon": 24.630774
    },
    {
      "kohteenOsoite": "Helsingintie 1426",
      "postinumero": "12400",
      "postitoimipaikka": "Tervakoski",
      "koordinaattiLat": 60.849160,
      "koordinaattiLon": 24.605990
    },
    {
      "kohteenOsoite": "Yhdystie 3",
      "postinumero": "12700",
      "postitoimipaikka": "Loppi",
      "koordinaattiLat": 60.720528,
      "koordinaattiLon": 24.442797
    },
    {
      "kohteenOsoite": "Etel??katu 14",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.993679,
      "koordinaattiLon": 24.460397
    },
    {
      "kohteenOsoite": "H??meensaarentie 7",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.992330,
      "koordinaattiLon": 24.460910
    },
    {
      "kohteenOsoite": "Kaivokatu 7",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.995210,
      "koordinaattiLon": 24.454940
    },
    {
      "kohteenOsoite": "Kaivokatu 7",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.995920,
      "koordinaattiLon": 24.454860
    },
    {
      "kohteenOsoite": "Raatihuoneenkatu 17",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.996050,
      "koordinaattiLon": 24.464890
    },
    {
      "kohteenOsoite": "Raatihuoneenkatu 21",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.995750,
      "koordinaattiLon": 24.463300
    },
    {
      "kohteenOsoite": "Raatihuoneenkatu 21-23",
      "postinumero": "13100",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.995352,
      "koordinaattiLon": 24.462360
    },
    {
      "kohteenOsoite": "Katsastusmiehentie 6",
      "postinumero": "13130",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.006650,
      "koordinaattiLon": 24.419200
    },
    {
      "kohteenOsoite": "Wartiam??entie 2",
      "postinumero": "13130",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.011850,
      "koordinaattiLon": 24.412390
    },
    {
      "kohteenOsoite": "Wartiam??entie 2",
      "postinumero": "13130",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.012280,
      "koordinaattiLon": 24.413820
    },
    {
      "kohteenOsoite": "H??til??nkatu 2",
      "postinumero": "13210",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.003290,
      "koordinaattiLon": 24.488380
    },
    {
      "kohteenOsoite": "Laaniitynkatu 2",
      "postinumero": "13210",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.006271,
      "koordinaattiLon": 24.506226
    },
    {
      "kohteenOsoite": "Hongistonkuja 8",
      "postinumero": "13500",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 60.984380,
      "koordinaattiLon": 24.417030
    },
    {
      "kohteenOsoite": "Ojoistenkatu 2",
      "postinumero": "13600",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.007233,
      "koordinaattiLon": 24.442845
    },
    {
      "kohteenOsoite": "Paroistentie 1",
      "postinumero": "13600",
      "postitoimipaikka": "H??meenlinna",
      "koordinaattiLat": 61.014626,
      "koordinaattiLon": 24.417134
    },
    {
      "kohteenOsoite": "Kinnalantie 3",
      "postinumero": "13720",
      "postitoimipaikka": "Parola",
      "koordinaattiLat": 61.055290,
      "koordinaattiLon": 24.372830
    },
    {
      "kohteenOsoite": "Harvialantie 7",
      "postinumero": "14200",
      "postitoimipaikka": "Turenki",
      "koordinaattiLat": 60.922732,
      "koordinaattiLon": 24.648636
    },
    {
      "kohteenOsoite": "Harvialantie 7",
      "postinumero": "14200",
      "postitoimipaikka": "Turenki",
      "koordinaattiLat": 60.922720,
      "koordinaattiLon": 24.648070
    },
    {
      "kohteenOsoite": "Rengonraitti 16",
      "postinumero": "14300",
      "postitoimipaikka": "Renko",
      "koordinaattiLat": 60.893987,
      "koordinaattiLon": 24.281003
    },
    {
      "kohteenOsoite": "Kotkaj??rventie 1",
      "postinumero": "14500",
      "postitoimipaikka": "Iittala",
      "koordinaattiLat": 61.090870,
      "koordinaattiLon": 24.136280
    },
    {
      "kohteenOsoite": "Hauhontie 13",
      "postinumero": "14700",
      "postitoimipaikka": "Hauho",
      "koordinaattiLat": 61.172105,
      "koordinaattiLon": 24.562418
    },
    {
      "kohteenOsoite": "Pohjoistentie 70",
      "postinumero": "14810",
      "postitoimipaikka": "Tuulos",
      "koordinaattiLat": 61.106370,
      "koordinaattiLon": 24.865315
    },
    {
      "kohteenOsoite": "Launeenkatu 14",
      "postinumero": "15100",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.967971,
      "koordinaattiLon": 25.653966
    },
    {
      "kohteenOsoite": "Mannerheiminkatu 15",
      "postinumero": "15100",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.976880,
      "koordinaattiLon": 25.657820
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 10",
      "postinumero": "15110",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.983097,
      "koordinaattiLon": 25.657515
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 19",
      "postinumero": "15110",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.982746,
      "koordinaattiLon": 25.659351
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 19 - 21",
      "postinumero": "15110",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.982750,
      "koordinaattiLon": 25.659350
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 8",
      "postinumero": "15110",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.983390,
      "koordinaattiLon": 25.654520
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 18",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.982650,
      "koordinaattiLon": 25.662220
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 18-22",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.982650,
      "koordinaattiLon": 25.662220
    },
    {
      "kohteenOsoite": "Aleksanterinkatu 18-22",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.982714,
      "koordinaattiLon": 25.662048
    },
    {
      "kohteenOsoite": "Ankkurikatu 1",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.996360,
      "koordinaattiLon": 25.656382
    },
    {
      "kohteenOsoite": "Kauppakatu 13",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.985970,
      "koordinaattiLon": 25.666247
    },
    {
      "kohteenOsoite": "Kauppakatu 18",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.987140,
      "koordinaattiLon": 25.664810
    },
    {
      "kohteenOsoite": "Kauppakatu 18",
      "postinumero": "15140",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.987410,
      "koordinaattiLon": 25.663690
    },
    {
      "kohteenOsoite": "Viipurintie 2",
      "postinumero": "15150",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.979193,
      "koordinaattiLon": 25.685332
    },
    {
      "kohteenOsoite": "Kauppiaankatu 2",
      "postinumero": "15160",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.981780,
      "koordinaattiLon": 25.736280
    },
    {
      "kohteenOsoite": "Kauppiaankatu 2",
      "postinumero": "15160",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.981020,
      "koordinaattiLon": 25.734940
    },
    {
      "kohteenOsoite": "Hirsimets??ntie 52",
      "postinumero": "15200",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.990359,
      "koordinaattiLon": 25.680840
    },
    {
      "kohteenOsoite": "Johanneksenkatu 2",
      "postinumero": "15240",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 61.008300,
      "koordinaattiLon": 25.679240
    },
    {
      "kohteenOsoite": "Ritaniemenkatu 7 - 9",
      "postinumero": "15240",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 61.015666,
      "koordinaattiLon": 25.664641
    },
    {
      "kohteenOsoite": "Alasenkatu 1",
      "postinumero": "15300",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.998909,
      "koordinaattiLon": 25.758600
    },
    {
      "kohteenOsoite": "Ajokatu 53",
      "postinumero": "15500",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.964820,
      "koordinaattiLon": 25.658630
    },
    {
      "kohteenOsoite": "Ostoskatu 8",
      "postinumero": "15500",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.962400,
      "koordinaattiLon": 25.670280
    },
    {
      "kohteenOsoite": "L??hdetie 2",
      "postinumero": "15540",
      "postitoimipaikka": "Vill??hde",
      "koordinaattiLat": 60.946690,
      "koordinaattiLon": 25.805000
    },
    {
      "kohteenOsoite": "Majakkatie 2",
      "postinumero": "15540",
      "postitoimipaikka": "Vill??hde",
      "koordinaattiLat": 60.948499,
      "koordinaattiLon": 25.886692
    },
    {
      "kohteenOsoite": "Lekatie 1",
      "postinumero": "15550",
      "postitoimipaikka": "Nastola",
      "koordinaattiLat": 60.936357,
      "koordinaattiLon": 25.960564
    },
    {
      "kohteenOsoite": "Muurarintie 3",
      "postinumero": "15550",
      "postitoimipaikka": "Nastola",
      "koordinaattiLat": 60.937210,
      "koordinaattiLon": 25.962390
    },
    {
      "kohteenOsoite": "Apilakatu 2",
      "postinumero": "15610",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.958750,
      "koordinaattiLon": 25.655540
    },
    {
      "kohteenOsoite": "Apilakatu 2",
      "postinumero": "15610",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.958747,
      "koordinaattiLon": 25.655543
    },
    {
      "kohteenOsoite": "Helsingintie 126",
      "postinumero": "15700",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.969550,
      "koordinaattiLon": 25.629200
    },
    {
      "kohteenOsoite": "Pasaasi 2",
      "postinumero": "15700",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.934910,
      "koordinaattiLon": 25.625810
    },
    {
      "kohteenOsoite": "Pasaasi 2",
      "postinumero": "15700",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.934560,
      "koordinaattiLon": 25.624880
    },
    {
      "kohteenOsoite": "Simolanmutka 1",
      "postinumero": "15700",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.935592,
      "koordinaattiLon": 25.633951
    },
    {
      "kohteenOsoite": "Hennalankatu 5",
      "postinumero": "15810",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.966607,
      "koordinaattiLon": 25.581422
    },
    {
      "kohteenOsoite": "Petsamonkatu 9",
      "postinumero": "15830",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.980937,
      "koordinaattiLon": 25.593021
    },
    {
      "kohteenOsoite": "Keskussairaalankatu 7",
      "postinumero": "15850",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.991119,
      "koordinaattiLon": 25.568203
    },
    {
      "kohteenOsoite": "Kansankatu 8",
      "postinumero": "15870",
      "postitoimipaikka": "Hollola",
      "koordinaattiLat": 60.988972,
      "koordinaattiLon": 25.516347
    },
    {
      "kohteenOsoite": "Kansankatu 8",
      "postinumero": "15870",
      "postitoimipaikka": "Hollola",
      "koordinaattiLat": 60.989100,
      "koordinaattiLon": 25.515880
    },
    {
      "kohteenOsoite": "Tarmontie 7",
      "postinumero": "15870",
      "postitoimipaikka": "Hollola",
      "koordinaattiLat": 60.988910,
      "koordinaattiLon": 25.544900
    },
    {
      "kohteenOsoite": "Vuorisenkatu 4",
      "postinumero": "15950",
      "postitoimipaikka": "Lahti",
      "koordinaattiLat": 60.996796,
      "koordinaattiLon": 25.592351
    },
    {
      "kohteenOsoite": "Erkontie 11",
      "postinumero": "16300",
      "postitoimipaikka": "Orimattila",
      "koordinaattiLat": 60.804621,
      "koordinaattiLon": 25.732582
    },
    {
      "kohteenOsoite": "K??kel??ntie 3",
      "postinumero": "16300",
      "postitoimipaikka": "Orimattila",
      "koordinaattiLat": 60.803109,
      "koordinaattiLon": 25.735097
    },
    {
      "kohteenOsoite": "H??hk??niementie 3",
      "postinumero": "16600",
      "postitoimipaikka": "J??rvel??",
      "koordinaattiLat": 60.868240,
      "koordinaattiLon": 25.274950
    },
    {
      "kohteenOsoite": "Keskustie 25",
      "postinumero": "16800",
      "postitoimipaikka": "H??meenkoski",
      "koordinaattiLat": 61.021128,
      "koordinaattiLon": 25.156658
    },
    {
      "kohteenOsoite": "Mommilantie 1",
      "postinumero": "16900",
      "postitoimipaikka": "Lammi",
      "koordinaattiLat": 61.079686,
      "koordinaattiLon": 25.011614
    },
    {
      "kohteenOsoite": "Maakaupantie 1",
      "postinumero": "17200",
      "postitoimipaikka": "V????ksy",
      "koordinaattiLat": 61.173241,
      "koordinaattiLon": 25.545685
    },
    {
      "kohteenOsoite": "Rusthollintie 1",
      "postinumero": "17200",
      "postitoimipaikka": "V????ksy",
      "koordinaattiLat": 61.172226,
      "koordinaattiLon": 25.550473
    },
    {
      "kohteenOsoite": "Keskustie 21",
      "postinumero": "17500",
      "postitoimipaikka": "Padasjoki",
      "koordinaattiLat": 61.350650,
      "koordinaattiLon": 25.276850
    },
    {
      "kohteenOsoite": "Toritie 51",
      "postinumero": "17800",
      "postitoimipaikka": "Kuhmoinen",
      "koordinaattiLat": 61.563460,
      "koordinaattiLon": 25.182090
    },
    {
      "kohteenOsoite": "Hevossaarentie 1",
      "postinumero": "18100",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.193017,
      "koordinaattiLon": 25.998376
    },
    {
      "kohteenOsoite": "Kirkkokatu 8",
      "postinumero": "18100",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.202656,
      "koordinaattiLon": 26.032844
    },
    {
      "kohteenOsoite": "Savontie 7",
      "postinumero": "18100",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.203480,
      "koordinaattiLon": 26.030910
    },
    {
      "kohteenOsoite": "Siltakatu 31",
      "postinumero": "18100",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.205868,
      "koordinaattiLon": 26.039447
    },
    {
      "kohteenOsoite": "Ty??miehentie 33",
      "postinumero": "18200",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.231917,
      "koordinaattiLon": 26.045773
    },
    {
      "kohteenOsoite": "Vanhatie 37",
      "postinumero": "18300",
      "postitoimipaikka": "Heinola",
      "koordinaattiLat": 61.248160,
      "koordinaattiLon": 26.060443
    },
    {
      "kohteenOsoite": "Tervalammentie 1",
      "postinumero": "19110",
      "postitoimipaikka": "Vierum??ki",
      "koordinaattiLat": 61.106110,
      "koordinaattiLon": 25.930560
    },
    {
      "kohteenOsoite": "M??yr??tie 1",
      "postinumero": "19410",
      "postitoimipaikka": "Kuortti",
      "koordinaattiLat": 61.422338,
      "koordinaattiLon": 26.434926
    },
    {
      "kohteenOsoite": "Virastokuja 2",
      "postinumero": "19430",
      "postitoimipaikka": "Pertunmaa",
      "koordinaattiLat": 61.504260,
      "koordinaattiLon": 26.481704
    },
    {
      "kohteenOsoite": "Keskustie 48",
      "postinumero": "19600",
      "postitoimipaikka": "Hartola",
      "koordinaattiLat": 61.578590,
      "koordinaattiLon": 26.021450
    },
    {
      "kohteenOsoite": "Keskustie 3",
      "postinumero": "19650",
      "postitoimipaikka": "Joutsa",
      "koordinaattiLat": 61.743190,
      "koordinaattiLon": 26.108100
    },
    {
      "kohteenOsoite": "Sysm??ntie 36",
      "postinumero": "19700",
      "postitoimipaikka": "Sysm??",
      "koordinaattiLat": 61.501810,
      "koordinaattiLon": 25.686610
    },
    {
      "kohteenOsoite": "Aninkaistenkatu 20",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.456840,
      "koordinaattiLon": 22.268570
    },
    {
      "kohteenOsoite": "Eerikinkatu",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452490,
      "koordinaattiLon": 22.271690
    },
    {
      "kohteenOsoite": "Eerikinkatu 19",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.449400,
      "koordinaattiLon": 22.262570
    },
    {
      "kohteenOsoite": "Kauppatori",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.451670,
      "koordinaattiLon": 22.266940
    },
    {
      "kohteenOsoite": "Kauppiaskatu 7",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.451757,
      "koordinaattiLon": 22.268618
    },
    {
      "kohteenOsoite": "Kauppiaskatu 9 B",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452470,
      "koordinaattiLon": 22.267640
    },
    {
      "kohteenOsoite": "Kauppiaskatu 9 B",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452390,
      "koordinaattiLon": 22.267760
    },
    {
      "kohteenOsoite": "Kauppiaskatu 9 B",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452360,
      "koordinaattiLon": 22.267850
    },
    {
      "kohteenOsoite": "Maariankatu 4",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.454370,
      "koordinaattiLon": 22.268730
    },
    {
      "kohteenOsoite": "Puutarhakatu 36",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.446279,
      "koordinaattiLon": 22.242964
    },
    {
      "kohteenOsoite": "Verkatehtaankatu 4",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.457680,
      "koordinaattiLon": 22.273540
    },
    {
      "kohteenOsoite": "Yliopistonkatu 20",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.450520,
      "koordinaattiLon": 22.263940
    },
    {
      "kohteenOsoite": "Yliopistonkatu 20",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.450520,
      "koordinaattiLon": 22.263940
    },
    {
      "kohteenOsoite": "Yliopistonkatu 20",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.451370,
      "koordinaattiLon": 22.264540
    },
    {
      "kohteenOsoite": "Yliopistonkatu 29 B",
      "postinumero": "20100",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.450542,
      "koordinaattiLon": 22.260870
    },
    {
      "kohteenOsoite": "Eerikinkatu 2",
      "postinumero": "20110",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452768,
      "koordinaattiLon": 22.273095
    },
    {
      "kohteenOsoite": "Hyrk??istentie 26",
      "postinumero": "20240",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.453150,
      "koordinaattiLon": 22.160640
    },
    {
      "kohteenOsoite": "Pitk??m??enkatu 4",
      "postinumero": "20250",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.457834,
      "koordinaattiLon": 22.236328
    },
    {
      "kohteenOsoite": "Vanha Tampereentie 108",
      "postinumero": "20300",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.472660,
      "koordinaattiLon": 22.286800
    },
    {
      "kohteenOsoite": "Markulantie 150",
      "postinumero": "20320",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.472000,
      "koordinaattiLon": 22.232600
    },
    {
      "kohteenOsoite": "Markulantie 150",
      "postinumero": "20320",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.471910,
      "koordinaattiLon": 22.232590
    },
    {
      "kohteenOsoite": "Markulantie 150",
      "postinumero": "20320",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.471890,
      "koordinaattiLon": 22.232900
    },
    {
      "kohteenOsoite": "Viilarinkatu 3",
      "postinumero": "20320",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.473290,
      "koordinaattiLon": 22.227580
    },
    {
      "kohteenOsoite": "Viilarinkatu 3",
      "postinumero": "20320",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.473800,
      "koordinaattiLon": 22.226890
    },
    {
      "kohteenOsoite": "Piiparinpolku 23",
      "postinumero": "20360",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.489940,
      "koordinaattiLon": 22.266360
    },
    {
      "kohteenOsoite": "Mittumaarintie 73",
      "postinumero": "20400",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.534870,
      "koordinaattiLon": 22.306050
    },
    {
      "kohteenOsoite": "H??meenkatu 5",
      "postinumero": "20500",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.452580,
      "koordinaattiLon": 22.283790
    },
    {
      "kohteenOsoite": "Kiinanmyllynkatu 3",
      "postinumero": "20500",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.453060,
      "koordinaattiLon": 22.286920
    },
    {
      "kohteenOsoite": "Kalevantie 41",
      "postinumero": "20520",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.446280,
      "koordinaattiLon": 22.324180
    },
    {
      "kohteenOsoite": "Kalevantie 41",
      "postinumero": "20520",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.446630,
      "koordinaattiLon": 22.324270
    },
    {
      "kohteenOsoite": "Gregorius Ix:n Tie 8",
      "postinumero": "20540",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.469352,
      "koordinaattiLon": 22.306841
    },
    {
      "kohteenOsoite": "H??meentie 24",
      "postinumero": "20540",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.455666,
      "koordinaattiLon": 22.297798
    },
    {
      "kohteenOsoite": "Reivikatu 5",
      "postinumero": "20540",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.469640,
      "koordinaattiLon": 22.356106
    },
    {
      "kohteenOsoite": "Vanha H??meentie 112",
      "postinumero": "20540",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.458740,
      "koordinaattiLon": 22.321680
    },
    {
      "kohteenOsoite": "Kotkankatu 3",
      "postinumero": "20610",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.441060,
      "koordinaattiLon": 22.340640
    },
    {
      "kohteenOsoite": "Littoistentie 81",
      "postinumero": "20610",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.443170,
      "koordinaattiLon": 22.359420
    },
    {
      "kohteenOsoite": "Littoistentie 81",
      "postinumero": "20610",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.443450,
      "koordinaattiLon": 22.358330
    },
    {
      "kohteenOsoite": "Uusi  Littoistentie 48",
      "postinumero": "20660",
      "postitoimipaikka": "Littoinen",
      "koordinaattiLat": 60.445010,
      "koordinaattiLon": 22.391720
    },
    {
      "kohteenOsoite": "Kaskentie 2",
      "postinumero": "20700",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.441389,
      "koordinaattiLon": 22.280319
    },
    {
      "kohteenOsoite": "Uudenmaantie 17",
      "postinumero": "20700",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.443820,
      "koordinaattiLon": 22.286230
    },
    {
      "kohteenOsoite": "Uudenmaantie 17",
      "postinumero": "20700",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.443820,
      "koordinaattiLon": 22.286226
    },
    {
      "kohteenOsoite": "Skanssinkatu 10",
      "postinumero": "20730",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.429770,
      "koordinaattiLon": 22.321510
    },
    {
      "kohteenOsoite": "Skanssinkatu 10",
      "postinumero": "20730",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.429770,
      "koordinaattiLon": 22.321500
    },
    {
      "kohteenOsoite": "Kataraistentie 7",
      "postinumero": "20740",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.417959,
      "koordinaattiLon": 22.301782
    },
    {
      "kohteenOsoite": "Laukl??hteenkatu 10",
      "postinumero": "20740",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.422489,
      "koordinaattiLon": 22.284954
    },
    {
      "kohteenOsoite": "Maistraatinpolku 1",
      "postinumero": "20750",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.433250,
      "koordinaattiLon": 22.348440
    },
    {
      "kohteenOsoite": "Kairiskulmantie 3",
      "postinumero": "20760",
      "postitoimipaikka": "Piispanristi",
      "koordinaattiLat": 60.415314,
      "koordinaattiLon": 22.326678
    },
    {
      "kohteenOsoite": "Hovirinnantie 5",
      "postinumero": "20780",
      "postitoimipaikka": "Kaarina",
      "koordinaattiLat": 60.407118,
      "koordinaattiLon": 22.362745
    },
    {
      "kohteenOsoite": "Kuskinkatu 4",
      "postinumero": "20780",
      "postitoimipaikka": "Kaarina",
      "koordinaattiLat": 60.408440,
      "koordinaattiLon": 22.372900
    },
    {
      "kohteenOsoite": "Oskarinaukio 3",
      "postinumero": "20780",
      "postitoimipaikka": "Kaarina",
      "koordinaattiLat": 60.407930,
      "koordinaattiLon": 22.369780
    },
    {
      "kohteenOsoite": "It??inen Rantakatu 60",
      "postinumero": "20810",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.440605,
      "koordinaattiLon": 22.248422
    },
    {
      "kohteenOsoite": "Kupittaankatu 146",
      "postinumero": "20810",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.437100,
      "koordinaattiLon": 22.258080
    },
    {
      "kohteenOsoite": "K??likatu 2",
      "postinumero": "20810",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.430000,
      "koordinaattiLon": 22.239350
    },
    {
      "kohteenOsoite": "Martinkatu 5",
      "postinumero": "20810",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.442575,
      "koordinaattiLon": 22.257636
    },
    {
      "kohteenOsoite": "R??ti??l??nkatu 24",
      "postinumero": "20810",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.427387,
      "koordinaattiLon": 22.269312
    },
    {
      "kohteenOsoite": "Ratsumiehenkatu 8",
      "postinumero": "20880",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.421396,
      "koordinaattiLon": 22.264188
    },
    {
      "kohteenOsoite": "Vanha Kakskerrantie 1",
      "postinumero": "20900",
      "postitoimipaikka": "Turku",
      "koordinaattiLat": 60.418678,
      "koordinaattiLon": 22.228656
    },
    {
      "kohteenOsoite": "Alppilankatu 2",
      "postinumero": "21100",
      "postitoimipaikka": "Naantali",
      "koordinaattiLat": 60.466703,
      "koordinaattiLon": 22.031897
    },
    {
      "kohteenOsoite": "Tullikatu 12",
      "postinumero": "21100",
      "postitoimipaikka": "Naantali",
      "koordinaattiLat": 60.467560,
      "koordinaattiLon": 22.024320
    },
    {
      "kohteenOsoite": "Venekuja 5",
      "postinumero": "21100",
      "postitoimipaikka": "Naantali",
      "koordinaattiLat": 60.476888,
      "koordinaattiLon": 22.042655
    },
    {
      "kohteenOsoite": "Nuhjalantie 8",
      "postinumero": "21110",
      "postitoimipaikka": "Naantali",
      "koordinaattiLat": 60.484600,
      "koordinaattiLon": 22.052000
    },
    {
      "kohteenOsoite": "Viluntie 3",
      "postinumero": "21140",
      "postitoimipaikka": "Rym??ttyl??",
      "koordinaattiLat": 60.376491,
      "koordinaattiLon": 21.945575
    },
    {
      "kohteenOsoite": "Kauppakatu 2",
      "postinumero": "21200",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.487308,
      "koordinaattiLon": 22.167060
    },
    {
      "kohteenOsoite": "Raisiontori 5",
      "postinumero": "21200",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.485970,
      "koordinaattiLon": 22.166470
    },
    {
      "kohteenOsoite": "Voudinkatu 5",
      "postinumero": "21200",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.490291,
      "koordinaattiLon": 22.170818
    },
    {
      "kohteenOsoite": "Keskuskaari 5",
      "postinumero": "21250",
      "postitoimipaikka": "Masku",
      "koordinaattiLat": 60.570205,
      "koordinaattiLon": 22.095911
    },
    {
      "kohteenOsoite": "Nummentie 3",
      "postinumero": "21270",
      "postitoimipaikka": "Nousiainen",
      "koordinaattiLat": 60.598570,
      "koordinaattiLon": 22.084450
    },
    {
      "kohteenOsoite": "It??niityntie 15",
      "postinumero": "21280",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.489990,
      "koordinaattiLon": 22.210700
    },
    {
      "kohteenOsoite": "Myllynkatu 1",
      "postinumero": "21280",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.490770,
      "koordinaattiLon": 22.197830
    },
    {
      "kohteenOsoite": "Myllynkatu 1",
      "postinumero": "21280",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.490790,
      "koordinaattiLon": 22.198080
    },
    {
      "kohteenOsoite": "Myllynkatu 1",
      "postinumero": "21280",
      "postitoimipaikka": "Raisio",
      "koordinaattiLat": 60.490600,
      "koordinaattiLon": 22.202730
    },
    {
      "kohteenOsoite": "Vanhatie 2",
      "postinumero": "21290",
      "postitoimipaikka": "Rusko",
      "koordinaattiLat": 60.541366,
      "koordinaattiLon": 22.221073
    },
    {
      "kohteenOsoite": "Turuntie 2",
      "postinumero": "21380",
      "postitoimipaikka": "Aura",
      "koordinaattiLat": 60.646206,
      "koordinaattiLon": 22.590869
    },
    {
      "kohteenOsoite": "Hanhenkaari 3",
      "postinumero": "21420",
      "postitoimipaikka": "Lieto",
      "koordinaattiLat": 60.504341,
      "koordinaattiLon": 22.459615
    },
    {
      "kohteenOsoite": "Hyv??ttyl??ntie 4",
      "postinumero": "21420",
      "postitoimipaikka": "Lieto",
      "koordinaattiLat": 60.504816,
      "koordinaattiLon": 22.458149
    },
    {
      "kohteenOsoite": "Kirkkotie 2",
      "postinumero": "21490",
      "postitoimipaikka": "Marttila",
      "koordinaattiLat": 60.584671,
      "koordinaattiLon": 22.900143
    },
    {
      "kohteenOsoite": "Lukkarintie 2",
      "postinumero": "21500",
      "postitoimipaikka": "Piikki??",
      "koordinaattiLat": 60.425320,
      "koordinaattiLon": 22.514620
    },
    {
      "kohteenOsoite": "Asematie 1",
      "postinumero": "21530",
      "postitoimipaikka": "Paimio",
      "koordinaattiLat": 60.457940,
      "koordinaattiLon": 22.688877
    },
    {
      "kohteenOsoite": "Vistantie 21",
      "postinumero": "21530",
      "postitoimipaikka": "Paimio",
      "koordinaattiLat": 60.456200,
      "koordinaattiLon": 22.689150
    },
    {
      "kohteenOsoite": "Viljontie 1",
      "postinumero": "21570",
      "postitoimipaikka": "Sauvo",
      "koordinaattiLat": 60.343120,
      "koordinaattiLon": 22.693810
    },
    {
      "kohteenOsoite": "Kirkkoesplanadi 32",
      "postinumero": "21600",
      "postitoimipaikka": "Parainen",
      "koordinaattiLat": 60.308980,
      "koordinaattiLon": 22.308190
    },
    {
      "kohteenOsoite": "Rantatie 20",
      "postinumero": "21600",
      "postitoimipaikka": "Parainen",
      "koordinaattiLat": 60.301840,
      "koordinaattiLon": 22.302040
    },
    {
      "kohteenOsoite": "Rantatie 8",
      "postinumero": "21600",
      "postitoimipaikka": "Parainen",
      "koordinaattiLat": 60.299570,
      "koordinaattiLon": 22.302080
    },
    {
      "kohteenOsoite": "Kes??tori 1",
      "postinumero": "21660",
      "postitoimipaikka": "Nauvo",
      "koordinaattiLat": 60.192520,
      "koordinaattiLon": 21.909695
    },
    {
      "kohteenOsoite": "Kyr??ntie 28",
      "postinumero": "21800",
      "postitoimipaikka": "Kyr??",
      "koordinaattiLat": 60.703570,
      "koordinaattiLon": 22.754980
    },
    {
      "kohteenOsoite": "Turuntie 631",
      "postinumero": "21870",
      "postitoimipaikka": "Riihikoski",
      "koordinaattiLat": 60.718570,
      "koordinaattiLon": 22.603080
    },
    {
      "kohteenOsoite": "Haverintie 6",
      "postinumero": "21900",
      "postitoimipaikka": "Yl??ne",
      "koordinaattiLat": 60.878810,
      "koordinaattiLon": 22.411230
    },
    {
      "kohteenOsoite": "K??pmansgatan 2",
      "postinumero": "22100",
      "postitoimipaikka": "Maarianhamina",
      "koordinaattiLat": 60.101340,
      "koordinaattiLon": 19.941880
    },
    {
      "kohteenOsoite": "Nygatan 2",
      "postinumero": "22100",
      "postitoimipaikka": "Maarianhamina",
      "koordinaattiLat": 60.100444,
      "koordinaattiLon": 19.943256
    },
    {
      "kohteenOsoite": "Strandhagsv??gen 11",
      "postinumero": "22100",
      "postitoimipaikka": "Maarianhamina",
      "koordinaattiLat": 60.117578,
      "koordinaattiLon": 19.942334
    },
    {
      "kohteenOsoite": "Torggatan 10",
      "postinumero": "22100",
      "postitoimipaikka": "Maarianhamina",
      "koordinaattiLat": 60.099010,
      "koordinaattiLon": 19.942020
    },
    {
      "kohteenOsoite": "Sparv??gen 1",
      "postinumero": "22150",
      "postitoimipaikka": "Jomala",
      "koordinaattiLat": 60.130081,
      "koordinaattiLon": 19.933818
    },
    {
      "kohteenOsoite": "Von Knorringsv??gen 1",
      "postinumero": "22410",
      "postitoimipaikka": "Godby",
      "koordinaattiLat": 60.233957,
      "koordinaattiLon": 20.001817
    },
    {
      "kohteenOsoite": "Virastotie 2",
      "postinumero": "23100",
      "postitoimipaikka": "Myn??m??ki",
      "koordinaattiLat": 60.679131,
      "koordinaattiLon": 21.987756
    },
    {
      "kohteenOsoite": "Vinkkil??ntie 17",
      "postinumero": "23200",
      "postitoimipaikka": "Vinkkil??",
      "koordinaattiLat": 60.686149,
      "koordinaattiLon": 21.713575
    },
    {
      "kohteenOsoite": "Ihattulantie 5",
      "postinumero": "23310",
      "postitoimipaikka": "Taivassalo",
      "koordinaattiLat": 60.561030,
      "koordinaattiLon": 21.615505
    },
    {
      "kohteenOsoite": "Kivimaantie 20",
      "postinumero": "23360",
      "postitoimipaikka": "Kustavi",
      "koordinaattiLat": 60.545770,
      "koordinaattiLon": 21.358890
    },
    {
      "kohteenOsoite": "Ketunkalliontie 3 C",
      "postinumero": "23500",
      "postitoimipaikka": "Uusikaupunki",
      "koordinaattiLat": 60.805034,
      "koordinaattiLon": 21.423127
    },
    {
      "kohteenOsoite": "Koulukatu 1",
      "postinumero": "23500",
      "postitoimipaikka": "Uusikaupunki",
      "koordinaattiLat": 60.799430,
      "koordinaattiLon": 21.411550
    },
    {
      "kohteenOsoite": "Rauhankatu 4",
      "postinumero": "23500",
      "postitoimipaikka": "Uusikaupunki",
      "koordinaattiLat": 60.799672,
      "koordinaattiLon": 21.408562
    },
    {
      "kohteenOsoite": "Kauppakatu 3",
      "postinumero": "23800",
      "postitoimipaikka": "Laitila",
      "koordinaattiLat": 60.876080,
      "koordinaattiLon": 21.698190
    },
    {
      "kohteenOsoite": "Keskuskatu 20",
      "postinumero": "23800",
      "postitoimipaikka": "Laitila",
      "koordinaattiLat": 60.880509,
      "koordinaattiLon": 21.694903
    },
    {
      "kohteenOsoite": "Helsingintie 14",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.386571,
      "koordinaattiLon": 23.135984
    },
    {
      "kohteenOsoite": "Horninkatu 11",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.385080,
      "koordinaattiLon": 23.129740
    },
    {
      "kohteenOsoite": "H??meentie 24",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.389935,
      "koordinaattiLon": 23.127363
    },
    {
      "kohteenOsoite": "Vilhonkatu 14",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.386233,
      "koordinaattiLon": 23.125372
    },
    {
      "kohteenOsoite": "Vilhonkatu 8",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.386373,
      "koordinaattiLon": 23.124741
    },
    {
      "kohteenOsoite": "Vilhonkatu 8",
      "postinumero": "24100",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.386370,
      "koordinaattiLon": 23.124740
    },
    {
      "kohteenOsoite": "Ruoksm??entie 1",
      "postinumero": "24260",
      "postitoimipaikka": "Salo",
      "koordinaattiLat": 60.419197,
      "koordinaattiLon": 23.164796
    },
    {
      "kohteenOsoite": "Halikontie 2",
      "postinumero": "24800",
      "postitoimipaikka": "Halikko",
      "koordinaattiLat": 60.396428,
      "koordinaattiLon": 23.080738
    },
    {
      "kohteenOsoite": "Prismantie 2",
      "postinumero": "24800",
      "postitoimipaikka": "Halikko",
      "koordinaattiLat": 60.393950,
      "koordinaattiLon": 23.085490
    },
    {
      "kohteenOsoite": "Inkereentie 1023",
      "postinumero": "25190",
      "postitoimipaikka": "Pertteli",
      "koordinaattiLat": 60.436300,
      "koordinaattiLon": 23.277520
    },
    {
      "kohteenOsoite": "Kirkkotie 10",
      "postinumero": "25390",
      "postitoimipaikka": "Kiikala",
      "koordinaattiLat": 60.460930,
      "koordinaattiLon": 23.551970
    },
    {
      "kohteenOsoite": "Bulevardi 10",
      "postinumero": "25410",
      "postitoimipaikka": "Suomusj??rvi",
      "koordinaattiLat": 60.380049,
      "koordinaattiLon": 23.615747
    },
    {
      "kohteenOsoite": "Toijantie 7",
      "postinumero": "25460",
      "postitoimipaikka": "Kisko",
      "koordinaattiLat": 60.264661,
      "koordinaattiLon": 23.446250
    },
    {
      "kohteenOsoite": "Haarlantie 21",
      "postinumero": "25500",
      "postitoimipaikka": "Perni??",
      "koordinaattiLat": 60.205330,
      "koordinaattiLon": 23.114880
    },
    {
      "kohteenOsoite": "Salontie 4",
      "postinumero": "25500",
      "postitoimipaikka": "Perni??",
      "koordinaattiLat": 60.205826,
      "koordinaattiLon": 23.122898
    },
    {
      "kohteenOsoite": "Engelsbyntie 9",
      "postinumero": "25700",
      "postitoimipaikka": "Kemi??",
      "koordinaattiLat": 60.163120,
      "koordinaattiLon": 22.732850
    },
    {
      "kohteenOsoite": "Kolapakantie 2",
      "postinumero": "25900",
      "postitoimipaikka": "Taalintehdas",
      "koordinaattiLat": 60.020886,
      "koordinaattiLon": 22.507714
    },
    {
      "kohteenOsoite": "Karjalankatu 5",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.132382,
      "koordinaattiLon": 21.507440
    },
    {
      "kohteenOsoite": "Kauppakatu 1",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.128280,
      "koordinaattiLon": 21.506460
    },
    {
      "kohteenOsoite": "Kauppakatu 1",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.128220,
      "koordinaattiLon": 21.506140
    },
    {
      "kohteenOsoite": "Nortamonkatu 10",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.130160,
      "koordinaattiLon": 21.506010
    },
    {
      "kohteenOsoite": "Porintie 4",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.132800,
      "koordinaattiLon": 21.517080
    },
    {
      "kohteenOsoite": "Porintie 4",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.132700,
      "koordinaattiLon": 21.514500
    },
    {
      "kohteenOsoite": "Sahankatu 2",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.123677,
      "koordinaattiLon": 21.501560
    },
    {
      "kohteenOsoite": "Teollisuuskatu 2",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.118559,
      "koordinaattiLon": 21.506388
    },
    {
      "kohteenOsoite": "??Yh??nj??rventie 1",
      "postinumero": "26100",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.131860,
      "koordinaattiLon": 21.540698
    },
    {
      "kohteenOsoite": "Lahdenkatu 11",
      "postinumero": "26200",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.144870,
      "koordinaattiLon": 21.483120
    },
    {
      "kohteenOsoite": "Monnankatu 6",
      "postinumero": "26660",
      "postitoimipaikka": "Rauma",
      "koordinaattiLat": 61.120764,
      "koordinaattiLon": 21.528243
    },
    {
      "kohteenOsoite": "Kirkkotie 3",
      "postinumero": "27100",
      "postitoimipaikka": "Eurajoki",
      "koordinaattiLat": 61.201804,
      "koordinaattiLon": 21.727938
    },
    {
      "kohteenOsoite": "Meijeritie 2",
      "postinumero": "27230",
      "postitoimipaikka": "Lappi",
      "koordinaattiLat": 61.100872,
      "koordinaattiLon": 21.846427
    },
    {
      "kohteenOsoite": "Eurakoskentie 38",
      "postinumero": "27400",
      "postitoimipaikka": "Kiukainen",
      "koordinaattiLat": 61.208120,
      "koordinaattiLon": 22.083540
    },
    {
      "kohteenOsoite": "Paneliantie 46",
      "postinumero": "27430",
      "postitoimipaikka": "Panelia",
      "koordinaattiLat": 61.226460,
      "koordinaattiLon": 21.973220
    },
    {
      "kohteenOsoite": "Kauppatie 3",
      "postinumero": "27500",
      "postitoimipaikka": "Kauttua",
      "koordinaattiLat": 61.115671,
      "koordinaattiLon": 22.162809
    },
    {
      "kohteenOsoite": "Satakunnankatu 13",
      "postinumero": "27510",
      "postitoimipaikka": "Eura",
      "koordinaattiLat": 61.129870,
      "koordinaattiLon": 22.135740
    },
    {
      "kohteenOsoite": "Satakunnankatu 19",
      "postinumero": "27510",
      "postitoimipaikka": "Eura",
      "koordinaattiLat": 61.130160,
      "koordinaattiLon": 22.139755
    },
    {
      "kohteenOsoite": "K??yli??ntie 1",
      "postinumero": "27710",
      "postitoimipaikka": "K??yli??",
      "koordinaattiLat": 61.118401,
      "koordinaattiLon": 22.307495
    },
    {
      "kohteenOsoite": "Pyh??j??rventie 8",
      "postinumero": "27800",
      "postitoimipaikka": "S??kyl??",
      "koordinaattiLat": 61.046190,
      "koordinaattiLon": 22.345710
    },
    {
      "kohteenOsoite": "Gallen-kallelankatu 9",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.487140,
      "koordinaattiLon": 21.793440
    },
    {
      "kohteenOsoite": "Isolinnankatu 18",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.485256,
      "koordinaattiLon": 21.800355
    },
    {
      "kohteenOsoite": "Kolmiokatu 2",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.497987,
      "koordinaattiLon": 21.809204
    },
    {
      "kohteenOsoite": "Siltapuistokatu 14",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.494580,
      "koordinaattiLon": 21.799840
    },
    {
      "kohteenOsoite": "Yrj??nkatu 10",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.486090,
      "koordinaattiLon": 21.798040
    },
    {
      "kohteenOsoite": "Yrj??nkatu 14",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.484812,
      "koordinaattiLon": 21.797452
    },
    {
      "kohteenOsoite": "Yrj??nkatu 18",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.483794,
      "koordinaattiLon": 21.796945
    },
    {
      "kohteenOsoite": "Yrj??nkatu 22",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.482930,
      "koordinaattiLon": 21.796530
    },
    {
      "kohteenOsoite": "Yrj??nkatu 22",
      "postinumero": "28100",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.482710,
      "koordinaattiLon": 21.796570
    },
    {
      "kohteenOsoite": "Kalevanpuisto 54",
      "postinumero": "28120",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.482923,
      "koordinaattiLon": 21.762315
    },
    {
      "kohteenOsoite": "Tikkulantie 2",
      "postinumero": "28120",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.487580,
      "koordinaattiLon": 21.750980
    },
    {
      "kohteenOsoite": "It??keskuksenkaari 6",
      "postinumero": "28130",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.453180,
      "koordinaattiLon": 21.838930
    },
    {
      "kohteenOsoite": "It??keskuksenkaari 6",
      "postinumero": "28130",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.454250,
      "koordinaattiLon": 21.838410
    },
    {
      "kohteenOsoite": "It??keskuksenkaari 8",
      "postinumero": "28130",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.453630,
      "koordinaattiLon": 21.835600
    },
    {
      "kohteenOsoite": "Presidentinpuistokatu 14",
      "postinumero": "28130",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.478090,
      "koordinaattiLon": 21.802250
    },
    {
      "kohteenOsoite": "Satakunnankatu 23",
      "postinumero": "28130",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.477971,
      "koordinaattiLon": 21.789978
    },
    {
      "kohteenOsoite": "Hyvel??ntie 1",
      "postinumero": "28200",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.499140,
      "koordinaattiLon": 21.804180
    },
    {
      "kohteenOsoite": "Lukkarinsannantie 2",
      "postinumero": "28300",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.488375,
      "koordinaattiLon": 21.841450
    },
    {
      "kohteenOsoite": "Vanhakoivistontie 10",
      "postinumero": "28360",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.475052,
      "koordinaattiLon": 21.822269
    },
    {
      "kohteenOsoite": "Friitalantie 18",
      "postinumero": "28400",
      "postitoimipaikka": "Ulvila",
      "koordinaattiLat": 61.428184,
      "koordinaattiLon": 21.875053
    },
    {
      "kohteenOsoite": "Ravanintie 1",
      "postinumero": "28450",
      "postitoimipaikka": "Ulvila",
      "koordinaattiLat": 61.435610,
      "koordinaattiLon": 21.896110
    },
    {
      "kohteenOsoite": "Etel??v??yl?? 2",
      "postinumero": "28610",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.478040,
      "koordinaattiLon": 21.757580
    },
    {
      "kohteenOsoite": "Etel??v??yl?? 2",
      "postinumero": "28610",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.478040,
      "koordinaattiLon": 21.757600
    },
    {
      "kohteenOsoite": "Ojurintie 2",
      "postinumero": "28610",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.486220,
      "koordinaattiLon": 21.745630
    },
    {
      "kohteenOsoite": "Harry Gullichsenintie 14",
      "postinumero": "28800",
      "postitoimipaikka": "Pori",
      "koordinaattiLat": 61.549990,
      "koordinaattiLon": 21.593660
    },
    {
      "kohteenOsoite": "Kuivalahdentie 2 B",
      "postinumero": "29100",
      "postitoimipaikka": "Luvia",
      "koordinaattiLat": 61.360900,
      "koordinaattiLon": 21.623980
    },
    {
      "kohteenOsoite": "Harjavallankatu 12",
      "postinumero": "29200",
      "postitoimipaikka": "Harjavalta",
      "koordinaattiLat": 61.313830,
      "koordinaattiLon": 22.146430
    },
    {
      "kohteenOsoite": "Harjavallankatu 13",
      "postinumero": "29200",
      "postitoimipaikka": "Harjavalta",
      "koordinaattiLat": 61.314180,
      "koordinaattiLon": 22.145554
    },
    {
      "kohteenOsoite": "Harjavallankatu 17",
      "postinumero": "29200",
      "postitoimipaikka": "Harjavalta",
      "koordinaattiLat": 61.314930,
      "koordinaattiLon": 22.144610
    },
    {
      "kohteenOsoite": "Porintie 4",
      "postinumero": "29250",
      "postitoimipaikka": "Nakkila",
      "koordinaattiLat": 61.366050,
      "koordinaattiLon": 22.003160
    },
    {
      "kohteenOsoite": "Finpyyntie 5",
      "postinumero": "29600",
      "postitoimipaikka": "Noormarkku",
      "koordinaattiLat": 61.591701,
      "koordinaattiLon": 21.869772
    },
    {
      "kohteenOsoite": "Vanhatie 17",
      "postinumero": "29630",
      "postitoimipaikka": "Pomarkku",
      "koordinaattiLat": 61.695400,
      "koordinaattiLon": 22.011930
    },
    {
      "kohteenOsoite": "Kankaanp????ntie 2",
      "postinumero": "29810",
      "postitoimipaikka": "Siikainen",
      "koordinaattiLat": 61.877750,
      "koordinaattiLon": 21.823070
    },
    {
      "kohteenOsoite": "Kauppatie 51",
      "postinumero": "29900",
      "postitoimipaikka": "Merikarvia",
      "koordinaattiLat": 61.859859,
      "koordinaattiLon": 21.504841
    },
    {
      "kohteenOsoite": "Kartanonkatu 11",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.817100,
      "koordinaattiLon": 23.628540
    },
    {
      "kohteenOsoite": "Keitaankatu 1",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.825734,
      "koordinaattiLon": 23.576090
    },
    {
      "kohteenOsoite": "Matkailijankatu 2",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.827081,
      "koordinaattiLon": 23.573744
    },
    {
      "kohteenOsoite": "Sibeliuksenkatu 3",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.815067,
      "koordinaattiLon": 23.629832
    },
    {
      "kohteenOsoite": "Tapulikuja 6",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.812040,
      "koordinaattiLon": 23.634700
    },
    {
      "kohteenOsoite": "Tapulikuja 6",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.812190,
      "koordinaattiLon": 23.637030
    },
    {
      "kohteenOsoite": "Yhti??nkatu",
      "postinumero": "30100",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.810430,
      "koordinaattiLon": 23.630170
    },
    {
      "kohteenOsoite": "Siurilankatu 28",
      "postinumero": "30300",
      "postitoimipaikka": "Forssa",
      "koordinaattiLat": 60.802740,
      "koordinaattiLon": 23.626150
    },
    {
      "kohteenOsoite": "Hakkapeliitantie 5",
      "postinumero": "31300",
      "postitoimipaikka": "Tammela",
      "koordinaattiLat": 60.807562,
      "koordinaattiLon": 23.758874
    },
    {
      "kohteenOsoite": "Joensuuntie 11",
      "postinumero": "31400",
      "postitoimipaikka": "Somero",
      "koordinaattiLat": 60.627210,
      "koordinaattiLon": 23.516390
    },
    {
      "kohteenOsoite": "Joensuuntie 27",
      "postinumero": "31400",
      "postitoimipaikka": "Somero",
      "koordinaattiLat": 60.629630,
      "koordinaattiLon": 23.513970
    },
    {
      "kohteenOsoite": "H??meentie 14",
      "postinumero": "31500",
      "postitoimipaikka": "Koski Tl",
      "koordinaattiLat": 60.654526,
      "koordinaattiLon": 23.140497
    },
    {
      "kohteenOsoite": "Keskuskatu 12",
      "postinumero": "31600",
      "postitoimipaikka": "Jokioinen",
      "koordinaattiLat": 60.803640,
      "koordinaattiLon": 23.484610
    },
    {
      "kohteenOsoite": "Humppilantie 11",
      "postinumero": "31640",
      "postitoimipaikka": "Humppila",
      "koordinaattiLat": 60.921520,
      "koordinaattiLon": 23.363450
    },
    {
      "kohteenOsoite": "Kisatie 2",
      "postinumero": "31760",
      "postitoimipaikka": "Urjala",
      "koordinaattiLat": 61.081350,
      "koordinaattiLon": 23.549990
    },
    {
      "kohteenOsoite": "Kauppakatu 3",
      "postinumero": "31900",
      "postitoimipaikka": "Punkalaidun",
      "koordinaattiLat": 61.113140,
      "koordinaattiLon": 23.106100
    },
    {
      "kohteenOsoite": "Kurjenm??entie 2",
      "postinumero": "32100",
      "postitoimipaikka": "Yp??j??",
      "koordinaattiLat": 60.803502,
      "koordinaattiLon": 23.281831
    },
    {
      "kohteenOsoite": "Aleksis Kiven Katu 11",
      "postinumero": "32200",
      "postitoimipaikka": "Loimaa",
      "koordinaattiLat": 60.854469,
      "koordinaattiLon": 23.044210
    },
    {
      "kohteenOsoite": "Aleksis Kiven Katu 7",
      "postinumero": "32200",
      "postitoimipaikka": "Loimaa",
      "koordinaattiLat": 60.855666,
      "koordinaattiLon": 23.046107
    },
    {
      "kohteenOsoite": "Kauppalankatu 5-7",
      "postinumero": "32200",
      "postitoimipaikka": "Loimaa",
      "koordinaattiLat": 60.851900,
      "koordinaattiLon": 23.057220
    },
    {
      "kohteenOsoite": "Vesikoskenkatu 13",
      "postinumero": "32200",
      "postitoimipaikka": "Loimaa",
      "koordinaattiLat": 60.851970,
      "koordinaattiLon": 23.057870
    },
    {
      "kohteenOsoite": "Hirvikoskentie 219",
      "postinumero": "32210",
      "postitoimipaikka": "Loimaa",
      "koordinaattiLat": 60.868210,
      "koordinaattiLon": 22.987160
    },
    {
      "kohteenOsoite": "Loimijoentie 81",
      "postinumero": "32440",
      "postitoimipaikka": "Alastaro",
      "koordinaattiLat": 60.953692,
      "koordinaattiLon": 22.864123
    },
    {
      "kohteenOsoite": "Yl??neentie 2",
      "postinumero": "32500",
      "postitoimipaikka": "Orip????",
      "koordinaattiLat": 60.856340,
      "koordinaattiLon": 22.696270
    },
    {
      "kohteenOsoite": "Sallilantie 49",
      "postinumero": "32610",
      "postitoimipaikka": "Vampula",
      "koordinaattiLat": 61.026468,
      "koordinaattiLon": 22.689317
    },
    {
      "kohteenOsoite": "Risto Rytin Katu 2",
      "postinumero": "32700",
      "postitoimipaikka": "Huittinen",
      "koordinaattiLat": 61.174628,
      "koordinaattiLon": 22.681284
    },
    {
      "kohteenOsoite": "Risto Rytin Katu 37",
      "postinumero": "32700",
      "postitoimipaikka": "Huittinen",
      "koordinaattiLat": 61.177112,
      "koordinaattiLon": 22.701297
    },
    {
      "kohteenOsoite": "S??rm??katu 1",
      "postinumero": "32700",
      "postitoimipaikka": "Huittinen",
      "koordinaattiLat": 61.178820,
      "koordinaattiLon": 22.697910
    },
    {
      "kohteenOsoite": "P????tie 11",
      "postinumero": "32740",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.285140,
      "koordinaattiLon": 22.697330
    },
    {
      "kohteenOsoite": "Haapionkatu 14",
      "postinumero": "32800",
      "postitoimipaikka": "Kokem??ki",
      "koordinaattiLat": 61.255280,
      "koordinaattiLon": 22.348560
    },
    {
      "kohteenOsoite": "Hatanp????n Valtatie 1",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.496000,
      "koordinaattiLon": 23.766960
    },
    {
      "kohteenOsoite": "Hatanp????n Valtatie 1",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.495970,
      "koordinaattiLon": 23.766610
    },
    {
      "kohteenOsoite": "Hatanp????n Valtatie 1",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.495290,
      "koordinaattiLon": 23.767930
    },
    {
      "kohteenOsoite": "H??meenkatu 12",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.498298,
      "koordinaattiLon": 23.767331
    },
    {
      "kohteenOsoite": "H??meenkatu 4",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.498518,
      "koordinaattiLon": 23.770483
    },
    {
      "kohteenOsoite": "H??meenkatu 7",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.498227,
      "koordinaattiLon": 23.768942
    },
    {
      "kohteenOsoite": "Rautatienkatu 25",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.498388,
      "koordinaattiLon": 23.772022
    },
    {
      "kohteenOsoite": "Tammelan Puistokatu 26",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.500805,
      "koordinaattiLon": 23.779443
    },
    {
      "kohteenOsoite": "Tullikatu 6",
      "postinumero": "33100",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497330,
      "koordinaattiLon": 23.777020
    },
    {
      "kohteenOsoite": "H??meenkatu 21",
      "postinumero": "33200",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497130,
      "koordinaattiLon": 23.757930
    },
    {
      "kohteenOsoite": "H??meenkatu 21",
      "postinumero": "33200",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497130,
      "koordinaattiLon": 23.757860
    },
    {
      "kohteenOsoite": "H??meenkatu 22",
      "postinumero": "33200",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497580,
      "koordinaattiLon": 23.756400
    },
    {
      "kohteenOsoite": "Kuninkaankatu 26",
      "postinumero": "33200",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497700,
      "koordinaattiLon": 23.757060
    },
    {
      "kohteenOsoite": "Kuninkaankatu 26",
      "postinumero": "33200",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497710,
      "koordinaattiLon": 23.757060
    },
    {
      "kohteenOsoite": "It??inenkatu 9",
      "postinumero": "33210",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.500954,
      "koordinaattiLon": 23.759031
    },
    {
      "kohteenOsoite": "Kuninkaankatu 22",
      "postinumero": "33210",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.498873,
      "koordinaattiLon": 23.756534
    },
    {
      "kohteenOsoite": "Satakunnankatu 36",
      "postinumero": "33210",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.499990,
      "koordinaattiLon": 23.748010
    },
    {
      "kohteenOsoite": "S??rk??nniemi",
      "postinumero": "33230",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.504680,
      "koordinaattiLon": 23.743590
    },
    {
      "kohteenOsoite": "Pispalan Valtatie 133",
      "postinumero": "33270",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.508013,
      "koordinaattiLon": 23.669504
    },
    {
      "kohteenOsoite": "Tesomankatu 4",
      "postinumero": "33310",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.504760,
      "koordinaattiLon": 23.629420
    },
    {
      "kohteenOsoite": "Tesomankatu 4",
      "postinumero": "33310",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.505360,
      "koordinaattiLon": 23.626250
    },
    {
      "kohteenOsoite": "Harjuntausta 7",
      "postinumero": "33400",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.515570,
      "koordinaattiLon": 23.667120
    },
    {
      "kohteenOsoite": "Harjuntausta 7",
      "postinumero": "33400",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.515000,
      "koordinaattiLon": 23.666740
    },
    {
      "kohteenOsoite": "Possij??rvenkatu 1",
      "postinumero": "33400",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.517720,
      "koordinaattiLon": 23.663430
    },
    {
      "kohteenOsoite": "Turvesuonkatu 2",
      "postinumero": "33400",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.518601,
      "koordinaattiLon": 23.661863
    },
    {
      "kohteenOsoite": "Turvesuonkatu 2",
      "postinumero": "33400",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.518600,
      "koordinaattiLon": 23.661860
    },
    {
      "kohteenOsoite": "Asemantie 2",
      "postinumero": "33470",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.556590,
      "koordinaattiLon": 23.595360
    },
    {
      "kohteenOsoite": "Elotie 1",
      "postinumero": "33470",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.556500,
      "koordinaattiLon": 23.567260
    },
    {
      "kohteenOsoite": "Hiitintie 1",
      "postinumero": "33470",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.531980,
      "koordinaattiLon": 23.633820
    },
    {
      "kohteenOsoite": "Mikkolantie 1",
      "postinumero": "33470",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.548820,
      "koordinaattiLon": 23.596430
    },
    {
      "kohteenOsoite": "Soppeentie 2",
      "postinumero": "33470",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.549130,
      "koordinaattiLon": 23.594820
    },
    {
      "kohteenOsoite": "L??hdevainiontie 1",
      "postinumero": "33480",
      "postitoimipaikka": "Yl??j??rvi",
      "koordinaattiLat": 61.564350,
      "koordinaattiLon": 23.594690
    },
    {
      "kohteenOsoite": "Itsen??isyydenkatu 17",
      "postinumero": "33500",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.499065,
      "koordinaattiLon": 23.782199
    },
    {
      "kohteenOsoite": "Tammelan Puistokatu 21",
      "postinumero": "33500",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.503200,
      "koordinaattiLon": 23.780110
    },
    {
      "kohteenOsoite": "Teiskontie 35",
      "postinumero": "33520",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.503820,
      "koordinaattiLon": 23.817690
    },
    {
      "kohteenOsoite": "Sammonkatu 17",
      "postinumero": "33540",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.497450,
      "koordinaattiLon": 23.798020
    },
    {
      "kohteenOsoite": "Sammonkatu 60",
      "postinumero": "33540",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.494279,
      "koordinaattiLon": 23.813018
    },
    {
      "kohteenOsoite": "Sammonkatu 75",
      "postinumero": "33540",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.492110,
      "koordinaattiLon": 23.819600
    },
    {
      "kohteenOsoite": "Sammonkatu 75",
      "postinumero": "33540",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.492110,
      "koordinaattiLon": 23.819600
    },
    {
      "kohteenOsoite": "Sammonkatu 75",
      "postinumero": "33540",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.491150,
      "koordinaattiLon": 23.821830
    },
    {
      "kohteenOsoite": "Liikekatu 3",
      "postinumero": "33580",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.495680,
      "koordinaattiLon": 23.882760
    },
    {
      "kohteenOsoite": "Liikekatu 3",
      "postinumero": "33580",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.496240,
      "koordinaattiLon": 23.882970
    },
    {
      "kohteenOsoite": "M??entakusenkatu 1",
      "postinumero": "33580",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.496426,
      "koordinaattiLon": 23.887977
    },
    {
      "kohteenOsoite": "Ristinarkuntie 20",
      "postinumero": "33700",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.484190,
      "koordinaattiLon": 23.850980
    },
    {
      "kohteenOsoite": "Keskisenkatu 5",
      "postinumero": "33710",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.473316,
      "koordinaattiLon": 23.874006
    },
    {
      "kohteenOsoite": "Martinpojankatu 4",
      "postinumero": "33710",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.475630,
      "koordinaattiLon": 23.840200
    },
    {
      "kohteenOsoite": "Martinpojankatu 4",
      "postinumero": "33710",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.475640,
      "koordinaattiLon": 23.840200
    },
    {
      "kohteenOsoite": "Insin????rinkatu 11",
      "postinumero": "33720",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.454618,
      "koordinaattiLon": 23.846822
    },
    {
      "kohteenOsoite": "Insin????rinkatu 23",
      "postinumero": "33720",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.450680,
      "koordinaattiLon": 23.849850
    },
    {
      "kohteenOsoite": "Lindforsinkatu 2",
      "postinumero": "33720",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.450900,
      "koordinaattiLon": 23.848520
    },
    {
      "kohteenOsoite": "Pietil??nkatu 2",
      "postinumero": "33720",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.450770,
      "koordinaattiLon": 23.852380
    },
    {
      "kohteenOsoite": "Pietil??nkatu 2",
      "postinumero": "33720",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.450860,
      "koordinaattiLon": 23.852720
    },
    {
      "kohteenOsoite": "Kangasalantie 120",
      "postinumero": "33730",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.474380,
      "koordinaattiLon": 23.918420
    },
    {
      "kohteenOsoite": "Viinikankatu 40",
      "postinumero": "33800",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.479916,
      "koordinaattiLon": 23.782519
    },
    {
      "kohteenOsoite": "Lemp????l??ntie 21",
      "postinumero": "33820",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.467690,
      "koordinaattiLon": 23.774790
    },
    {
      "kohteenOsoite": "Lemp????l??ntie 21",
      "postinumero": "33820",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.467687,
      "koordinaattiLon": 23.774793
    },
    {
      "kohteenOsoite": "Peltolamminkatu 40",
      "postinumero": "33840",
      "postitoimipaikka": "Tampere",
      "koordinaattiLat": 61.449850,
      "koordinaattiLon": 23.752620
    },
    {
      "kohteenOsoite": "Tampereentie 453",
      "postinumero": "33880",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.415704,
      "koordinaattiLon": 23.758840
    },
    {
      "kohteenOsoite": "Kenk??tie 4",
      "postinumero": "33950",
      "postitoimipaikka": "Pirkkala",
      "koordinaattiLat": 61.469460,
      "koordinaattiLon": 23.719260
    },
    {
      "kohteenOsoite": "Palmrothintie 2",
      "postinumero": "33950",
      "postitoimipaikka": "Pirkkala",
      "koordinaattiLat": 61.464970,
      "koordinaattiLon": 23.721820
    },
    {
      "kohteenOsoite": "Keisarinviitta 2",
      "postinumero": "33960",
      "postitoimipaikka": "Pirkkala",
      "koordinaattiLat": 61.452919,
      "koordinaattiLon": 23.641882
    },
    {
      "kohteenOsoite": "Suupantie 4",
      "postinumero": "33960",
      "postitoimipaikka": "Pirkkala",
      "koordinaattiLat": 61.466030,
      "koordinaattiLon": 23.646720
    },
    {
      "kohteenOsoite": "Kauppatie 11",
      "postinumero": "34300",
      "postitoimipaikka": "Kuru",
      "koordinaattiLat": 61.878495,
      "koordinaattiLon": 23.727128
    },
    {
      "kohteenOsoite": "Ruovedentie 13",
      "postinumero": "34600",
      "postitoimipaikka": "Ruovesi",
      "koordinaattiLat": 61.985759,
      "koordinaattiLon": 24.070391
    },
    {
      "kohteenOsoite": "Virtaintie 28",
      "postinumero": "34800",
      "postitoimipaikka": "Virrat",
      "koordinaattiLat": 62.238722,
      "koordinaattiLon": 23.773127
    },
    {
      "kohteenOsoite": "Virtaintie 40",
      "postinumero": "34800",
      "postitoimipaikka": "Virrat",
      "koordinaattiLat": 62.242299,
      "koordinaattiLon": 23.768767
    },
    {
      "kohteenOsoite": "Keskustie 25",
      "postinumero": "35300",
      "postitoimipaikka": "Orivesi",
      "koordinaattiLat": 61.676776,
      "koordinaattiLon": 24.357595
    },
    {
      "kohteenOsoite": "Keskustie 32",
      "postinumero": "35300",
      "postitoimipaikka": "Orivesi",
      "koordinaattiLat": 61.677170,
      "koordinaattiLon": 24.357150
    },
    {
      "kohteenOsoite": "L??nkipohjantie 17",
      "postinumero": "35400",
      "postitoimipaikka": "L??ngelm??ki",
      "koordinaattiLat": 61.729180,
      "koordinaattiLon": 24.788640
    },
    {
      "kohteenOsoite": "Koskitie 50",
      "postinumero": "35500",
      "postitoimipaikka": "Korkeakoski",
      "koordinaattiLat": 61.797004,
      "koordinaattiLon": 24.369761
    },
    {
      "kohteenOsoite": "Puistotie 1",
      "postinumero": "35600",
      "postitoimipaikka": "Halli",
      "koordinaattiLat": 61.860924,
      "koordinaattiLon": 24.828047
    },
    {
      "kohteenOsoite": "Kaarikatu 1",
      "postinumero": "35700",
      "postitoimipaikka": "Vilppula",
      "koordinaattiLat": 62.022226,
      "koordinaattiLon": 24.511854
    },
    {
      "kohteenOsoite": "Hallituskatu 23",
      "postinumero": "35800",
      "postitoimipaikka": "M??ntt??",
      "koordinaattiLat": 62.029250,
      "koordinaattiLon": 24.623810
    },
    {
      "kohteenOsoite": "Sepp??l??npuistotie 1",
      "postinumero": "35800",
      "postitoimipaikka": "M??ntt??",
      "koordinaattiLat": 62.030640,
      "koordinaattiLon": 24.622380
    },
    {
      "kohteenOsoite": "Postitie 3",
      "postinumero": "35990",
      "postitoimipaikka": "Kolho",
      "koordinaattiLat": 62.138955,
      "koordinaattiLon": 24.498858
    },
    {
      "kohteenOsoite": "Ruutanantie 869",
      "postinumero": "36110",
      "postitoimipaikka": "Ruutana",
      "koordinaattiLat": 61.527140,
      "koordinaattiLon": 24.017220
    },
    {
      "kohteenOsoite": "Finnentie 1",
      "postinumero": "36200",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.462333,
      "koordinaattiLon": 24.067786
    },
    {
      "kohteenOsoite": "Kuohunharjuntie 26",
      "postinumero": "36200",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.462363,
      "koordinaattiLon": 24.078154
    },
    {
      "kohteenOsoite": "Puusep??ntie 31",
      "postinumero": "36200",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.468757,
      "koordinaattiLon": 24.037866
    },
    {
      "kohteenOsoite": "M??kirinteentie 10",
      "postinumero": "36220",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.474480,
      "koordinaattiLon": 23.978900
    },
    {
      "kohteenOsoite": "M??kirinteentie 10",
      "postinumero": "36220",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.475520,
      "koordinaattiLon": 23.978950
    },
    {
      "kohteenOsoite": "Vatialantie 1",
      "postinumero": "36240",
      "postitoimipaikka": "Kangasala",
      "koordinaattiLat": 61.474532,
      "koordinaattiLon": 23.944109
    },
    {
      "kohteenOsoite": "Isoniementie 1",
      "postinumero": "36420",
      "postitoimipaikka": "Sahalahti",
      "koordinaattiLat": 61.475800,
      "koordinaattiLon": 24.328900
    },
    {
      "kohteenOsoite": "Keskustie 4",
      "postinumero": "36600",
      "postitoimipaikka": "P??lk??ne",
      "koordinaattiLat": 61.339700,
      "koordinaattiLon": 24.269160
    },
    {
      "kohteenOsoite": "Keskitie 16",
      "postinumero": "36760",
      "postitoimipaikka": "Luopioinen",
      "koordinaattiLat": 61.363581,
      "koordinaattiLon": 24.657524
    },
    {
      "kohteenOsoite": "Kyyninkatu 22",
      "postinumero": "37100",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.483145,
      "koordinaattiLon": 23.512834
    },
    {
      "kohteenOsoite": "Pirkkalaistori 1",
      "postinumero": "37100",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.477920,
      "koordinaattiLon": 23.512300
    },
    {
      "kohteenOsoite": "V??likatu 22",
      "postinumero": "37100",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.478399,
      "koordinaattiLon": 23.512828
    },
    {
      "kohteenOsoite": "Nuijamiestentie 3",
      "postinumero": "37120",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.465716,
      "koordinaattiLon": 23.506260
    },
    {
      "kohteenOsoite": "Nuijamiestentie 5",
      "postinumero": "37120",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.467630,
      "koordinaattiLon": 23.508825
    },
    {
      "kohteenOsoite": "Pinsi??ntie 23",
      "postinumero": "37130",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.487795,
      "koordinaattiLon": 23.494499
    },
    {
      "kohteenOsoite": "Rounionkatu 140",
      "postinumero": "37150",
      "postitoimipaikka": "Nokia",
      "koordinaattiLat": 61.501509,
      "koordinaattiLon": 23.568163
    },
    {
      "kohteenOsoite": "Siurontie 45",
      "postinumero": "37200",
      "postitoimipaikka": "Siuro",
      "koordinaattiLat": 61.475490,
      "koordinaattiLon": 23.343150
    },
    {
      "kohteenOsoite": "Kesontie 2",
      "postinumero": "37470",
      "postitoimipaikka": "Vesilahti",
      "koordinaattiLat": 61.296770,
      "koordinaattiLon": 23.638300
    },
    {
      "kohteenOsoite": "Kelhontie 254",
      "postinumero": "37500",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.255354,
      "koordinaattiLon": 23.842795
    },
    {
      "kohteenOsoite": "Puistokatu 4",
      "postinumero": "37500",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.313028,
      "koordinaattiLon": 23.758831
    },
    {
      "kohteenOsoite": "Tampereentie 21",
      "postinumero": "37500",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.312870,
      "koordinaattiLon": 23.752410
    },
    {
      "kohteenOsoite": "Tampereentie 272",
      "postinumero": "37560",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.380552,
      "koordinaattiLon": 23.779563
    },
    {
      "kohteenOsoite": "Ideaparkinkatu 4",
      "postinumero": "37570",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.362270,
      "koordinaattiLon": 23.795100
    },
    {
      "kohteenOsoite": "Ideaparkinkatu 4",
      "postinumero": "37570",
      "postitoimipaikka": "Lemp????l??",
      "koordinaattiLat": 61.360510,
      "koordinaattiLon": 23.794780
    },
    {
      "kohteenOsoite": "Apiankatu 3",
      "postinumero": "37600",
      "postitoimipaikka": "Valkeakoski",
      "koordinaattiLat": 61.264290,
      "koordinaattiLon": 24.033280
    },
    {
      "kohteenOsoite": "Hakalantie 1",
      "postinumero": "37600",
      "postitoimipaikka": "Valkeakoski",
      "koordinaattiLat": 61.268526,
      "koordinaattiLon": 24.034604
    },
    {
      "kohteenOsoite": "Valtakatu 9",
      "postinumero": "37600",
      "postitoimipaikka": "Valkeakoski",
      "koordinaattiLat": 61.266820,
      "koordinaattiLon": 24.029380
    },
    {
      "kohteenOsoite": "Valtakatu 9",
      "postinumero": "37600",
      "postitoimipaikka": "Valkeakoski",
      "koordinaattiLat": 61.266830,
      "koordinaattiLon": 24.028410
    },
    {
      "kohteenOsoite": "Lemp????l??ntie 39",
      "postinumero": "37630",
      "postitoimipaikka": "Valkeakoski",
      "koordinaattiLat": 61.277799,
      "koordinaattiLon": 24.015408
    },
    {
      "kohteenOsoite": "Valtatie 18",
      "postinumero": "37800",
      "postitoimipaikka": "Akaa",
      "koordinaattiLat": 61.166450,
      "koordinaattiLon": 23.868030
    },
    {
      "kohteenOsoite": "Valtatie 8",
      "postinumero": "37800",
      "postitoimipaikka": "Akaa",
      "koordinaattiLat": 61.168027,
      "koordinaattiLon": 23.866616
    },
    {
      "kohteenOsoite": "Valtatie 8",
      "postinumero": "37800",
      "postitoimipaikka": "Akaa",
      "koordinaattiLat": 61.167960,
      "koordinaattiLon": 23.866550
    },
    {
      "kohteenOsoite": "Keskuskatu 42",
      "postinumero": "37830",
      "postitoimipaikka": "Akaa",
      "koordinaattiLat": 61.211163,
      "koordinaattiLon": 23.766659
    },
    {
      "kohteenOsoite": "Puistokatu 12",
      "postinumero": "38200",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.340820,
      "koordinaattiLon": 22.910310
    },
    {
      "kohteenOsoite": "Puistokatu 2",
      "postinumero": "38200",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.342390,
      "koordinaattiLon": 22.907819
    },
    {
      "kohteenOsoite": "Sorvankatu 5",
      "postinumero": "38200",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.323919,
      "koordinaattiLon": 22.923144
    },
    {
      "kohteenOsoite": "Torikatu 1",
      "postinumero": "38200",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.340535,
      "koordinaattiLon": 22.909160
    },
    {
      "kohteenOsoite": "Taitajantie 1",
      "postinumero": "38360",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.473736,
      "koordinaattiLon": 22.557689
    },
    {
      "kohteenOsoite": "Kauppakuja 1",
      "postinumero": "38420",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.499570,
      "koordinaattiLon": 23.091410
    },
    {
      "kohteenOsoite": "Uotsolantie 43 A",
      "postinumero": "38460",
      "postitoimipaikka": "Sastamala",
      "koordinaattiLat": 61.513510,
      "koordinaattiLon": 23.008855
    },
    {
      "kohteenOsoite": "Tampereentie 5",
      "postinumero": "38600",
      "postitoimipaikka": "Lavia",
      "koordinaattiLat": 61.596364,
      "koordinaattiLon": 22.587886
    },
    {
      "kohteenOsoite": "Asemakatu 1",
      "postinumero": "38700",
      "postitoimipaikka": "Kankaanp????",
      "koordinaattiLat": 61.812931,
      "koordinaattiLon": 22.375610
    },
    {
      "kohteenOsoite": "Keskuskatu 39",
      "postinumero": "38700",
      "postitoimipaikka": "Kankaanp????",
      "koordinaattiLat": 61.806863,
      "koordinaattiLon": 22.388888
    },
    {
      "kohteenOsoite": "Kuninkaanl??hteenkatu 4",
      "postinumero": "38700",
      "postitoimipaikka": "Kankaanp????",
      "koordinaattiLat": 61.803490,
      "koordinaattiLon": 22.396720
    },
    {
      "kohteenOsoite": "Torikatu 11",
      "postinumero": "38700",
      "postitoimipaikka": "Kankaanp????",
      "koordinaattiLat": 61.805040,
      "koordinaattiLon": 22.395670
    },
    {
      "kohteenOsoite": "J??mij??rventie 22",
      "postinumero": "38800",
      "postitoimipaikka": "J??mij??rvi",
      "koordinaattiLat": 61.819890,
      "koordinaattiLon": 22.691770
    },
    {
      "kohteenOsoite": "Porhontie 1",
      "postinumero": "38950",
      "postitoimipaikka": "Honkajoki",
      "koordinaattiLat": 61.993189,
      "koordinaattiLon": 22.260539
    },
    {
      "kohteenOsoite": "H??rkikuja 4",
      "postinumero": "39100",
      "postitoimipaikka": "H??meenkyr??",
      "koordinaattiLat": 61.638800,
      "koordinaattiLon": 23.196989
    },
    {
      "kohteenOsoite": "Vanha Vaasantie 1",
      "postinumero": "39160",
      "postitoimipaikka": "Julkuj??rvi",
      "koordinaattiLat": 61.566413,
      "koordinaattiLon": 23.524352
    },
    {
      "kohteenOsoite": "Valtakatu 57",
      "postinumero": "39200",
      "postitoimipaikka": "Kyr??skoski",
      "koordinaattiLat": 61.666820,
      "koordinaattiLon": 23.179610
    },
    {
      "kohteenOsoite": "Karhoistentie 3",
      "postinumero": "39500",
      "postitoimipaikka": "Ikaalinen",
      "koordinaattiLat": 61.756770,
      "koordinaattiLon": 23.066040
    },
    {
      "kohteenOsoite": "Vanha Tampereentie 10",
      "postinumero": "39500",
      "postitoimipaikka": "Ikaalinen",
      "koordinaattiLat": 61.770022,
      "koordinaattiLon": 23.064652
    },
    {
      "kohteenOsoite": "Humalankatu 1",
      "postinumero": "39700",
      "postitoimipaikka": "Parkano",
      "koordinaattiLat": 62.006863,
      "koordinaattiLon": 23.011023
    },
    {
      "kohteenOsoite": "Keskuskatu 8",
      "postinumero": "39700",
      "postitoimipaikka": "Parkano",
      "koordinaattiLat": 62.010470,
      "koordinaattiLon": 23.022880
    },
    {
      "kohteenOsoite": "Valkamatie 2",
      "postinumero": "39820",
      "postitoimipaikka": "Kihni??",
      "koordinaattiLat": 62.207331,
      "koordinaattiLon": 23.178044
    },
    {
      "kohteenOsoite": "Kyl??karviantie 30",
      "postinumero": "39930",
      "postitoimipaikka": "Karvia",
      "koordinaattiLat": 62.133330,
      "koordinaattiLon": 22.558330
    },
    {
      "kohteenOsoite": "Asemakatu 5",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.241970,
      "koordinaattiLon": 25.748640
    },
    {
      "kohteenOsoite": "Hannikaisenkatu 20",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.242228,
      "koordinaattiLon": 25.755067
    },
    {
      "kohteenOsoite": "Kauppakatu 18",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.241540,
      "koordinaattiLon": 25.745270
    },
    {
      "kohteenOsoite": "Kauppakatu 22",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.242360,
      "koordinaattiLon": 25.746990
    },
    {
      "kohteenOsoite": "Kauppakatu 22",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.242350,
      "koordinaattiLon": 25.747240
    },
    {
      "kohteenOsoite": "Kauppakatu 24",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.242715,
      "koordinaattiLon": 25.747770
    },
    {
      "kohteenOsoite": "Kauppakatu 24",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.242715,
      "koordinaattiLon": 25.747770
    },
    {
      "kohteenOsoite": "Puistokatu 2",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.244475,
      "koordinaattiLon": 25.750582
    },
    {
      "kohteenOsoite": "Vapaaherrantie 2",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.250829,
      "koordinaattiLon": 25.768751
    },
    {
      "kohteenOsoite": "Vapaudenkatu 51",
      "postinumero": "40100",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.241853,
      "koordinaattiLon": 25.749673
    },
    {
      "kohteenOsoite": "Koivutie 2",
      "postinumero": "40270",
      "postitoimipaikka": "Palokka",
      "koordinaattiLat": 62.288847,
      "koordinaattiLon": 25.740321
    },
    {
      "kohteenOsoite": "Koivutie 2",
      "postinumero": "40270",
      "postitoimipaikka": "Palokka",
      "koordinaattiLat": 62.288847,
      "koordinaattiLon": 25.740321
    },
    {
      "kohteenOsoite": "Palokanorsi 1",
      "postinumero": "40270",
      "postitoimipaikka": "Palokka",
      "koordinaattiLat": 62.288920,
      "koordinaattiLon": 25.716990
    },
    {
      "kohteenOsoite": "Palokanorsi 1",
      "postinumero": "40270",
      "postitoimipaikka": "Palokka",
      "koordinaattiLat": 62.288380,
      "koordinaattiLon": 25.716530
    },
    {
      "kohteenOsoite": "Saarij??rventie 52",
      "postinumero": "40270",
      "postitoimipaikka": "Palokka",
      "koordinaattiLat": 62.287843,
      "koordinaattiLon": 25.715024
    },
    {
      "kohteenOsoite": "Ahjokatu 18",
      "postinumero": "40320",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.259698,
      "koordinaattiLon": 25.779055
    },
    {
      "kohteenOsoite": "Ahjokatu 7",
      "postinumero": "40320",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.257880,
      "koordinaattiLon": 25.778020
    },
    {
      "kohteenOsoite": "Ahjokatu 7",
      "postinumero": "40320",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.257880,
      "koordinaattiLon": 25.778020
    },
    {
      "kohteenOsoite": "Vapaaherrantie 11",
      "postinumero": "40320",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.255020,
      "koordinaattiLon": 25.762660
    },
    {
      "kohteenOsoite": "Vasarakatu 29",
      "postinumero": "40320",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.264310,
      "koordinaattiLon": 25.776820
    },
    {
      "kohteenOsoite": "Nevakatu 1",
      "postinumero": "40340",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.271352,
      "koordinaattiLon": 25.800148
    },
    {
      "kohteenOsoite": "Kylm??lahdentie 6",
      "postinumero": "40500",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.215980,
      "koordinaattiLon": 25.719500
    },
    {
      "kohteenOsoite": "Kylm??lahdentie 6",
      "postinumero": "40500",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.215580,
      "koordinaattiLon": 25.720350
    },
    {
      "kohteenOsoite": "Kylm??lahdentie 8",
      "postinumero": "40500",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.217180,
      "koordinaattiLon": 25.720870
    },
    {
      "kohteenOsoite": "Kylm??lahdentie 8",
      "postinumero": "40500",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.217730,
      "koordinaattiLon": 25.720510
    },
    {
      "kohteenOsoite": "Sy??tt??j??nkatu 2",
      "postinumero": "40520",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.227688,
      "koordinaattiLon": 25.773370
    },
    {
      "kohteenOsoite": "Keltinm??entie 13",
      "postinumero": "40640",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.228049,
      "koordinaattiLon": 25.681315
    },
    {
      "kohteenOsoite": "Kaivokatu 1",
      "postinumero": "40700",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.243520,
      "koordinaattiLon": 25.713760
    },
    {
      "kohteenOsoite": "Voionmaankatu 7",
      "postinumero": "40700",
      "postitoimipaikka": "Jyv??skyl??",
      "koordinaattiLat": 62.239652,
      "koordinaattiLon": 25.729262
    },
    {
      "kohteenOsoite": "Asematie 1",
      "postinumero": "40800",
      "postitoimipaikka": "Vaajakoski",
      "koordinaattiLat": 62.248516,
      "koordinaattiLon": 25.877320
    },
    {
      "kohteenOsoite": "Vaajakoskentie 850",
      "postinumero": "40800",
      "postitoimipaikka": "Vaajakoski",
      "koordinaattiLat": 62.230041,
      "koordinaattiLon": 25.900326
    },
    {
      "kohteenOsoite": "Parviaisentie 3",
      "postinumero": "40900",
      "postitoimipaikka": "S??yn??tsalo",
      "koordinaattiLat": 62.138320,
      "koordinaattiLon": 25.766150
    },
    {
      "kohteenOsoite": "Set??l??ntie 2",
      "postinumero": "40950",
      "postitoimipaikka": "Muurame",
      "koordinaattiLat": 62.136430,
      "koordinaattiLon": 25.673170
    },
    {
      "kohteenOsoite": "Kirkkokatu 1",
      "postinumero": "41160",
      "postitoimipaikka": "Tikkakoski",
      "koordinaattiLat": 62.388700,
      "koordinaattiLon": 25.646340
    },
    {
      "kohteenOsoite": "Laukaantie 22",
      "postinumero": "41340",
      "postitoimipaikka": "Laukaa",
      "koordinaattiLat": 62.414338,
      "koordinaattiLon": 25.954131
    },
    {
      "kohteenOsoite": "Liepeentie 9",
      "postinumero": "41400",
      "postitoimipaikka": "Lievestuore",
      "koordinaattiLat": 62.260810,
      "koordinaattiLon": 26.195250
    },
    {
      "kohteenOsoite": "Keskustie 36",
      "postinumero": "41520",
      "postitoimipaikka": "Hankasalmi",
      "koordinaattiLat": 62.390676,
      "koordinaattiLon": 26.435428
    },
    {
      "kohteenOsoite": "Toivakantie 30",
      "postinumero": "41660",
      "postitoimipaikka": "Toivakka",
      "koordinaattiLat": 62.095745,
      "koordinaattiLon": 26.079475
    },
    {
      "kohteenOsoite": "Korpilahdentie 5",
      "postinumero": "41800",
      "postitoimipaikka": "Korpilahti",
      "koordinaattiLat": 62.016275,
      "koordinaattiLon": 25.562497
    },
    {
      "kohteenOsoite": "Kirkkotie 6",
      "postinumero": "41900",
      "postitoimipaikka": "Pet??j??vesi",
      "koordinaattiLat": 62.255820,
      "koordinaattiLon": 25.182720
    },
    {
      "kohteenOsoite": "Keskuskatu 11",
      "postinumero": "42100",
      "postitoimipaikka": "J??ms??",
      "koordinaattiLat": 61.864780,
      "koordinaattiLon": 25.193010
    },
    {
      "kohteenOsoite": "Keskuskatu 23",
      "postinumero": "42100",
      "postitoimipaikka": "J??ms??",
      "koordinaattiLat": 61.866586,
      "koordinaattiLon": 25.201061
    },
    {
      "kohteenOsoite": "Keskuskatu 3",
      "postinumero": "42100",
      "postitoimipaikka": "J??ms??",
      "koordinaattiLat": 61.863767,
      "koordinaattiLon": 25.189088
    },
    {
      "kohteenOsoite": "Kenraalintie 9",
      "postinumero": "42300",
      "postitoimipaikka": "J??ms??nkoski",
      "koordinaattiLat": 61.919390,
      "koordinaattiLon": 25.174120
    },
    {
      "kohteenOsoite": "Keskustie 29 A",
      "postinumero": "42600",
      "postitoimipaikka": "Multia",
      "koordinaattiLat": 62.408630,
      "koordinaattiLon": 24.796480
    },
    {
      "kohteenOsoite": "Jyv??skyl??ntie 5",
      "postinumero": "42700",
      "postitoimipaikka": "Keuruu",
      "koordinaattiLat": 62.254490,
      "koordinaattiLon": 24.719198
    },
    {
      "kohteenOsoite": "Keuruuntie 9",
      "postinumero": "42700",
      "postitoimipaikka": "Keuruu",
      "koordinaattiLat": 62.258067,
      "koordinaattiLon": 24.708407
    },
    {
      "kohteenOsoite": "Pihlajavedentie 3",
      "postinumero": "42800",
      "postitoimipaikka": "Haapam??ki",
      "koordinaattiLat": 62.252604,
      "koordinaattiLon": 24.453758
    },
    {
      "kohteenOsoite": "Kauppakatu 3",
      "postinumero": "43100",
      "postitoimipaikka": "Saarij??rvi",
      "koordinaattiLat": 62.705300,
      "koordinaattiLon": 25.259630
    },
    {
      "kohteenOsoite": "Torikatu 5 A",
      "postinumero": "43100",
      "postitoimipaikka": "Saarij??rvi",
      "koordinaattiLat": 62.707784,
      "koordinaattiLon": 25.257934
    },
    {
      "kohteenOsoite": "Toritie 3 A",
      "postinumero": "43300",
      "postitoimipaikka": "Kannonkoski",
      "koordinaattiLat": 62.977448,
      "koordinaattiLon": 25.262187
    },
    {
      "kohteenOsoite": "Virastotie 8",
      "postinumero": "43500",
      "postitoimipaikka": "Karstula",
      "koordinaattiLat": 62.878874,
      "koordinaattiLon": 24.803062
    },
    {
      "kohteenOsoite": "Vaasantie 2",
      "postinumero": "43700",
      "postitoimipaikka": "Kyyj??rvi",
      "koordinaattiLat": 63.042880,
      "koordinaattiLon": 24.560480
    },
    {
      "kohteenOsoite": "Virastotie 2",
      "postinumero": "43800",
      "postitoimipaikka": "Kivij??rvi",
      "koordinaattiLat": 63.128380,
      "koordinaattiLon": 25.052960
    },
    {
      "kohteenOsoite": "Keskustie 47",
      "postinumero": "43900",
      "postitoimipaikka": "Kinnula",
      "koordinaattiLat": 63.367966,
      "koordinaattiLon": 24.965412
    },
    {
      "kohteenOsoite": "Rannankyl??ntie 11",
      "postinumero": "44100",
      "postitoimipaikka": "????Nekoski",
      "koordinaattiLat": 62.518223,
      "koordinaattiLon": 25.690208
    },
    {
      "kohteenOsoite": "Torikatu 1",
      "postinumero": "44100",
      "postitoimipaikka": "????Nekoski",
      "koordinaattiLat": 62.604083,
      "koordinaattiLon": 25.724393
    },
    {
      "kohteenOsoite": "Torikatu 2",
      "postinumero": "44100",
      "postitoimipaikka": "????Nekoski",
      "koordinaattiLat": 62.603900,
      "koordinaattiLon": 25.725900
    },
    {
      "kohteenOsoite": "Ty??skintie 3",
      "postinumero": "44100",
      "postitoimipaikka": "????Nekoski",
      "koordinaattiLat": 62.602870,
      "koordinaattiLon": 25.724850
    },
    {
      "kohteenOsoite": "Asemakatu 22",
      "postinumero": "44200",
      "postitoimipaikka": "Suolahti",
      "koordinaattiLat": 62.563866,
      "koordinaattiLon": 25.852156
    },
    {
      "kohteenOsoite": "Kauppatie 29",
      "postinumero": "44300",
      "postitoimipaikka": "Konnevesi",
      "koordinaattiLat": 62.627860,
      "koordinaattiLon": 26.288560
    },
    {
      "kohteenOsoite": "Kauppatie 2",
      "postinumero": "44400",
      "postitoimipaikka": "Konginkangas",
      "koordinaattiLat": 62.780306,
      "koordinaattiLon": 25.806140
    },
    {
      "kohteenOsoite": "Porthanintie 4",
      "postinumero": "44500",
      "postitoimipaikka": "Viitasaari",
      "koordinaattiLat": 63.074150,
      "koordinaattiLon": 25.857890
    },
    {
      "kohteenOsoite": "Postikuja 1",
      "postinumero": "44500",
      "postitoimipaikka": "Viitasaari",
      "koordinaattiLat": 63.074095,
      "koordinaattiLon": 25.860651
    },
    {
      "kohteenOsoite": "Asematie 14",
      "postinumero": "44800",
      "postitoimipaikka": "Pihtipudas",
      "koordinaattiLat": 63.370652,
      "koordinaattiLon": 25.575891
    },
    {
      "kohteenOsoite": "Hallituskatu 3",
      "postinumero": "45100",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.866804,
      "koordinaattiLon": 26.704924
    },
    {
      "kohteenOsoite": "Kauppalankatu 6",
      "postinumero": "45100",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.868800,
      "koordinaattiLon": 26.703620
    },
    {
      "kohteenOsoite": "Keskikatu 2",
      "postinumero": "45100",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.868628,
      "koordinaattiLon": 26.701566
    },
    {
      "kohteenOsoite": "Kouvolankatu 30",
      "postinumero": "45100",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.868230,
      "koordinaattiLon": 26.708790
    },
    {
      "kohteenOsoite": "Torikatu 3-5",
      "postinumero": "45100",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.868740,
      "koordinaattiLon": 26.700080
    },
    {
      "kohteenOsoite": "Tommolankatu 9",
      "postinumero": "45130",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.870866,
      "koordinaattiLon": 26.657298
    },
    {
      "kohteenOsoite": "Tommolankatu 9",
      "postinumero": "45130",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.870870,
      "koordinaattiLon": 26.657300
    },
    {
      "kohteenOsoite": "Kartanokatu 2-6",
      "postinumero": "45150",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.852420,
      "koordinaattiLon": 26.695403
    },
    {
      "kohteenOsoite": "Madekuja 2",
      "postinumero": "45160",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.887848,
      "koordinaattiLon": 26.725543
    },
    {
      "kohteenOsoite": "Utinkatu 65",
      "postinumero": "45200",
      "postitoimipaikka": "Kouvola",
      "koordinaattiLat": 60.874539,
      "koordinaattiLon": 26.740580
    },
    {
      "kohteenOsoite": "Kalevantie 1",
      "postinumero": "45370",
      "postitoimipaikka": "Valkeala",
      "koordinaattiLat": 60.930020,
      "koordinaattiLon": 26.800630
    },
    {
      "kohteenOsoite": "Lentoportintie 3",
      "postinumero": "45410",
      "postitoimipaikka": "Utti",
      "koordinaattiLat": 60.894580,
      "koordinaattiLon": 26.911150
    },
    {
      "kohteenOsoite": "Porvarinpolku 9",
      "postinumero": "45610",
      "postitoimipaikka": "Koria",
      "koordinaattiLat": 60.846987,
      "koordinaattiLon": 26.603412
    },
    {
      "kohteenOsoite": "Suviojantie 19",
      "postinumero": "45610",
      "postitoimipaikka": "Koria",
      "koordinaattiLat": 60.859005,
      "koordinaattiLon": 26.568164
    },
    {
      "kohteenOsoite": "Kauppakatu 7",
      "postinumero": "45700",
      "postitoimipaikka": "Kuusankoski",
      "koordinaattiLat": 60.908223,
      "koordinaattiLon": 26.628712
    },
    {
      "kohteenOsoite": "Kymenlaaksonkatu 2",
      "postinumero": "45700",
      "postitoimipaikka": "Kuusankoski",
      "koordinaattiLat": 60.907180,
      "koordinaattiLon": 26.625580
    },
    {
      "kohteenOsoite": "Valtakatu 40",
      "postinumero": "45700",
      "postitoimipaikka": "Kuusankoski",
      "koordinaattiLat": 60.907259,
      "koordinaattiLon": 26.622296
    },
    {
      "kohteenOsoite": "Tervasharjunkatu 1",
      "postinumero": "45720",
      "postitoimipaikka": "Kuusankoski",
      "koordinaattiLat": 60.876821,
      "koordinaattiLon": 26.651298
    },
    {
      "kohteenOsoite": "Tervasharjunkatu 1",
      "postinumero": "45720",
      "postitoimipaikka": "Kuusankoski",
      "koordinaattiLat": 60.876820,
      "koordinaattiLon": 26.651300
    },
    {
      "kohteenOsoite": "Kuparintie 4",
      "postinumero": "45910",
      "postitoimipaikka": "Voikkaa",
      "koordinaattiLat": 60.940976,
      "koordinaattiLon": 26.621179
    },
    {
      "kohteenOsoite": "Varuskunta-alue",
      "postinumero": "46140",
      "postitoimipaikka": "Vekaranj??rvi",
      "koordinaattiLat": 61.115320,
      "koordinaattiLon": 26.984510
    },
    {
      "kohteenOsoite": "Keskikoskentie 3",
      "postinumero": "46800",
      "postitoimipaikka": "Myllykoski",
      "koordinaattiLat": 60.765090,
      "koordinaattiLon": 26.786586
    },
    {
      "kohteenOsoite": "P????tie 20",
      "postinumero": "46900",
      "postitoimipaikka": "Inkeroinen",
      "koordinaattiLat": 60.693540,
      "koordinaattiLon": 26.840690
    },
    {
      "kohteenOsoite": "Elim??entie 30",
      "postinumero": "46910",
      "postitoimipaikka": "Anjala",
      "koordinaattiLat": 60.688560,
      "koordinaattiLon": 26.805390
    },
    {
      "kohteenOsoite": "Vanhamaantie 9",
      "postinumero": "47200",
      "postitoimipaikka": "Elim??ki",
      "koordinaattiLat": 60.721556,
      "koordinaattiLon": 26.447138
    },
    {
      "kohteenOsoite": "Iitintie 9",
      "postinumero": "47400",
      "postitoimipaikka": "Kausala",
      "koordinaattiLat": 60.888769,
      "koordinaattiLon": 26.337279
    },
    {
      "kohteenOsoite": "Jaalantie 120",
      "postinumero": "47710",
      "postitoimipaikka": "Jaala",
      "koordinaattiLat": 61.049380,
      "koordinaattiLon": 26.484770
    },
    {
      "kohteenOsoite": "Kapteeninkatu 14",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.463544,
      "koordinaattiLon": 26.941077
    },
    {
      "kohteenOsoite": "Kirkkokatu 30",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.463482,
      "koordinaattiLon": 26.934528
    },
    {
      "kohteenOsoite": "Kirkkokatu 5",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.467685,
      "koordinaattiLon": 26.945269
    },
    {
      "kohteenOsoite": "Kirkkokatu 7",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.467050,
      "koordinaattiLon": 26.943700
    },
    {
      "kohteenOsoite": "Kirkkokatu 7",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.466810,
      "koordinaattiLon": 26.944280
    },
    {
      "kohteenOsoite": "Kirkkokatu 7",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.466550,
      "koordinaattiLon": 26.944560
    },
    {
      "kohteenOsoite": "Koulukatu 6 B",
      "postinumero": "48100",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.460232,
      "koordinaattiLon": 26.939574
    },
    {
      "kohteenOsoite": "Tarinatie 2",
      "postinumero": "48350",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.483775,
      "koordinaattiLon": 26.858671
    },
    {
      "kohteenOsoite": "Hakam??entie 1",
      "postinumero": "48400",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.500940,
      "koordinaattiLon": 26.869200
    },
    {
      "kohteenOsoite": "Hakam??entie 1",
      "postinumero": "48400",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.500980,
      "koordinaattiLon": 26.869080
    },
    {
      "kohteenOsoite": "Hakam??entie 1",
      "postinumero": "48400",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.500920,
      "koordinaattiLon": 26.868280
    },
    {
      "kohteenOsoite": "Jumalniementie 8",
      "postinumero": "48600",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.506234,
      "koordinaattiLon": 26.915692
    },
    {
      "kohteenOsoite": "Karhulantie 30",
      "postinumero": "48600",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.513715,
      "koordinaattiLon": 26.933164
    },
    {
      "kohteenOsoite": "Karhulantie 36",
      "postinumero": "48600",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.514690,
      "koordinaattiLon": 26.931620
    },
    {
      "kohteenOsoite": "Karjalantie 10",
      "postinumero": "48600",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.516405,
      "koordinaattiLon": 26.933124
    },
    {
      "kohteenOsoite": "Haminantie 1",
      "postinumero": "48810",
      "postitoimipaikka": "Kotka",
      "koordinaattiLat": 60.542060,
      "koordinaattiLon": 26.974740
    },
    {
      "kohteenOsoite": "Malminsuontie 2",
      "postinumero": "49220",
      "postitoimipaikka": "Siltakyl??",
      "koordinaattiLat": 60.496340,
      "koordinaattiLon": 26.738300
    },
    {
      "kohteenOsoite": "Kaivokatu 10",
      "postinumero": "49400",
      "postitoimipaikka": "Hamina",
      "koordinaattiLat": 60.568323,
      "koordinaattiLon": 27.190600
    },
    {
      "kohteenOsoite": "Puistokatu 6",
      "postinumero": "49400",
      "postitoimipaikka": "Hamina",
      "koordinaattiLat": 60.568360,
      "koordinaattiLon": 27.191190
    },
    {
      "kohteenOsoite": "Satamakatu 11",
      "postinumero": "49400",
      "postitoimipaikka": "Hamina",
      "koordinaattiLat": 60.568140,
      "koordinaattiLon": 27.193420
    },
    {
      "kohteenOsoite": "Sibeliuskatu 27",
      "postinumero": "49400",
      "postitoimipaikka": "Hamina",
      "koordinaattiLat": 60.568067,
      "koordinaattiLon": 27.188679
    },
    {
      "kohteenOsoite": "Sibeliuskatu 27",
      "postinumero": "49400",
      "postitoimipaikka": "Hamina",
      "koordinaattiLat": 60.568310,
      "koordinaattiLon": 27.189240
    },
    {
      "kohteenOsoite": "Helsingintie 1",
      "postinumero": "49410",
      "postitoimipaikka": "Poitsila",
      "koordinaattiLat": 60.563640,
      "koordinaattiLon": 27.162520
    },
    {
      "kohteenOsoite": "Keskustie 1",
      "postinumero": "49700",
      "postitoimipaikka": "Miehikk??l??",
      "koordinaattiLat": 60.671220,
      "koordinaattiLon": 27.700199
    },
    {
      "kohteenOsoite": "Opintie 1",
      "postinumero": "49900",
      "postitoimipaikka": "Virolahti",
      "koordinaattiLat": 60.583570,
      "koordinaattiLon": 27.708030
    },
    {
      "kohteenOsoite": "Hallituskatu 6",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.688830,
      "koordinaattiLon": 27.269390
    },
    {
      "kohteenOsoite": "Maaherrankatu 13",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.688837,
      "koordinaattiLon": 27.272633
    },
    {
      "kohteenOsoite": "Porrassalmenkatu 19",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.687520,
      "koordinaattiLon": 27.274750
    },
    {
      "kohteenOsoite": "Porrassalmenkatu 23",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.688360,
      "koordinaattiLon": 27.275150
    },
    {
      "kohteenOsoite": "Porrassalmenkatu 33",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.690450,
      "koordinaattiLon": 27.276370
    },
    {
      "kohteenOsoite": "Setrikatu 2",
      "postinumero": "50100",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.680120,
      "koordinaattiLon": 27.269730
    },
    {
      "kohteenOsoite": "Hietakatu 7",
      "postinumero": "50130",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.676047,
      "koordinaattiLon": 27.245685
    },
    {
      "kohteenOsoite": "Suntionkuja 1",
      "postinumero": "50170",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.701430,
      "koordinaattiLon": 27.305086
    },
    {
      "kohteenOsoite": "Graanintie 1",
      "postinumero": "50190",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.686240,
      "koordinaattiLon": 27.297880
    },
    {
      "kohteenOsoite": "Graanintie 1",
      "postinumero": "50190",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.686530,
      "koordinaattiLon": 27.298110
    },
    {
      "kohteenOsoite": "Vanham??entie 1",
      "postinumero": "50600",
      "postitoimipaikka": "Mikkeli",
      "koordinaattiLat": 61.678135,
      "koordinaattiLon": 27.202317
    },
    {
      "kohteenOsoite": "Otto Mannisentie 1",
      "postinumero": "51200",
      "postitoimipaikka": "Kangasniemi",
      "koordinaattiLat": 61.989680,
      "koordinaattiLon": 26.643420
    },
    {
      "kohteenOsoite": "Keskustie 76",
      "postinumero": "51600",
      "postitoimipaikka": "Haukivuori",
      "koordinaattiLat": 62.024316,
      "koordinaattiLon": 27.206616
    },
    {
      "kohteenOsoite": "Piikkil??ntie 3",
      "postinumero": "51900",
      "postitoimipaikka": "Juva",
      "koordinaattiLat": 61.896986,
      "koordinaattiLon": 27.855947
    },
    {
      "kohteenOsoite": "Tulostie 1",
      "postinumero": "51900",
      "postitoimipaikka": "Juva",
      "koordinaattiLat": 61.898018,
      "koordinaattiLon": 27.808286
    },
    {
      "kohteenOsoite": "Mikkelintie 45",
      "postinumero": "52100",
      "postitoimipaikka": "Anttola",
      "koordinaattiLat": 61.583050,
      "koordinaattiLon": 27.649690
    },
    {
      "kohteenOsoite": "Keskustie 4",
      "postinumero": "52200",
      "postitoimipaikka": "Puumala",
      "koordinaattiLat": 61.520650,
      "koordinaattiLon": 28.177940
    },
    {
      "kohteenOsoite": "Brahentie 16",
      "postinumero": "52300",
      "postitoimipaikka": "Ristiina",
      "koordinaattiLat": 61.510430,
      "koordinaattiLon": 27.248480
    },
    {
      "kohteenOsoite": "Hirvensalmentie 21",
      "postinumero": "52550",
      "postitoimipaikka": "Hirvensalmi",
      "koordinaattiLat": 61.640900,
      "koordinaattiLon": 26.775269
    },
    {
      "kohteenOsoite": "Pentinpolku 1",
      "postinumero": "52700",
      "postitoimipaikka": "M??ntyharju",
      "koordinaattiLat": 61.416190,
      "koordinaattiLon": 26.880830
    },
    {
      "kohteenOsoite": "Lappeenrannantie 34 A",
      "postinumero": "52830",
      "postitoimipaikka": "Suomenniemi",
      "koordinaattiLat": 61.354390,
      "koordinaattiLon": 27.399770
    },
    {
      "kohteenOsoite": "Brahenkatu 1",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.056500,
      "koordinaattiLon": 28.191080
    },
    {
      "kohteenOsoite": "Kauppakatu 29",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.059478,
      "koordinaattiLon": 28.185256
    },
    {
      "kohteenOsoite": "Kauppakatu 40",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.055551,
      "koordinaattiLon": 28.188918
    },
    {
      "kohteenOsoite": "Pormestarinkatu 4",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.058257,
      "koordinaattiLon": 28.190803
    },
    {
      "kohteenOsoite": "Pormestarinkatu 4",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.058230,
      "koordinaattiLon": 28.190720
    },
    {
      "kohteenOsoite": "Ratakatu 31",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.050080,
      "koordinaattiLon": 28.198050
    },
    {
      "kohteenOsoite": "Valtakatu 32",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.058360,
      "koordinaattiLon": 28.185720
    },
    {
      "kohteenOsoite": "Villimiehenkatu 3",
      "postinumero": "53100",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.057510,
      "koordinaattiLon": 28.193250
    },
    {
      "kohteenOsoite": "Standertskj??ldinkatu 6",
      "postinumero": "53200",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.061114,
      "koordinaattiLon": 28.234327
    },
    {
      "kohteenOsoite": "Karjalantie 25",
      "postinumero": "53300",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.070646,
      "koordinaattiLon": 28.262599
    },
    {
      "kohteenOsoite": "Kauppak??yt??v?? 6",
      "postinumero": "53300",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.071586,
      "koordinaattiLon": 28.261776
    },
    {
      "kohteenOsoite": "Hirsim??enkatu 1",
      "postinumero": "53500",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.052542,
      "koordinaattiLon": 28.262427
    },
    {
      "kohteenOsoite": "Kaakkoiskaari 22",
      "postinumero": "53500",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.047102,
      "koordinaattiLon": 28.209507
    },
    {
      "kohteenOsoite": "Toikansuontie 4",
      "postinumero": "53500",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.045288,
      "koordinaattiLon": 28.200237
    },
    {
      "kohteenOsoite": "Puhakankatu 1",
      "postinumero": "53600",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.050147,
      "koordinaattiLon": 28.174393
    },
    {
      "kohteenOsoite": "Puhakankatu 9",
      "postinumero": "53600",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.050510,
      "koordinaattiLon": 28.178830
    },
    {
      "kohteenOsoite": "Puhakankatu 9",
      "postinumero": "53600",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.050500,
      "koordinaattiLon": 28.178830
    },
    {
      "kohteenOsoite": "Katajakatu 10",
      "postinumero": "53810",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.047950,
      "koordinaattiLon": 28.132740
    },
    {
      "kohteenOsoite": "Orioninkatu 2",
      "postinumero": "53850",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.052226,
      "koordinaattiLon": 28.105431
    },
    {
      "kohteenOsoite": "Satamatie 30",
      "postinumero": "53900",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.067402,
      "koordinaattiLon": 28.178042
    },
    {
      "kohteenOsoite": "Voisalmentie 9",
      "postinumero": "53920",
      "postitoimipaikka": "Lappeenranta",
      "koordinaattiLat": 61.078400,
      "koordinaattiLon": 28.150060
    },
    {
      "kohteenOsoite": "Keskuskatu 4",
      "postinumero": "54100",
      "postitoimipaikka": "Joutseno",
      "koordinaattiLat": 61.117610,
      "koordinaattiLon": 28.500780
    },
    {
      "kohteenOsoite": "Keskuskatu 5",
      "postinumero": "54100",
      "postitoimipaikka": "Joutseno",
      "koordinaattiLat": 61.117890,
      "koordinaattiLon": 28.500990
    },
    {
      "kohteenOsoite": "Linnalantie 51",
      "postinumero": "54500",
      "postitoimipaikka": "Taavetti",
      "koordinaattiLat": 60.922470,
      "koordinaattiLon": 27.568160
    },
    {
      "kohteenOsoite": "Uimintie 1",
      "postinumero": "54710",
      "postitoimipaikka": "Lemi",
      "koordinaattiLat": 61.061160,
      "koordinaattiLon": 27.804120
    },
    {
      "kohteenOsoite": "Torikatu 6",
      "postinumero": "54800",
      "postitoimipaikka": "Savitaipale",
      "koordinaattiLat": 61.197600,
      "koordinaattiLon": 27.681520
    },
    {
      "kohteenOsoite": "Kuhatie 12-14",
      "postinumero": "54915",
      "postitoimipaikka": "Saimaanharju",
      "koordinaattiLat": 61.135753,
      "koordinaattiLon": 28.101248
    },
    {
      "kohteenOsoite": "Koskenparras 3",
      "postinumero": "55100",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.171210,
      "koordinaattiLon": 28.770210
    },
    {
      "kohteenOsoite": "Lappeentie 9",
      "postinumero": "55100",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.171370,
      "koordinaattiLon": 28.768330
    },
    {
      "kohteenOsoite": "Karhum??enkatu 1",
      "postinumero": "55120",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.188220,
      "koordinaattiLon": 28.763680
    },
    {
      "kohteenOsoite": "Koskikatu 1",
      "postinumero": "55120",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.194962,
      "koordinaattiLon": 28.777436
    },
    {
      "kohteenOsoite": "Tiet??j??nkatu 2",
      "postinumero": "55120",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.187911,
      "koordinaattiLon": 28.770312
    },
    {
      "kohteenOsoite": "Ensontie 32",
      "postinumero": "55610",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.163597,
      "koordinaattiLon": 28.801723
    },
    {
      "kohteenOsoite": "Torikatu 9",
      "postinumero": "55800",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.225484,
      "koordinaattiLon": 28.834729
    },
    {
      "kohteenOsoite": "Vuoksenniskantie 91",
      "postinumero": "55800",
      "postitoimipaikka": "Imatra",
      "koordinaattiLat": 61.224690,
      "koordinaattiLon": 28.832870
    },
    {
      "kohteenOsoite": "Rasilantie 56",
      "postinumero": "56100",
      "postitoimipaikka": "Ruokolahti",
      "koordinaattiLat": 61.292748,
      "koordinaattiLon": 28.811980
    },
    {
      "kohteenOsoite": "Pankkikatu 1",
      "postinumero": "56800",
      "postitoimipaikka": "Simpele",
      "koordinaattiLat": 61.434921,
      "koordinaattiLon": 29.355445
    },
    {
      "kohteenOsoite": "Olavinkatu 57",
      "postinumero": "57100",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.870688,
      "koordinaattiLon": 28.875825
    },
    {
      "kohteenOsoite": "Tulliportinkatu 10",
      "postinumero": "57100",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.867850,
      "koordinaattiLon": 28.870350
    },
    {
      "kohteenOsoite": "Tulliportinkatu 10",
      "postinumero": "57100",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.868080,
      "koordinaattiLon": 28.869910
    },
    {
      "kohteenOsoite": "Kauppatori 6",
      "postinumero": "57130",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.867690,
      "koordinaattiLon": 28.885540
    },
    {
      "kohteenOsoite": "Ilokallionkatu 4",
      "postinumero": "57200",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.869724,
      "koordinaattiLon": 28.922338
    },
    {
      "kohteenOsoite": "Kullervonkatu 1",
      "postinumero": "57200",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.864850,
      "koordinaattiLon": 28.936620
    },
    {
      "kohteenOsoite": "Nojanmaantie 15",
      "postinumero": "57210",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.875910,
      "koordinaattiLon": 28.949950
    },
    {
      "kohteenOsoite": "Aholahdentie 8",
      "postinumero": "57710",
      "postitoimipaikka": "Savonlinna",
      "koordinaattiLat": 61.878750,
      "koordinaattiLon": 28.816840
    },
    {
      "kohteenOsoite": "Enonkoskentie 12",
      "postinumero": "58175",
      "postitoimipaikka": "Enonkoski",
      "koordinaattiLat": 62.089255,
      "koordinaattiLon": 28.915812
    },
    {
      "kohteenOsoite": "H??lv??ntie 2",
      "postinumero": "58200",
      "postitoimipaikka": "Kerim??ki",
      "koordinaattiLat": 61.912720,
      "koordinaattiLon": 29.282760
    },
    {
      "kohteenOsoite": "Kauppatie 18",
      "postinumero": "58500",
      "postitoimipaikka": "Punkaharju",
      "koordinaattiLat": 61.757350,
      "koordinaattiLon": 29.389140
    },
    {
      "kohteenOsoite": "Alanteentie 38",
      "postinumero": "58700",
      "postitoimipaikka": "Sulkava",
      "koordinaattiLat": 61.787550,
      "koordinaattiLon": 28.370190
    },
    {
      "kohteenOsoite": "Kyl??tie 28",
      "postinumero": "58900",
      "postitoimipaikka": "Rantasalmi",
      "koordinaattiLat": 62.064070,
      "koordinaattiLon": 28.302330
    },
    {
      "kohteenOsoite": "Parikkalantie 23",
      "postinumero": "59100",
      "postitoimipaikka": "Parikkala",
      "koordinaattiLat": 61.555780,
      "koordinaattiLon": 29.500790
    },
    {
      "kohteenOsoite": "Kes??lahdentie 30 A",
      "postinumero": "59800",
      "postitoimipaikka": "Kes??lahti",
      "koordinaattiLat": 61.892959,
      "koordinaattiLon": 29.824596
    },
    {
      "kohteenOsoite": "Kauppatori 3",
      "postinumero": "60100",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.788261,
      "koordinaattiLon": 22.839301
    },
    {
      "kohteenOsoite": "Keskuskatu 9",
      "postinumero": "60100",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.791110,
      "koordinaattiLon": 22.839000
    },
    {
      "kohteenOsoite": "Keskustori 4",
      "postinumero": "60100",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.790560,
      "koordinaattiLon": 22.840020
    },
    {
      "kohteenOsoite": "Puskantie 13",
      "postinumero": "60100",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.791750,
      "koordinaattiLon": 22.834500
    },
    {
      "kohteenOsoite": "P??iv??l??nkatu 40",
      "postinumero": "60120",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.792894,
      "koordinaattiLon": 22.872055
    },
    {
      "kohteenOsoite": "Tapiolantie 18",
      "postinumero": "60150",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.771008,
      "koordinaattiLon": 22.876096
    },
    {
      "kohteenOsoite": "Toritaival 2",
      "postinumero": "60200",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.746377,
      "koordinaattiLon": 22.858083
    },
    {
      "kohteenOsoite": "Vuoritie 6",
      "postinumero": "60200",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.769203,
      "koordinaattiLon": 22.844158
    },
    {
      "kohteenOsoite": "Koskenalantie 5",
      "postinumero": "60220",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.777259,
      "koordinaattiLon": 22.828716
    },
    {
      "kohteenOsoite": "Suupohjantie 45",
      "postinumero": "60320",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.793870,
      "koordinaattiLon": 22.811600
    },
    {
      "kohteenOsoite": "Suupohjantie 45",
      "postinumero": "60320",
      "postitoimipaikka": "Sein??joki",
      "koordinaattiLat": 62.793270,
      "koordinaattiLon": 22.813150
    },
    {
      "kohteenOsoite": "Hyllykalliontie 2",
      "postinumero": "60510",
      "postitoimipaikka": "Hyllykallio",
      "koordinaattiLat": 62.805780,
      "koordinaattiLon": 22.877930
    },
    {
      "kohteenOsoite": "Hyllykalliontie 2",
      "postinumero": "60510",
      "postitoimipaikka": "Hyllykallio",
      "koordinaattiLat": 62.806480,
      "koordinaattiLon": 22.878210
    },
    {
      "kohteenOsoite": "Kaarretie 2",
      "postinumero": "60510",
      "postitoimipaikka": "Hyllykallio",
      "koordinaattiLat": 62.806200,
      "koordinaattiLon": 22.880150
    },
    {
      "kohteenOsoite": "Valkiavuorentie 2",
      "postinumero": "60550",
      "postitoimipaikka": "Nurmo",
      "koordinaattiLat": 62.827820,
      "koordinaattiLon": 22.908730
    },
    {
      "kohteenOsoite": "Kauppatie 18",
      "postinumero": "60800",
      "postitoimipaikka": "Ilmajoki",
      "koordinaattiLat": 62.731080,
      "koordinaattiLon": 22.579400
    },
    {
      "kohteenOsoite": "Kauppatie 7",
      "postinumero": "60800",
      "postitoimipaikka": "Ilmajoki",
      "koordinaattiLat": 62.732180,
      "koordinaattiLon": 22.580750
    },
    {
      "kohteenOsoite": "Keskustie 20",
      "postinumero": "61100",
      "postitoimipaikka": "Per??sein??joki",
      "koordinaattiLat": 62.559910,
      "koordinaattiLon": 23.062750
    },
    {
      "kohteenOsoite": "Keskuspuistikko 3",
      "postinumero": "61300",
      "postitoimipaikka": "Kurikka",
      "koordinaattiLat": 62.615236,
      "koordinaattiLon": 22.396966
    },
    {
      "kohteenOsoite": "Keskuspuistikko 7",
      "postinumero": "61300",
      "postitoimipaikka": "Kurikka",
      "koordinaattiLat": 62.616152,
      "koordinaattiLon": 22.397693
    },
    {
      "kohteenOsoite": "Havuselantie 1",
      "postinumero": "61330",
      "postitoimipaikka": "Koskenkorva",
      "koordinaattiLat": 62.691140,
      "koordinaattiLon": 22.451500
    },
    {
      "kohteenOsoite": "Kaukolanraitti 2",
      "postinumero": "61400",
      "postitoimipaikka": "Ylistaro",
      "koordinaattiLat": 62.940301,
      "koordinaattiLon": 22.515456
    },
    {
      "kohteenOsoite": "Lukkarinm??entie 2",
      "postinumero": "61500",
      "postitoimipaikka": "Isokyr??",
      "koordinaattiLat": 63.000658,
      "koordinaattiLon": 22.322144
    },
    {
      "kohteenOsoite": "Koskitie 21",
      "postinumero": "61600",
      "postitoimipaikka": "Jalasj??rvi",
      "koordinaattiLat": 62.487840,
      "koordinaattiLon": 22.751760
    },
    {
      "kohteenOsoite": "Puistotie 70",
      "postinumero": "61800",
      "postitoimipaikka": "Kauhajoki",
      "koordinaattiLat": 62.432948,
      "koordinaattiLon": 22.180080
    },
    {
      "kohteenOsoite": "Topeeka 21",
      "postinumero": "61800",
      "postitoimipaikka": "Kauhajoki",
      "koordinaattiLat": 62.424290,
      "koordinaattiLon": 22.178770
    },
    {
      "kohteenOsoite": "Topeeka 65",
      "postinumero": "61800",
      "postitoimipaikka": "Kauhajoki",
      "koordinaattiLat": 62.433572,
      "koordinaattiLon": 22.183277
    },
    {
      "kohteenOsoite": "Kauppakatu 2",
      "postinumero": "62100",
      "postitoimipaikka": "Lapua",
      "koordinaattiLat": 62.969180,
      "koordinaattiLon": 23.008450
    },
    {
      "kohteenOsoite": "Kauppakatu 4 C",
      "postinumero": "62100",
      "postitoimipaikka": "Lapua",
      "koordinaattiLat": 62.968787,
      "koordinaattiLon": 23.008735
    },
    {
      "kohteenOsoite": "Puistotie 2",
      "postinumero": "62100",
      "postitoimipaikka": "Lapua",
      "koordinaattiLat": 62.970488,
      "koordinaattiLon": 23.008836
    },
    {
      "kohteenOsoite": "Kauppatie 65",
      "postinumero": "62200",
      "postitoimipaikka": "Kauhava",
      "koordinaattiLat": 63.098260,
      "koordinaattiLon": 23.039590
    },
    {
      "kohteenOsoite": "Kauppatie 82",
      "postinumero": "62200",
      "postitoimipaikka": "Kauhava",
      "koordinaattiLat": 63.100061,
      "koordinaattiLon": 23.055492
    },
    {
      "kohteenOsoite": "Saharavainiontie 1",
      "postinumero": "62300",
      "postitoimipaikka": "H??rm??",
      "koordinaattiLat": 63.243118,
      "koordinaattiLon": 22.847941
    },
    {
      "kohteenOsoite": "Vanha Vaasantie 1",
      "postinumero": "62375",
      "postitoimipaikka": "Ylih??rm??",
      "koordinaattiLat": 63.142785,
      "koordinaattiLon": 22.794490
    },
    {
      "kohteenOsoite": "J????k??rintie 54",
      "postinumero": "62420",
      "postitoimipaikka": "Kortesj??rvi",
      "koordinaattiLat": 63.300926,
      "koordinaattiLon": 23.155863
    },
    {
      "kohteenOsoite": "Kirkkotie 25",
      "postinumero": "62500",
      "postitoimipaikka": "Evij??rvi",
      "koordinaattiLat": 63.367740,
      "koordinaattiLon": 23.478380
    },
    {
      "kohteenOsoite": "Maneesintie 4",
      "postinumero": "62600",
      "postitoimipaikka": "Lappaj??rvi",
      "koordinaattiLat": 63.217842,
      "koordinaattiLon": 23.624607
    },
    {
      "kohteenOsoite": "Patruunantie 10 A",
      "postinumero": "62800",
      "postitoimipaikka": "Vimpeli",
      "koordinaattiLat": 63.159636,
      "koordinaattiLon": 23.825675
    },
    {
      "kohteenOsoite": "Keskuskatu 9",
      "postinumero": "62900",
      "postitoimipaikka": "Alaj??rvi",
      "koordinaattiLat": 63.000826,
      "koordinaattiLon": 23.815156
    },
    {
      "kohteenOsoite": "Keskustie 36",
      "postinumero": "63100",
      "postitoimipaikka": "Kuortane",
      "koordinaattiLat": 62.804070,
      "koordinaattiLon": 23.508240
    },
    {
      "kohteenOsoite": "Kuulantie 2",
      "postinumero": "63300",
      "postitoimipaikka": "Alavus",
      "koordinaattiLat": 62.586460,
      "koordinaattiLon": 23.618280
    },
    {
      "kohteenOsoite": "V??ht??rintie 2",
      "postinumero": "63300",
      "postitoimipaikka": "Alavus",
      "koordinaattiLat": 62.586947,
      "koordinaattiLon": 23.614486
    },
    {
      "kohteenOsoite": "Kirkonkyl??ntie 3",
      "postinumero": "63500",
      "postitoimipaikka": "Lehtim??ki",
      "koordinaattiLat": 62.817420,
      "koordinaattiLon": 23.942756
    },
    {
      "kohteenOsoite": "Keskisentie 7",
      "postinumero": "63610",
      "postitoimipaikka": "Tuuri",
      "koordinaattiLat": 62.602510,
      "koordinaattiLon": 23.727610
    },
    {
      "kohteenOsoite": "Onnentie 7",
      "postinumero": "63610",
      "postitoimipaikka": "Tuuri",
      "koordinaattiLat": 62.603090,
      "koordinaattiLon": 23.723620
    },
    {
      "kohteenOsoite": "Ostolantie 15",
      "postinumero": "63700",
      "postitoimipaikka": "??Ht??ri",
      "koordinaattiLat": 62.550367,
      "koordinaattiLon": 24.068749
    },
    {
      "kohteenOsoite": "Alaj??rventie 2",
      "postinumero": "63800",
      "postitoimipaikka": "Soini",
      "koordinaattiLat": 62.873460,
      "koordinaattiLon": 24.204660
    },
    {
      "kohteenOsoite": "Kauppatori 4",
      "postinumero": "64100",
      "postitoimipaikka": "Kristiinankaupunki",
      "koordinaattiLat": 62.274030,
      "koordinaattiLon": 21.378740
    },
    {
      "kohteenOsoite": "N??rpesv??gen 8",
      "postinumero": "64200",
      "postitoimipaikka": "N??rpi??",
      "koordinaattiLat": 62.476510,
      "koordinaattiLon": 21.338040
    },
    {
      "kohteenOsoite": "Raatihuoneenkatu 36",
      "postinumero": "64260",
      "postitoimipaikka": "Kaskinen",
      "koordinaattiLat": 62.385312,
      "koordinaattiLon": 21.223579
    },
    {
      "kohteenOsoite": "Kauhajoentie 2",
      "postinumero": "64350",
      "postitoimipaikka": "Karijoki",
      "koordinaattiLat": 62.309672,
      "koordinaattiLon": 21.710485
    },
    {
      "kohteenOsoite": "Mikkil??ntie 12",
      "postinumero": "64700",
      "postitoimipaikka": "Teuva",
      "koordinaattiLat": 62.487750,
      "koordinaattiLon": 21.739290
    },
    {
      "kohteenOsoite": "Luukkaantie 1",
      "postinumero": "64900",
      "postitoimipaikka": "Isojoki",
      "koordinaattiLat": 62.111944,
      "koordinaattiLon": 21.960163
    },
    {
      "kohteenOsoite": "Alatori",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.095540,
      "koordinaattiLon": 21.617170
    },
    {
      "kohteenOsoite": "Alatori 3",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.095770,
      "koordinaattiLon": 21.617040
    },
    {
      "kohteenOsoite": "Hovioikeudenpuistikko 17",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.096776,
      "koordinaattiLon": 21.616005
    },
    {
      "kohteenOsoite": "Kivihaantie 14",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.111670,
      "koordinaattiLon": 21.657930
    },
    {
      "kohteenOsoite": "Laivakatu 13",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.103220,
      "koordinaattiLon": 21.624110
    },
    {
      "kohteenOsoite": "Sep??nkyl??ntie 3",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.098665,
      "koordinaattiLon": 21.626930
    },
    {
      "kohteenOsoite": "Vaasanpuistikko 16",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.094820,
      "koordinaattiLon": 21.615500
    },
    {
      "kohteenOsoite": "Yl??tori 2",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.095920,
      "koordinaattiLon": 21.614570
    },
    {
      "kohteenOsoite": "Yl??tori 4",
      "postinumero": "65100",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.095570,
      "koordinaattiLon": 21.614730
    },
    {
      "kohteenOsoite": "Palosaarentie 26",
      "postinumero": "65200",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.109926,
      "koordinaattiLon": 21.597571
    },
    {
      "kohteenOsoite": "V??stervikintie 2",
      "postinumero": "65280",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.134068,
      "koordinaattiLon": 21.599462
    },
    {
      "kohteenOsoite": "Jukolantie 1",
      "postinumero": "65300",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.102430,
      "koordinaattiLon": 21.647500
    },
    {
      "kohteenOsoite": "Kokkokalliontie 2",
      "postinumero": "65300",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.109630,
      "koordinaattiLon": 21.650500
    },
    {
      "kohteenOsoite": "Kuninkaantie 69",
      "postinumero": "65320",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.090436,
      "koordinaattiLon": 21.683077
    },
    {
      "kohteenOsoite": "Vanhan Vaasan Katu 19",
      "postinumero": "65370",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.086449,
      "koordinaattiLon": 21.726044
    },
    {
      "kohteenOsoite": "Kiitokaari 2",
      "postinumero": "65380",
      "postitoimipaikka": "Vaasa",
      "koordinaattiLat": 63.052421,
      "koordinaattiLon": 21.720826
    },
    {
      "kohteenOsoite": "Sulvantie 213",
      "postinumero": "65450",
      "postitoimipaikka": "Sulva",
      "koordinaattiLat": 63.012710,
      "koordinaattiLon": 21.649250
    },
    {
      "kohteenOsoite": "Keskustie 3",
      "postinumero": "65610",
      "postitoimipaikka": "Mustasaari",
      "koordinaattiLat": 63.112301,
      "koordinaattiLon": 21.677934
    },
    {
      "kohteenOsoite": "K??pingintie 10 C",
      "postinumero": "66100",
      "postitoimipaikka": "Maalahti",
      "koordinaattiLat": 62.944775,
      "koordinaattiLon": 21.548481
    },
    {
      "kohteenOsoite": "Strandv??gen 4323",
      "postinumero": "66200",
      "postitoimipaikka": "Korsn??s",
      "koordinaattiLat": 62.786948,
      "koordinaattiLon": 21.189109
    },
    {
      "kohteenOsoite": "Kauppatie 4",
      "postinumero": "66300",
      "postitoimipaikka": "Jurva",
      "koordinaattiLat": 62.686330,
      "koordinaattiLon": 21.982790
    },
    {
      "kohteenOsoite": "Kauppatie 1",
      "postinumero": "66400",
      "postitoimipaikka": "Laihia",
      "koordinaattiLat": 62.979090,
      "koordinaattiLon": 22.009590
    },
    {
      "kohteenOsoite": "Ruutintie 2",
      "postinumero": "66400",
      "postitoimipaikka": "Laihia",
      "koordinaattiLat": 62.975990,
      "koordinaattiLon": 22.011010
    },
    {
      "kohteenOsoite": "Loukontie 6",
      "postinumero": "66440",
      "postitoimipaikka": "Tervajoki",
      "koordinaattiLat": 63.004363,
      "koordinaattiLon": 22.140001
    },
    {
      "kohteenOsoite": "Heikkil??ntie 1",
      "postinumero": "66500",
      "postitoimipaikka": "V??h??kyr??",
      "koordinaattiLat": 63.054440,
      "koordinaattiLon": 22.107680
    },
    {
      "kohteenOsoite": "Koivulahdentie 1",
      "postinumero": "66530",
      "postitoimipaikka": "Koivulahti",
      "koordinaattiLat": 63.160824,
      "koordinaattiLon": 21.841031
    },
    {
      "kohteenOsoite": "V??yrintie 5",
      "postinumero": "66600",
      "postitoimipaikka": "V??yri",
      "koordinaattiLat": 63.130000,
      "koordinaattiLon": 22.252480
    },
    {
      "kohteenOsoite": "Kokkolantie 75",
      "postinumero": "66800",
      "postitoimipaikka": "Oravainen",
      "koordinaattiLat": 63.307260,
      "koordinaattiLon": 22.384970
    },
    {
      "kohteenOsoite": "Sollefte??nkatu 9",
      "postinumero": "66900",
      "postitoimipaikka": "Uusikaarlepyy",
      "koordinaattiLat": 63.521780,
      "koordinaattiLon": 22.529580
    },
    {
      "kohteenOsoite": "Isokatu 6",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.836478,
      "koordinaattiLon": 23.131279
    },
    {
      "kohteenOsoite": "Kauppatori 2",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.839020,
      "koordinaattiLon": 23.134900
    },
    {
      "kohteenOsoite": "Laivanvarustajankatu 1",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.836545,
      "koordinaattiLon": 23.109484
    },
    {
      "kohteenOsoite": "Pitk??nsillankatu 17",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.837803,
      "koordinaattiLon": 23.139835
    },
    {
      "kohteenOsoite": "Rantakatu 2-4",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.835420,
      "koordinaattiLon": 23.133230
    },
    {
      "kohteenOsoite": "Rautatienkatu",
      "postinumero": "67100",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.835180,
      "koordinaattiLon": 23.136370
    },
    {
      "kohteenOsoite": "Katariinankatu 29",
      "postinumero": "67200",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.844346,
      "koordinaattiLon": 23.116820
    },
    {
      "kohteenOsoite": "Heinolankaari 9",
      "postinumero": "67600",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.827370,
      "koordinaattiLon": 23.155840
    },
    {
      "kohteenOsoite": "Heinolankaari 1",
      "postinumero": "67700",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.827456,
      "koordinaattiLon": 23.152425
    },
    {
      "kohteenOsoite": "Prismantie 1",
      "postinumero": "67700",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.831901,
      "koordinaattiLon": 23.124389
    },
    {
      "kohteenOsoite": "M??ntyn????d??nkatu 6",
      "postinumero": "67800",
      "postitoimipaikka": "Kokkola",
      "koordinaattiLat": 63.826531,
      "koordinaattiLon": 23.068275
    },
    {
      "kohteenOsoite": "Raumankarintie 1",
      "postinumero": "68100",
      "postitoimipaikka": "Himanka",
      "koordinaattiLat": 64.061828,
      "koordinaattiLon": 23.654056
    },
    {
      "kohteenOsoite": "Lohtajantie 6 B",
      "postinumero": "68230",
      "postitoimipaikka": "Lohtaja",
      "koordinaattiLat": 64.022951,
      "koordinaattiLon": 23.507359
    },
    {
      "kohteenOsoite": "K??lvi??ntie 35",
      "postinumero": "68300",
      "postitoimipaikka": "K??lvi??",
      "koordinaattiLat": 63.860883,
      "koordinaattiLon": 23.415021
    },
    {
      "kohteenOsoite": "Kruunupyyntie 8",
      "postinumero": "68500",
      "postitoimipaikka": "Kruunupyy",
      "koordinaattiLat": 63.728385,
      "koordinaattiLon": 23.033784
    },
    {
      "kohteenOsoite": "Kauppatori 2",
      "postinumero": "68600",
      "postitoimipaikka": "Pietarsaari",
      "koordinaattiLat": 63.674280,
      "koordinaattiLon": 22.702640
    },
    {
      "kohteenOsoite": "Koulukatu 4",
      "postinumero": "68600",
      "postitoimipaikka": "Pietarsaari",
      "koordinaattiLat": 63.678179,
      "koordinaattiLon": 22.716765
    },
    {
      "kohteenOsoite": "Koulukatu 4",
      "postinumero": "68600",
      "postitoimipaikka": "Pietarsaari",
      "koordinaattiLat": 63.678180,
      "koordinaattiLon": 22.716760
    },
    {
      "kohteenOsoite": "Koulukatu 6",
      "postinumero": "68600",
      "postitoimipaikka": "Pietarsaari",
      "koordinaattiLat": 63.677851,
      "koordinaattiLon": 22.713490
    },
    {
      "kohteenOsoite": "Raatihuoneenkatu 6",
      "postinumero": "68600",
      "postitoimipaikka": "Pietarsaari",
      "koordinaattiLat": 63.674422,
      "koordinaattiLon": 22.700997
    },
    {
      "kohteenOsoite": "Etel??inen Teerij??rventie 13",
      "postinumero": "68700",
      "postitoimipaikka": "Teerij??rvi",
      "koordinaattiLat": 63.544704,
      "koordinaattiLon": 23.511418
    },
    {
      "kohteenOsoite": "Motellitie 2",
      "postinumero": "68870",
      "postitoimipaikka": "Edsev??",
      "koordinaattiLat": 63.629697,
      "koordinaattiLon": 22.842081
    },
    {
      "kohteenOsoite": "Valtakatu 1",
      "postinumero": "69100",
      "postitoimipaikka": "Kannus",
      "koordinaattiLat": 63.902420,
      "koordinaattiLon": 23.915340
    },
    {
      "kohteenOsoite": "Ullavantie 1",
      "postinumero": "69300",
      "postitoimipaikka": "Toholampi",
      "koordinaattiLat": 63.773630,
      "koordinaattiLon": 24.249730
    },
    {
      "kohteenOsoite": "Kaustintie 3",
      "postinumero": "69600",
      "postitoimipaikka": "Kaustinen",
      "koordinaattiLat": 63.547575,
      "koordinaattiLon": 23.693372
    },
    {
      "kohteenOsoite": "Kirkkotanhua 1",
      "postinumero": "69700",
      "postitoimipaikka": "Veteli",
      "koordinaattiLat": 63.479735,
      "koordinaattiLon": 23.785715
    },
    {
      "kohteenOsoite": "Vehmassuontie 2",
      "postinumero": "69950",
      "postitoimipaikka": "Perho",
      "koordinaattiLat": 63.212728,
      "koordinaattiLon": 24.424745
    },
    {
      "kohteenOsoite": "Kauppakatu 22",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.891630,
      "koordinaattiLon": 27.680239
    },
    {
      "kohteenOsoite": "Puijonkatu 21",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.892330,
      "koordinaattiLon": 27.679900
    },
    {
      "kohteenOsoite": "Puijonkatu 25",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.893120,
      "koordinaattiLon": 27.679680
    },
    {
      "kohteenOsoite": "Puijonkatu 25",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.893120,
      "koordinaattiLon": 27.679680
    },
    {
      "kohteenOsoite": "Puijonkatu 25",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.893250,
      "koordinaattiLon": 27.679560
    },
    {
      "kohteenOsoite": "Satamakatu 36",
      "postinumero": "70100",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.893620,
      "koordinaattiLon": 27.692640
    },
    {
      "kohteenOsoite": "Ajurinkatu 18",
      "postinumero": "70110",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.891210,
      "koordinaattiLon": 27.675820
    },
    {
      "kohteenOsoite": "Haapaniemenkatu 24",
      "postinumero": "70110",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.892681,
      "koordinaattiLon": 27.676599
    },
    {
      "kohteenOsoite": "Haapaniemenkatu 30",
      "postinumero": "70110",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.893350,
      "koordinaattiLon": 27.676630
    },
    {
      "kohteenOsoite": "Mailatie 2",
      "postinumero": "70200",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.902726,
      "koordinaattiLon": 27.649197
    },
    {
      "kohteenOsoite": "Puijonlaaksontie 2",
      "postinumero": "70210",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.896890,
      "koordinaattiLon": 27.651053
    },
    {
      "kohteenOsoite": "P??iv??rannantie 18",
      "postinumero": "70420",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.932281,
      "koordinaattiLon": 27.677232
    },
    {
      "kohteenOsoite": "Kalevalankatu 23",
      "postinumero": "70500",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.900650,
      "koordinaattiLon": 27.705230
    },
    {
      "kohteenOsoite": "Tehdaskatu 19",
      "postinumero": "70620",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.880926,
      "koordinaattiLon": 27.667450
    },
    {
      "kohteenOsoite": "Savilahdentie 10",
      "postinumero": "70700",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.887660,
      "koordinaattiLon": 27.632620
    },
    {
      "kohteenOsoite": "Savilahdentie 10",
      "postinumero": "70700",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.887710,
      "koordinaattiLon": 27.633230
    },
    {
      "kohteenOsoite": "Kolmisopentie 1",
      "postinumero": "70780",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.864450,
      "koordinaattiLon": 27.612580
    },
    {
      "kohteenOsoite": "Kolmisopentie 3",
      "postinumero": "70780",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.865250,
      "koordinaattiLon": 27.612430
    },
    {
      "kohteenOsoite": "Rauhalahdentie 1",
      "postinumero": "70780",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.861880,
      "koordinaattiLon": 27.620400
    },
    {
      "kohteenOsoite": "Matkuksentie 60",
      "postinumero": "70800",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.823180,
      "koordinaattiLon": 27.605000
    },
    {
      "kohteenOsoite": "Vitostie 1771",
      "postinumero": "70800",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.658620,
      "koordinaattiLon": 27.602298
    },
    {
      "kohteenOsoite": "Jalkasenkatu 5",
      "postinumero": "70820",
      "postitoimipaikka": "Kuopio",
      "koordinaattiLat": 62.839453,
      "koordinaattiLon": 27.642183
    },
    {
      "kohteenOsoite": "V??nrikintie 2",
      "postinumero": "70910",
      "postitoimipaikka": "Vuorela",
      "koordinaattiLat": 62.980693,
      "koordinaattiLon": 27.702456
    },
    {
      "kohteenOsoite": "Keskustie 20",
      "postinumero": "71160",
      "postitoimipaikka": "Riistavesi",
      "koordinaattiLat": 62.913966,
      "koordinaattiLon": 28.161135
    },
    {
      "kohteenOsoite": "Keskitie 26",
      "postinumero": "71200",
      "postitoimipaikka": "Tuusniemi",
      "koordinaattiLat": 62.810580,
      "koordinaattiLon": 28.491410
    },
    {
      "kohteenOsoite": "Vehmersalmentie 34",
      "postinumero": "71310",
      "postitoimipaikka": "Vehmersalmi",
      "koordinaattiLat": 62.775689,
      "koordinaattiLon": 28.014337
    },
    {
      "kohteenOsoite": "Maaningantie 31",
      "postinumero": "71750",
      "postitoimipaikka": "Maaninka",
      "koordinaattiLat": 63.154976,
      "koordinaattiLon": 27.299394
    },
    {
      "kohteenOsoite": "Kuiluntie 4",
      "postinumero": "71800",
      "postitoimipaikka": "Siilinj??rvi",
      "koordinaattiLat": 63.072910,
      "koordinaattiLon": 27.660510
    },
    {
      "kohteenOsoite": "Kuiluntie 5",
      "postinumero": "71800",
      "postitoimipaikka": "Siilinj??rvi",
      "koordinaattiLat": 63.073125,
      "koordinaattiLon": 27.659056
    },
    {
      "kohteenOsoite": "Toritie 12",
      "postinumero": "71800",
      "postitoimipaikka": "Siilinj??rvi",
      "koordinaattiLat": 63.074570,
      "koordinaattiLon": 27.658630
    },
    {
      "kohteenOsoite": "Toritie 4",
      "postinumero": "71800",
      "postitoimipaikka": "Siilinj??rvi",
      "koordinaattiLat": 63.075780,
      "koordinaattiLon": 27.661230
    },
    {
      "kohteenOsoite": "Kissakuusentie 2",
      "postinumero": "72100",
      "postitoimipaikka": "Karttula",
      "koordinaattiLat": 62.894836,
      "koordinaattiLon": 26.973011
    },
    {
      "kohteenOsoite": "Urheilutie 1",
      "postinumero": "72210",
      "postitoimipaikka": "Tervo",
      "koordinaattiLat": 62.954450,
      "koordinaattiLon": 26.752850
    },
    {
      "kohteenOsoite": "Keskustie 7",
      "postinumero": "72300",
      "postitoimipaikka": "Vesanto",
      "koordinaattiLat": 62.930579,
      "koordinaattiLon": 26.410338
    },
    {
      "kohteenOsoite": "Puistotie 26",
      "postinumero": "72400",
      "postitoimipaikka": "Pielavesi",
      "koordinaattiLat": 63.232350,
      "koordinaattiLon": 26.756600
    },
    {
      "kohteenOsoite": "??Yr??p????ntie 1",
      "postinumero": "72600",
      "postitoimipaikka": "Keitele",
      "koordinaattiLat": 63.179640,
      "koordinaattiLon": 26.352420
    },
    {
      "kohteenOsoite": "Asematie 1",
      "postinumero": "73100",
      "postitoimipaikka": "Lapinlahti",
      "koordinaattiLat": 63.366370,
      "koordinaattiLon": 27.391800
    },
    {
      "kohteenOsoite": "Lapinlahdentie 1",
      "postinumero": "73200",
      "postitoimipaikka": "Varpaisj??rvi",
      "koordinaattiLat": 63.359350,
      "koordinaattiLon": 27.755850
    },
    {
      "kohteenOsoite": "Nilsi??ntie 65",
      "postinumero": "73300",
      "postitoimipaikka": "Nilsi??",
      "koordinaattiLat": 63.203140,
      "koordinaattiLon": 28.084800
    },
    {
      "kohteenOsoite": "Juankoskentie 18",
      "postinumero": "73500",
      "postitoimipaikka": "Juankoski",
      "koordinaattiLat": 63.066210,
      "koordinaattiLon": 28.330930
    },
    {
      "kohteenOsoite": "Rantatie 1",
      "postinumero": "73600",
      "postitoimipaikka": "Kaavi",
      "koordinaattiLat": 62.974758,
      "koordinaattiLon": 28.481812
    },
    {
      "kohteenOsoite": "Savontie  17",
      "postinumero": "73900",
      "postitoimipaikka": "Rautavaara",
      "koordinaattiLat": 63.494550,
      "koordinaattiLon": 28.297010
    },
    {
      "kohteenOsoite": "Meijerikatu 3",
      "postinumero": "74100",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.563890,
      "koordinaattiLon": 27.186560
    },
    {
      "kohteenOsoite": "Satamakatu 10",
      "postinumero": "74100",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.555810,
      "koordinaattiLon": 27.189750
    },
    {
      "kohteenOsoite": "Savonkatu 17",
      "postinumero": "74100",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.558710,
      "koordinaattiLon": 27.189370
    },
    {
      "kohteenOsoite": "Parkatintie 2",
      "postinumero": "74120",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.574470,
      "koordinaattiLon": 27.178850
    },
    {
      "kohteenOsoite": "Parkatintie 2",
      "postinumero": "74120",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.574570,
      "koordinaattiLon": 27.179320
    },
    {
      "kohteenOsoite": "Etel??ntie 4",
      "postinumero": "74130",
      "postitoimipaikka": "Iisalmi",
      "koordinaattiLat": 63.550879,
      "koordinaattiLon": 27.213814
    },
    {
      "kohteenOsoite": "Petterintie 2",
      "postinumero": "74200",
      "postitoimipaikka": "Vierem??",
      "koordinaattiLat": 63.742700,
      "koordinaattiLon": 27.002160
    },
    {
      "kohteenOsoite": "Rutakontie 36",
      "postinumero": "74300",
      "postitoimipaikka": "Sonkaj??rvi",
      "koordinaattiLat": 63.668120,
      "koordinaattiLon": 27.522960
    },
    {
      "kohteenOsoite": "Kallentie 2",
      "postinumero": "74340",
      "postitoimipaikka": "Sukeva",
      "koordinaattiLat": 63.870770,
      "koordinaattiLon": 27.432440
    },
    {
      "kohteenOsoite": "Torikatu 6",
      "postinumero": "74700",
      "postitoimipaikka": "Kiuruvesi",
      "koordinaattiLat": 63.653100,
      "koordinaattiLon": 26.618570
    },
    {
      "kohteenOsoite": "Kirkkokatu 20",
      "postinumero": "75500",
      "postitoimipaikka": "Nurmes",
      "koordinaattiLat": 63.543010,
      "koordinaattiLon": 29.137790
    },
    {
      "kohteenOsoite": "Porokyl??nkatu 19",
      "postinumero": "75530",
      "postitoimipaikka": "Nurmes",
      "koordinaattiLat": 63.556160,
      "koordinaattiLon": 29.107030
    },
    {
      "kohteenOsoite": "Porokyl??nkatu 19",
      "postinumero": "75530",
      "postitoimipaikka": "Nurmes",
      "koordinaattiLat": 63.556010,
      "koordinaattiLon": 29.107460
    },
    {
      "kohteenOsoite": "Keskuskatu 38",
      "postinumero": "75700",
      "postitoimipaikka": "Valtimo",
      "koordinaattiLat": 63.678459,
      "koordinaattiLon": 28.815997
    },
    {
      "kohteenOsoite": "Kaakinm??enkatu 10",
      "postinumero": "76100",
      "postitoimipaikka": "Pieks??m??ki",
      "koordinaattiLat": 62.303170,
      "koordinaattiLon": 27.171150
    },
    {
      "kohteenOsoite": "Kauppakatu 2",
      "postinumero": "76100",
      "postitoimipaikka": "Pieks??m??ki",
      "koordinaattiLat": 62.299937,
      "koordinaattiLon": 27.160097
    },
    {
      "kohteenOsoite": "Kauppakatu 3",
      "postinumero": "76100",
      "postitoimipaikka": "Pieks??m??ki",
      "koordinaattiLat": 62.299748,
      "koordinaattiLon": 27.160621
    },
    {
      "kohteenOsoite": "Keskuskatu 37",
      "postinumero": "76100",
      "postitoimipaikka": "Pieks??m??ki",
      "koordinaattiLat": 62.298600,
      "koordinaattiLon": 27.149260
    },
    {
      "kohteenOsoite": "Kukkaroniementie 3",
      "postinumero": "76100",
      "postitoimipaikka": "Pieks??m??ki",
      "koordinaattiLat": 62.303040,
      "koordinaattiLon": 27.164220
    },
    {
      "kohteenOsoite": "Seunalantie 2",
      "postinumero": "76850",
      "postitoimipaikka": "Naaraj??rvi",
      "koordinaattiLat": 62.287679,
      "koordinaattiLon": 27.080704
    },
    {
      "kohteenOsoite": "Virastotie 2",
      "postinumero": "77330",
      "postitoimipaikka": "Virtasalmi",
      "koordinaattiLat": 62.133930,
      "koordinaattiLon": 27.464440
    },
    {
      "kohteenOsoite": "Kauppatie 5",
      "postinumero": "77570",
      "postitoimipaikka": "J??ppil??",
      "koordinaattiLat": 62.376400,
      "koordinaattiLon": 27.437700
    },
    {
      "kohteenOsoite": "Rautalammintie 11",
      "postinumero": "77600",
      "postitoimipaikka": "Suonenjoki",
      "koordinaattiLat": 62.625910,
      "koordinaattiLon": 27.120900
    },
    {
      "kohteenOsoite": "Rautalammintie 12",
      "postinumero": "77600",
      "postitoimipaikka": "Suonenjoki",
      "koordinaattiLat": 62.625970,
      "koordinaattiLon": 27.119022
    },
    {
      "kohteenOsoite": "Kuopiontie 32",
      "postinumero": "77700",
      "postitoimipaikka": "Rautalampi",
      "koordinaattiLat": 62.622540,
      "koordinaattiLon": 26.831610
    },
    {
      "kohteenOsoite": "Kauppakatu 40",
      "postinumero": "78200",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.315960,
      "koordinaattiLon": 27.872550
    },
    {
      "kohteenOsoite": "Kauppakatu 54",
      "postinumero": "78200",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.317030,
      "koordinaattiLon": 27.868310
    },
    {
      "kohteenOsoite": "K??sity??katu 21",
      "postinumero": "78200",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.317170,
      "koordinaattiLon": 27.856100
    },
    {
      "kohteenOsoite": "K??sity??katu 21",
      "postinumero": "78200",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.317680,
      "koordinaattiLon": 27.855600
    },
    {
      "kohteenOsoite": "Relanderinkatu 28",
      "postinumero": "78200",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.314179,
      "koordinaattiLon": 27.871186
    },
    {
      "kohteenOsoite": "Kiertotie 2",
      "postinumero": "78210",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.332360,
      "koordinaattiLon": 27.830130
    },
    {
      "kohteenOsoite": "Ahlstr??minkatu 20",
      "postinumero": "78250",
      "postitoimipaikka": "Varkaus",
      "koordinaattiLat": 62.314747,
      "koordinaattiLon": 27.893441
    },
    {
      "kohteenOsoite": "Kievarinkatu 1",
      "postinumero": "79100",
      "postitoimipaikka": "Lepp??virta",
      "koordinaattiLat": 62.490930,
      "koordinaattiLon": 27.792300
    },
    {
      "kohteenOsoite": "Savonkatu 43",
      "postinumero": "79100",
      "postitoimipaikka": "Lepp??virta",
      "koordinaattiLat": 62.491610,
      "koordinaattiLon": 27.788510
    },
    {
      "kohteenOsoite": "Savonkatu 43",
      "postinumero": "79100",
      "postitoimipaikka": "Lepp??virta",
      "koordinaattiLat": 62.491490,
      "koordinaattiLon": 27.788640
    },
    {
      "kohteenOsoite": "Mutalantie 1",
      "postinumero": "79600",
      "postitoimipaikka": "Joroinen",
      "koordinaattiLat": 62.179380,
      "koordinaattiLon": 27.826810
    },
    {
      "kohteenOsoite": "Suojalantie 2",
      "postinumero": "79700",
      "postitoimipaikka": "Hein??vesi",
      "koordinaattiLat": 62.425390,
      "koordinaattiLon": 28.630910
    },
    {
      "kohteenOsoite": "Kauppakatu 16",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.598140,
      "koordinaattiLon": 29.758670
    },
    {
      "kohteenOsoite": "Kauppakatu 30",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.602910,
      "koordinaattiLon": 29.763100
    },
    {
      "kohteenOsoite": "Koskikatu 5",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.599872,
      "koordinaattiLon": 29.761512
    },
    {
      "kohteenOsoite": "Siltakatu 10",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.601520,
      "koordinaattiLon": 29.762790
    },
    {
      "kohteenOsoite": "Suvantokatu 21",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.600050,
      "koordinaattiLon": 29.752680
    },
    {
      "kohteenOsoite": "Torikatu 25",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.601774,
      "koordinaattiLon": 29.763915
    },
    {
      "kohteenOsoite": "Voimatie 2",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.616990,
      "koordinaattiLon": 29.778210
    },
    {
      "kohteenOsoite": "Voimatie 2",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.616980,
      "koordinaattiLon": 29.778240
    },
    {
      "kohteenOsoite": "Voimatie 2",
      "postinumero": "80100",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.616930,
      "koordinaattiLon": 29.778590
    },
    {
      "kohteenOsoite": "Linjatie 2",
      "postinumero": "80140",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.629040,
      "koordinaattiLon": 29.704350
    },
    {
      "kohteenOsoite": "Noljakankaari 1",
      "postinumero": "80140",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.625370,
      "koordinaattiLon": 29.693960
    },
    {
      "kohteenOsoite": "Puronsuunkatu 1 A",
      "postinumero": "80160",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.614610,
      "koordinaattiLon": 29.813730
    },
    {
      "kohteenOsoite": "Puronsuunkatu 1 A",
      "postinumero": "80160",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.614610,
      "koordinaattiLon": 29.813710
    },
    {
      "kohteenOsoite": "Lasinpuhaltajantie 1",
      "postinumero": "80170",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.619179,
      "koordinaattiLon": 29.857831
    },
    {
      "kohteenOsoite": "Suvikatu 18",
      "postinumero": "80200",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.589634,
      "koordinaattiLon": 29.789706
    },
    {
      "kohteenOsoite": "Niinivaarantie 74",
      "postinumero": "80230",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.585117,
      "koordinaattiLon": 29.794089
    },
    {
      "kohteenOsoite": "Kettuvaarantie 32",
      "postinumero": "80260",
      "postitoimipaikka": "Joensuu",
      "koordinaattiLat": 62.602930,
      "koordinaattiLon": 29.803260
    },
    {
      "kohteenOsoite": "Yl??myllyntie 77",
      "postinumero": "80400",
      "postitoimipaikka": "Yl??mylly",
      "koordinaattiLat": 62.613909,
      "koordinaattiLon": 29.542487
    },
    {
      "kohteenOsoite": "Ruottisenahonkatu 17",
      "postinumero": "80710",
      "postitoimipaikka": "Lehmo",
      "koordinaattiLat": 62.666764,
      "koordinaattiLon": 29.796086
    },
    {
      "kohteenOsoite": "Keskuskatu 14",
      "postinumero": "81100",
      "postitoimipaikka": "Kontiolahti",
      "koordinaattiLat": 62.766143,
      "koordinaattiLon": 29.847508
    },
    {
      "kohteenOsoite": "Niskantie 19",
      "postinumero": "81200",
      "postitoimipaikka": "Eno",
      "koordinaattiLat": 62.799110,
      "koordinaattiLon": 30.157610
    },
    {
      "kohteenOsoite": "Harjunraitti 17",
      "postinumero": "81280",
      "postitoimipaikka": "Uimaharju",
      "koordinaattiLat": 62.913460,
      "koordinaattiLon": 30.253390
    },
    {
      "kohteenOsoite": "Pielisentie 23-25",
      "postinumero": "81700",
      "postitoimipaikka": "Lieksa",
      "koordinaattiLat": 63.318420,
      "koordinaattiLon": 30.027080
    },
    {
      "kohteenOsoite": "Pielisentie 34",
      "postinumero": "81700",
      "postitoimipaikka": "Lieksa",
      "koordinaattiLat": 63.318420,
      "koordinaattiLon": 30.023980
    },
    {
      "kohteenOsoite": "Pielisentie 9",
      "postinumero": "81700",
      "postitoimipaikka": "Lieksa",
      "koordinaattiLat": 63.316503,
      "koordinaattiLon": 30.031732
    },
    {
      "kohteenOsoite": "Joensuuv??yl?? 911",
      "postinumero": "82110",
      "postitoimipaikka": "Hein??vaara",
      "koordinaattiLat": 62.558552,
      "koordinaattiLon": 30.175214
    },
    {
      "kohteenOsoite": "Lastaustie 1",
      "postinumero": "82200",
      "postitoimipaikka": "Hammaslahti",
      "koordinaattiLat": 62.432550,
      "koordinaattiLon": 29.969950
    },
    {
      "kohteenOsoite": "Kinnulantie 3",
      "postinumero": "82300",
      "postitoimipaikka": "R????kkyl??",
      "koordinaattiLat": 62.313453,
      "koordinaattiLon": 29.625201
    },
    {
      "kohteenOsoite": "Kiteentie 13",
      "postinumero": "82500",
      "postitoimipaikka": "Kitee",
      "koordinaattiLat": 62.097570,
      "koordinaattiLon": 30.141340
    },
    {
      "kohteenOsoite": "Kiteentie 3",
      "postinumero": "82500",
      "postitoimipaikka": "Kitee",
      "koordinaattiLat": 62.096780,
      "koordinaattiLon": 30.144580
    },
    {
      "kohteenOsoite": "Kiteentie 6",
      "postinumero": "82500",
      "postitoimipaikka": "Kitee",
      "koordinaattiLat": 62.097040,
      "koordinaattiLon": 30.142860
    },
    {
      "kohteenOsoite": "Kauppakatu 4",
      "postinumero": "82600",
      "postitoimipaikka": "Tohmaj??rvi",
      "koordinaattiLat": 62.224570,
      "koordinaattiLon": 30.330230
    },
    {
      "kohteenOsoite": "Rekijoentie 3",
      "postinumero": "82730",
      "postitoimipaikka": "Tuupovaara",
      "koordinaattiLat": 62.484980,
      "koordinaattiLon": 30.617830
    },
    {
      "kohteenOsoite": "Mantsintie 5",
      "postinumero": "82900",
      "postitoimipaikka": "Ilomantsi",
      "koordinaattiLat": 62.671570,
      "koordinaattiLon": 30.931930
    },
    {
      "kohteenOsoite": "Keskustie 3",
      "postinumero": "83100",
      "postitoimipaikka": "Liperi",
      "koordinaattiLat": 62.530850,
      "koordinaattiLon": 29.385680
    },
    {
      "kohteenOsoite": "Joensuuntie",
      "postinumero": "83400",
      "postitoimipaikka": "Viinij??rvi",
      "koordinaattiLat": 62.641700,
      "koordinaattiLon": 29.226653
    },
    {
      "kohteenOsoite": "Kummunkatu 5",
      "postinumero": "83500",
      "postitoimipaikka": "Outokumpu",
      "koordinaattiLat": 62.726010,
      "koordinaattiLon": 29.015911
    },
    {
      "kohteenOsoite": "Kummunkatu 9",
      "postinumero": "83500",
      "postitoimipaikka": "Outokumpu",
      "koordinaattiLat": 62.726550,
      "koordinaattiLon": 29.014040
    },
    {
      "kohteenOsoite": "Polvij??rventie 9",
      "postinumero": "83700",
      "postitoimipaikka": "Polvij??rvi",
      "koordinaattiLat": 62.855470,
      "koordinaattiLon": 29.371440
    },
    {
      "kohteenOsoite": "Poikolantie 2 A",
      "postinumero": "83900",
      "postitoimipaikka": "Juuka",
      "koordinaattiLat": 63.240260,
      "koordinaattiLon": 29.252381
    },
    {
      "kohteenOsoite": "Kolintie 10",
      "postinumero": "83950",
      "postitoimipaikka": "Ahmovaara",
      "koordinaattiLat": 63.094190,
      "koordinaattiLon": 29.612310
    },
    {
      "kohteenOsoite": "Kauppakatu 11",
      "postinumero": "84100",
      "postitoimipaikka": "Ylivieska",
      "koordinaattiLat": 64.074221,
      "koordinaattiLon": 24.537002
    },
    {
      "kohteenOsoite": "Ollilanojankatu 2",
      "postinumero": "84100",
      "postitoimipaikka": "Ylivieska",
      "koordinaattiLat": 64.063010,
      "koordinaattiLon": 24.559970
    },
    {
      "kohteenOsoite": "Rautatiekatu 3",
      "postinumero": "84100",
      "postitoimipaikka": "Ylivieska",
      "koordinaattiLat": 64.073320,
      "koordinaattiLon": 24.538310
    },
    {
      "kohteenOsoite": "Savarinkatu 2",
      "postinumero": "84100",
      "postitoimipaikka": "Ylivieska",
      "koordinaattiLat": 64.063580,
      "koordinaattiLon": 24.551530
    },
    {
      "kohteenOsoite": "Savarinkatu 9",
      "postinumero": "84100",
      "postitoimipaikka": "Ylivieska",
      "koordinaattiLat": 64.062951,
      "koordinaattiLon": 24.553176
    },
    {
      "kohteenOsoite": "Kalajoentie 36",
      "postinumero": "85100",
      "postitoimipaikka": "Kalajoki",
      "koordinaattiLat": 64.252323,
      "koordinaattiLon": 23.954857
    },
    {
      "kohteenOsoite": "Merenojantie 2",
      "postinumero": "85100",
      "postitoimipaikka": "Kalajoki",
      "koordinaattiLat": 64.260590,
      "koordinaattiLon": 23.950200
    },
    {
      "kohteenOsoite": "Keskustie 7",
      "postinumero": "85200",
      "postitoimipaikka": "Alavieska",
      "koordinaattiLat": 64.167096,
      "koordinaattiLon": 24.303936
    },
    {
      "kohteenOsoite": "Haikolantie 20",
      "postinumero": "85410",
      "postitoimipaikka": "Sievi",
      "koordinaattiLat": 63.907010,
      "koordinaattiLon": 24.519800
    },
    {
      "kohteenOsoite": "Kalliontie 20",
      "postinumero": "85500",
      "postitoimipaikka": "Nivala",
      "koordinaattiLat": 63.929610,
      "koordinaattiLon": 24.960700
    },
    {
      "kohteenOsoite": "Kalliontie 26",
      "postinumero": "85500",
      "postitoimipaikka": "Nivala",
      "koordinaattiLat": 63.928760,
      "koordinaattiLon": 24.963870
    },
    {
      "kohteenOsoite": "Puistokatu 35",
      "postinumero": "85800",
      "postitoimipaikka": "Haapaj??rvi",
      "koordinaattiLat": 63.750409,
      "koordinaattiLon": 25.319829
    },
    {
      "kohteenOsoite": "St??lberginkatu 1",
      "postinumero": "85800",
      "postitoimipaikka": "Haapaj??rvi",
      "koordinaattiLat": 63.751980,
      "koordinaattiLon": 25.316100
    },
    {
      "kohteenOsoite": "Kirkkotie 8 A",
      "postinumero": "85900",
      "postitoimipaikka": "Reisj??rvi",
      "koordinaattiLat": 63.604760,
      "koordinaattiLon": 24.938340
    },
    {
      "kohteenOsoite": "Vanhatie 48",
      "postinumero": "86100",
      "postitoimipaikka": "Pyh??joki",
      "koordinaattiLat": 64.465000,
      "koordinaattiLon": 24.259880
    },
    {
      "kohteenOsoite": "Keskuskatu 7",
      "postinumero": "86300",
      "postitoimipaikka": "Oulainen",
      "koordinaattiLat": 64.268059,
      "koordinaattiLon": 24.816003
    },
    {
      "kohteenOsoite": "Oulaistenkatu 15",
      "postinumero": "86300",
      "postitoimipaikka": "Oulainen",
      "koordinaattiLat": 64.268585,
      "koordinaattiLon": 24.827858
    },
    {
      "kohteenOsoite": "Asematie 9",
      "postinumero": "86400",
      "postitoimipaikka": "Vihanti",
      "koordinaattiLat": 64.486530,
      "koordinaattiLon": 24.991330
    },
    {
      "kohteenOsoite": "Vanhatie 48",
      "postinumero": "86600",
      "postitoimipaikka": "Haapavesi",
      "koordinaattiLat": 64.137811,
      "koordinaattiLon": 25.363496
    },
    {
      "kohteenOsoite": "Vanhatie 49",
      "postinumero": "86600",
      "postitoimipaikka": "Haapavesi",
      "koordinaattiLat": 64.137184,
      "koordinaattiLon": 25.364179
    },
    {
      "kohteenOsoite": "Frosteruksenkatu 4",
      "postinumero": "86710",
      "postitoimipaikka": "K??rs??m??ki",
      "koordinaattiLat": 63.978770,
      "koordinaattiLon": 25.759420
    },
    {
      "kohteenOsoite": "Ollintie 14",
      "postinumero": "86800",
      "postitoimipaikka": "Pyh??salmi",
      "koordinaattiLat": 63.681990,
      "koordinaattiLon": 25.977980
    },
    {
      "kohteenOsoite": "Kasarminkatu 18",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.217920,
      "koordinaattiLon": 27.742970
    },
    {
      "kohteenOsoite": "Kauppakatu 18",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.225090,
      "koordinaattiLon": 27.732880
    },
    {
      "kohteenOsoite": "Kauppakatu 30",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.226719,
      "koordinaattiLon": 27.729326
    },
    {
      "kohteenOsoite": "Pohjolankatu 9",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.222800,
      "koordinaattiLon": 27.735190
    },
    {
      "kohteenOsoite": "Pohjolankatu 9",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.222890,
      "koordinaattiLon": 27.735350
    },
    {
      "kohteenOsoite": "Veturitie 1",
      "postinumero": "87100",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.221317,
      "koordinaattiLon": 27.746406
    },
    {
      "kohteenOsoite": "Kisatie 30",
      "postinumero": "87250",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.237265,
      "koordinaattiLon": 27.751370
    },
    {
      "kohteenOsoite": "Soidinkatu 1",
      "postinumero": "87500",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.209348,
      "koordinaattiLon": 27.752775
    },
    {
      "kohteenOsoite": "Taikatie 4",
      "postinumero": "87700",
      "postitoimipaikka": "Kajaani",
      "koordinaattiLat": 64.218500,
      "koordinaattiLon": 27.678485
    },
    {
      "kohteenOsoite": "Vuorimiehentie 2",
      "postinumero": "88200",
      "postitoimipaikka": "Otanm??ki",
      "koordinaattiLat": 64.113280,
      "koordinaattiLon": 27.104080
    },
    {
      "kohteenOsoite": "Lepikontie 19",
      "postinumero": "88300",
      "postitoimipaikka": "Paltamo",
      "koordinaattiLat": 64.407660,
      "koordinaattiLon": 27.834380
    },
    {
      "kohteenOsoite": "Aholantie 17",
      "postinumero": "88400",
      "postitoimipaikka": "Ristij??rvi",
      "koordinaattiLat": 64.505374,
      "koordinaattiLon": 28.214425
    },
    {
      "kohteenOsoite": "Kainuuntie 16",
      "postinumero": "88600",
      "postitoimipaikka": "Sotkamo",
      "koordinaattiLat": 64.130530,
      "koordinaattiLon": 28.382530
    },
    {
      "kohteenOsoite": "Kainuuntie 22",
      "postinumero": "88600",
      "postitoimipaikka": "Sotkamo",
      "koordinaattiLat": 64.130860,
      "koordinaattiLon": 28.385630
    },
    {
      "kohteenOsoite": "Heikintie 1",
      "postinumero": "88610",
      "postitoimipaikka": "Vuokatti",
      "koordinaattiLat": 64.145777,
      "koordinaattiLon": 28.268999
    },
    {
      "kohteenOsoite": "Koulukatu 10",
      "postinumero": "88900",
      "postitoimipaikka": "Kuhmo",
      "koordinaattiLat": 64.127280,
      "koordinaattiLon": 29.523680
    },
    {
      "kohteenOsoite": "Maaherrankatu 12",
      "postinumero": "89200",
      "postitoimipaikka": "Puolanka",
      "koordinaattiLat": 64.867720,
      "koordinaattiLon": 27.675640
    },
    {
      "kohteenOsoite": "Virtatie 3",
      "postinumero": "89400",
      "postitoimipaikka": "Hyrynsalmi",
      "koordinaattiLat": 64.676161,
      "koordinaattiLon": 28.491076
    },
    {
      "kohteenOsoite": "Keskuskatu 3",
      "postinumero": "89600",
      "postitoimipaikka": "Suomussalmi",
      "koordinaattiLat": 64.884330,
      "koordinaattiLon": 28.910030
    },
    {
      "kohteenOsoite": "Hallituskatu 36",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010710,
      "koordinaattiLon": 25.481650
    },
    {
      "kohteenOsoite": "Isokatu 14",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.012580,
      "koordinaattiLon": 25.473820
    },
    {
      "kohteenOsoite": "Isokatu 33",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010630,
      "koordinaattiLon": 25.471420
    },
    {
      "kohteenOsoite": "Isokatu 51",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.007840,
      "koordinaattiLon": 25.467690
    },
    {
      "kohteenOsoite": "Kirkkokatu 14",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.011484,
      "koordinaattiLon": 25.469497
    },
    {
      "kohteenOsoite": "Kirkkokatu 18",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010926,
      "koordinaattiLon": 25.468667
    },
    {
      "kohteenOsoite": "Kirkkokatu 21",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.011663,
      "koordinaattiLon": 25.470247
    },
    {
      "kohteenOsoite": "Kirkkokatu 6",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.013030,
      "koordinaattiLon": 25.471750
    },
    {
      "kohteenOsoite": "Pakkahuoneenkatu 13",
      "postinumero": "90100",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.012670,
      "koordinaattiLon": 25.471800
    },
    {
      "kohteenOsoite": "Tehtaankatu 1",
      "postinumero": "90130",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010250,
      "koordinaattiLon": 25.492360
    },
    {
      "kohteenOsoite": "Tehtaankatu 3",
      "postinumero": "90130",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.009940,
      "koordinaattiLon": 25.489880
    },
    {
      "kohteenOsoite": "Tehtaankatu 5",
      "postinumero": "90130",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010290,
      "koordinaattiLon": 25.492300
    },
    {
      "kohteenOsoite": "Tehtaankatu 5",
      "postinumero": "90130",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.010280,
      "koordinaattiLon": 25.492360
    },
    {
      "kohteenOsoite": "Paljetie 4",
      "postinumero": "90140",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.999726,
      "koordinaattiLon": 25.476628
    },
    {
      "kohteenOsoite": "Latokartanontie 1",
      "postinumero": "90150",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.996820,
      "koordinaattiLon": 25.485850
    },
    {
      "kohteenOsoite": "Ranta-kastellintie 4",
      "postinumero": "90230",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.009220,
      "koordinaattiLon": 25.534020
    },
    {
      "kohteenOsoite": "Kangaskontiontie 3",
      "postinumero": "90240",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.982677,
      "koordinaattiLon": 25.565922
    },
    {
      "kohteenOsoite": "Hiirihaukantie 5",
      "postinumero": "90250",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.992297,
      "koordinaattiLon": 25.517178
    },
    {
      "kohteenOsoite": "Nuottasaarentie 1",
      "postinumero": "90400",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.996160,
      "koordinaattiLon": 25.461930
    },
    {
      "kohteenOsoite": "Metsokankaantie 5",
      "postinumero": "90420",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.956900,
      "koordinaattiLon": 25.526380
    },
    {
      "kohteenOsoite": "Metsokankaantie 5",
      "postinumero": "90420",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 64.956870,
      "koordinaattiLon": 25.526620
    },
    {
      "kohteenOsoite": "Ollilantie 2",
      "postinumero": "90440",
      "postitoimipaikka": "Kempele",
      "koordinaattiLat": 64.912880,
      "koordinaattiLon": 25.503790
    },
    {
      "kohteenOsoite": "Zeppelinintie 1",
      "postinumero": "90450",
      "postitoimipaikka": "Kempele",
      "koordinaattiLat": 64.902370,
      "koordinaattiLon": 25.537380
    },
    {
      "kohteenOsoite": "Zeppelinintie 1",
      "postinumero": "90450",
      "postitoimipaikka": "Kempele",
      "koordinaattiLat": 64.901730,
      "koordinaattiLon": 25.537370
    },
    {
      "kohteenOsoite": "Karhuojantie 2",
      "postinumero": "90460",
      "postitoimipaikka": "Oulunsalo",
      "koordinaattiLat": 64.934910,
      "koordinaattiLon": 25.402120
    },
    {
      "kohteenOsoite": "Luovontie 138",
      "postinumero": "90480",
      "postitoimipaikka": "Hailuoto",
      "koordinaattiLat": 65.013000,
      "koordinaattiLon": 24.729490
    },
    {
      "kohteenOsoite": "Valtatie 28",
      "postinumero": "90500",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.025310,
      "koordinaattiLon": 25.475330
    },
    {
      "kohteenOsoite": "Satamatie 26",
      "postinumero": "90520",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.034480,
      "koordinaattiLon": 25.434100
    },
    {
      "kohteenOsoite": "Revontie 2",
      "postinumero": "90530",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.030805,
      "koordinaattiLon": 25.470978
    },
    {
      "kohteenOsoite": "Ritaharjuntie 49",
      "postinumero": "90540",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.077280,
      "koordinaattiLon": 25.448370
    },
    {
      "kohteenOsoite": "Mennink??isentie 2",
      "postinumero": "90550",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.042686,
      "koordinaattiLon": 25.479450
    },
    {
      "kohteenOsoite": "Kalevalankuja 12",
      "postinumero": "90570",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.060218,
      "koordinaattiLon": 25.486233
    },
    {
      "kohteenOsoite": "Kauppalinnankuja 1",
      "postinumero": "90570",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.054987,
      "koordinaattiLon": 25.457143
    },
    {
      "kohteenOsoite": "Koisotie 1",
      "postinumero": "90580",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.065058,
      "koordinaattiLon": 25.417251
    },
    {
      "kohteenOsoite": "Laakeritie 4",
      "postinumero": "90620",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.039668,
      "koordinaattiLon": 25.551716
    },
    {
      "kohteenOsoite": "Karvarinaukio 7",
      "postinumero": "90650",
      "postitoimipaikka": "Oulu",
      "koordinaattiLat": 65.019361,
      "koordinaattiLon": 25.552492
    },
    {
      "kohteenOsoite": "Kissankuja 4",
      "postinumero": "90820",
      "postitoimipaikka": "Kello",
      "koordinaattiLat": 65.129250,
      "koordinaattiLon": 25.357500
    },
    {
      "kohteenOsoite": "Revontie 8",
      "postinumero": "90830",
      "postitoimipaikka": "Haukipudas",
      "koordinaattiLat": 65.175650,
      "koordinaattiLon": 25.348720
    },
    {
      "kohteenOsoite": "V??litie 1",
      "postinumero": "90830",
      "postitoimipaikka": "Haukipudas",
      "koordinaattiLat": 65.175661,
      "koordinaattiLon": 25.355407
    },
    {
      "kohteenOsoite": "Terveystie 6",
      "postinumero": "90900",
      "postitoimipaikka": "Kiiminki",
      "koordinaattiLat": 65.129330,
      "koordinaattiLon": 25.778310
    },
    {
      "kohteenOsoite": "Keskuspisto 1",
      "postinumero": "90940",
      "postitoimipaikka": "J????li",
      "koordinaattiLat": 65.092210,
      "koordinaattiLon": 25.689670
    },
    {
      "kohteenOsoite": "Haminantie 4",
      "postinumero": "91100",
      "postitoimipaikka": "Ii",
      "koordinaattiLat": 65.323021,
      "koordinaattiLon": 25.377951
    },
    {
      "kohteenOsoite": "Sorosentie 2",
      "postinumero": "91100",
      "postitoimipaikka": "Ii",
      "koordinaattiLat": 65.288982,
      "koordinaattiLon": 25.373030
    },
    {
      "kohteenOsoite": "Karjalantie 3",
      "postinumero": "91200",
      "postitoimipaikka": "Yli-ii",
      "koordinaattiLat": 65.372330,
      "koordinaattiLon": 25.840140
    },
    {
      "kohteenOsoite": "Harjutie 14",
      "postinumero": "91300",
      "postitoimipaikka": "Ylikiiminki",
      "koordinaattiLat": 65.030460,
      "koordinaattiLon": 26.153280
    },
    {
      "kohteenOsoite": "Valtatie 30",
      "postinumero": "91500",
      "postitoimipaikka": "Muhos",
      "koordinaattiLat": 64.806140,
      "koordinaattiLon": 25.998710
    },
    {
      "kohteenOsoite": "Vanhatie 35",
      "postinumero": "91600",
      "postitoimipaikka": "Utaj??rvi",
      "koordinaattiLat": 64.760760,
      "koordinaattiLon": 26.421010
    },
    {
      "kohteenOsoite": "Vaalantie 19",
      "postinumero": "91700",
      "postitoimipaikka": "Vaala",
      "koordinaattiLat": 64.559030,
      "koordinaattiLon": 26.837550
    },
    {
      "kohteenOsoite": "Vanhatie 14",
      "postinumero": "91800",
      "postitoimipaikka": "Tyrn??v??",
      "koordinaattiLat": 64.762879,
      "koordinaattiLon": 25.646057
    },
    {
      "kohteenOsoite": "Kauppakatu 2",
      "postinumero": "91900",
      "postitoimipaikka": "Liminka",
      "koordinaattiLat": 64.809410,
      "koordinaattiLon": 25.416570
    },
    {
      "kohteenOsoite": "Lumijoentie 1228",
      "postinumero": "91980",
      "postitoimipaikka": "Lumijoki",
      "koordinaattiLat": 64.836780,
      "koordinaattiLon": 25.189430
    },
    {
      "kohteenOsoite": "Kirkkokatu 34",
      "postinumero": "92100",
      "postitoimipaikka": "Raahe",
      "koordinaattiLat": 64.684320,
      "koordinaattiLon": 24.479560
    },
    {
      "kohteenOsoite": "Ollinkalliontie 2",
      "postinumero": "92100",
      "postitoimipaikka": "Raahe",
      "koordinaattiLat": 64.678232,
      "koordinaattiLon": 24.487363
    },
    {
      "kohteenOsoite": "Palokunnankatu 37",
      "postinumero": "92100",
      "postitoimipaikka": "Raahe",
      "koordinaattiLat": 64.684336,
      "koordinaattiLon": 24.483754
    },
    {
      "kohteenOsoite": "Antinkankaantie 32",
      "postinumero": "92130",
      "postitoimipaikka": "Raahe",
      "koordinaattiLat": 64.687120,
      "koordinaattiLon": 24.501150
    },
    {
      "kohteenOsoite": "Puistotie 3",
      "postinumero": "92140",
      "postitoimipaikka": "Pattijoki",
      "koordinaattiLat": 64.691690,
      "koordinaattiLon": 24.574950
    },
    {
      "kohteenOsoite": "Siikasavontie 3",
      "postinumero": "92400",
      "postitoimipaikka": "Ruukki",
      "koordinaattiLat": 64.665040,
      "koordinaattiLon": 25.102360
    },
    {
      "kohteenOsoite": "Paavolantie 15",
      "postinumero": "92500",
      "postitoimipaikka": "Rantsila",
      "koordinaattiLat": 64.506547,
      "koordinaattiLon": 25.652795
    },
    {
      "kohteenOsoite": "Pulkkilantie 17",
      "postinumero": "92600",
      "postitoimipaikka": "Pulkkila",
      "koordinaattiLat": 64.270940,
      "koordinaattiLon": 25.866440
    },
    {
      "kohteenOsoite": "H??rm??ntie 2",
      "postinumero": "92700",
      "postitoimipaikka": "Kestil??",
      "koordinaattiLat": 64.351616,
      "koordinaattiLon": 26.280065
    },
    {
      "kohteenOsoite": "Manuntie 2",
      "postinumero": "92930",
      "postitoimipaikka": "Pyh??nt??",
      "koordinaattiLat": 64.096785,
      "koordinaattiLon": 26.331251
    },
    {
      "kohteenOsoite": "S??hk??tie 1",
      "postinumero": "93100",
      "postitoimipaikka": "Pudasj??rvi",
      "koordinaattiLat": 65.360582,
      "koordinaattiLon": 26.988078
    },
    {
      "kohteenOsoite": "Toritie 1",
      "postinumero": "93100",
      "postitoimipaikka": "Pudasj??rvi",
      "koordinaattiLat": 65.359138,
      "koordinaattiLon": 26.996505
    },
    {
      "kohteenOsoite": "Kauppatie 11",
      "postinumero": "93400",
      "postitoimipaikka": "Taivalkoski",
      "koordinaattiLat": 65.575490,
      "koordinaattiLon": 28.243050
    },
    {
      "kohteenOsoite": "Huoparintie 1",
      "postinumero": "93600",
      "postitoimipaikka": "Kuusamo",
      "koordinaattiLat": 65.957924,
      "koordinaattiLon": 29.160745
    },
    {
      "kohteenOsoite": "Kitkantie 53",
      "postinumero": "93600",
      "postitoimipaikka": "Kuusamo",
      "koordinaattiLat": 65.974589,
      "koordinaattiLon": 29.177936
    },
    {
      "kohteenOsoite": "Kitkantie 7",
      "postinumero": "93600",
      "postitoimipaikka": "Kuusamo",
      "koordinaattiLat": 65.965434,
      "koordinaattiLon": 29.186898
    },
    {
      "kohteenOsoite": "Luomantie 1",
      "postinumero": "93600",
      "postitoimipaikka": "Kuusamo",
      "koordinaattiLat": 65.955830,
      "koordinaattiLon": 29.160903
    },
    {
      "kohteenOsoite": "Rukankyl??ntie 8",
      "postinumero": "93830",
      "postitoimipaikka": "Rukatunturi",
      "koordinaattiLat": 66.168200,
      "koordinaattiLon": 29.138220
    },
    {
      "kohteenOsoite": "Asemakatu 1",
      "postinumero": "94100",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.739901,
      "koordinaattiLon": 24.565069
    },
    {
      "kohteenOsoite": "Kauppakatu 6",
      "postinumero": "94100",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.736980,
      "koordinaattiLon": 24.566590
    },
    {
      "kohteenOsoite": "Keskuspuistokatu 1",
      "postinumero": "94100",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.737693,
      "koordinaattiLon": 24.560704
    },
    {
      "kohteenOsoite": "Tornionkatu 17",
      "postinumero": "94200",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.759886,
      "koordinaattiLon": 24.546653
    },
    {
      "kohteenOsoite": "Jokisuuntie 8",
      "postinumero": "94400",
      "postitoimipaikka": "Keminmaa",
      "koordinaattiLat": 65.792280,
      "koordinaattiLon": 24.524240
    },
    {
      "kohteenOsoite": "Rovaniementie 36 C",
      "postinumero": "94400",
      "postitoimipaikka": "Keminmaa",
      "koordinaattiLat": 65.802520,
      "koordinaattiLon": 24.545610
    },
    {
      "kohteenOsoite": "Karjalahdenkatu 7",
      "postinumero": "94600",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.735088,
      "koordinaattiLon": 24.583070
    },
    {
      "kohteenOsoite": "Kiveli??nkatu 28",
      "postinumero": "94600",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.743820,
      "koordinaattiLon": 24.589450
    },
    {
      "kohteenOsoite": "Ouluntie 29",
      "postinumero": "94700",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.729320,
      "koordinaattiLon": 24.603929
    },
    {
      "kohteenOsoite": "Asemakatu 1",
      "postinumero": "95100",
      "postitoimipaikka": "Kemi",
      "koordinaattiLat": 65.739900,
      "koordinaattiLon": 24.565070
    },
    {
      "kohteenOsoite": "Vanhatie 6",
      "postinumero": "95200",
      "postitoimipaikka": "Simo",
      "koordinaattiLat": 65.661880,
      "koordinaattiLon": 25.065740
    },
    {
      "kohteenOsoite": "Keskustie 95",
      "postinumero": "95300",
      "postitoimipaikka": "Tervola",
      "koordinaattiLat": 66.090170,
      "koordinaattiLon": 24.810860
    },
    {
      "kohteenOsoite": "Hallituskatu 14",
      "postinumero": "95400",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 65.846090,
      "koordinaattiLon": 24.149690
    },
    {
      "kohteenOsoite": "L??nsiranta 10",
      "postinumero": "95400",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 65.844150,
      "koordinaattiLon": 24.142180
    },
    {
      "kohteenOsoite": "L??nsiranta 10",
      "postinumero": "95400",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 65.844230,
      "koordinaattiLon": 24.141910
    },
    {
      "kohteenOsoite": "Kemintie 3",
      "postinumero": "95420",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 65.843370,
      "koordinaattiLon": 24.168960
    },
    {
      "kohteenOsoite": "Teollisuuskatu 5",
      "postinumero": "95420",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 65.843517,
      "koordinaattiLon": 24.189475
    },
    {
      "kohteenOsoite": "Jokivarrentie 2455",
      "postinumero": "95530",
      "postitoimipaikka": "Tornio",
      "koordinaattiLat": 66.040098,
      "koordinaattiLon": 24.019064
    },
    {
      "kohteenOsoite": "Alkkulanraitti 52",
      "postinumero": "95600",
      "postitoimipaikka": "Ylitornio",
      "koordinaattiLat": 66.324210,
      "koordinaattiLon": 23.675510
    },
    {
      "kohteenOsoite": "Kauppatie 38",
      "postinumero": "95700",
      "postitoimipaikka": "Pello",
      "koordinaattiLat": 66.773650,
      "koordinaattiLon": 23.971010
    },
    {
      "kohteenOsoite": "Jokijalantie 65",
      "postinumero": "95900",
      "postitoimipaikka": "Kolari",
      "koordinaattiLat": 67.331160,
      "koordinaattiLon": 23.778990
    },
    {
      "kohteenOsoite": "Tunturintie 16",
      "postinumero": "95970",
      "postitoimipaikka": "??K??slompolo",
      "koordinaattiLat": 67.604180,
      "koordinaattiLon": 24.152300
    },
    {
      "kohteenOsoite": "Koskikatu 27",
      "postinumero": "96100",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.502860,
      "koordinaattiLon": 25.722830
    },
    {
      "kohteenOsoite": "Lapink??vij??ntie 7",
      "postinumero": "96100",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.500678,
      "koordinaattiLon": 25.716059
    },
    {
      "kohteenOsoite": "Koskikatu 12",
      "postinumero": "96200",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.502500,
      "koordinaattiLon": 25.732870
    },
    {
      "kohteenOsoite": "Koskikatu 25",
      "postinumero": "96200",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.503221,
      "koordinaattiLon": 25.726137
    },
    {
      "kohteenOsoite": "Koskikatu 25",
      "postinumero": "96200",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.502320,
      "koordinaattiLon": 25.724440
    },
    {
      "kohteenOsoite": "Rovakatu 23",
      "postinumero": "96200",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.501730,
      "koordinaattiLon": 25.727440
    },
    {
      "kohteenOsoite": "Rovakatu 28",
      "postinumero": "96200",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.502114,
      "koordinaattiLon": 25.728155
    },
    {
      "kohteenOsoite": "Alakorkalontie 22",
      "postinumero": "96300",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.486090,
      "koordinaattiLon": 25.656561
    },
    {
      "kohteenOsoite": "Viirinkankaantie 19",
      "postinumero": "96300",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.485068,
      "koordinaattiLon": 25.695811
    },
    {
      "kohteenOsoite": "Teollisuustie 1",
      "postinumero": "96320",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.491070,
      "koordinaattiLon": 25.689690
    },
    {
      "kohteenOsoite": "Teollisuustie 2",
      "postinumero": "96320",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.492230,
      "koordinaattiLon": 25.688290
    },
    {
      "kohteenOsoite": "Teollisuustie 2",
      "postinumero": "96320",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.492230,
      "koordinaattiLon": 25.688360
    },
    {
      "kohteenOsoite": "Erkkil??nkuja 4",
      "postinumero": "96400",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.498108,
      "koordinaattiLon": 25.754082
    },
    {
      "kohteenOsoite": "Saaruantie 1",
      "postinumero": "96400",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.487904,
      "koordinaattiLon": 25.803875
    },
    {
      "kohteenOsoite": "Hillapolku 9",
      "postinumero": "96500",
      "postitoimipaikka": "Rovaniemi",
      "koordinaattiLat": 66.512102,
      "koordinaattiLon": 25.668753
    },
    {
      "kohteenOsoite": "Napapiirintie 2",
      "postinumero": "96900",
      "postitoimipaikka": "Saarenkyl??",
      "koordinaattiLat": 66.515764,
      "koordinaattiLon": 25.784719
    },
    {
      "kohteenOsoite": "Pulkamontie 1",
      "postinumero": "96900",
      "postitoimipaikka": "Saarenkyl??",
      "koordinaattiLat": 66.519367,
      "koordinaattiLon": 25.753521
    },
    {
      "kohteenOsoite": "Keskustie 1",
      "postinumero": "97700",
      "postitoimipaikka": "Ranua",
      "koordinaattiLat": 65.927880,
      "koordinaattiLon": 26.517160
    },
    {
      "kohteenOsoite": "Posiontie 44",
      "postinumero": "97900",
      "postitoimipaikka": "Posio",
      "koordinaattiLat": 66.112160,
      "koordinaattiLon": 28.160390
    },
    {
      "kohteenOsoite": "Vapaudenkatu 2",
      "postinumero": "98100",
      "postitoimipaikka": "Kemij??rvi",
      "koordinaattiLat": 66.713660,
      "koordinaattiLon": 27.429800
    },
    {
      "kohteenOsoite": "Seminaarinkatu 2-4",
      "postinumero": "98120",
      "postitoimipaikka": "Kemij??rvi",
      "koordinaattiLat": 66.720388,
      "koordinaattiLon": 27.400344
    },
    {
      "kohteenOsoite": "Sodankyl??ntie 2",
      "postinumero": "98500",
      "postitoimipaikka": "Pelkosenniemi",
      "koordinaattiLat": 67.108700,
      "koordinaattiLon": 27.514710
    },
    {
      "kohteenOsoite": "Samperintie 4",
      "postinumero": "98800",
      "postitoimipaikka": "Savukoski",
      "koordinaattiLat": 67.292620,
      "koordinaattiLon": 28.157090
    },
    {
      "kohteenOsoite": "Kuusamontie 4",
      "postinumero": "98900",
      "postitoimipaikka": "Salla",
      "koordinaattiLat": 66.833200,
      "koordinaattiLon": 28.668520
    },
    {
      "kohteenOsoite": "Valtatie 36",
      "postinumero": "99100",
      "postitoimipaikka": "Kittil??",
      "koordinaattiLat": 67.656130,
      "koordinaattiLon": 24.909550
    },
    {
      "kohteenOsoite": "Levintie 1590",
      "postinumero": "99130",
      "postitoimipaikka": "Sirkka",
      "koordinaattiLat": 67.804000,
      "koordinaattiLon": 24.799920
    },
    {
      "kohteenOsoite": "Puthaanrannantie 2",
      "postinumero": "99300",
      "postitoimipaikka": "Muonio",
      "koordinaattiLat": 67.956030,
      "koordinaattiLon": 23.680070
    },
    {
      "kohteenOsoite": "Puistom??entie 1",
      "postinumero": "99400",
      "postitoimipaikka": "Enonteki??",
      "koordinaattiLat": 68.384833,
      "koordinaattiLon": 23.636458
    },
    {
      "kohteenOsoite": "J????merentie 14",
      "postinumero": "99600",
      "postitoimipaikka": "Sodankyl??",
      "koordinaattiLat": 67.417090,
      "koordinaattiLon": 26.593063
    },
    {
      "kohteenOsoite": "J????merentie 8",
      "postinumero": "99600",
      "postitoimipaikka": "Sodankyl??",
      "koordinaattiLat": 67.415830,
      "KoordinaattiLon": 26.593045
    },
    {
      "kohteenOsoite": "Ivalontie 4",
      "postinumero": "99800",
      "postitoimipaikka": "Ivalo",
      "koordinaattiLat": 68.658920,
      "koordinaattiLon": 27.538900
    },
    {
      "kohteenOsoite": "Saarisel??ntie 7",
      "postinumero": "99830",
      "postitoimipaikka": "Saariselk??",
      "koordinaattiLat": 68.419895,
      "koordinaattiLon": 27.418414
    },
    {
      "kohteenOsoite": "Inarintie 45",
      "postinumero": "99870",
      "postitoimipaikka": "Inari",
      "koordinaattiLat": 68.906260,
      "koordinaattiLon": 27.026450
    }
   ]

  constructor() { }
}
