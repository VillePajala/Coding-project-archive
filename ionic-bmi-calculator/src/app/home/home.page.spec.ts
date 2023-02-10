import { AppComponent } from './app.component';


describe("Perustoiminnallisuus", () => {

    const app = new AppComponent();

    it("käynnistyy", () => {
        expect(app).toBeTruthy();
    });


    it("käynnistyy määrittämättömillä muuttujilla", () => {

        expect(!app.pituus).toBeTruthy();
        expect(!app.paino).toBeTruthy();
        expect(!app.painoindeksi).toBeTruthy();
        expect(!app.pyoristettuIndeksi).toBeTruthy();
        expect(!app.kuvaus).toBeTruthy();
        expect(!app.virhe).toBeTruthy();
        expect(!app.tyyli).toBeTruthy();

    });


    it("Toimii sallituilla arvohaarukoilla", () => {

        for (let i = 0; i < 500; i++) {
            app.pituus = i;
            app.paino = 80;
            app.tarkastaSyote();

            if (i >= 100 && i <= 230) {
                expect(app.virhe == "").toBe(true);
            } else {
                expect(app.virhe).toContain("virhe")
            }
        }

        for (let i = 0; i < 500; i++) {
            app.pituus = 180;
            app.paino = i;
            app.tarkastaSyote();

            if (i >= 30 && i <= 230) {
                expect(app.virhe == "").toBe(true);
            } else {
                expect(app.virhe).toContain("virhe")
            }
        }

        for (let i = 0; i < 500; i++) {
            app.pituus = i;
            app.paino = 29;
            app.tarkastaSyote();
            expect(app.virhe).toContain("virhe")
        }

        for (let i = 0; i < 500; i++) {
            app.pituus = 99;
            app.paino = i;
            app.tarkastaSyote();
            expect(app.virhe).toContain("virhe")
        }

    });


    it("laskee indeksin oikein", () => {

        for (let i = 100; i < 231; i++) {
            app.pituus = i;
            app.paino = 80;
            let painoindeksi = app.paino / (app.pituus / 100) / (app.pituus / 100)
            app.laskeIndeksi();
            expect(painoindeksi == app.painoindeksi).toBe(true);
        }

        for (let i = 30; i < 231; i++) {
            app.pituus = 180;
            app.paino = i;
            let painoindeksi = app.paino / (app.pituus / 100) / (app.pituus / 100)
            app.laskeIndeksi();
            expect(painoindeksi == app.painoindeksi).toBe(true);
        }

    });


    it("Antaa oikean kategorisoinnin ja ilmoituksen tyylin", () => {

        for (let i = 12.5; i < 42.5; i+=0.1) {
            app.kategorisoiIndeksi(i);

            if (i < 15) {
                expect(app.kuvaus).toEqual("Sairaalloinen alipaino");
                expect(app.tyyli).toEqual("alert-danger");
            } else if (i >= 15 && i < 17) {
                expect(app.kuvaus).toEqual("Merkittävä alipaino");
                expect(app.tyyli).toEqual("alert-warning");
            } else if (i >= 17 && i < 18.5) {
                expect(app.kuvaus).toEqual("Normaalia alhaisempi paino");
                expect(app.tyyli).toEqual("alert-info");
            } else if (i >= 18.5 && i < 25) {
                expect(app.kuvaus).toEqual("Normaali paino");
                expect(app.tyyli).toEqual("alert-success");
            } else if (i >= 25 && i < 30) {
                expect(app.kuvaus).toEqual("Lievä ylipaino");
                expect(app.tyyli).toEqual("alert-info");
            } else if (i >= 30 && i < 35) {
                expect(app.kuvaus).toEqual("Merkittävä ylipaino");
                expect(app.tyyli).toEqual("alert-warning");
            } else if (i >= 35 && i < 40) {
                expect(app.kuvaus).toEqual("Vaikea ylipaino"); 
                expect(app.tyyli).toEqual("alert-danger");
            } else if (i >= 40) {
                expect(app.kuvaus).toEqual("Sairaalloinen ylipaino");
                expect(app.tyyli).toEqual("alert-danger");
            } 
        }

    });


});