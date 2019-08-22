// CODE here for your Lambda Classes
class Person{
	constructor(attr) {
  	(this.name = attr.name),
    (this.age = attr.age),
    (this.location = attr.location)
	}

	speak() {
  	return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
};

class Instructor extends Person {
	constructor(attr) {
		super(attr);
   	(this.specialty = attr.specialty),
    (this.favLanguage = attr.favLanguage),
    (this.catchPhrase = attr.catchPhrase)
		}

	demo(subject) {
  		return `Today we are learning about ${subject}.`;
	}
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    (this.previousBackground = attr.previousBackground),
    (this.className = attr.className),
    (this.favSubjects = attr.favSubjects)
    }

  listSubjects() {
      return `${this.favSubjects}`;
  }
  PRAssignment(student, subject){
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject){
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Instructor{
	constructor(attr) {
	super(attr);	
  	(this.gradClassName = attr.gradClassName),
    (this.favInstructor = attr.favInstructor)
	}

	standUp(channel) {
  		return `${this.name} announces to {channel}, @channel standy times!`;
	};
  debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
  };
}	

// Test you work by un-commenting these 3 objects and the list of console logs below:

const anna = new Student({
  name : 'Anna',
  age : 23,
  location : 'Buenos Aires',
  previousBackground : 'Boluda',
  className : 'P5500',
  favSubjects : ['Fernet','La Noche','Bife']
});

const lisa = new Student({
  name : 'Lisa',
  age : 21,
  location : 'Havana',
  previousBackground : 'Enfermera',
  className : 'P5500',
  favSubjects : ['salsa','mojitos','swimming']
});

const jenny = new Instructor({
  name : 'Jenny',
  age : 36,
  location : 'Miami',
  specialty : 'Cheerleading',
  favLanguage : 'Portunol',
  catchPhrase : 'Come on girls, get to it!'
  });

const finona = new Instructor({
  name : 'Fiona',
  age : 30,
  location : 'Barcelona',
  specialty : 'Palm Palms',
  favLanguage : 'Castellano',
  catchPhrase : 'Muevate, muevate!!'
  })

const svueltlana = new ProjectManagers({
  name : 'Svueltlana',
  age : 28,
  location : 'Moscow',
  specialty : 'Uniforms',
  favLanguage : 'Russian',
  catchPhrase : 'Spasiba!',
  gradClassName : 'P5500',
  favInstructor : 'Fiona',
  })

const cici = new ProjectManagers({
  name : 'Cici',
  age : 30,
  location : 'Qingdao',
  specialty : 'Fitness',
  favLanguage : 'Zhongwen',
  catchPhrase : 'Wu yao lada.',
  gradClassName : 'P5500',
  favInstructor : 'Jenny',
  })


console.log(anna.listSubjects()); 
console.log(jenny.demo('dance'));
console.log(jenny.grade(lisa, 'JS' ));
console.log(cici.debugsCode(lisa, 'mojitos' ));
console.log(svueltlana.speak());
