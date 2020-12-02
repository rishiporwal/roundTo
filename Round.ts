enum Choices {
    round,
    floor,
    ceiling,
    truncate
}
namespace Math {
    //% block="$choice $input to the nearest multiple of $roundto"
    export function roundToNearest(input: number, roundto: number, choice: Choices) {
        
            if (choice == Choices.round) {
               
                return Math.round(input / roundto) * roundto;

            } else if (choice == Choices.floor) {
                
                return (input - (input % roundto));
                
            } else if (choice == Choices.ceiling) {
                
                if (input % roundto == 0) {
                    return (input);
                } else {
                    return (input - (input % roundto) + roundto);
                }
                
            } else {
                
                if (input == 0) {

                    return (0);

                } else if (input > 0) {
                    
                    return (input - (input % roundto));

                } else {

                    return (input - (input % roundto) + roundto);

                }

                return (0);

            }
            
    }
}

