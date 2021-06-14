export const version = "v0.3"
export const {pagesInfo: standardPagesInfo, questionCount} = numberQuestions([
    {
        title: "Welkom",
        questions: [
            {
                type: "text",
                text: `Beste Respondent,
                Wij zijn Steven, Steven, Bibian en Yante, vier bachelor studenten aan de Universiteit van Amsterdam. En wij doen een klein onderzoek naar boodschappen doormiddel van deze vragenlijst. De vragenlijst duurt in totaal 5 tot 10 minuten. Je kunt doorgaan naar de volgende pagina door rechts onderin op de knop ‘volgende’ te klikken.
                (Als je vragen hebt over ons onderzoek, kun je contact met ons opnemen via dit mailadres: yante.gerbers@student.uva.nl)
                Alvast bedankt voor het invullen, wij waarderen het zeer!`
            },
            {
                type: "options",
                text: "",
                options: ["Hierbij verklaar ik dat ik zo eerlijk en serieus mogelijk antwoord zal geven op de gestelde vragen"]
            },
            {
                type: "options",
                text: "",
                options: ["Hierbij geeft ik toestemming dat mijn ingevulde gegevens vastgelegd en verwerkt worden in het onderzoek"]
            },
        ]
    },
    {
        title: "Welkom",
        questions: [
            {
                type: "number",
                text: "Wat is uw leeftijd",
                min: 16,
                max: 120,
                outOfRangeText: (age) => (age > 1 && age < 16) ? "Sorry, wij mogen geen gegevens gebruiken van mensen onder de 16. Toch hartstikke bedankt!" : "Vul alsjeblieft een geldige leeftijd in"
            },
            {
                type: "options",
                text: "Wat is uw geslacht?",
                options: ["Man", "Vrouw", "Anders", "Zeg ik liever niet"],
            },
            {
                type: "options",
                text: "Hoeveel geeft u wekelijks uit aan boodschappen voor uw zelf en/of voor anderen?",
                options: ["0 tot 25 euro", "25 tot 50 euro", "50 tot 75 euro", "75 tot 100 euro", "100 tot 125 euro", "125 tot 150 euro", "150 tot 175 euro", "175 tot 200 euro", "200 euro of meer", "Weet ik niet"],
            },
            {
                type: "options",
                text: "Bij welke supermarkt doet u het vaakst boodschappen",
                options: ["Albert Heijn","Jumbo","Aldi","Lidl","Coop","Spar","PLUS","Dirk","Dagwinkel","DekaMarkt","Deen","EkoPlaza","Vomar","Hoogvliet","Poiesz","Jan Linders","Sligro","Boni","Picnic","Anders:"],
                hasOthersOption: true,
            },
            {
                type: "options",
                text: "Wat is voor u van toepassing? ik ben:",
                options: ["Student", "Werkende", "Gepensioneerd", "Anders:"],
                hasOthersOption: true,
            }
        ]
    },
    {
        title: "Info",
        questions: [
            {
                type: "quiz",
                text: "Waar staat dit label voor?",
                image: "thumb-up",
                options: [
                    "AH huismerk", 
                    "Prijsfavoriet", 
                    "Laag in calorieën", 
                    "Zuivel van een biologische boer", 
                    "Ik ken dit label niet"],
                correct: 1,
            },
            {
                type: "quiz",
                text: "Waar staat dit label voor?",
                image: "compost",
                options: [
                    "De verpakking van dit product is composteerbaar",
                    "De inhoud van dit product is composteerbaar",
                    "De verpakking van dit product is biobased en composteerbaar",
                    "De inhoud van dit product is biobased en composteerbaar",
                    "Ik ken dit label niet"],
                correct: 0,
            },
            {
                type: "quiz",
                text: "Wat betekenen deze labels?",
                image: "vega2",
                options: [
                    "De lichtgroene betekent vegetarisch en de donkergroene veganistisch",
                    "De donkergroene betekent vegetarisch en de lichtgroene veganistisch",
                    "De lichtgroene betekent vegetarisch vlees en de donkergroene veganistisch vlees",
                    "De donkergroene betekent vegetarisch vlees en de lichtgroene veganistisch vlees",
                    "Ik ken deze labels niet"],
                correct: 0,
            },
            {
                type: "quiz",
                text: "Waarover geeft dit label informatie?",
                image: "nutri-score",
                options: [
                    "Over het productieproces van het product wat betreft arbeidsomstandigheden",
                    "Over het productieproces van het product wat betreft de mate van vervuiling",
                    "Over de mate waarin een product (on)gezond is",
                    "Over de mate waarin een product houdbaar is",
                    "Ik ken dit label niet"],
                correct: 2,
            },
            {
                type: "quiz",
                text: "Waar moet u een verpakking met dit label weggooien?",
                image: "compost",
                options: [
                    "Rest",
                    "Plastic",
                    "Papier",
                    "GFT",
                    "Gemeente inzamelplek",
                    "Weet ik niet"],
                correct: 3,
            },
            {
                type: "quiz",
                text: "Welke blijft langer vers, de krop sla of sla verpakt in een zakje?",
                options: [
                    "De krop sla, mits deze buiten de koelkast wordt bewaard",
                    "De krop sla, mits deze in de koelkast wordt bewaard",
                    "De sla in het zakje, mits deze in de koelkast wordt bewaard",
                    "De sla in het zakje, mits deze in de vriezer wordt bewaard",
                    "Ik weet het niet"],
                correct: 3,
            },
            {
                type: "quiz",
                text: "Wat is het verschil in vitaminen tussen bevroren fruit en vers fruit?",
                options: [
                    "Bevroren fruit heeft minder vitamines dan vers fruit",
                    "Er is geen verschil in vitaminen tussen bevroren fruit en vers fruit",
                    "Bevroren fruit heeft meer vitaminen dan vers fruit",
                    "Ik weet het niet"],
                correct: 2,
            },
        ]
    },
    {
        title: "Shop",
        questions: [
            {
                type: "shop",
                text: "Stel dat uw boodschappen doet voor uwzelf, familie en/of huisgenoten. Koop alstublieft de artikelen op het boodschappenlijstje in deze fictieve webshop alsof u echte boodschappen doet."
            }
        ]
    },
    {
        title: "Afval",
        questions: [
            {
                type: "bins",
                text: "gooi effe weg ofzo"
            }
        ]
    },
    {
        title: "Bedankt!",
        questions: [
            {
                type: "text",
                text: `Bedankt voor je medewerking aan ons onderzoek!
                P.S. We zouden het zeer op prijs stellen als je de link die je ontvangen hebt naar deze vragenlijst, zou willen delen met familie, vrienden, kennissen, of vreemden. Daarmee help je ons om data te verzamelen!`
            }
        ]
    }
]);
export const pageCount = standardPagesInfo.length;

export interface PageInfo {
    title: string;
    questions: (TextInfo | NumberInfo | OptionsInfo | ShopInfo | BinsInfo | QuizInfo)[];
}

export interface QuestionInfo {
    text: string;
    i?: number;
}

export interface TextInfo extends QuestionInfo {
    type: "text";
}

export interface NumberInfo extends QuestionInfo {
    type: "number";
    min?: number;
    max?: number;
    outOfRangeText?: string | ((input: number) => string);
}

export interface OptionsInfo extends QuestionInfo {
    type: "options";
    options: string[];
    hasOthersOption?: boolean;
}

export interface ShopInfo extends QuestionInfo {
    type: "shop";
}

export interface BinsInfo extends QuestionInfo {
    type: "bins";
}

export interface QuizInfo extends QuestionInfo {
    type: "quiz"
    options: string[]
    correct: number;
    image?: string;
}

function numberQuestions(pagesInfo: PageInfo[]) {
    let questionCount = 0
    for (const page of pagesInfo) {
        for (const question of page.questions) {
            if (question.type != "text") {
                question.i = questionCount;
                questionCount += 1;
            }
        }
    }

    return {pagesInfo, questionCount};
}

export function getPagesInfo(alt: boolean) : PageInfo[] {
    if (alt) {
        let altPagesInfo = [...standardPagesInfo];
        altPagesInfo.splice(-1,0,...altPagesInfo.splice(2, 1));
        return altPagesInfo;
    } else {
        return standardPagesInfo;
    }
}