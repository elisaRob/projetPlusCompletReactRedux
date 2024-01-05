export class Validators{

    static min(value,min){
        if(value<min){
            return `Veuillez mettre plus de ${min} caractères s'il vous plait `
        }
    }

    static max(value,max){
        if(value>max){
            return `Veuillez mettre moins de ${max} caractères s'il vous plait`
        }
    }

}