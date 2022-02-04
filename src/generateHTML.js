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
    <section class="container has-background-warning-light box">
        <p class="title"> List of Active Employees</p>
        <div class="container">
            <ul class="ul">
                ${makeEmpCards(data)}
            </ul>
        </div>
    </section>
    `;
};
function makeEmpCards(data) {
    return data
        .map(d => {
            let newCard = d.getPosition();
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
<li>
<div class="col-md-3">
    <div class="card cardbody">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-briefcase"></i> ${d.getRole()}</div>
            </div>
      <div class="card-body">
      <form>			
        <div>
          <label id="unique-id">ID:${d.id
        } </label>
        </div>
        <div>
        <label id=email">Email: ${d.email
        }</label>
        </div>
        <div>
          <label id="office-number">Office Number: ${d.officeNum}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>   
          `;
    return managerCard

}

function createEngineer(d) {
    let engineerCard =
        `    
<li>
<div class="col-md-3">
    <div class="card cardbody">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-pen"></i> ${d.getRole()}</div>
            </div>
      <div class="card-body">
      <form>			
        <div>
          <label id="unique-id">ID:${d.id
        } </label>
        </div>
        <div>
        <label id="email">Email: ${d.email
        }</label>
        </div>
        <div>
          <label id="github">School: ${d.githubName}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>   
          `;
    return engineerCard

}

function createIntern(d) {
    let internCard =
        `    
<li>
<div class="col-md-3">
    <div class="card cardbody">
      <div class="card-header has-background-info box">
             ${d.name}<br>
            <div><i class="fa fa-id-badge"></i> ${d.getRole()}</div>
            </div>
      <div class="card-body">
      <form>			
        <div>
          <label id="unique-id">ID:${d.id
        } </label>
        </div>
        <div>
        <label id="email">Email: ${d.email
        }</label>
        </div>
        <div>
          <label id="school">School: ${d.school}</label>					
        </div>				
        </form>
      </div>
    </div>
          </div>
          </li>   
          `;
    return internCard
}

module.exports = generateHTML;