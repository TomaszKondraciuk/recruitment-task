//licznik zdobytych punktow
let totalValue = 0;
//tabela wyboru sekcji
const tabQuestion = [".first-qestion-section", ".second-qestion-section", ".third-qestion-section"];
//tabela odpowiedzi
const tabAnswer = [["#first-answer-a","#first-answer-b"], ["#second-answer-a","#second-answer-b"], ["#third-answer-a","#third-answer-b"]];
for (let i = 0; i<3; i++){
    for (let j = 0; j<2; j++) {
        //wybor odpowiedniego buttona
        $(tabAnswer[i][j]).on('click', function () {
            //parsowanie value kliknietego buttona i dodanie go do puli punktow
            let value = parseInt($(tabAnswer[i][j]).val());
            totalValue += value;
            //ukrycie sekcji uzytej
            $(tabQuestion[i]).css("display", "none");
            if (i !== 3) {
                //wyswietlenie kolejnej, jesli nie jest to ostania
                $(tabQuestion[i+1]).css("display", "flex");
            }
            //sprawdzam czy to jest ostatnia odpowiedz
            if ((this.id === "third-answer-a") || (this.id === "third-answer-b")) {
                //jesli suma odpowiedzi sie zgadza (max 3), to wyswietl CV
                if (totalValue === 3) {
                    window.location.href = "index_2.html";
                }else {
                    //jesli nie, ukryj tekst powitalny i wyswietl info o braku dostepu
                    $("#greet-text").css("display", "none");
                    $("#failure-info").css("display", "flex");
                }
            }
        });
    }
}