! zadacha - 1
function createStudent(firstname, lastName, age, university, faculty, gpa) {
  return {
    fullName: firstname + " " + lastName,
    age,
    education: {
      university,
      faculty,
      gpa,
    },
    say: () => {
      console.log("Azamat Malikov");
    },
  };
}
const res = createStudent("azamat", "Malikov", "22", "Ош.Му", "Ф.Ю.К", "95");
console.log(res);

! задача - 2

const user = {
  name: "aza",
  email: "azamat@gmail.com",
};

function keys(object, key) {
  if (key in object) {
    delete object[keys];
    return object;
  } else {
    console.log(`Ключ ${key} отсутсвует`);
  }
}
const objects = keys(user, "passsword");

console.log(objects);

! задача - 3

const use = {
  name: "aza",
  email: "aza.malik01",
  age: "22",
  password: "011124",
};

let sum = 5;

let userEmail = prompt("Введите ваш email:");

if (userEmail !== use.email) {
  alert("Извините, такого email нету");
} else {
  let userPassword = prompt("Введите ваш пароль:");

  if (userPassword !== use.password) {
    alert("Неверный пароль");
  } 
    let userAnswer = prompt("2 + 3 = ?");

    if (parseInt(userAnswer) === sum) {
      use.sum = 5;
      alert(`Верно! Ваша премия = ${use.sum}`);
    } else {
      alert("Неправильный ответ");
    }
  }