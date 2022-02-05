function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teamwork Makes The Dreamwork</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
</head>
<body>
    <header class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            TeamWork Makes The DreamWork
          </p>
          <p class="subtitle">
            Team Member Database
          </p>
        </div>
    </header>    
        <div class="column">
        <p class="title"> Employee Archive</p>     
            <ul class="ul column is-flex">
                ${makeEmpCards(data)}
            </ul>
        </div>    
    `;
};
function makeEmpCards(data) {
  return data
    .map(d => {
      let newCard = d.getRole();
      switch (newCard) {
        case "Manager":
          return createManager(d);
          break;
        case "Engineer":
          return createEngineer(d);
          break;
        case "Intern":
          return createIntern(d);
          break;
      }
    })
    .join("\n");
}

function createManager(d) {
  let managerCard =
    `
    <section class="column is-2 mx-1 has-background-warning-light box is-one-quarter">      
<li>
<div class="column mb-4">
    <div class="card cardbody">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-briefcase"></i> ${d.getRole()}</div>
            </div>
      <div class="card">
      <form>			
        <div>
          <label id="unique-id">ID: ${d.id} </label>
        </div>
        <div>
        <label id=email">Email: ${d.email}</label>
        </div>
        <div>
          <label id="office-number">Office Number: ${d.officeNumber}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>
          </section>   
          `;
  return managerCard

}

function createEngineer(d) {
  let engineerCard =
    `
    <section class="column is-2 mx-1 has-background-warning-light box">       
<li>
<div class="column mb-4">
    <div class="card">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-pen"></i> ${d.getRole()}</div>
            </div>
      <div class="card">
      <form>			
        <div>
          <label id="unique-id">ID: ${d.id} </label>
        </div>
        <div>
        <label id="email">Email: ${d.email}</label>
        </div>
        <div>
          <label id="github">Github: ${d.github}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>
          </section>   
          `;
  return engineerCard

}

function createIntern(d) {
  let internCard =
    `
    <section class="column is-2 mx-1 has-background-warning-light box"> 
<li>
<div class="column mb-4">
    <div class="card">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-id-badge"></i> ${d.getRole()}</div>
            </div>
      <div class="card">
      <form>			
        <div>
          <label id="unique-id">ID: ${d.id} </label>
        </div>
        <div>
        <label id="email">Email: ${d.email}</label>
        </div>
        <div>
          <label id="school">School: ${d.school}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>
          </section>   
          `;
  return internCard
}

module.exports = generateHTML;