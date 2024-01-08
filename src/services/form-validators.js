export class Validators{

    static min(value,min){
        if(value.length<min){
            return `Veuillez mettre plus de ${min} caractères s'il vous plait `
        }
    }

    static max(value,max){
        if(value.length>max){
            return `Veuillez mettre moins de ${max} caractères s'il vous plait`
        }
    }

}