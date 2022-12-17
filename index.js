//base class which hides all the class details 
class Kingdom__Animalia{
    constructor(animalName, bodyTemp){
        this.animalName = animalName;
        this.bodyTemp = bodyTemp;


     //control flow of abstract class
      if(this.constructor == Kingdom__Animalia){
        throw new Error("cannot cannot instantiate abstract class only defined for class details")
      }


    }



    //private properties that are hidden for class details
    #classNames = ["Arthropoda", "Fish", "Amphibia", "Reptiles", "Aves", "Mammals"];
    #inhabitants = ["Aquatic hab", "terrestial hab"];
    #skinDes = ["moist skin", "dry horny skin"]
    #skeletal_Type = ["Exoskeleton", "Endoskeleton"]
    #hasHairs = "true";
    #hasFeathers = "true";
    #hasFins = "true";



    //private methods
    #vertebrateCheck(){
        //animals with backbone method
        console.log("vertebrate animal")
    }


    #nonVertebrateCheck(){
        //animals without backbone method
        console.log("invertebrate animal")
    }


   //read all the private methods with hash(#) prefix
    checkBackbone(check){
    //    this.#vertebrateCheck(check)
        if(check == "presence"){
            this.#vertebrateCheck()

        }else if(check == "absence"){
            this.#nonVertebrateCheck()
        }else{
            console.log("specie not in Kingdom__Animalia")
        }

    }

    //gneral descriptions  function that describe each class  characteristics in animal kingdom
    descriptiveFeatures(id){
        let des;
        //destructuring the private  property => this.#classNames

        const[Id1, Id2, Id3, Id4, Id5, Id6] = this.#classNames;

        //switching cases using elseif keyword
        if(id == Id1){
            //Arthropoda case
             des =
            `
            ${Id1}, (phylum Arthropoda), any member of the phylum Arthropoda,
            the largest phylum in the animal kingdom, which includes such familiar forms as lobsters,
            crabs, spiders, mites, insects, centipedes, and millipedes. About 84 percent of all known
            species of animals are members of this phylum. Arthropods are represented in every habitat
            on Earth and show a great variety of adaptations. Several types live in ${this.#inhabitants[0]},and 
            others reside in terrestrial ones; some groups are even adapted for flight.   
            `;
        //Fish case 
         }else if(id == Id2){
               des = `
               ${Id2}, any of approximately 34,000 species of vertebrate animals (phylum Chordata) found in 
               the fresh and salt waters of the world. Living species range from the primitive jawless lampreys 
               and hagfishes through the cartilaginous sharks, skates, and rays to the abundant and diverse bony 
               fishes. Most fish species are cold-blooded; however,one species, the opah (Lampris guttatus), is warm-blooded.   
               ` ;

               //Amphibia case
         }else if(id == Id3){
                des = `
                ${Id3} (class Amphibia), any member of the group of vertebrate animals
                characterized by their ability to exploit both aquatic and ${this.#inhabitants[1]}. 
                name amphibian, derived from the Greek amphibios meaning “living a double life,” 
                reflects this dual life strategy—though some species are permanent land dwellers, 
                while other species have a completely aquatic mode of existence.
                Approximately 8,100 species of living amphibians are known. 
                First appearing about 340 million years ago during the Middle Mississippian Epoch,
                they were one of the earliest groups to diverge from ancestral fish-tetrapod stock 
                during the evolution of animals from strictly aquatic forms to terrestrial types.
                Today ${Id2} is represented by frogs and toads (order Anura), newts and salamanders (order Caudata), and caecilians (order Gymnophiona). These three orders of living amphibians are thought to derive from a single radiation of ancient amphibians, and although strikingly different in body form, they are probably the closest relatives to one another. As a group, the three orders make up subclass Lissamphibia. Neither the lissamphibians nor any of the extinct groups of amphibians were the ancestors of the group of tetrapods that gave rise to reptiles. Though some aspects of the biology and anatomy of the various amphibian groups might demonstrate features possessed by reptilian ancestors, amphibians are not the intermediate step in the evolution of reptiles from fishes.
                `;

                //Reptiles
         }else if(id == Id4){

               des = `
               ${Id4}, any member of the class Reptilia, the group of air-breathing vertebrates that have 
               internal fertilization, amniotic development, and epidermal scales(${this.#skinDes[1]}) covering part or all of 
               their body. The major groups of living reptiles—the turtles (order Testudines), 
               tuatara (order Rhynchocephalia [Sphenodontida]), lizards and snakes (order Squamata), 
               and crocodiles (order Crocodylia, or Crocodilia)—account for over 8,700 species. Birds 
               (class Aves) share a common ancestor with crocodiles in subclass Archosauria and 
               are technically one lineage of reptiles, but they are treated separately
               `;
               //Aves
         }else if(id == Id5){
              des = `
              bird, (class ${Id5}), any of the more than 10,400 living species unique in having feathers(${this.#hasFeathers}), 
              the major characteristic that distinguishes them from all other animals. A more-elaborate 
              definition would note that they are warm-blooded vertebrates more related to reptiles 
              than to mammals and that they have a four-chambered heart (as do mammals), forelimbs modified 
              into wings (a trait shared with bats), a hard-shelled egg, and keen vision, the major sense they 
              rely on for information about the environment. Their sense of smell is not highly developed, and 
              auditory range is limited. Most birds are diurnal in habit. More than 1,000 extinct 
              species have been identified from fossil remains.
              `;
             // Mammals case
         }else if(id == Id6){
              des = `
              ${Id6}, (class Mammalia), any member of the group of vertebrate animals in which 
              the young are nourished with milk from special mammary glands of the mother. In addition to 
              these characteristic milk glands, mammals are distinguished by several other unique features.
              Hair is a typical mammalian feature, although in many whales it has disappeared except in the 
              fetal stage. The mammalian lower jaw is hinged directly to the skull, instead of through a 
              separate bone (the quadrate) as in all other vertebrates. A chain of three tiny bones transmits 
              sound waves across the middle ear. A muscular diaphragm separates the heart and the lungs from 
              the abdominal cavity. Only the left aortic arch persists. (In birds the right
              aortic arch persists; in reptiles, amphibians, and fishes both arches are retained.) 
              Mature red blood cells (erythrocytes) 
              in all mammals lack a nucleus; all other vertebrates have nucleated red blood cells.
              `;
         } else{
            console.log("specie not in Kingdom__Animalia");

         }

         return des;


    }

}




//No 1
class Arthropoda extends Kingdom__Animalia {
     constructor(animalName, bodyTemp, vertebrate){
         super(animalName, bodyTemp);
         this.vertebrate = vertebrate;

     }

    //polymorphism
     descriptiveFeatures(){
        let des = `
            ${this.animalName}
            (phylum Arthropoda), any member of the phylum Arthropoda,
            the largest phylum in the animal kingdom, which includes such familiar forms as lobsters,
            crabs, spiders, mites, insects, centipedes, and millipedes
        `;
        return des;

     }

     vertebrateCheck(presence){
        //calls the parent method inherited; using call stack data structure to pass the arg.  recursive fun
        super.checkBackbone(presence)
     }

     bodyTempcheck(){
        console.log(`${this.animalName} is a ${this.bodyTemp} animal`)

     }



     flight(){
        const arthropoda = ["crustacea", "instecta", "arachinda", "myriapoda"];
        arthropoda.forEach(art=>{
             console.log(`${art}  flights`)

        })
     } 




}
const arthropoda = new Arthropoda("butterfly", "coldBlooded", "vertebrate")
// arthropoda.bodyTempcheck()
// console.log(arthropoda.descriptiveFeatures())


/*
   #vertebrateCheck  and  #nonVertebrateCheck are private method in our base class: => Kingdom__Animalia
   but we  use  public method: => checkBackbone to access it and we inherits this  from base class(Kingdom__Animalia) 
   because is private and using super to get the acces to the method from parent class,
*/
// arthropoda.vertebrateCheck("presence")

// arthropoda.checkBackbone("absence")
// console.log(arthropoda.descriptiveFeatures("Arthropoda"))
//Arthropoda, Fish, Amphibia, Reptiles, Aves, Mammals
// arthropoda.fly()



//No 2
class Fish extends Kingdom__Animalia{
    constructor (animalName, bodyTemp, hasFins){
        super(animalName, bodyTemp);
        this.hasFins = hasFins;
    }

    //polymorphism
    descriptiveFeatures(){
       let des = `
           ${this.animalName}
           any of approximately 34,000 species of vertebrate animals (phylum Chordata) found in 
           the fresh and salt waters of the world. Living species range from the primitive jawless lampreys 
       `;

       return des;
    }




  swim(){
     console.log(`${this.animalName} is a ${this.bodyTemp} animals which swims with well developed fins(${this.hasFins})`);
  }




}
const  fish = new Fish("sharks", "coldBlooded", "presence")
// fish.swim()
//polymorphism method
// console.log(fish.descriptiveFeatures())

//we check their backbones by passing presence or absence as argument, since fish has backbone it is marked presence
//amphibians which does not have backbone are marked absences
// fish.checkBackbone("presence");
// console.log(fish.descriptiveFeatures("Fish"))




//No 3
class Amphibian  extends Kingdom__Animalia{

    constructor (animalName, bodyTemp,skinDes){
        super(animalName, bodyTemp);
        this.skinDes = skinDes

    }

    swim(){
         console.log(`${this.animalName} with ${this.skinDes} swims`)
    }
}
const amphibian = new Amphibian("frog", "cold-blooded", "moist skin")
// amphibian.swim()

//No 4
class Reptiles extends  Kingdom__Animalia{
    constructor (animalName, bodyTemp, skeleton){
        super(animalName, bodyTemp);
        this.skeleton = skeleton

    }

    glide(){
        console.log(`${this.animalName} is a ${this.bodyTemp} animal which can glide`)
    }

    walk(){
        console.log(`${this.animalName} is a ${this.bodyTemp} animal which can walk`)
    }
}
const reptile = new Reptiles("tutortise", "cold-blooded")
// reptile.glide()

//No 5
class Aves extends Kingdom__Animalia{
    constructor (animalName, bodyTemp, hasFeather){
        super(animalName, bodyTemp);
        this.hasFeather = hasFeather;

    }

    fly(){
       console.log(`${this.animalName} ${this.bodyTemp}  flies with feathers (${this.hasFeather})`)
    }

}
// const aves = new Aves("pigeons", "warm-blooded", "true")
// console.log(aves.fly())


//No 6
class Mammals extends Kingdom__Animalia{

    constructor (animalName, bodyTemp, hasHairs){
        super(animalName, bodyTemp);
        this.hasHairs = hasHairs;

    }


    descriptiveFeatures(){
        let des = `
            ${this.animalName}
            (class Mammalia), any member of the group of vertebrate animals in which 
              the young are nourished with milk from special mammary glands of the mother. In addition to 
              these characteristic milk glands, mammals are distinguished by several other unique features.
              Hair is a typical mammalian feature, although in many whales it has disappeared except in the
             fetal stage. 
        `;
        return des;
    }

    hop(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal hops`)   
    }


    run(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal do run`)
    }

    walk(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal can walk`)
    }


    actionPerformed(animal){
         switch(animal){
            case "rabbit": mammals.hop()
            break;  
            case "dog": mammals.run()
            break;
            case "cow": mammals.walk()
            default: console.log("doesn't hhave valid method here")
         } 
    }


}
//rabbit, dog ,cow can be passed in in the heritance instantances of => new Mammals 
const mammals = new Mammals("dog", "warm-blooded", "presence")
console.log(mammals.descriptiveFeatures())
console.log("end")
// console.log(mammals.actionPerformed(mammals.animalName))