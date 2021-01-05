import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidatorPersonnalise{
    // méthode static
    static pasDEspace(champ : AbstractControl): ValidationErrors{
        if(champ.value.indexOf(" ") !== -1){
            return {
                pasDEspace : true,
                message : "ce champ ne peut pas contenir d'espace"
            }
        }
        return null ;
    }
    static isValidAdresse(champ : AbstractControl) : ValidationErrors{
        let pattern = /^[0-9]{2} [a-zA-Z ]{1,}$/ ;
        // let pattern = /^[0-9]{2} [a-zA-Z ]+$/ ;
        // let pattern = /^\d{2} [a-zA-Z ]+$/ ;
        if(!champ.value.match(pattern)){
            return {
                isValidAdresse : true,
                message : "ce champ n'est pas une adresse valide"
            }
        }
        return null ;
    }
}

// si la personne saisit dans le champ nom => "Alain Dufourt"