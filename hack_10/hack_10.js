/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

foo.roles.map(role => role.toUpperCase()),
foo.roles=[foo.roles,roleSuperUser,roleUser];
foo.skills=[skills[0],skills[1],foo.skills[0],foo.skills[1],foo.skills[2],skills[2],...foo.skills.slice(1)];
result = {
    id: foo.id,
    name: foo.name.charAt(0).toUpperCase() + foo.name.slice(1),
    roles: foo.roles,
    skills: foo.skills.map(skill => {
      if (skill === "html" || skill === "css") {
        return skill.toUpperCase();
      } else {
        return skill.charAt(0).toUpperCase() + skill.slice(1);
      }
    }),
    levels: levels.map(level => {
      return { LEVEL: level.LEVEL.charAt(0).toUpperCase() + level.LEVEL[2] };
    })
  };
  
  console.log(result);

//export result
module.exports = result; 