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
}

// si la personne saisit dans le champ nom => "Alain Dufourt"