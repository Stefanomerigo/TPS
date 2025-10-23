
function Tabella() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/dati.json", true);
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            if (FindGenerazione >= 1901 && FindGenerazione <= 1927) {
                Generazione = "Greatest Generation";
            }
            else if (FindGenerazione > 1927 && FindGenerazione <= 1945) {
                Generazione = "Generazione Silenziosa";
            }
            else if (FindGenerazione > 1945 && FindGenerazione <= 1964) {
                Generazione = "Baby Boomers";
            }
            else if (FindGenerazione > 1964 && FindGenerazione <= 1980) {
                Generazione = "Generazione X";
            }
            else if (FindGenerazione > 1980 && FindGenerazione <= 1996) {
                Generazione = "Millenials";
            }
            else if (FindGenerazione > 1996 && FindGenerazione <= 2012) {
                Generazione = "Generazione Z";
            }
            else if (FindGenerazione > 2012) {
                Generazione = "Generazione Alpha";
            }

            str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
        }

        str = str + "</table>";

        document.getElementById("t1").innerHTML = str;
    }
}
function Maggiorenni() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "Es_anagrafica/dati.json", true);
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let Maggiorenni = 18;

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {
            if (oggetto.archivio[i].eta >= Maggiorenni) {

                FindGenerazione = 2025 - oggetto.archivio[i].eta;
                if (FindGenerazione >= 1901 && FindGenerazione <= 1927) {
                    Generazione = "Greatest Generation";
                }
                else if (FindGenerazione > 1927 && FindGenerazione <= 1945) {
                    Generazione = "Generazione Silenziosa";
                }
                else if (FindGenerazione > 1945 && FindGenerazione <= 1964) {
                    Generazione = "Baby Boomers";
                }
                else if (FindGenerazione > 1964 && FindGenerazione <= 1980) {
                    Generazione = "Generazione X";
                }
                else if (FindGenerazione > 1980 && FindGenerazione <= 1996) {
                    Generazione = "Millenials";
                }
                else if (FindGenerazione > 1996 && FindGenerazione <= 2012) {
                    Generazione = "Generazione Z";
                }
                else if (FindGenerazione > 2012) {
                    Generazione = "Generazione Alpha";
                }


                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
            }
        }
        str = str + "</table>";

        document.getElementById("t1").innerHTML = str;
    }
}
function RicercaLettera() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/dati.json", true);
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);
        let lettera = document.getElementById("lettera").value.toLowerCase();

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            if (FindGenerazione >= 1901 && FindGenerazione <= 1927) {
                Generazione = "Greatest Generation";
            }
            else if (FindGenerazione > 1927 && FindGenerazione <= 1945) {
                Generazione = "Generazione Silenziosa";
            }
            else if (FindGenerazione > 1945 && FindGenerazione <= 1964) {
                Generazione = "Baby Boomers";
            }
            else if (FindGenerazione > 1964 && FindGenerazione <= 1980) {
                Generazione = "Generazione X";
            }
            else if (FindGenerazione > 1980 && FindGenerazione <= 1996) {
                Generazione = "Millenials";
            }
            else if (FindGenerazione > 1996 && FindGenerazione <= 2012) {
                Generazione = "Generazione Z";
            }
            else if (FindGenerazione > 2012) {
                Generazione = "Generazione Alpha";
            }

            let cognome = oggetto.archivio[i].cognome.toLowerCase();
            if (cognome.startsWith(lettera)) {

                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";

            }

        }
        str = str + "</table>";
        document.getElementById("t1").innerHTML = str;
    }
}
function RicercaGenerazione() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/dati.json", true);
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);
        let AnnoDiNascita = document.getElementById("generazione").value;

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            if (FindGenerazione >= 1901 && FindGenerazione <= 1927) {
                Generazione = "Greatest Generation";
            }
            else if (FindGenerazione > 1927 && FindGenerazione <= 1945) {
                Generazione = "Generazione Silenziosa";
            }
            else if (FindGenerazione > 1945 && FindGenerazione <= 1964) {
                Generazione = "Baby Boomers";
            }
            else if (FindGenerazione > 1964 && FindGenerazione <= 1980) {
                Generazione = "Generazione X";
            }
            else if (FindGenerazione > 1980 && FindGenerazione <= 1996) {
                Generazione = "Millenials";
            }
            else if (FindGenerazione > 1996 && FindGenerazione <= 2012) {
                Generazione = "Generazione Z";
            }
            else if (FindGenerazione > 2012) {
                Generazione = "Generazione Alpha";
            }

            if (FindGenerazione==(AnnoDiNascita)) {
                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
            }
        }
        str = str + "</table>";
        document.getElementById("t1").innerHTML = str;
    }
}

