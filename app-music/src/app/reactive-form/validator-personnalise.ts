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
    static uniqueEmail(champ : AbstractControl) : Promise<ValidationErrors>{
        // requête en base de données => prendre un peu de temps => 500ms 
        // setTimemout()
        // validation asynchrone 
        return new Promise( ( resolve , reject ) => { 
            setTimeout( () => {
                if(champ.value === "a@yahoo.fr"){
                    // il y a déjà quelqu'1 qui a ce mail dans la bdd
                    resolve({
                        uniqueEmail : true,
                        message : "email déjà utilisé"
                    })
                }else {
                    resolve(null)
                }
            }, 2000 )
        } )
    }
}

// si la personne saisit dans le champ nom => "Alain Dufourt"