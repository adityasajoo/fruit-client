export function mapFruit(fruit:any){
    const fruits:any = {
        "freshapples" : "apple",
        "freshbanana" : "banana",
        "freshoranges" : "orange",
        "rottenapple" : "rottenapple",
        "rottenoranges" : "rottenoranges",
        "rottenbanana" : "rottenbanan",
    
    }

    return fruit in fruits ?  fruits[fruit]: fruit;

}